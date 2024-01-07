import SDK from '@atala/prism-wallet-sdk'
import type { Schema } from '../types'
import { KeyFunctionMap, type RxCollection, type RxDocument } from 'rxdb'

export interface LinkSecretSchemaType {
  readonly name: string
  readonly secret: string
}

const LinkSecretSchema: Schema<LinkSecretSchemaType> = {
  version: 0,
  primaryKey: 'name',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      maxLength: 60
    },
    secret: {
      type: 'string'
    }
  },
  encrypted: ['secret'],
  required: ['name', 'secret']
}

export type LinkSecretDocument = RxDocument<
  LinkSecretSchemaType,
  LinkSecretMethodTypes
>

export interface LinkSecretMethodTypes extends KeyFunctionMap {
  toDomainLinkSecret: (this: LinkSecretDocument) => SDK.Domain.Anoncreds.LinkSecret
}

export interface LinkSecretStaticMethodTypes extends KeyFunctionMap {
  hola: (demo: boolean) => void
}

export type LinkSecretColletion = RxCollection<
  LinkSecretSchemaType,
  LinkSecretMethodTypes,
  LinkSecretStaticMethodTypes
>

export const LinkSecretMethods: LinkSecretMethodTypes = {
  toDomainLinkSecret: function toDomainLinkSecret(this: LinkSecretDocument) {
    return this.secret
  }
}

export const LinkSecretStaticMethods: LinkSecretStaticMethodTypes = {
  hola: function (demo: boolean): void {
    throw new Error('Function not implemented.')
  }
}

export default LinkSecretSchema
