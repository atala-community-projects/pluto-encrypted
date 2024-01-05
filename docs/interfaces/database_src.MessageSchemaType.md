[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / MessageSchemaType

# Interface: MessageSchemaType

[database/src](../modules/database_src.md).MessageSchemaType

## Table of contents

### Properties

- [ack](database_src.MessageSchemaType.md#ack)
- [attachments](database_src.MessageSchemaType.md#attachments)
- [body](database_src.MessageSchemaType.md#body)
- [createdTime](database_src.MessageSchemaType.md#createdtime)
- [direction](database_src.MessageSchemaType.md#direction)
- [expiresTimePlus](database_src.MessageSchemaType.md#expirestimeplus)
- [extraHeaders](database_src.MessageSchemaType.md#extraheaders)
- [from](database_src.MessageSchemaType.md#from)
- [fromPrior](database_src.MessageSchemaType.md#fromprior)
- [id](database_src.MessageSchemaType.md#id)
- [piuri](database_src.MessageSchemaType.md#piuri)
- [pthid](database_src.MessageSchemaType.md#pthid)
- [thid](database_src.MessageSchemaType.md#thid)
- [to](database_src.MessageSchemaType.md#to)

## Properties

### ack

• `Readonly` **ack**: `string`[]

#### Defined in

[packages/database/src/schemas/Message.ts:16](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L16)

___

### attachments

• `Readonly` **attachments**: [`AttachmentDescriptor`](../classes/database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md)[]

#### Defined in

[packages/database/src/schemas/Message.ts:11](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L11)

___

### body

• `Readonly` **body**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:6](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L6)

___

### createdTime

• `Readonly` **createdTime**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:14](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L14)

___

### direction

• `Readonly` **direction**: [`MessageDirection`](../enums/database_src.WALLET_SDK_DOMAIN.MessageDirection.md)

#### Defined in

[packages/database/src/schemas/Message.ts:17](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L17)

___

### expiresTimePlus

• `Readonly` **expiresTimePlus**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:15](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L15)

___

### extraHeaders

• `Readonly` **extraHeaders**: `string`[]

#### Defined in

[packages/database/src/schemas/Message.ts:13](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L13)

___

### from

• `Optional` `Readonly` **from**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:9](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L9)

___

### fromPrior

• `Optional` `Readonly` **fromPrior**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:18](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L18)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:7](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L7)

___

### piuri

• `Readonly` **piuri**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:8](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L8)

___

### pthid

• `Optional` `Readonly` **pthid**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:19](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L19)

___

### thid

• `Optional` `Readonly` **thid**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:12](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L12)

___

### to

• `Optional` `Readonly` **to**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:10](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L10)
