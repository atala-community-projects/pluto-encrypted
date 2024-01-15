import { KeyFunctionMap, RxCollection, RxDocument } from "rxdb"
import SDK from '@atala/prism-wallet-sdk'
import { StaticRxCollectionContext } from "../../types"
import { PlutoDBontext } from "../.."

export interface CredentialSubjectType {
    type: string
    name: string
    value: string
}

export interface CredentialSchemaType {
    id: string
    recoveryId: string
    credentialData: string
    issuer?: string
    subject?: string
    credentialCreated?: string
    credentialUpdated?: string
    credentialSchema?: string
    validUntil?: string
    revoked?: boolean
    availableClaims?: string[]
}

export type CredentialDocument = RxDocument<CredentialSchemaType>
export interface CredentialMethodTypes extends KeyFunctionMap {
    toDomainCredential: (this: CredentialSchemaType) => SDK.Domain.Credential
}

export interface CredentialStaticMethodTypes extends KeyFunctionMap {
    getAllCredentials(this: PlutoDBontext): Promise<SDK.Domain.Credential[]>
    storeCredential(this: PlutoDBontext, credential: SDK.Domain.Credential): Promise<void>
}

export type CredentialCollection = RxCollection<
    CredentialSchemaType,
    CredentialMethodTypes,
    CredentialStaticMethodTypes
>
