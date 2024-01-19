import { RxDocumentData, RxDocumentDataById, RxJsonSchema } from "rxdb"



export type IagonInternalParameters = {
    apiKey: string,
    password: Uint8Array
}

export enum VISIBILITY {
    private = "private",
    public = "public"
}

export type IagonFolder = {
    __v: number,
    _id: string,
    client_id: string,
    created_at: string,
    directory_name: string,
    index_listing: boolean,
    parent_directory_id: string | null,
    path: string,
    updated_at: string,
    visibility: VISIBILITY
}

export type IagonFile = {
    __v: number,
    _id: string,
    availability: string,
    client_id: string,
    createdAt: string,
    file_size_byte_encrypted: 24,
    file_size_byte_native: 0,
    index_listing: boolean,
    name: string,
    parent_directory_id: string | null,
    path: string,
    region: string | null,
    unique_id: string,
    updated_at: string,
    visibility: VISIBILITY
}

export type IagonResponse<Data> = {
    success: true,
    data: Data
} | {
    success: false,
    message: string
}

export type IagonStorageInternals<RxDocType> = {
    __databaseFolder: IagonFolder;
    __collectionFolder: IagonFolder;
    __indexFolder: IagonFolder;
    __dataFolder: IagonFolder;
    refCount: number;

    getDBDirectory(databaseName: string): Promise<IagonFolder>
    initialiseDB(databaseName: string, collectionName: string): Promise<void>
    bulkGet(keys: string[]): Promise<RxDocumentDataById<RxDocType>>

    addDoc(docId: string, document: RxDocumentData<RxDocType>): Promise<void>
    removeDoc(docId: string): Promise<void>
    removeFromIndex(indexName: string, docId: string): Promise<void>
    get(key: string): Promise<RxDocumentData<RxDocType> | null>
    getIndex(key: string): Promise<string[]>
    updateIndex(indexName: string, docId: string): Promise<void>
    bulkPut(items: Array<RxDocumentData<RxDocType>>, collectionName: string, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>): Promise<void>
}