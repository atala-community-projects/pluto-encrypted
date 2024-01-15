import { RxDocument, KeyFunctionMap, RxCollection } from "rxdb"
import SDK from '@atala/prism-wallet-sdk'
import { PlutoDBontext } from "../.."

export interface DIDPairSchemaType {
    hostDID: string
    receiverDID: string
    name: string
}


export type DIDPairDocument = RxDocument<DIDPairSchemaType>

export interface DIDPairStaticMethodTypes extends KeyFunctionMap {
    storeDIDPair(
        this: PlutoDBontext,
        host: SDK.Domain.DID,
        receiver: SDK.Domain.DID,
        name: string
    ): Promise<void>
    getAllDidPairs(this: PlutoDBontext): Promise<SDK.Domain.DIDPair[]>
    getPairByName(this: PlutoDBontext, name: string): Promise<SDK.Domain.DIDPair | null>
    getPairByDID(this: PlutoDBontext, did: SDK.Domain.DID): Promise<SDK.Domain.DIDPair | null>
}
export type DIDPairCollection = RxCollection<DIDPairSchemaType, any, DIDPairStaticMethodTypes>
