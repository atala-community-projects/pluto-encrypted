[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / [WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md) / AttachmentDescriptor

# Class: AttachmentDescriptor

[database](../modules/database.md).[WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md).AttachmentDescriptor

## Table of contents

### Constructors

- [constructor](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#constructor)

### Properties

- [byteCount](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#bytecount)
- [data](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#data)
- [description](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#description)
- [filename](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#filename)
- [format](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#format)
- [id](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#id)
- [lastModTime](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#lastmodtime)
- [mediaType](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#mediatype)

### Methods

- [build](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#build)

## Constructors

### constructor

• **new AttachmentDescriptor**(`data`, `mediaType?`, `id?`, `filename?`, `format?`, `lastModTime?`, `byteCount?`, `description?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttachmentData`](../modules/database.WALLET_SDK_DOMAIN.md#attachmentdata) |
| `mediaType?` | `string` |
| `id?` | `string` |
| `filename?` | `string`[] |
| `format?` | `string` |
| `lastModTime?` | `string` |
| `byteCount?` | `number` |
| `description?` | `string` |

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/MessageAttachment.d.ts:33

## Properties

### byteCount

• `Optional` `Readonly` **byteCount**: `number`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/MessageAttachment.d.ts:31

___

### data

• `Readonly` **data**: [`AttachmentData`](../modules/database.WALLET_SDK_DOMAIN.md#attachmentdata)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/MessageAttachment.d.ts:25

___

### description

• `Optional` `Readonly` **description**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/MessageAttachment.d.ts:32

___

### filename

• `Optional` `Readonly` **filename**: `string`[]

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/MessageAttachment.d.ts:28

___

### format

• `Optional` `Readonly` **format**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/MessageAttachment.d.ts:29

___

### id

• `Readonly` **id**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/MessageAttachment.d.ts:27

___

### lastModTime

• `Optional` `Readonly` **lastModTime**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/MessageAttachment.d.ts:30

___

### mediaType

• `Optional` `Readonly` **mediaType**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/MessageAttachment.d.ts:26

## Methods

### build

▸ `Static` **build**\<`T`\>(`payload`, `id?`, `mediaType?`): [`AttachmentDescriptor`](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `T` |
| `id?` | `string` |
| `mediaType?` | `string` |

#### Returns

[`AttachmentDescriptor`](database.WALLET_SDK_DOMAIN.AttachmentDescriptor.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/MessageAttachment.d.ts:34
