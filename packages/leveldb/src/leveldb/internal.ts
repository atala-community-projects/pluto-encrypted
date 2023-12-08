import { RxDocumentData, RxDocumentDataById, RxJsonSchema } from "rxdb";
import { Level } from 'level';

import {
    LevelDBDataIndex,
    LevelDBDataStructure,
    LevelDBStorageInternals,
    IndexType
} from "./types";

export class LevelDBInternal<RxDocType> implements LevelDBStorageInternals<RxDocType> {

    public removed = false;

    private db: Level<string, string>;

    constructor(public refCount: number, path: string) {
        this.db = new Level(path, { valueEncoding: 'json', })
    }

    get documents() {
        return new Map()
    }

    async getInstance() {

        return this.db
    }

    async getIndex(key: string): Promise<string[]> {
        try {
            const db = await this.getInstance()
            const jsonString = await db.get(key);
            return JSON.parse(jsonString)
        } catch (err) {
            if ((err as any).code && (err as any).code === 'LEVEL_NOT_FOUND') {
                return []
            } else {
                console.log(err)
                throw err
            }
        }
    }

    async get(key: string): Promise<RxDocumentData<RxDocType> | null> {
        try {
            const db = await this.getInstance()
            const jsonString = await db.get(key);
            return JSON.parse(jsonString)
        } catch (err) {
            if ((err as any).code && (err as any).code === 'LEVEL_NOT_FOUND') {
                return null
            } else {
                throw err
            }
        }
    }

    async set(key: string, data: RxDocumentData<RxDocType>) {
        const db = await this.getInstance()
        await db.put(key, JSON.stringify(data))
    }

    async setIndex(key: string, ids: string[]) {
        const db = await this.getInstance()
        await db.put(key, JSON.stringify(ids))
    }

    async updateIndex(key: string, id: string) {
        const existingIndex = await this.getIndex(key);
        existingIndex.push(id)
        await this.setIndex(key, existingIndex);
    }

    async clear() {
        const iterator = this.db.iterator()
        let entries: [[string, string]];
        while ((entries = await iterator.nextv(1)).length > 0) {
            for (const [key, value] of entries) {
                await this.db.del(key);

            }
        }
    }

    async bulkPut(items: RxDocumentData<RxDocType>[], collectionName: string, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>) {
        const primaryKeyKey = typeof schema.primaryKey === "string" ? schema.primaryKey : schema.primaryKey.key;
        const indexName = `[${collectionName}+${primaryKeyKey}]`;

        for (let item of items) {
            let primaryKeyVal = item[primaryKeyKey];
            if (!("id" in item) || !['string', 'number'].includes(typeof item.id)) {
                if (!primaryKeyKey || !primaryKeyVal) {
                    throw new Error("Data must have a primaryKey defined of type string or number")
                }
                const id = item[primaryKeyKey] as string;
                await this.set(id, item);
                await this.updateIndex(indexName, id)
            } else {
                const id = item.id as string;
                await this.set(id, item)
                await this.updateIndex(indexName, id)

            }

        }

    }
}

