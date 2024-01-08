import SDK from '@atala/prism-wallet-sdk'

import {
    CollectionsOfDatabase,
    RxCollection,
    RxCollectionCreator,
    RxDatabase,
    RxDatabaseCreator,
    RxDumpDatabase,
    RxJsonSchema,
    RxStorage
} from "rxdb"

import { CredentialCollection } from "./schemas/credential"
import { DIDPairCollection } from "./schemas/didpair"

import { MediatorCollection } from "./schemas/mediator"
import { LinkSecretColletion } from "./schemas/linksecret"
import { DIDCollection } from "./schemas/did"
import { CredentialRequestMetadataCollection } from "./schemas/credentialRequestMetadata"


import { MessageColletion } from "./schemas/message"
import { PrivateKeyColletion } from "./schemas/privatekey"
import { DatabaseBase, ExtendedCollections } from '@pluto-encrypted/shared'

export type ValuesOf<T> = T[keyof T]
export type Schema<T> = RxJsonSchema<T> & {
    encrypted: Array<keyof T>
}

export interface PlutoCollections {
    messages: MessageColletion
    dids: DIDCollection
    didpairs: DIDPairCollection
    mediators: MediatorCollection
    privatekeys: PrivateKeyColletion
    credentials: CredentialCollection
    credentialrequestmetadatas: CredentialRequestMetadataCollection
    linksecrets: LinkSecretColletion
}
export interface PlutoCollectionsCreator {
    messages: RxCollectionCreator
    dids: RxCollectionCreator
    didpairs: RxCollectionCreator
    mediators: RxCollectionCreator
    privatekeys: RxCollectionCreator
    credentials: RxCollectionCreator
    credentialrequestmetadatas: RxCollectionCreator
    linksecrets: RxCollectionCreator
}
export type PlutoDatabase<Collections> = RxDatabase<ExtendedCollections<Collections>, any, any>;
export type DatabaseCreateOptions<CreatedCollections> = {
    name: string;
    encryptionKey: Uint8Array;
    importData?: RxDumpDatabase<ExtendedCollections<CreatedCollections>>;
    storage: RxStorage<any, any>;
    autoStart?: boolean;
    withDefaultCollections: boolean;
    collections?: {
        [key in keyof CreatedCollections]: RxCollectionCreator<any>;
    };
};
export type DBOptions = RxDatabaseCreator;
export type PlutoInstance<
    Collections = CollectionsOfDatabase,
> = DatabaseBase<Collections & PlutoCollections> & SDK.Domain.Pluto

export type StaticRxCollectionContext<Collections = { [name: string]: RxCollection }> = PlutoInstance<Collections>
