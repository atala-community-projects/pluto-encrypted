[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / [WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md) / DID

# Class: DID

[database](../modules/database.md).[WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md).DID

## Table of contents

### Constructors

- [constructor](database.WALLET_SDK_DOMAIN.DID.md#constructor)

### Properties

- [method](database.WALLET_SDK_DOMAIN.DID.md#method)
- [methodId](database.WALLET_SDK_DOMAIN.DID.md#methodid)
- [schema](database.WALLET_SDK_DOMAIN.DID.md#schema)

### Methods

- [toString](database.WALLET_SDK_DOMAIN.DID.md#tostring)
- [from](database.WALLET_SDK_DOMAIN.DID.md#from)
- [fromString](database.WALLET_SDK_DOMAIN.DID.md#fromstring)
- [getMethodFromString](database.WALLET_SDK_DOMAIN.DID.md#getmethodfromstring)
- [getMethodIdFromString](database.WALLET_SDK_DOMAIN.DID.md#getmethodidfromstring)
- [getSchemaFromString](database.WALLET_SDK_DOMAIN.DID.md#getschemafromstring)

## Constructors

### constructor

• **new DID**(`schema`, `method`, `methodId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `string` |
| `method` | `string` |
| `methodId` | `string` |

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DID.d.ts:5

## Properties

### method

• `Readonly` **method**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DID.d.ts:3

___

### methodId

• `Readonly` **methodId**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DID.d.ts:4

___

### schema

• `Readonly` **schema**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DID.d.ts:2

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DID.d.ts:6

___

### from

▸ `Static` **from**(`value`): [`DID`](database.WALLET_SDK_DOMAIN.DID.md)

parse value into a DID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| [`DID`](database.WALLET_SDK_DOMAIN.DID.md) | some representation of a DID |

#### Returns

[`DID`](database.WALLET_SDK_DOMAIN.DID.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DID.d.ts:12

___

### fromString

▸ `Static` **fromString**(`text`): [`DID`](database.WALLET_SDK_DOMAIN.DID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`DID`](database.WALLET_SDK_DOMAIN.DID.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DID.d.ts:13

___

### getMethodFromString

▸ `Static` **getMethodFromString**(`text`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DID.d.ts:15

___

### getMethodIdFromString

▸ `Static` **getMethodIdFromString**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DID.d.ts:16

___

### getSchemaFromString

▸ `Static` **getSchemaFromString**(`text`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DID.d.ts:14
