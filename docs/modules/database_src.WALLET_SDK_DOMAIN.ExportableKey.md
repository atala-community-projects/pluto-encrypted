[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](database_src.md) / [WALLET\_SDK\_DOMAIN](database_src.WALLET_SDK_DOMAIN.md) / ExportableKey

# Namespace: ExportableKey

[database/src](database_src.md).[WALLET\_SDK\_DOMAIN](database_src.WALLET_SDK_DOMAIN.md).ExportableKey

Declaration merge to contain key conversion functions

## Table of contents

### Interfaces

- [Common](../interfaces/database_src.WALLET_SDK_DOMAIN.ExportableKey.Common.md)
- [JWK](../interfaces/database_src.WALLET_SDK_DOMAIN.ExportableKey.JWK.md)
- [PEM](../interfaces/database_src.WALLET_SDK_DOMAIN.ExportableKey.PEM.md)

### Type Aliases

- [All](database_src.WALLET_SDK_DOMAIN.ExportableKey.md#all)

### Functions

- [factory](database_src.WALLET_SDK_DOMAIN.ExportableKey.md#factory)

## Type Aliases

### All

Ƭ **All**: [`Common`](../interfaces/database_src.WALLET_SDK_DOMAIN.ExportableKey.Common.md) & [`JWK`](../interfaces/database_src.WALLET_SDK_DOMAIN.ExportableKey.JWK.md) & [`PEM`](../interfaces/database_src.WALLET_SDK_DOMAIN.ExportableKey.PEM.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/ExportableKey.d.ts:21

## Functions

### factory

▸ **factory**(`key`, `opts`): `Object`

factory to create Key property with desired functions
which allow converting the Key raw into different formats

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PrivateKey`](../classes/database_src.WALLET_SDK_DOMAIN.PrivateKey.md) \| [`PublicKey`](../classes/database_src.WALLET_SDK_DOMAIN.PublicKey.md) |
| `opts` | `Options` |

#### Returns

`Object`

object with exportable functions

| Name | Type |
| :------ | :------ |
| `Buffer` | () => `Buffer` |
| `Hex` | () => `string` |
| `JWK` | (`base?`: [`Base`](../interfaces/database_src.WALLET_SDK_DOMAIN.JWK.Base.md)) => [`JWK`](database_src.WALLET_SDK_DOMAIN.md#jwk) |
| `PEM` | () => `string` |
| `String` | (`encoding?`: `BufferEncoding`) => `string` |

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/ExportableKey.d.ts:46
