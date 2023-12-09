import { RxDocumentData, RxJsonSchema, getPrimaryFieldOfPrimaryKey } from "rxdb";
import { ClassicLevel as Level } from 'classic-level';

import {
    LevelDBStorageInternals,
    LevelDBInternalConstructor,
    LevelDBType
} from "./types";



export class LevelDBInternal<RxDocType> implements LevelDBStorageInternals<RxDocType> {

    public removed = false;
    public refCount: number;
    private db: LevelDBType;
    public documents: Map<string, RxDocumentData<RxDocType>>
    public schema: RxJsonSchema<RxDocumentData<RxDocType>>;

    get options() {
        return this._options
    }
    static isLevelDBConstructor<RxDocType>(_options: LevelDBInternalConstructor<RxDocType>): _options is {
        level: LevelDBType,
        refCount: number,
        schema: RxJsonSchema<RxDocumentData<RxDocType>>;
        documents?: Map<string, RxDocumentData<RxDocType>>
    } {
        return "level" in _options && _options.level !== undefined
    }

    constructor(private _options: LevelDBInternalConstructor<RxDocType>) {
        this.refCount = this._options.refCount;
        this.schema = this._options.schema;
        this.documents = this._options.documents || new Map();
        if (LevelDBInternal.isLevelDBConstructor(this._options)) {
            this.db = this._options.level
        } else {
            this.db = new Level(this._options.path, { valueEncoding: 'json', })
        }
    }

    async getDocuments(query: string[]): Promise<Map<string, RxDocumentData<RxDocType>>> {
        const docsInDbMap = new Map<string, RxDocumentData<RxDocType>>();
        if (query.length <= 0) {
            const db = await this.getInstance()
            for await (const key of db.keys()) {
                const value = await this.get(key);
                if (value) {
                    docsInDbMap.set(key, value)
                }
            }
            return docsInDbMap
        }
        const documents = await this.bulkGet(query)
        const primaryPath = getPrimaryFieldOfPrimaryKey(this.schema.primaryKey);
        documents.forEach((document) => {
            docsInDbMap.set(document[primaryPath] as any, document)
            this.documents.set(document[primaryPath] as any, document)
        })
        return docsInDbMap
    }

    async getInstance() {
        await this.db.open()
        return this.db;
    }

    async getIndex(key: string): Promise<string[]> {
        try {
            const db = await this.getInstance()
            const result = await db.get(key)
            return JSON.parse(result) as string[]
        } catch (err) {
            if ((err as any).code && (err as any).code === 'LEVEL_NOT_FOUND') {
                return []
            } else {
                throw err
            }
        }
    }

    async bulkGet(keys: string[]): Promise<RxDocumentData<RxDocType>[]> {
        if (!keys || keys.length <= 0) {
            return []
        }
        const db = await this.getInstance();
        const values = await db.getMany(keys);

        return values
            .filter((value) => value !== undefined)
            .map((value) => JSON.parse(value)) as RxDocumentData<RxDocType>[]

    }

    async get(key: string): Promise<RxDocumentData<RxDocType> | null> {
        try {
            const db = await this.getInstance();
            const result = await db.get(key)
            return JSON.parse(result)
        } catch (err) {
            if ((err as any).code && (err as any).code === 'LEVEL_NOT_FOUND') {
                return null
            } else {
                throw err
            }
        }
    }

    async set(key: string, data: RxDocumentData<RxDocType>) {
        if (!data) {
            throw new Error("Undefined value")
        }

        if (!key) {
            throw new Error("Undefined key")
        }

        const db = await this.getInstance()

        return db.put(key, JSON.stringify(data))
    }

    async setIndex(key: string, ids: string[]) {
        const db = await this.getInstance()
        return db.put(key, JSON.stringify(ids))
    }

    async updateIndex(key: string, id: string) {
        if (!id) {
            throw new Error("Undefined id")
        }
        if (!key) {
            throw new Error("Undefined key")
        }
        const existingIndex = await this.getIndex(key);
        const newIndexes = Array.from(new Set([...existingIndex, id]));
        await this.setIndex(key, newIndexes);
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

    async close() {
        await this.db.close()
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
                await this.updateIndex(indexName, id)
                await this.updateIndex('[all]', id)
                await this.set(id, item);
                this.documents.set(id, item)
            } else {
                const id = item.id as string;
                await this.updateIndex(indexName, id)
                await this.updateIndex('[all]', id)
                await this.set(id, item)
                this.documents.set(id, item)
            }
        }
    }
}

