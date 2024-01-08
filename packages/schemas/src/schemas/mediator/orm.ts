
import SDK from '@atala/prism-wallet-sdk'
import { MediatorMethodTypes, MediatorSchemaType } from './types'
import { RxDocument } from 'rxdb'

export const MediatorMethods: MediatorMethodTypes = {
    toDomainMediator: function toDomainMediator(this: RxDocument<MediatorSchemaType, MediatorMethodTypes>) {
        const mediator = this.toJSON()
        return {
            hostDID: SDK.Domain.DID.fromString(mediator.hostDID),
            routingDID: SDK.Domain.DID.fromString(mediator.routingDID),
            mediatorDID: SDK.Domain.DID.fromString(mediator.mediatorDID)
        }
    }
}