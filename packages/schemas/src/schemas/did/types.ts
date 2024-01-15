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
    getPrismLastKeyPathIndex(): Promise<number>
    getPrismDIDKeyPathIndex(did: SDK.Domain.DID): Promise<number | null>
    storePeerDID(
        did: SDK.Domain.DID,
        privateKeys: SDK.Domain.PrivateKey[]
    ): Promise<void>
    getAllPeerDIDs(): Promise<SDK.PeerDID[]>
    getAllPrismDIDs(): Promise<SDK.Domain.PrismDIDInfo[]>
    getDIDInfoByDID(did: SDK.Domain.DID): Promise<SDK.Domain.PrismDIDInfo | null>
    getDIDInfoByAlias(alias: string): Promise<SDK.Domain.PrismDIDInfo[]>
    storePrismDID(
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