import SDK from '@atala/prism-wallet-sdk'
import { v4 as uuidv4 } from 'uuid'

import { MediatorStaticMethodTypes } from "./types"

export const MediatorStaticMethods: MediatorStaticMethodTypes = {
    async storeMediator(
        mediator: SDK.Domain.DID,
        host: SDK.Domain.DID,
        routing: SDK.Domain.DID
    ): Promise<void> {
        await this.db.collections.mediators.insert({
            id: uuidv4(),
            mediatorDID: mediator.toString(),
            hostDID: host.toString(),
            routingDID: routing.toString()
        })
    }
    ,
    async getAllMediators(): Promise<SDK.Domain.Mediator[]> {
        const mediators = await this.db.collections.mediators.find().exec()
        return mediators.map((mediator) => mediator.toDomainMediator())
    }
}