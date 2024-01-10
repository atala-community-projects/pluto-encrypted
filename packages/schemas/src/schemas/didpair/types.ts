import { RxDocument, KeyFunctionMap, RxCollection } from "rxdb"
import SDK from '@atala/prism-wallet-sdk'
import { StaticRxCollectionContext } from "../../types"

export interface DIDPairSchemaType {
    hostDID: string
    receiverDID: string
    name: string
}


export type DIDPairDocument = RxDocument<DIDPairSchemaType>

export interface DIDPairStaticMethodTypes extends KeyFunctionMap {
    storeDIDPair(
        this: StaticRxCollectionContext<{ didpairs: DIDPairCollection }>,
        host: SDK.Domain.DID,
        receiver: SDK.Domain.DID,
        name: string
    ): Promise<void>
    getAllDidPairs(this: StaticRxCollectionContext<{ didpairs: DIDPairCollection }>,): Promise<SDK.Domain.DIDPair[]>
    getPairByName(this: StaticRxCollectionContext<{ didpairs: DIDPairCollection }>, name: string): Promise<SDK.Domain.DIDPair | null>
    getPairByDID(this: StaticRxCollectionContext<{ didpairs: DIDPairCollection }>, did: SDK.Domain.DID): Promise<SDK.Domain.DIDPair | null>
}
export type DIDPairCollection = RxCollection<DIDPairSchemaType, any, DIDPairStaticMethodTypes>
