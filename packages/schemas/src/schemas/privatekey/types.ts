import SDK from '@atala/prism-wallet-sdk'
import { KeyFunctionMap, RxCollection, RxDocument } from 'rxdb'
import { StaticRxCollectionContext } from '../../types'
import { DatabaseBase } from '@pluto-encrypted/shared'
import { PlutoDBontext } from '../..'

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
        this: PlutoDBontext,
        privateKey: SDK.Domain.PrivateKey,
        did: SDK.Domain.DID,
        keyPathIndex: number
    ): Promise<void>
    getDIDPrivateKeysByDID(
        this: PlutoDBontext,
        did: SDK.Domain.DID
    ): Promise<SDK.Domain.PrivateKey[]>
    getDIDPrivateKeyByID(
        this: PlutoDBontext,
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