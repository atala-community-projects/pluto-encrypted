[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / DIDPairStaticMethodTypes

# Interface: DIDPairStaticMethodTypes

[database](../modules/database-1.md).DIDPairStaticMethodTypes

## Hierarchy

- `KeyFunctionMap`

  ↳ **`DIDPairStaticMethodTypes`**

## Table of contents

### Methods

- [getAllDidPairs](database-1.DIDPairStaticMethodTypes.md#getalldidpairs)
- [getPairByDID](database-1.DIDPairStaticMethodTypes.md#getpairbydid)
- [getPairByName](database-1.DIDPairStaticMethodTypes.md#getpairbyname)
- [storeDIDPair](database-1.DIDPairStaticMethodTypes.md#storedidpair)

## Methods

### getAllDidPairs

▸ **getAllDidPairs**(`this`): `Promise`\<[`DIDPair`](../classes/database-1.WALLET_SDK_DOMAIN.DIDPair.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |

#### Returns

`Promise`\<[`DIDPair`](../classes/database-1.WALLET_SDK_DOMAIN.DIDPair.md)[]\>

#### Defined in

[packages/schemas/src/schemas/didpair/types.ts:21](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/schemas/src/schemas/didpair/types.ts#L21)

___

### getPairByDID

▸ **getPairByDID**(`this`, `did`): `Promise`\<``null`` \| [`DIDPair`](../classes/database-1.WALLET_SDK_DOMAIN.DIDPair.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<``null`` \| [`DIDPair`](../classes/database-1.WALLET_SDK_DOMAIN.DIDPair.md)\>

#### Defined in

[packages/schemas/src/schemas/didpair/types.ts:23](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/schemas/src/schemas/didpair/types.ts#L23)

___

### getPairByName

▸ **getPairByName**(`this`, `name`): `Promise`\<``null`` \| [`DIDPair`](../classes/database-1.WALLET_SDK_DOMAIN.DIDPair.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `name` | `string` |

#### Returns

`Promise`\<``null`` \| [`DIDPair`](../classes/database-1.WALLET_SDK_DOMAIN.DIDPair.md)\>

#### Defined in

[packages/schemas/src/schemas/didpair/types.ts:22](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/schemas/src/schemas/didpair/types.ts#L22)

___

### storeDIDPair

▸ **storeDIDPair**(`this`, `host`, `receiver`, `name`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `host` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |
| `receiver` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/didpair/types.ts:15](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/schemas/src/schemas/didpair/types.ts#L15)
