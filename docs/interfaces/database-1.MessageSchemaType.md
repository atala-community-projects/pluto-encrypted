[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / MessageSchemaType

# Interface: MessageSchemaType

[database](../modules/database-1.md).MessageSchemaType

## Table of contents

### Properties

- [ack](database-1.MessageSchemaType.md#ack)
- [attachments](database-1.MessageSchemaType.md#attachments)
- [body](database-1.MessageSchemaType.md#body)
- [createdTime](database-1.MessageSchemaType.md#createdtime)
- [direction](database-1.MessageSchemaType.md#direction)
- [expiresTimePlus](database-1.MessageSchemaType.md#expirestimeplus)
- [extraHeaders](database-1.MessageSchemaType.md#extraheaders)
- [from](database-1.MessageSchemaType.md#from)
- [fromPrior](database-1.MessageSchemaType.md#fromprior)
- [id](database-1.MessageSchemaType.md#id)
- [piuri](database-1.MessageSchemaType.md#piuri)
- [pthid](database-1.MessageSchemaType.md#pthid)
- [thid](database-1.MessageSchemaType.md#thid)
- [to](database-1.MessageSchemaType.md#to)

## Properties

### ack

• `Readonly` **ack**: `string`[]

#### Defined in

[packages/schemas/src/schemas/message/types.ts:17](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L17)

___

### attachments

• `Readonly` **attachments**: [`AttachmentDescriptor`](../classes/database-1.WALLET_SDK_DOMAIN.AttachmentDescriptor.md)[]

#### Defined in

[packages/schemas/src/schemas/message/types.ts:12](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L12)

___

### body

• `Readonly` **body**: `string`

#### Defined in

[packages/schemas/src/schemas/message/types.ts:7](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L7)

___

### createdTime

• `Readonly` **createdTime**: `string`

#### Defined in

[packages/schemas/src/schemas/message/types.ts:15](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L15)

___

### direction

• `Readonly` **direction**: [`MessageDirection`](../enums/database-1.WALLET_SDK_DOMAIN.MessageDirection.md)

#### Defined in

[packages/schemas/src/schemas/message/types.ts:18](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L18)

___

### expiresTimePlus

• `Readonly` **expiresTimePlus**: `string`

#### Defined in

[packages/schemas/src/schemas/message/types.ts:16](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L16)

___

### extraHeaders

• `Readonly` **extraHeaders**: `string`[]

#### Defined in

[packages/schemas/src/schemas/message/types.ts:14](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L14)

___

### from

• `Optional` `Readonly` **from**: `string`

#### Defined in

[packages/schemas/src/schemas/message/types.ts:10](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L10)

___

### fromPrior

• `Optional` `Readonly` **fromPrior**: `string`

#### Defined in

[packages/schemas/src/schemas/message/types.ts:19](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L19)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[packages/schemas/src/schemas/message/types.ts:8](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L8)

___

### piuri

• `Readonly` **piuri**: `string`

#### Defined in

[packages/schemas/src/schemas/message/types.ts:9](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L9)

___

### pthid

• `Optional` `Readonly` **pthid**: `string`

#### Defined in

[packages/schemas/src/schemas/message/types.ts:20](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L20)

___

### thid

• `Optional` `Readonly` **thid**: `string`

#### Defined in

[packages/schemas/src/schemas/message/types.ts:13](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L13)

___

### to

• `Optional` `Readonly` **to**: `string`

#### Defined in

[packages/schemas/src/schemas/message/types.ts:11](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L11)
