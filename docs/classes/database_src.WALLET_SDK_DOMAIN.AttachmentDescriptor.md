[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / [WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md) / AttachmentDescriptor

# Class: AttachmentDescriptor

[database/src](../modules/database_src.md).[WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md).AttachmentDescriptor

## Table of contents

### Constructors

- [constructor](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#constructor)

### Properties

- [byteCount](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#bytecount)
- [data](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#data)
- [description](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#description)
- [filename](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#filename)
- [format](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#format)
- [id](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#id)
- [lastModTime](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#lastmodtime)
- [mediaType](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#mediatype)

### Methods

- [build](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md#build)

## Constructors

### constructor

• **new AttachmentDescriptor**(`data`, `mediaType?`, `id?`, `filename?`, `format?`, `lastModTime?`, `byteCount?`, `description?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttachmentData`](../modules/database_src.WALLET_SDK_DOMAIN.md#attachmentdata) |
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

• `Readonly` **data**: [`AttachmentData`](../modules/database_src.WALLET_SDK_DOMAIN.md#attachmentdata)

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

▸ `Static` **build**\<`T`\>(`payload`, `id?`, `mediaType?`): [`AttachmentDescriptor`](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md)

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

[`AttachmentDescriptor`](database_src.WALLET_SDK_DOMAIN.AttachmentDescriptor.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/MessageAttachment.d.ts:34
