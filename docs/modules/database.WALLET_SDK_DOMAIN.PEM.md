[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](database.md) / [WALLET\_SDK\_DOMAIN](database.WALLET_SDK_DOMAIN.md) / PEM

# Namespace: PEM

[database](database.md).[WALLET\_SDK\_DOMAIN](database.WALLET_SDK_DOMAIN.md).PEM

## Table of contents

### Functions

- [fromKey](database.WALLET_SDK_DOMAIN.PEM.md#fromkey)
- [toRaw](database.WALLET_SDK_DOMAIN.PEM.md#toraw)

## Functions

### fromKey

▸ **fromKey**(`key`, `label`): `string`

create a PEM from a Key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Key`](../classes/database.WALLET_SDK_DOMAIN.Key.md) | Cryptographic key |
| `label` | `string` | PEM header / footer label |

#### Returns

`string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/PEM.d.ts:19

___

### toRaw

▸ **toRaw**(`pem`, `label`): `Buffer`

create a Uint8Array from a PEM

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pem` | `string` |  |
| `label` | `string` | expected header / footer label |

#### Returns

`Buffer`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/PEM.d.ts:11
