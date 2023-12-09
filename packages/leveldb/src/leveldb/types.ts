import { Level } from "level";
import { DefaultPreparedQuery, RxDocumentData, RxDocumentDataById, RxJsonSchema, RxStorage, } from "rxdb";

/**
 * Index of a table can be a string or a number
 */
export type IndexType = string | number;
/**
 * LevelDB internal data structure is a Map with an index
 * and RxDocumentData from RXDB
 */
export type LevelDBDataStructure<RxDocType> = Map<IndexType, RxDocumentData<RxDocType>>;
/**
 * Data type for index keystorage
 * I used this to get faster searches based on what RXDB indexes we were
 * informed
 */
export type LevelDBDataIndex = Map<IndexType, IndexType[]>;
/**
 * Query type for LevelDB
 */
export type LevelDBType = Level<string, string>
export type LevelDBPreparedQuery<DocType> = DefaultPreparedQuery<DocType>;
export type LevelDBInternalConstructor<RxDocType> = {
    refCount: number,
    path: string,
    schema: RxJsonSchema<RxDocumentData<RxDocType>>;
    documents?: Map<string, RxDocumentData<RxDocType>>
} | {
    level: LevelDBType,
    refCount: number,
    schema: RxJsonSchema<RxDocumentData<RxDocType>>;

    documents?: Map<string, RxDocumentData<RxDocType>>
}
/**
 * Main storage interface for LevelDBStorage
 */
export type LevelDBStorageInternals<RxDocType> = {
    getDocuments(query: string[]): Promise<Map<string, RxDocumentData<RxDocType>>>;
    documents: Map<string, RxDocumentData<RxDocType>>;
    removed: boolean;
    refCount: number;
    schema: RxJsonSchema<RxDocumentData<RxDocType>>;
    bulkPut(
        items: any,
        collectionName: string,
        schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>): Promise<any>;
    close(): Promise<void>;
    clear(): Promise<void>;
    get(key: string): Promise<RxDocumentData<RxDocType> | null>;
    getIndex(key: string): Promise<string[]>;
    bulkGet(keys: string[]): Promise<RxDocumentData<RxDocType>[]>;
    set(key: string, data: RxDocumentData<RxDocType>): Promise<void>
    setIndex(key: string, ids: string[]): Promise<void>
    updateIndex(key: string, id: string): Promise<void>
}

export type RxStorageLevelDBType<RxDocType> = RxStorage<RxDocType, LevelDBSettings<RxDocType>>


export type LevelDBSettings<RxDocType> = {
    path: string,
    dbName: string,
} | {
    level: LevelDBType
}

