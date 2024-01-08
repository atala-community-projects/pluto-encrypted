/**
 * @packageDocumentation
 * @module database
 */
import { RxCollectionCreator } from 'rxdb'
import { CredentialSchema, CredentialMethods, CredentialStaticMethods } from './schemas/credential'
import { CredentialRequestMetadataSchema, CredentialRequestMetadataMethods, CredentialRequestMetadataStaticMethods } from './schemas/credentialRequestMetadata'
import { DIDSchema, DIDStaticMethods } from './schemas/did'
import { DIDPairSchema, DIDPairStaticMethods } from './schemas/didpair'
import { LinkSecretSchema, LinkSecretMethods, LinkSecretStaticMethods } from './schemas/linksecret'
import { MediatorSchema, MediatorMethods, MediatorStaticMethods } from './schemas/mediator'
import { MessageSchema, MessageMethods, MessageStaticMethods } from './schemas/message'
import { PrivateKeySchema, PrivateKeyMethods, PrivateKeyStaticMethods } from './schemas/privatekey'
import { PlutoCollectionsCreator } from './types'

export function getDefaultCollections(extendedCollections: { [name: string]: RxCollectionCreator } = {}): { [name: string]: RxCollectionCreator } & PlutoCollectionsCreator {
    return {
        messages: {
            schema: MessageSchema,
            methods: MessageMethods,
            statics: MessageStaticMethods
        },
        dids: {
            schema: DIDSchema,
            statics: DIDStaticMethods
        },
        didpairs: {
            schema: DIDPairSchema,
            statics: DIDPairStaticMethods
        },
        mediators: {
            schema: MediatorSchema,
            methods: MediatorMethods,
            statics: MediatorStaticMethods
        },
        privatekeys: {
            schema: PrivateKeySchema,
            methods: PrivateKeyMethods,
            statics: PrivateKeyStaticMethods
        },
        credentials: {
            schema: CredentialSchema,
            methods: CredentialMethods,
            statics: CredentialStaticMethods
        },
        credentialrequestmetadatas: {
            schema: CredentialRequestMetadataSchema,
            methods: CredentialRequestMetadataMethods,
            statics: CredentialRequestMetadataStaticMethods
        },
        linksecrets: {
            schema: LinkSecretSchema,
            methods: LinkSecretMethods,
            statics: LinkSecretStaticMethods
        },
        ...extendedCollections,
    }
}

export * from './schemas/credential'
export * from './schemas/credentialRequestMetadata'
export * from './schemas/did'
export * from './schemas/didpair'
export * from './schemas/linksecret'
export * from './schemas/mediator'
export * from './schemas/message'
export * from './schemas/privatekey'
export * from './types'

export type { Domain as WALLET_SDK_DOMAIN } from '@atala/prism-wallet-sdk'