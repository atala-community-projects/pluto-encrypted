[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / [WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md) / Mercury

# Interface: Mercury

[database](../modules/database-1.md).[WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md).Mercury

## Table of contents

### Methods

- [packMessage](database-1.WALLET_SDK_DOMAIN.Mercury.md#packmessage)
- [sendMessage](database-1.WALLET_SDK_DOMAIN.Mercury.md#sendmessage)
- [sendMessageParseMessage](database-1.WALLET_SDK_DOMAIN.Mercury.md#sendmessageparsemessage)
- [unpackMessage](database-1.WALLET_SDK_DOMAIN.Mercury.md#unpackmessage)

## Methods

### packMessage

▸ **packMessage**(`message`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Mercury.d.ts:3

___

### sendMessage

▸ **sendMessage**(`message`): `Promise`\<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md) |

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Mercury.d.ts:5

___

### sendMessageParseMessage

▸ **sendMessageParseMessage**(`message`): `Promise`\<`undefined` \| [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md) |

#### Returns

`Promise`\<`undefined` \| [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Mercury.d.ts:6

___

### unpackMessage

▸ **unpackMessage**(`message`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Mercury.d.ts:4
