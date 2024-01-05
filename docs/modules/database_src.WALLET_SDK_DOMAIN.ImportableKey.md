[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](database_src.md) / [WALLET\_SDK\_DOMAIN](database_src.WALLET_SDK_DOMAIN.md) / ImportableKey

# Namespace: ImportableKey

[database/src](database_src.md).[WALLET\_SDK\_DOMAIN](database_src.WALLET_SDK_DOMAIN.md).ImportableKey

## Table of contents

### Functions

- [factory](database_src.WALLET_SDK_DOMAIN.ImportableKey.md#factory)

## Functions

### factory

▸ **factory**\<`T`\>(`ctor`, `opts`): `Object`

factory to create Key property with desired functions
allows creation of a given Key through different data types

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Key`](../classes/database_src.WALLET_SDK_DOMAIN.Key.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | (`bytes`: `any`) => `T` | the Key Class |
| `opts` | `Options` |  |

#### Returns

`Object`

object with importable functions

| Name | Type |
| :------ | :------ |
| `Buffer` | (`value`: `Buffer`) => `T` |
| `Hex` | (`value`: `string`) => `T` |
| `PEM` | (`value`: `string`) => `T` |
| `String` | (`value`: `string`, `encoding?`: `BufferEncoding`) => `T` |

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/ExportableKey.d.ts:63
