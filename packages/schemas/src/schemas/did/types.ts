import SDK from '@atala/prism-wallet-sdk'
import { RxDocument, KeyFunctionMap, RxCollection } from "rxdb"

import { StaticRxCollectionContext } from "../../types"


export interface DIDSchemaType {
    schema: string
    method: string
    methodId: string
    alias?: string
    did: string
}

export type DIDDocument = RxDocument<DIDSchemaType>
export interface DIDStaticMethodTypes extends KeyFunctionMap {
    getPrismLastKeyPathIndex(this: StaticRxCollectionContext<{ dids: DIDCollection }>): Promise<number>
    getPrismDIDKeyPathIndex(this: StaticRxCollectionContext<{ dids: DIDCollection }>, did: SDK.Domain.DID): Promise<number | null>
    storePeerDID(
        this: StaticRxCollectionContext<{ dids: DIDCollection }>,
        did: SDK.Domain.DID,
        privateKeys: SDK.Domain.PrivateKey[]
    ): Promise<void>
    getAllPeerDIDs(this: StaticRxCollectionContext<{ dids: DIDCollection }>): Promise<SDK.PeerDID[]>
    getAllPrismDIDs(this: StaticRxCollectionContext<{ dids: DIDCollection }>): Promise<SDK.Domain.PrismDIDInfo[]>
    getDIDInfoByDID(this: StaticRxCollectionContext<{ dids: DIDCollection }>, did: SDK.Domain.DID): Promise<SDK.Domain.PrismDIDInfo | null>
    getDIDInfoByAlias(this: StaticRxCollectionContext<{ dids: DIDCollection }>, alias: string): Promise<SDK.Domain.PrismDIDInfo[]>
    storePrismDID(
        this: StaticRxCollectionContext<{ dids: DIDCollection }>,
        did: SDK.Domain.DID,
        keyPathIndex: number,
        privateKey: SDK.Domain.PrivateKey,
        _privateKeyMetaId?: string | null,
        alias?: string | undefined
    ): Promise<void>
}



export type DIDCollection = RxCollection<
    DIDSchemaType,
    any,
    DIDStaticMethodTypes
>