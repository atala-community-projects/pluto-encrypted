[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / [WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md) / Message

# Class: Message

[database/src](../modules/database_src.md).[WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md).Message

## Table of contents

### Constructors

- [constructor](database_src.WALLET_SDK_DOMAIN.Message.md#constructor)

### Properties

- [ack](database_src.WALLET_SDK_DOMAIN.Message.md#ack)
- [attachments](database_src.WALLET_SDK_DOMAIN.Message.md#attachments)
- [body](database_src.WALLET_SDK_DOMAIN.Message.md#body)
- [createdTime](database_src.WALLET_SDK_DOMAIN.Message.md#createdtime)
- [direction](database_src.WALLET_SDK_DOMAIN.Message.md#direction)
- [expiresTimePlus](database_src.WALLET_SDK_DOMAIN.Message.md#expirestimeplus)
- [extraHeaders](database_src.WALLET_SDK_DOMAIN.Message.md#extraheaders)
- [from](database_src.WALLET_SDK_DOMAIN.Message.md#from)
- [fromPrior](database_src.WALLET_SDK_DOMAIN.Message.md#fromprior)
- [id](database_src.WALLET_SDK_DOMAIN.Message.md#id)
- [piuri](database_src.WALLET_SDK_DOMAIN.Message.md#piuri)
- [pthid](database_src.WALLET_SDK_DOMAIN.Message.md#pthid)
- [thid](database_src.WALLET_SDK_DOMAIN.Message.md#thid)
- [to](database_src.WALLET_SDK_DOMAIN.Message.md#to)

### Methods

- [fromJson](database_src.WALLET_SDK_DOMAIN.Message.md#fromjson)
- [isBase64Attachment](database_src.WALLET_SDK_DOMAIN.Message.md#isbase64attachment)
- [isJsonAttachment](database_src.WALLET_SDK_DOMAIN.Message.md#isjsonattachment)

## Constructors

### constructor

• **new Message**(`body`, `id`, `piuri`, `from?`, `to?`, `attachments?`, `thid?`, `extraHeaders?`, `createdTime?`, `expiresTimePlus?`, `ack?`, `direction?`, `fromPrior?`, `pthid?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `string` |
| `id` | `string` |
| `piuri` | `string` |
| `from?` | [`DID`](database_src.WALLET_SDK_DOMAIN.DID.md) |
| `to?` | [`DID`](database_src.WALLET_SDK_DOMAIN.DID.md) |
| `attachments?` | [`AttachmentDescriptor`](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md)[] |
| `thid?` | `string` |
| `extraHeaders?` | `string`[] |
| `createdTime?` | `string` |
| `expiresTimePlus?` | `string` |
| `ack?` | `string`[] |
| `direction?` | [`MessageDirection`](../enums/database_src.WALLET_SDK_DOMAIN.MessageDirection.md) |
| `fromPrior?` | `string` |
| `pthid?` | `string` |

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:23

## Properties

### ack

• `Readonly` **ack**: `string`[]

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:19

___

### attachments

• `Readonly` **attachments**: [`AttachmentDescriptor`](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md)[]

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:14

___

### body

• `Readonly` **body**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:9

___

### createdTime

• `Readonly` **createdTime**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:17

___

### direction

• `Readonly` **direction**: [`MessageDirection`](../enums/database_src.WALLET_SDK_DOMAIN.MessageDirection.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:20

___

### expiresTimePlus

• `Readonly` **expiresTimePlus**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:18

___

### extraHeaders

• `Readonly` **extraHeaders**: `string`[]

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:16

___

### from

• `Optional` `Readonly` **from**: [`DID`](database_src.WALLET_SDK_DOMAIN.DID.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:12

___

### fromPrior

• `Optional` `Readonly` **fromPrior**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:21

___

### id

• `Readonly` **id**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:10

___

### piuri

• `Readonly` **piuri**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:11

___

### pthid

• `Optional` `Readonly` **pthid**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:22

___

### thid

• `Optional` `Readonly` **thid**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:15

___

### to

• `Optional` `Readonly` **to**: [`DID`](database_src.WALLET_SDK_DOMAIN.DID.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:13

## Methods

### fromJson

▸ `Static` **fromJson**(`jsonString`): [`Message`](database_src.WALLET_SDK_DOMAIN.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |

#### Returns

[`Message`](database_src.WALLET_SDK_DOMAIN.Message.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:24

___

### isBase64Attachment

▸ `Static` **isBase64Attachment**(`data`): data is AttachmentBase64

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

data is AttachmentBase64

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:25

___

### isJsonAttachment

▸ `Static` **isJsonAttachment**(`data`): data is AttachmentJsonData

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

data is AttachmentJsonData

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Message.d.ts:26
