import { RxDocumentData, RxJsonSchema, getPrimaryFieldOfPrimaryKey } from "rxdb";
import { Level } from 'level';

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
            this.db = new Level(this._options.dbName, { valueEncoding: 'json' })
        }
    }

    async getDocuments(query: string[]): Promise<Map<string, RxDocumentData<RxDocType>>> {
        const docsInDbMap = new Map<string, RxDocumentData<RxDocType>>();
        if (query.length <= 0) {
            const db = await this.getInstance()
            for await (const key of db.keys()) {
                const value = await this.get(key);
                if (value && !Array.isArray(value)) {
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
        return new Promise<LevelDBType>(async (resolve, reject) => {
            try {
                this.db.open({ multithreading: true } as any, (err) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(this.db)
                })
            } catch (err) {
                return reject(err)
            }
        })
    }

    async getIndex(key: string): Promise<string[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await this.getInstance()
                db.get(key, (err, result) => {
                    if (err) {
                        if ((err as any).code && (err as any).code === 'LEVEL_NOT_FOUND') {
                            return resolve([])
                        } else {
                            throw err
                        }
                    }
                    if (!result) {
                        return []
                    }
                    return resolve(JSON.parse(result) as string[])
                })

            } catch (err) {
                return reject(err)
            }
        })
    }

    async bulkGet(keys: string[]): Promise<RxDocumentData<RxDocType>[]> {
        if (!keys || keys.length <= 0) {
            return []
        }
        return new Promise(async (resolve, reject) => {
            const db = await this.getInstance()
            db.getMany(keys, {}, (err, values) => {
                if (err) {
                    return reject(err);
                }
                const docsInIndex = values?.filter((value) => value !== undefined)
                    .map((value) => JSON.parse(value)) as RxDocumentData<RxDocType>[]

                return resolve(docsInIndex)
            })
        })
    }

    async get(key: string): Promise<RxDocumentData<RxDocType> | null> {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await this.getInstance()
                db.get(key, (err, result) => {
                    if (err) {
                        if ((err as any).code && (err as any).code === 'LEVEL_NOT_FOUND') {
                            return resolve(null)
                        } else {
                            throw err
                        }
                    }
                    if (!result) {
                        return resolve(null)
                    }
                    return resolve(JSON.parse(result))
                })
            } catch (err) {
                return reject(err)
            }
        })
    }

    async set(key: string, data: RxDocumentData<RxDocType>) {
        if (!data) {
            throw new Error("Undefined value")
        }

        if (!key) {
            throw new Error("Undefined key")
        }

        const db = await this.getInstance()

        return new Promise<void>((resolve, reject) => {
            console.log(`[+index]${key} ${JSON.stringify(data)}`)

            db.put(key, JSON.stringify(data), (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve()
            })
        })
    }

    async setIndex(key: string, ids: string[]) {
        const db = await this.getInstance()
        return new Promise<void>((resolve, reject) => {
            console.log(`[+index]${key} ${JSON.stringify(ids)}`)
            db.put(key, JSON.stringify(ids), (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve()
            })
        })
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
        console.log("NEW INDEXES", newIndexes)
        await this.setIndex(key, newIndexes);
    }

    async clear() {
        console.log("Clearing")
        const db = await this.getInstance()
        for await (const key of db.keys()) {
            await this.db.del(key);
        }
        console.log("Cleared")
    }

    async close() {
        return new Promise<void>((resolve, reject) => {
            this.db.close((err) => {
                if (err) {
                    return reject(err)
                }
                return resolve()
            })
        })
    }

    async bulkPut(items: RxDocumentData<RxDocType>[], collectionName: string, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>) {
        try {
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
                    if (!(primaryKeyVal as string).includes("collection") && !(primaryKeyVal as string).includes("storage-token")) {
                        console.log("Adding ", primaryKeyVal, item)
                    }
                } else {
                    const id = item.id as string;

                    await this.updateIndex(indexName, id)
                    await this.updateIndex('[all]', id)
                    await this.set(id, item)

                    this.documents.set(id, item)
                    if (!(primaryKeyVal as string).includes("collection") && !(primaryKeyVal as string).includes("storage-token")) {
                        console.log("Adding ", primaryKeyVal, item)
                    }
                }

            }
        } catch (err) {
            console.log(err);
            debugger;
            throw err
        }

    }
}

