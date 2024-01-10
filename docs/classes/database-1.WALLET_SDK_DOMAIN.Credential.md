[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / [WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md) / Credential

# Class: Credential

[database](../modules/database-1.md).[WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md).Credential

## Table of contents

### Constructors

- [constructor](database-1.WALLET_SDK_DOMAIN.Credential.md#constructor)

### Properties

- [claims](database-1.WALLET_SDK_DOMAIN.Credential.md#claims)
- [id](database-1.WALLET_SDK_DOMAIN.Credential.md#id)
- [issuer](database-1.WALLET_SDK_DOMAIN.Credential.md#issuer)
- [properties](database-1.WALLET_SDK_DOMAIN.Credential.md#properties)
- [recoveryId](database-1.WALLET_SDK_DOMAIN.Credential.md#recoveryid)
- [subject](database-1.WALLET_SDK_DOMAIN.Credential.md#subject)

### Methods

- [getProperty](database-1.WALLET_SDK_DOMAIN.Credential.md#getproperty)
- [isProvable](database-1.WALLET_SDK_DOMAIN.Credential.md#isprovable)
- [isStorable](database-1.WALLET_SDK_DOMAIN.Credential.md#isstorable)

## Constructors

### constructor

• **new Credential**()

## Properties

### claims

• `Abstract` **claims**: `Claim`[]

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Credential.d.ts:11

___

### id

• `Abstract` **id**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Credential.d.ts:8

___

### issuer

• `Abstract` **issuer**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Credential.d.ts:9

___

### properties

• `Abstract` **properties**: `Map`\<`string`, `any`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Credential.d.ts:12

___

### recoveryId

• `Abstract` **recoveryId**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Credential.d.ts:7

___

### subject

• `Abstract` **subject**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Credential.d.ts:10

## Methods

### getProperty

▸ **getProperty**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Credential.d.ts:13

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Credential.d.ts:14

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Credential.d.ts:15
