[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / MessageSchemaType

# Interface: MessageSchemaType

[database](../modules/database.md).MessageSchemaType

## Table of contents

### Properties

- [ack](database.MessageSchemaType.md#ack)
- [attachments](database.MessageSchemaType.md#attachments)
- [body](database.MessageSchemaType.md#body)
- [createdTime](database.MessageSchemaType.md#createdtime)
- [direction](database.MessageSchemaType.md#direction)
- [expiresTimePlus](database.MessageSchemaType.md#expirestimeplus)
- [extraHeaders](database.MessageSchemaType.md#extraheaders)
- [from](database.MessageSchemaType.md#from)
- [fromPrior](database.MessageSchemaType.md#fromprior)
- [id](database.MessageSchemaType.md#id)
- [piuri](database.MessageSchemaType.md#piuri)
- [pthid](database.MessageSchemaType.md#pthid)
- [thid](database.MessageSchemaType.md#thid)
- [to](database.MessageSchemaType.md#to)

## Properties

### ack

• `Readonly` **ack**: `string`[]

#### Defined in

[packages/database/src/schemas/Message.ts:16](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L16)

___

### attachments

• `Readonly` **attachments**: [`AttachmentDescriptor`](../classes/database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md)[]

#### Defined in

[packages/database/src/schemas/Message.ts:11](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L11)

___

### body

• `Readonly` **body**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:6](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L6)

___

### createdTime

• `Readonly` **createdTime**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:14](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L14)

___

### direction

• `Readonly` **direction**: [`MessageDirection`](../enums/database.WALLET_SDK_DOMAIN.MessageDirection.md)

#### Defined in

[packages/database/src/schemas/Message.ts:17](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L17)

___

### expiresTimePlus

• `Readonly` **expiresTimePlus**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:15](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L15)

___

### extraHeaders

• `Readonly` **extraHeaders**: `string`[]

#### Defined in

[packages/database/src/schemas/Message.ts:13](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L13)

___

### from

• `Optional` `Readonly` **from**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:9](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L9)

___

### fromPrior

• `Optional` `Readonly` **fromPrior**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:18](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L18)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:7](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L7)

___

### piuri

• `Readonly` **piuri**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:8](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L8)

___

### pthid

• `Optional` `Readonly` **pthid**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:19](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L19)

___

### thid

• `Optional` `Readonly` **thid**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:12](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L12)

___

### to

• `Optional` `Readonly` **to**: `string`

#### Defined in

[packages/database/src/schemas/Message.ts:10](https://github.com/atala-community-projects/pluto-encrypted/blob/8af5bee/packages/database/src/schemas/Message.ts#L10)
