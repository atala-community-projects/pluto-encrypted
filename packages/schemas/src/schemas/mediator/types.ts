import { KeyFunctionMap, RxCollection, RxDocument } from "rxdb"
import SDK from '@atala/prism-wallet-sdk'

export interface MediatorSchemaType {
    id: string
    mediatorDID: string
    hostDID: string
    routingDID: string
}



export type MediatorDocument = RxDocument<MediatorSchemaType>
export interface MediatorMethodTypes extends KeyFunctionMap {
    toDomainMediator: (this: RxDocument<MediatorSchemaType, MediatorMethodTypes>) => SDK.Domain.Mediator
}

export interface MediatorStaticMethodTypes extends KeyFunctionMap {
    getAllMediators(): Promise<SDK.Domain.Mediator[]>
    storeMediator(
        mediator: SDK.Domain.DID,
        host: SDK.Domain.DID,
        routing: SDK.Domain.DID
    ): Promise<void>
}
export type MediatorCollection = RxCollection<
    MediatorSchemaType,
    MediatorMethodTypes,
    MediatorStaticMethodTypes
>