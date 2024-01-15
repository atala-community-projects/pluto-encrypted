import SDK from '@atala/prism-wallet-sdk'
import { RxDocument, KeyFunctionMap, RxCollection } from "rxdb"

import { StaticRxCollectionContext } from "../../types"
import { PlutoDBontext } from '../..'


export interface DIDSchemaType {
    schema: string
    method: string
    methodId: string
    alias?: string
    did: string
}

export type DIDDocument = RxDocument<DIDSchemaType>

export interface DIDStaticMethodTypes extends KeyFunctionMap {
    getPrismLastKeyPathIndex(this: PlutoDBontext,): Promise<number>
    getPrismDIDKeyPathIndex(this: PlutoDBontext, did: SDK.Domain.DID): Promise<number | null>
    storePeerDID(
        this: PlutoDBontext,
        did: SDK.Domain.DID,
        privateKeys: SDK.Domain.PrivateKey[]
    ): Promise<void>
    getAllPeerDIDs(this: PlutoDBontext): Promise<SDK.PeerDID[]>
    getAllPrismDIDs(this: PlutoDBontext): Promise<SDK.Domain.PrismDIDInfo[]>
    getDIDInfoByDID(this: PlutoDBontext, did: SDK.Domain.DID): Promise<SDK.Domain.PrismDIDInfo | null>
    getDIDInfoByAlias(this: PlutoDBontext, alias: string): Promise<SDK.Domain.PrismDIDInfo[]>
    storePrismDID(
        this: PlutoDBontext,
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