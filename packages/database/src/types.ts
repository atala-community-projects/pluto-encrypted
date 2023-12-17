import { KeyFunctionMap, RxCollectionBase, RxJsonSchema, RxQuery, RxStorageInstanceCreationParams } from "rxdb";
import { MangoQuery, MangoQueryNoLimit, MangoQuerySelectorAndIndex, RxCollection, RxDocument, RxDumpDatabase, RxStorage } from "rxdb/dist/types/types";
import { CredentialCollection } from "./schemas/Credential";
import { CredentialRequestMetadataCollection } from "./schemas/CredentialRequestMetadata";
import { DIDCollection } from "./schemas/DID";
import { DIDPairCollection } from "./schemas/DIDPair";
import { LinkSecretColletion } from "./schemas/LinkSecret";
import { MediatorCollection } from "./schemas/Mediator";
import { MessageColletion } from "./schemas/Message";
import { PrivateKeyColletion } from "./schemas/PrivateKey";


export type NoKeys<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};

export type Schema<T> = RxJsonSchema<T> & {
    encrypted: (keyof T)[];
};

export interface GenericORMType<RxDocType> extends RxCollection<any, any, any> {
    count: (this: RxCollection<any, any, any>, query: MangoQuery<any> | undefined) => Promise<number>,
    findByIds(this: RxCollection<any, any, any>, ids: string[]): Map<string, RxDocument>;
    find(queryObj?: MangoQueryNoLimit<any> | string): RxDocument<RxDocType, any>[];
    findOne(queryObj?: MangoQueryNoLimit<any> | string): RxDocument<RxDocType, any> | null;
    remove(queryObj?: MangoQueryNoLimit<any> | string): RxDocument<RxDocType, any>[]
}


export type PlutoCollections = {
    messages: MessageColletion;
    dids: DIDCollection;
    didpairs: DIDPairCollection;
    mediators: MediatorCollection;
    privatekeys: PrivateKeyColletion;
    credentials: CredentialCollection;
    credentialrequestmetadatas: CredentialRequestMetadataCollection;
    linksecrets: LinkSecretColletion;
};

export type createEncryptedOptions = {
    name: string,
    encryptionKey: Uint8Array,
    importData?: RxDumpDatabase<PlutoCollections>,
    storage: RxStorage<any, any>
}