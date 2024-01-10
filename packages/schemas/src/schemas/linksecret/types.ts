import SDK from '@atala/prism-wallet-sdk'
import { RxDocument, KeyFunctionMap, RxCollection } from 'rxdb'
import { StaticRxCollectionContext } from '../../types'





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
        this: StaticRxCollectionContext<{ linksecrets: LinkSecretColletion }>,
        linkSecret: string,
        linkSecretName: string
    ): Promise<void>
    getLinkSecret(
        this: StaticRxCollectionContext<{ linksecrets: LinkSecretColletion }>,
        linkSecretName?: string | undefined
    ): Promise<string | null>
}

export type LinkSecretColletion = RxCollection<
    LinkSecretSchemaType,
    LinkSecretMethodTypes,
    LinkSecretStaticMethodTypes
>