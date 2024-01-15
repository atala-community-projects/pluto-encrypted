import { KeyFunctionMap, RxCollection, RxDocument } from "rxdb"
import SDK from '@atala/prism-wallet-sdk'
import { PlutoDBontext } from "../.."

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
    getAllMediators(this: PlutoDBontext): Promise<SDK.Domain.Mediator[]>
    storeMediator(
        this: PlutoDBontext,
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