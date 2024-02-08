[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / DIDStaticMethodTypes

# Interface: DIDStaticMethodTypes

[database](../modules/database-1.md).DIDStaticMethodTypes

## Hierarchy

- `KeyFunctionMap`

  ↳ **`DIDStaticMethodTypes`**

## Table of contents

### Methods

- [getAllPeerDIDs](database-1.DIDStaticMethodTypes.md#getallpeerdids)
- [getAllPrismDIDs](database-1.DIDStaticMethodTypes.md#getallprismdids)
- [getDIDInfoByAlias](database-1.DIDStaticMethodTypes.md#getdidinfobyalias)
- [getDIDInfoByDID](database-1.DIDStaticMethodTypes.md#getdidinfobydid)
- [getPrismDIDKeyPathIndex](database-1.DIDStaticMethodTypes.md#getprismdidkeypathindex)
- [getPrismLastKeyPathIndex](database-1.DIDStaticMethodTypes.md#getprismlastkeypathindex)
- [storePeerDID](database-1.DIDStaticMethodTypes.md#storepeerdid)
- [storePrismDID](database-1.DIDStaticMethodTypes.md#storeprismdid)

## Methods

### getAllPeerDIDs

▸ **getAllPeerDIDs**(`this`): `Promise`\<`PeerDID`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |

#### Returns

`Promise`\<`PeerDID`[]\>

#### Defined in

[packages/schemas/src/schemas/did/types.ts:26](https://github.com/atala-community-projects/pluto-encrypted/blob/a4b16d4/packages/schemas/src/schemas/did/types.ts#L26)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(`this`): `Promise`\<[`PrismDIDInfo`](../classes/database-1.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |

#### Returns

`Promise`\<[`PrismDIDInfo`](../classes/database-1.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

#### Defined in

[packages/schemas/src/schemas/did/types.ts:27](https://github.com/atala-community-projects/pluto-encrypted/blob/a4b16d4/packages/schemas/src/schemas/did/types.ts#L27)

___

### getDIDInfoByAlias

▸ **getDIDInfoByAlias**(`this`, `alias`): `Promise`\<[`PrismDIDInfo`](../classes/database-1.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `alias` | `string` |

#### Returns

`Promise`\<[`PrismDIDInfo`](../classes/database-1.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

#### Defined in

[packages/schemas/src/schemas/did/types.ts:29](https://github.com/atala-community-projects/pluto-encrypted/blob/a4b16d4/packages/schemas/src/schemas/did/types.ts#L29)

___

### getDIDInfoByDID

▸ **getDIDInfoByDID**(`this`, `did`): `Promise`\<``null`` \| [`PrismDIDInfo`](../classes/database-1.WALLET_SDK_DOMAIN.PrismDIDInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<``null`` \| [`PrismDIDInfo`](../classes/database-1.WALLET_SDK_DOMAIN.PrismDIDInfo.md)\>

#### Defined in

[packages/schemas/src/schemas/did/types.ts:28](https://github.com/atala-community-projects/pluto-encrypted/blob/a4b16d4/packages/schemas/src/schemas/did/types.ts#L28)

___

### getPrismDIDKeyPathIndex

▸ **getPrismDIDKeyPathIndex**(`this`, `did`): `Promise`\<``null`` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<``null`` \| `number`\>

#### Defined in

[packages/schemas/src/schemas/did/types.ts:20](https://github.com/atala-community-projects/pluto-encrypted/blob/a4b16d4/packages/schemas/src/schemas/did/types.ts#L20)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(`this`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/schemas/src/schemas/did/types.ts:19](https://github.com/atala-community-projects/pluto-encrypted/blob/a4b16d4/packages/schemas/src/schemas/did/types.ts#L19)

___

### storePeerDID

▸ **storePeerDID**(`this`, `did`, `privateKeys`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |
| `privateKeys` | [`PrivateKey`](../classes/database-1.WALLET_SDK_DOMAIN.PrivateKey.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/did/types.ts:21](https://github.com/atala-community-projects/pluto-encrypted/blob/a4b16d4/packages/schemas/src/schemas/did/types.ts#L21)

___

### storePrismDID

▸ **storePrismDID**(`this`, `did`, `keyPathIndex`, `privateKey`, `_privateKeyMetaId?`, `alias?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |
| `keyPathIndex` | `number` |
| `privateKey` | [`PrivateKey`](../classes/database-1.WALLET_SDK_DOMAIN.PrivateKey.md) |
| `_privateKeyMetaId?` | ``null`` \| `string` |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/did/types.ts:30](https://github.com/atala-community-projects/pluto-encrypted/blob/a4b16d4/packages/schemas/src/schemas/did/types.ts#L30)
