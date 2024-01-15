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
import { DatabaseBase } from '@pluto-encrypted/shared'

export type ValuesOf<T> = T[keyof T]
export type Schema<T> = RxJsonSchema<T> & {
    encrypted: Array<keyof T>
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
} & { [name: string]: RxCollection }

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

export type PlutoInstance<
    Collections = CollectionsOfDatabase,
> = DatabaseBase<Collections>
export type DBOptions = RxDatabaseCreator;
export type StaticRxCollectionContext<Collections = { [name: string]: RxCollection }> = PlutoInstance<Collections>
