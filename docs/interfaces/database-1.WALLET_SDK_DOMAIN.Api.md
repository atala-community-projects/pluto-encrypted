[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / [WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md) / Api

# Interface: Api

[database](../modules/database-1.md).[WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md).Api

## Table of contents

### Properties

- [client](database-1.WALLET_SDK_DOMAIN.Api.md#client)

### Methods

- [request](database-1.WALLET_SDK_DOMAIN.Api.md#request)

## Properties

### client

• `Optional` **client**: `AxiosStatic`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Api.d.ts:8

## Methods

### request

▸ **request**\<`T`\>(`httpMethod`, `url`, `urlParameters`, `httpHeaders`, `body`): `Promise`\<[`HttpResponse`](../classes/database-1.WALLET_SDK_DOMAIN.HttpResponse.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpMethod` | `string` |
| `url` | `string` |
| `urlParameters` | `Map`\<`string`, `string`\> |
| `httpHeaders` | `Map`\<`string`, `string`\> |
| `body` | `any` |

#### Returns

`Promise`\<[`HttpResponse`](../classes/database-1.WALLET_SDK_DOMAIN.HttpResponse.md)\<`T`\>\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Api.d.ts:9
