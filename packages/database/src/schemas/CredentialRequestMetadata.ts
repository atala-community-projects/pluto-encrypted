import {
  type Domain
} from '@atala/prism-wallet-sdk'
import type { Schema } from '../types'
import { type RxCollection, type RxDocument } from 'rxdb'

export interface CredentialRequestMetadataSchemaType {
  id: string
  link_secret_blinding_data: {
    v_prime: string
  }
  link_secret_name: string
  nonce: string
}

const CredentialRequestMetadataSchema: Schema<CredentialRequestMetadataSchemaType> =
{
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 60
    },
    link_secret_blinding_data: {
      type: 'object',
      properties: {
        v_prime: {
          type: 'string'
        }
      }
    },
    link_secret_name: {
      type: 'string'
    },
    nonce: {
      type: 'string'
    }
  },
  encrypted: ['link_secret_blinding_data', 'nonce'],
  required: ['id', 'link_secret_blinding_data', 'link_secret_name', 'nonce']
}

export type CredentialRequestMetadataDocument =
  RxDocument<CredentialRequestMetadataSchemaType>

export interface CredentialRequestMetadataMethodTypes {
  toDomainCredentialRequestMetadata: (
    this: CredentialRequestMetadataSchemaType
  ) => Domain.Anoncreds.CredentialRequestMeta
}

export const CredentialRequestMetadataMethods: CredentialRequestMetadataMethodTypes =
{
  toDomainCredentialRequestMetadata:
    function toDomainCredentialRequestMetadata (
      this: CredentialRequestMetadataSchemaType
    ) {
      return this
    }
}

export type CredentialRequestMetadataCollection = RxCollection<
CredentialRequestMetadataSchemaType,
CredentialRequestMetadataMethodTypes,
CredentialRequestMetadataDocument
>

export default CredentialRequestMetadataSchema
