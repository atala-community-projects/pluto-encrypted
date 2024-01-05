[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / [WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md) / Api

# Interface: Api

[database/src](../modules/database_src.md).[WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md).Api

## Table of contents

### Properties

- [client](database_src.WALLET_SDK_DOMAIN.Api.md#client)

### Methods

- [request](database_src.WALLET_SDK_DOMAIN.Api.md#request)

## Properties

### client

• `Optional` **client**: `AxiosStatic`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Api.d.ts:8

## Methods

### request

▸ **request**\<`T`\>(`httpMethod`, `url`, `urlParameters`, `httpHeaders`, `body`): `Promise`\<[`HttpResponse`](../classes/database_src.WALLET_SDK_DOMAIN.HttpResponse.md)\<`T`\>\>

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

`Promise`\<[`HttpResponse`](../classes/database_src.WALLET_SDK_DOMAIN.HttpResponse.md)\<`T`\>\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Api.d.ts:9
