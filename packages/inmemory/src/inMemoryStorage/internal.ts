import { RxDocumentData, RxDocumentDataById, RxJsonSchema } from "rxdb";
import { InMemoryDataIndex, InMemoryDataStructure, InMemoryStorageInternals, IndexType } from "./types";




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

    private addIndex(indexName: string, docId: IndexType) {
        if (this.index.has(indexName)) {
            const values = this.index.get(indexName) || [];
            if (values) {
                values.push(docId)
            }
            this.index.set(indexName, values)
        } else {
            this.index.set(indexName, [docId])
        }
    }

    clear() {
        this.data.clear();
        this.index.clear();
    }

    bulkPut(items: RxDocumentData<RxDocType>[], collectionName: string, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>) {
        const primaryKeyKey = typeof schema.primaryKey === "string" ? schema.primaryKey : schema.primaryKey.key;
        const indexName = `[${collectionName}+${primaryKeyKey}]`;

        for (let item of items) {
            let primaryKeyVal = item[primaryKeyKey];
            if (!("id" in item) || !['string', 'number'].includes(typeof item.id)) {
                if (!primaryKeyKey || !primaryKeyVal) {
                    throw new Error("Data must have a primaryKey defined of type string or number")
                }
                const id = item[primaryKeyKey] as any;
                this.data.set(id, item);
                this.addIndex(indexName, id)
            } else {
                const id = item.id as any;
                this.data.set(id, item)
                this.addIndex(indexName, id)

            }

        }
    }

    bulkGet(docIds: string[], withDeleted: boolean): RxDocumentDataById<RxDocType> {
        return docIds.reduce<RxDocumentDataById<RxDocType>>((alldocs, current) => {
            const data = this.data.get(current);
            if (data &&
                (
                    !data._deleted ||
                    withDeleted
                )) {
                alldocs[1] = data
            }
            return alldocs;
        }, {})
    }
}

