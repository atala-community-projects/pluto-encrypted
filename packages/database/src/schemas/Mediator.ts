import { type RxCollection, type RxDocument } from 'rxdb'
import type { Schema } from '../types'
import SDK from '@atala/prism-wallet-sdk'

export interface MediatorSchemaType {
  id: string
  mediatorDID: string
  hostDID: string
  routingDID: string
}

const MediatorSchema: Schema<MediatorSchemaType> = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 60
    },
    mediatorDID: {
      type: 'string'
    },
    hostDID: {
      type: 'string'
    },
    routingDID: {
      type: 'string'
    }
  },
  encrypted: [],
  required: ['id', 'mediatorDID']
}

export type MediatorDocument = RxDocument<MediatorSchemaType>
export interface MediatorMethodTypes {
  toDomainMediator: (this: RxDocument<MediatorSchemaType, MediatorMethodTypes>) => SDK.Domain.Mediator
}
export type MediatorCollection = RxCollection<
  MediatorSchemaType,
  MediatorMethodTypes,
  MediatorDocument
>

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

export default MediatorSchema
