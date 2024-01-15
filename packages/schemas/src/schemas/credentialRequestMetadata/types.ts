import { KeyFunctionMap, RxCollection, RxDocument } from "rxdb"
import SDK from '@atala/prism-wallet-sdk'
import { StaticRxCollectionContext } from "../../types"




export type CredentialRequestMetadataCollection = RxCollection<
    CredentialRequestMetadataSchemaType,
    CredentialRequestMetadataMethodTypes,
    CredentialRequestMetadataStaticMethodTypes
>



export interface CredentialRequestMetadataSchemaType {
    id: string
    link_secret_blinding_data: {
        v_prime: string
    }
    link_secret_name: string
    nonce: string
}

export type CredentialRequestMetadataDocument =
    RxDocument<CredentialRequestMetadataSchemaType>

export interface CredentialRequestMetadataMethodTypes extends KeyFunctionMap {
    toDomainCredentialRequestMetadata: (
        this: CredentialRequestMetadataSchemaType
    ) => SDK.Domain.Anoncreds.CredentialRequestMeta
}

export interface CredentialRequestMetadataStaticMethodTypes extends KeyFunctionMap {
    fetchCredentialMetadata(
        linkSecretName: string
    ): Promise<SDK.Domain.Anoncreds.CredentialRequestMeta | null>
    storeCredentialMetadata(
        metadata: SDK.Domain.Anoncreds.CredentialRequestMeta,
        linkSecret: string
    ): Promise<void>
}