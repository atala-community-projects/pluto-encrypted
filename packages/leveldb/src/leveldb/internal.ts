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
        this.db = new Level(path, { valueEncoding: 'json' })
    }

    get documents() {
        return new Map()
    }

    private async addIndex(indexName: string, docId: IndexType) {
        const allKeys = await this.db.keys().all();
        if (allKeys.includes(indexName)) {
            const value = this.db.get(indexName)
            debugger;
        }
    }

    getIndex(key: string): string[] {
        const index = this.db.get(key);
        debugger;

        throw new Error("Not implemented")
    }

    get(key: string): RxDocumentData<RxDocType> | null {
        throw new Error("Not implemented")
    }

    clear() {
        this.db.clear();
    }

    bulkPut(items: RxDocumentData<RxDocType>[], collectionName: string, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>) {
        // const primaryKeyKey = typeof schema.primaryKey === "string" ? schema.primaryKey : schema.primaryKey.key;
        // const indexName = `[${collectionName}+${primaryKeyKey}]`;

        // for (let item of items) {
        //     let primaryKeyVal = item[primaryKeyKey];
        //     if (!("id" in item) || !['string', 'number'].includes(typeof item.id)) {
        //         if (!primaryKeyKey || !primaryKeyVal) {
        //             throw new Error("Data must have a primaryKey defined of type string or number")
        //         }
        //         const id = item[primaryKeyKey] as any;
        //         this.data.set(id, item);
        //         this.addIndex(indexName, id)
        //     } else {
        //         const id = item.id as any;
        //         this.data.set(id, item)
        //         this.addIndex(indexName, id)

        //     }

        // }2
        throw new Error("Not implemented")
    }

    bulkGet(docIds: string[], withDeleted: boolean): RxDocumentDataById<RxDocType> {
        // return docIds.reduce<RxDocumentDataById<RxDocType>>((alldocs, current) => {
        //     const data = this.data.get(current);
        //     if (data &&
        //         (
        //             !data._deleted ||
        //             withDeleted
        //         )) {
        //         alldocs[1] = data
        //     }
        //     return alldocs;
        // }, {})
        throw new Error("Not implemented")
    }
}

