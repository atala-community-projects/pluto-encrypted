import { BulkWriteRow, ById, DefaultPreparedQuery, EventBulk, RxConflictResultionTask, RxDocumentData, RxDocumentDataById, RxDocumentWriteData, RxJsonSchema, RxStorage, RxStorageBulkWriteResponse, RxStorageChangeEvent, RxStorageDefaultCheckpoint } from "rxdb";
import { BulkWriteRowProcessed } from "rxdb/dist/types/types";

export type IndexType = any;


export type InMemoryDataStructure<RxDocType> = Map<IndexType, RxDocumentData<RxDocType>>;



export type InMemoryDataIndex = Map<IndexType, IndexType[]>;
export type InMemoryPreparedQuery<DocType> = DefaultPreparedQuery<DocType>;

export type InMemoryStorageInternals<RxDocType> = {
    /**
     * InMemoryStorageVariables
     */
    data: InMemoryDataStructure<RxDocType>;
    index: InMemoryDataIndex;

    documents: InMemoryDataStructure<RxDocType>;

    removed: boolean;
    refCount: number;

    bulkPut(
        items: any,
        collectionName: string,
        schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>): any;
    bulkGet(docIds: string[], withDeleted: boolean): RxDocumentDataById<RxDocType>;
    clear(): void;

}

export type RxStorageInMemoryType<RxDocType> = RxStorage<RxDocType, InMemorySettings>


export type InMemorySettings = {
    /**
     * Concrete options for this storage
     */
}

