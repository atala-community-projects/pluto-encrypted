import { type RxCollection, type RxDocument } from 'rxdb'
import type { Schema } from '../types'

export interface DIDPairSchemaType {
  hostDID: string
  receiverDID: string
  name: string
}

const DIDPairSchema: Schema<DIDPairSchemaType> = {
  version: 0,
  primaryKey: 'name',
  type: 'object',
  properties: {
    hostDID: {
      type: 'string'
    },
    name: {
      type: 'string',
      maxLength: 60
    },
    receiverDID: {
      type: 'string'
    }
  },
  encrypted: [],
  required: ['name', 'hostDID', 'receiverDID']
}

export type DIDPairDocument = RxDocument<DIDPairSchemaType>
export type DIDPairCollection = RxCollection<DIDPairSchemaType, any, DIDPairDocument>

export default DIDPairSchema
