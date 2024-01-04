[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / [WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md) / Castor

# Interface: Castor

[database](../modules/database.md).[WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md).Castor

## Table of contents

### Methods

- [createPeerDID](database.WALLET_SDK_DOMAIN.Castor.md#createpeerdid)
- [createPrismDID](database.WALLET_SDK_DOMAIN.Castor.md#createprismdid)
- [getEcnumbasis](database.WALLET_SDK_DOMAIN.Castor.md#getecnumbasis)
- [parseDID](database.WALLET_SDK_DOMAIN.Castor.md#parsedid)
- [resolveDID](database.WALLET_SDK_DOMAIN.Castor.md#resolvedid)
- [verifySignature](database.WALLET_SDK_DOMAIN.Castor.md#verifysignature)

## Methods

### createPeerDID

▸ **createPeerDID**(`publicKeys`, `services`): `Promise`\<[`DID`](../classes/database.WALLET_SDK_DOMAIN.DID.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKeys` | [`PublicKey`](../classes/database.WALLET_SDK_DOMAIN.PublicKey.md)[] |
| `services` | [`Service`](../classes/database.WALLET_SDK_DOMAIN.Service.md)[] |

#### Returns

`Promise`\<[`DID`](../classes/database.WALLET_SDK_DOMAIN.DID.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Castor.d.ts:6

___

### createPrismDID

▸ **createPrismDID**(`masterPublicKey`, `services?`): `Promise`\<[`DID`](../classes/database.WALLET_SDK_DOMAIN.DID.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masterPublicKey` | [`PublicKey`](../classes/database.WALLET_SDK_DOMAIN.PublicKey.md) |
| `services?` | [`Service`](../classes/database.WALLET_SDK_DOMAIN.Service.md)[] |

#### Returns

`Promise`\<[`DID`](../classes/database.WALLET_SDK_DOMAIN.DID.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Castor.d.ts:5

___

### getEcnumbasis

▸ **getEcnumbasis**(`did`, `publicKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/database.WALLET_SDK_DOMAIN.DID.md) |
| `publicKey` | [`PublicKey`](../classes/database.WALLET_SDK_DOMAIN.PublicKey.md) |

#### Returns

`string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Castor.d.ts:9

___

### parseDID

▸ **parseDID**(`did`): [`DID`](../classes/database.WALLET_SDK_DOMAIN.DID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

[`DID`](../classes/database.WALLET_SDK_DOMAIN.DID.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Castor.d.ts:4

___

### resolveDID

▸ **resolveDID**(`did`): `Promise`\<[`DIDDocument`](../classes/database.WALLET_SDK_DOMAIN.DIDDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<[`DIDDocument`](../classes/database.WALLET_SDK_DOMAIN.DIDDocument.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Castor.d.ts:7

___

### verifySignature

▸ **verifySignature**(`did`, `challenge`, `signature`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/database.WALLET_SDK_DOMAIN.DID.md) |
| `challenge` | `Uint8Array` |
| `signature` | `Uint8Array` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Castor.d.ts:8
