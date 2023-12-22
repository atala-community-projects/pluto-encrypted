import { RxDocumentData, RxJsonSchema, getIndexableStringMonad, getPrimaryFieldOfPrimaryKey } from "rxdb";
import Level from 'level';
import pull from 'pull-stream';
import pullLevel from 'pull-level';

import {
    LevelDBStorageInternals,
    LevelDBInternalConstructor,
    LevelDBType
} from "./types";
import { pushAtSortPosition } from "array-push-at-sort-position";

function isArray(arr) {
    return Array.isArray(arr)
}

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
            this.db = Level(this._options.dbPath, { valueEncoding: 'json' })
        }
    }

    async getDocuments(query: string[]): Promise<Map<string, RxDocumentData<RxDocType>>> {
        const docsInDbMap = new Map<string, RxDocumentData<RxDocType>>();
        if (query.length <= 0) {
            const db = await this.getInstance()

            await pull(
                pullLevel.read(db),
                pull.filter(row => !isArray(row.value)),
                pull.map(row => {
                    docsInDbMap.set(row.key, row.value)
                    return
                }),
                pull.collectAsPromise()
            )

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
        return this.db
    }

    async getIndex(key: string): Promise<string[]> {
        const db = await this.getInstance()
        return db.get(key)
            .then(result => result ? JSON.parse(result) : [])
            .catch(err => {
                if (err.message.startsWith('Key not found in database')) {
                    return []
                } else {
                    throw err
                }
                // if ((err as any).code && (err as any).code === 'LEVEL_NOT_FOUND') {
                //     throw err
                // } else {
                //     return []
                // }
            });
    }

    async bulkGet(keys: string[]): Promise<RxDocumentData<RxDocType>[]> {
        if (!keys || keys.length <= 0) {
            return []
        }

        const db = await this.getInstance()
        const keysSet = new Set(keys)
        return pull(
            pullLevel.read(db),
            pull.filter(row => (
                keysSet.has(row.key) &&
                row.value !== undefined
            )),
            pull.map(row => JSON.parse(row.value)),
            pull.collectAsPromise()
        )
    }

    async get(key: string): Promise<RxDocumentData<RxDocType> | null> {
        const db = await this.getInstance()
        return await db.get(key)
            .then(result => result ? JSON.parse(result) : null)
            .catch(err => {
                if (err.message.startsWith('Key not found in database')) {
                    return null
                } else {
                    throw err
                }
            })
    }

    async set(key: string, data: RxDocumentData<RxDocType>) {
        if (!key) {
            throw new Error("Undefined key")
        }
        if (!data) {
            throw new Error("Undefined value")
        }

        const db = await this.getInstance()

        return new Promise<void>((resolve, reject) => {
            db.put(key, JSON.stringify(data), (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve()
            })
        })
    }

    async setIndex(key: string, ids: string[]) {
        if (!key) {
            throw new Error("Undefined key")
        }
        if (!ids) {
            throw new Error("Undefined value")
        }

        const db = await this.getInstance()
        return new Promise<void>((resolve, reject) => {
            db.put(key, JSON.stringify(ids), (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve()
            })
        })
    }

    async delete(key: string) {
        if (!key) {
            throw new Error("Undefined key")
        }

        const db = await this.getInstance()
        return new Promise<void>((resolve, reject) => {
            db.del(key, (err) => {
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
        await this.setIndex(key, newIndexes);
    }

    async removeFromIndex(key: string, id: string) {
        if (!id) {
            throw new Error("Undefined id")
        }
        if (!key) {
            throw new Error("Undefined key")
        }
        const existingIndex = await this.getIndex(key);
        await this.setIndex(key, existingIndex.filter((vId) => vId !== id));
    }

    async clear() {
        const db = await this.getInstance()
        return await db.clear()
    }

    async close() {
        return this.db.close()
    }

    private safeIndexList(schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>) {
        const primaryKeyKey = typeof schema.primaryKey === "string" ? schema.primaryKey : schema.primaryKey.key;

        const allIndexes: string[][] = [];
        for (let requiredIndexes of (schema.indexes || [])) {
            const currentIndexes: string[] = []
            if (typeof requiredIndexes === "string") {
                currentIndexes.push(requiredIndexes)
            } else {
                currentIndexes.push(...requiredIndexes)
            }
            if (!currentIndexes.includes(primaryKeyKey)) {
                currentIndexes.unshift(primaryKeyKey)
            }
            allIndexes.push(currentIndexes)
        }

        return allIndexes
    }

    private getPrivateKeyValue(document: RxDocumentData<RxDocType>, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>) {
        const primaryKeyKey = typeof schema.primaryKey === "string" ? schema.primaryKey : schema.primaryKey.key;
        if (!primaryKeyKey) {
            throw new Error("Data must have a primaryKey defined of type string or number")
        }
        const id = document[primaryKeyKey] as string;
        return id
    }

    async bulkPut(items: RxDocumentData<RxDocType>[], collectionName: string, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>) {
        try {
            const primaryKeyKey = typeof schema.primaryKey === "string" ? schema.primaryKey : schema.primaryKey.key;
            const safeIndexList = this.safeIndexList(schema);

            for (let item of items) {

                const shouldDelete = item._deleted;
                const id = this.getPrivateKeyValue(item, schema)
                if (shouldDelete) {
                    for (let requiredIndexes of safeIndexList) {
                        const requiredIndex = `[${requiredIndexes.join("+")}]`
                        await this.removeFromIndex(requiredIndex, id)
                    }
                    await this.removeFromIndex(`[${primaryKeyKey}]`, id)
                    await this.removeFromIndex('[all]', id)
                    await this.delete(id)
                    this.documents.delete(id)
                } else {
                    for (let requiredIndexes of safeIndexList) {
                        const requiredIndex = `[${requiredIndexes.join("+")}]`
                        await this.updateIndex(requiredIndex, id)
                    }
                    await this.updateIndex(`[${primaryKeyKey}]`, id)
                    await this.updateIndex('[all]', id)
                    await this.set(id, item);
                    this.documents.set(id, item)
                }
            }
        } catch (err) {
            throw err
        }

    }
}

