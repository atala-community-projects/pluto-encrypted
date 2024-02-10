[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / PrivateKeyStaticMethodTypes

# Interface: PrivateKeyStaticMethodTypes

[database](../modules/database-1.md).PrivateKeyStaticMethodTypes

## Hierarchy

- `KeyFunctionMap`

  ↳ **`PrivateKeyStaticMethodTypes`**

## Table of contents

### Methods

- [getDIDPrivateKeyByID](database-1.PrivateKeyStaticMethodTypes.md#getdidprivatekeybyid)
- [getDIDPrivateKeysByDID](database-1.PrivateKeyStaticMethodTypes.md#getdidprivatekeysbydid)
- [storePrivateKeys](database-1.PrivateKeyStaticMethodTypes.md#storeprivatekeys)

## Methods

### getDIDPrivateKeyByID

▸ **getDIDPrivateKeyByID**(`this`, `id`): `Promise`\<``null`` \| [`PrivateKey`](../classes/database-1.WALLET_SDK_DOMAIN.PrivateKey.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| [`PrivateKey`](../classes/database-1.WALLET_SDK_DOMAIN.PrivateKey.md)\>

#### Defined in

[packages/schemas/src/schemas/privatekey/types.ts:35](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/schemas/src/schemas/privatekey/types.ts#L35)

___

### getDIDPrivateKeysByDID

▸ **getDIDPrivateKeysByDID**(`this`, `did`): `Promise`\<[`PrivateKey`](../classes/database-1.WALLET_SDK_DOMAIN.PrivateKey.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`PrivateKey`](../classes/database-1.WALLET_SDK_DOMAIN.PrivateKey.md)[]\>

#### Defined in

[packages/schemas/src/schemas/privatekey/types.ts:31](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/schemas/src/schemas/privatekey/types.ts#L31)

___

### storePrivateKeys

▸ **storePrivateKeys**(`this`, `privateKey`, `did`, `keyPathIndex`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `privateKey` | [`PrivateKey`](../classes/database-1.WALLET_SDK_DOMAIN.PrivateKey.md) |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |
| `keyPathIndex` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/privatekey/types.ts:25](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/schemas/src/schemas/privatekey/types.ts#L25)
