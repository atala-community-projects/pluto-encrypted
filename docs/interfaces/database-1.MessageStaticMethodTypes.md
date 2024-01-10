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

▸ **getAllMessages**(`this`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `messages`: [`MessageColletion`](../modules/database-1.md#messagecolletion)  }\> |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:50](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L50)

___

### getAllMessagesByDID

▸ **getAllMessagesByDID**(`this`, `did`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `messages`: [`MessageColletion`](../modules/database-1.md#messagecolletion)  }\> |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:91](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L91)

___

### getAllMessagesByFromToDID

▸ **getAllMessagesByFromToDID**(`this`, `from`, `to`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `messages`: [`MessageColletion`](../modules/database-1.md#messagecolletion)  }\> |
| `from` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |
| `to` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:55](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L55)

___

### getAllMessagesOfType

▸ **getAllMessagesOfType**(`this`, `type`, `relatedWithDID?`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `messages`: [`MessageColletion`](../modules/database-1.md#messagecolletion)  }\> |
| `type` | `string` |
| `relatedWithDID?` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:62](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L62)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(`this`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `messages`: [`MessageColletion`](../modules/database-1.md#messagecolletion)  }\> |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:81](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L81)

___

### getAllMessagesReceivedFrom

▸ **getAllMessagesReceivedFrom**(`this`, `did`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `messages`: [`MessageColletion`](../modules/database-1.md#messagecolletion)  }\> |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:69](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L69)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(`this`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `messages`: [`MessageColletion`](../modules/database-1.md#messagecolletion)  }\> |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:86](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L86)

___

### getAllMessagesSentTo

▸ **getAllMessagesSentTo**(`this`, `did`): `Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `messages`: [`MessageColletion`](../modules/database-1.md#messagecolletion)  }\> |
| `did` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:75](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L75)

___

### getMessage

▸ **getMessage**(`this`, `id`): `Promise`\<``null`` \| [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `messages`: [`MessageColletion`](../modules/database-1.md#messagecolletion)  }\> |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:32](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L32)

___

### storeMessage

▸ **storeMessage**(`this`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `messages`: [`MessageColletion`](../modules/database-1.md#messagecolletion)  }\> |
| `message` | [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:38](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L38)

___

### storeMessages

▸ **storeMessages**(`this`, `messages`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `messages`: [`MessageColletion`](../modules/database-1.md#messagecolletion)  }\> |
| `messages` | [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:44](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L44)
