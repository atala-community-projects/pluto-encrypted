import { RxDocument, KeyFunctionMap, RxCollection } from "rxdb"
import SDK from '@atala/prism-wallet-sdk'

export interface DIDPairSchemaType {
    hostDID: string
    receiverDID: string
    name: string
}


export type DIDPairDocument = RxDocument<DIDPairSchemaType>

export interface DIDPairStaticMethodTypes extends KeyFunctionMap {
    storeDIDPair(
        host: SDK.Domain.DID,
        receiver: SDK.Domain.DID,
        name: string
    ): Promise<void>
    getAllDidPairs(): Promise<SDK.Domain.DIDPair[]>
    getPairByName(name: string): Promise<SDK.Domain.DIDPair | null>
    getPairByDID(did: SDK.Domain.DID): Promise<SDK.Domain.DIDPair | null>
}
export type DIDPairCollection = RxCollection<DIDPairSchemaType, any, DIDPairStaticMethodTypes>
