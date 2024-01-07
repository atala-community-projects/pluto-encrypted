import { RxDatabase, RxJsonSchema } from "rxdb"
import { CredentialCollection } from "./schemas/Credential"
import { CredentialRequestMetadataCollection } from "./schemas/CredentialRequestMetadata"
import { DIDCollection } from "./schemas/DID"
import { DIDPairCollection } from "./schemas/DIDPair"
import { LinkSecretColletion } from "./schemas/LinkSecret"
import { MediatorCollection } from "./schemas/Mediator"
import { MessageColletion } from "./schemas/Message"
import { PrivateKeyColletion } from "./schemas/PrivateKey"


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
export type ExtendedCollections<T> = PlutoCollections & { [key in keyof T]: ValuesOf<T> }
export type PlutoDatabase<Collections> = RxDatabase<ExtendedCollections<Collections>>