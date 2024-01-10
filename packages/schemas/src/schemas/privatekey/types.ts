import SDK from '@atala/prism-wallet-sdk'
import { KeyFunctionMap, RxCollection, RxDocument } from 'rxdb'
import { StaticRxCollectionContext } from '../../types'

export interface KeySpec {
    name: string
    type: string
    value: string
}

export interface KeySchemaType {
    id: string
    type: string
    did: string
    keySpecification: KeySpec[]
}

export interface PrivateKeyMethodTypes extends KeyFunctionMap {
    toDomainPrivateKey: (this: PrivateKeyDocument) => SDK.Domain.PrivateKey
}

export interface PrivateKeyStaticMethodTypes extends KeyFunctionMap {
    storePrivateKeys(
        this: StaticRxCollectionContext<{ privatekeys: PrivateKeyColletion }>,
        privateKey: SDK.Domain.PrivateKey,
        did: SDK.Domain.DID,
        keyPathIndex: number
    ): Promise<void>
    getDIDPrivateKeysByDID(
        this: StaticRxCollectionContext<{
            privatekeys: PrivateKeyColletion
        }>,
        did: SDK.Domain.DID
    ): Promise<SDK.Domain.PrivateKey[]>
    getDIDPrivateKeyByID(
        this: StaticRxCollectionContext<{
            privatekeys: PrivateKeyColletion
        }>,
        id: string
    ): Promise<SDK.Domain.PrivateKey | null>
}

export type PrivateKeyColletion = RxCollection<
    KeySchemaType,
    PrivateKeyMethodTypes,
    PrivateKeyStaticMethodTypes
>
export type PrivateKeyDocument = RxDocument<
    KeySchemaType,
    PrivateKeyMethodTypes
>