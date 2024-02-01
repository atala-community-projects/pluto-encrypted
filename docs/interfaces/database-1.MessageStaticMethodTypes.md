[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / MessageStaticMethodTypes

# Interface: MessageStaticMethodTypes

[database](../modules/database-1.md).MessageStaticMethodTypes

## Hierarchy

- `KeyFunctionMap`

  ↳ **`MessageStaticMethodTypes`**

## Table of contents

### Methods

- [getAllMessages](database-1.MessageStaticMethodTypes.md#getallmessages)
- [getAllMessagesByDID](database-1.MessageStaticMethodTypes.md#getallmessagesbydid)
- [getAllMessagesByFromToDID](database-1.MessageStaticMethodTypes.md#getallmessagesbyfromtodid)
- [getAllMessagesOfType](database-1.MessageStaticMethodTypes.md#getallmessagesoftype)
- [getAllMessagesReceived](database-1.MessageStaticMethodTypes.md#getallmessagesreceived)
- [getAllMessagesReceivedFrom](database-1.MessageStaticMethodTypes.md#getallmessagesreceivedfrom)
- [getAllMessagesSent](database-1.MessageStaticMethodTypes.md#getallmessagessent)
- [getAllMessagesSentTo](database-1.MessageStaticMethodTypes.md#getallmessagessentto)
- [getMessage](database-1.MessageStaticMethodTypes.md#getmessage)
- [storeMessage](database-1.MessageStaticMethodTypes.md#storemessage)
- [storeMessages](database-1.MessageStaticMethodTypes.md#storemessages)

## Methods

### getAllMessages

▸ **getAllMessages**(`this`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:44](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/schemas/src/schemas/message/types.ts#L44)

___

### getAllMessagesByDID

▸ **getAllMessagesByDID**(`this`, `did`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:71](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/schemas/src/schemas/message/types.ts#L71)

___

### getAllMessagesByFromToDID

▸ **getAllMessagesByFromToDID**(`this`, `from`, `to`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `from` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |
| `to` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:47](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/schemas/src/schemas/message/types.ts#L47)

___

### getAllMessagesOfType

▸ **getAllMessagesOfType**(`this`, `type`, `relatedWithDID?`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `type` | `string` |
| `relatedWithDID?` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:52](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/schemas/src/schemas/message/types.ts#L52)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(`this`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:65](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/schemas/src/schemas/message/types.ts#L65)

___

### getAllMessagesReceivedFrom

▸ **getAllMessagesReceivedFrom**(`this`, `did`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:57](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/schemas/src/schemas/message/types.ts#L57)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(`this`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:68](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/schemas/src/schemas/message/types.ts#L68)

___

### getAllMessagesSentTo

▸ **getAllMessagesSentTo**(`this`, `did`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:61](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/schemas/src/schemas/message/types.ts#L61)

___

### getMessage

▸ **getMessage**(`this`, `id`): `Promise`\<``null`` \| [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:32](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/schemas/src/schemas/message/types.ts#L32)

___

### storeMessage

▸ **storeMessage**(`this`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `message` | [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:36](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/schemas/src/schemas/message/types.ts#L36)

___

### storeMessages

▸ **storeMessages**(`this`, `messages`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `messages` | [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:40](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/schemas/src/schemas/message/types.ts#L40)
