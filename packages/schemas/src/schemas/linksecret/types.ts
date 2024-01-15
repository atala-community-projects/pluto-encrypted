import SDK from '@atala/prism-wallet-sdk'
import { RxDocument, KeyFunctionMap, RxCollection } from 'rxdb'





export interface LinkSecretSchemaType {
    readonly name: string
    readonly secret: string
}



export type LinkSecretDocument = RxDocument<
    LinkSecretSchemaType,
    LinkSecretMethodTypes
>

export interface LinkSecretMethodTypes extends KeyFunctionMap {
    toDomainLinkSecret: (this: LinkSecretDocument) => SDK.Domain.Anoncreds.LinkSecret
}

export interface LinkSecretStaticMethodTypes extends KeyFunctionMap {
    storeLinkSecret(
        linkSecret: string,
        linkSecretName: string
    ): Promise<void>
    getLinkSecret(
        linkSecretName?: string | undefined
    ): Promise<string | null>
}

export type LinkSecretColletion = RxCollection<
    LinkSecretSchemaType,
    LinkSecretMethodTypes,
    LinkSecretStaticMethodTypes
>