import { RxDocumentData, RxDocumentDataById, RxJsonSchema } from "rxdb";
import { InMemoryDataIndex, InMemoryDataStructure, InMemoryStorageInternals, IndexType } from "./types";
import { getPrivateKeyValue, safeIndexList } from "@pluto-encrypted/shared";




function initialiseData<RxDocType>(): InMemoryDataStructure<RxDocType> {
    return new Map()
}

function initialiseIndex(): InMemoryDataIndex {
    return new Map()
}

export class InMemoryInternal<RxDocType> implements InMemoryStorageInternals<RxDocType> {

    public removed = false;
    public data: InMemoryDataStructure<RxDocType> = initialiseData();
    public index: InMemoryDataIndex = initialiseIndex();

    constructor(public refCount: number) { }

    get documents() {
        return this.data
    }

    public addIndex(indexName: string, docId: IndexType) {
        if (this.index.has(indexName)) {
            const values = this.index.get(indexName) || [];
            const newIndexes = Array.from(new Set([...values, docId]));
            this.index.set(indexName, newIndexes)
        } else {
            this.index.set(indexName, [docId])
        }
    }

    public removeFromIndex(indexName: string, id: string) {
        if (this.index.has(indexName)) {
            const values = this.index.get(indexName) || [];
            this.index.set(indexName, values.filter((vId) => vId !== id))
        }
    }

    clear() {
        this.data.clear();
        this.index.clear();
    }

    async bulkPut(items: RxDocumentData<RxDocType>[], collectionName: string, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>) {
        const primaryKeyKey = typeof schema.primaryKey === "string" ? schema.primaryKey : schema.primaryKey.key;
        const saferIndexList = safeIndexList(schema);

        for (let item of items) {

            const shouldDelete = item._deleted;
            const id = getPrivateKeyValue(item, schema)
            if (shouldDelete) {
                for (let requiredIndexes of saferIndexList) {
                    const requiredIndex = `[${requiredIndexes.join("+")}]`
                    await this.removeFromIndex(requiredIndex, id)
                }
                await this.removeFromIndex(`[${primaryKeyKey}]`, id)
                await this.removeFromIndex('[all]', id)
                await this.data.delete(id)
                this.documents.delete(id)
            } else {
                for (let requiredIndexes of saferIndexList) {
                    const requiredIndex = `[${requiredIndexes.join("+")}]`
                    await this.addIndex(requiredIndex, id)
                }
                await this.addIndex(`[${primaryKeyKey}]`, id)
                await this.addIndex('[all]', id)
                await this.data.set(id, item);
                this.documents.set(id, item)
            }
        }
    }

    bulkGet(docIds: string[], withDeleted: boolean): RxDocumentDataById<RxDocType> {
        return docIds.reduce<RxDocumentDataById<RxDocType>>((alldocs, current) => {
            const data = this.data.get(current);
            if (data) {
                alldocs[current] = data
            }
            return alldocs;
        }, {})
    }
}

