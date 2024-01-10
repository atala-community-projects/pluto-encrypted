[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / [WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md) / StorableKey

# Class: StorableKey

[database](../modules/database-1.md).[WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md).StorableKey

## Table of contents

### Constructors

- [constructor](database-1.WALLET_SDK_DOMAIN.StorableKey.md#constructor)

### Properties

- [StorableData](database-1.WALLET_SDK_DOMAIN.StorableKey.md#storabledata)
- [restorationIdentifier](database-1.WALLET_SDK_DOMAIN.StorableKey.md#restorationidentifier)
- [securityLevel](database-1.WALLET_SDK_DOMAIN.StorableKey.md#securitylevel)

### Methods

- [store](database-1.WALLET_SDK_DOMAIN.StorableKey.md#store)

## Constructors

### constructor

• **new StorableKey**()

## Properties

### StorableData

• `Abstract` **StorableData**: `Uint8Array`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/StorableKey.d.ts:8

___

### restorationIdentifier

• `Abstract` **restorationIdentifier**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/StorableKey.d.ts:9

___

### securityLevel

• `Abstract` **securityLevel**: [`SecurityLevel`](../enums/database-1.WALLET_SDK_DOMAIN.SecurityLevel.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/StorableKey.d.ts:7

## Methods

### store

▸ `Abstract` **store**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/StorableKey.d.ts:6
