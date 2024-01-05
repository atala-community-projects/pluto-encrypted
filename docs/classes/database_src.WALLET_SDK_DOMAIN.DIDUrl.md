[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / [WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md) / DIDUrl

# Class: DIDUrl

[database/src](../modules/database_src.md).[WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md).DIDUrl

## Table of contents

### Constructors

- [constructor](database_src.WALLET_SDK_DOMAIN.DIDUrl.md#constructor)

### Properties

- [did](database_src.WALLET_SDK_DOMAIN.DIDUrl.md#did)
- [fragment](database_src.WALLET_SDK_DOMAIN.DIDUrl.md#fragment)
- [parameters](database_src.WALLET_SDK_DOMAIN.DIDUrl.md#parameters)
- [path](database_src.WALLET_SDK_DOMAIN.DIDUrl.md#path)

### Methods

- [fragmentString](database_src.WALLET_SDK_DOMAIN.DIDUrl.md#fragmentstring)
- [pathString](database_src.WALLET_SDK_DOMAIN.DIDUrl.md#pathstring)
- [queryString](database_src.WALLET_SDK_DOMAIN.DIDUrl.md#querystring)
- [string](database_src.WALLET_SDK_DOMAIN.DIDUrl.md#string)

## Constructors

### constructor

• **new DIDUrl**(`did`, `path?`, `parameters?`, `fragment?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](database_src.WALLET_SDK_DOMAIN.DID.md) |
| `path?` | `string`[] |
| `parameters?` | `Map`\<`string`, `string`\> |
| `fragment?` | `string` |

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDUrl.d.ts:7

## Properties

### did

• **did**: [`DID`](database_src.WALLET_SDK_DOMAIN.DID.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDUrl.d.ts:3

___

### fragment

• **fragment**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDUrl.d.ts:6

___

### parameters

• **parameters**: `Map`\<`string`, `string`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDUrl.d.ts:5

___

### path

• **path**: `string`[]

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDUrl.d.ts:4

## Methods

### fragmentString

▸ **fragmentString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDUrl.d.ts:11

___

### pathString

▸ **pathString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDUrl.d.ts:9

___

### queryString

▸ **queryString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDUrl.d.ts:10

___

### string

▸ **string**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDUrl.d.ts:8
