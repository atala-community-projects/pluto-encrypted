[@pluto-encrypted/database](../README.md) / [inmemory/src/inMemoryStorage/internal](../modules/inmemory_src_inMemoryStorage_internal.md) / InMemoryInternal

# Class: InMemoryInternal\<RxDocType\>

[inmemory/src/inMemoryStorage/internal](../modules/inmemory_src_inMemoryStorage_internal.md).InMemoryInternal

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Implements

- [`InMemoryStorageInternals`](../modules/inmemory_src_inMemoryStorage_types.md#inmemorystorageinternals)\<`RxDocType`\>

## Table of contents

### Constructors

- [constructor](inmemory_src_inMemoryStorage_internal.InMemoryInternal.md#constructor)

### Properties

- [data](inmemory_src_inMemoryStorage_internal.InMemoryInternal.md#data)
- [index](inmemory_src_inMemoryStorage_internal.InMemoryInternal.md#index)
- [refCount](inmemory_src_inMemoryStorage_internal.InMemoryInternal.md#refcount)
- [removed](inmemory_src_inMemoryStorage_internal.InMemoryInternal.md#removed)

### Accessors

- [documents](inmemory_src_inMemoryStorage_internal.InMemoryInternal.md#documents)

### Methods

- [bulkGet](inmemory_src_inMemoryStorage_internal.InMemoryInternal.md#bulkget)
- [bulkPut](inmemory_src_inMemoryStorage_internal.InMemoryInternal.md#bulkput)
- [clear](inmemory_src_inMemoryStorage_internal.InMemoryInternal.md#clear)

## Constructors

### constructor

• **new InMemoryInternal**\<`RxDocType`\>(`refCount`)

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refCount` | `number` |

#### Defined in

[packages/inmemory/src/inMemoryStorage/internal.ts:21](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/internal.ts#L21)

## Properties

### data

• **data**: [`InMemoryDataStructure`](../modules/inmemory_src_inMemoryStorage_types.md#inmemorydatastructure)\<`RxDocType`\>

#### Implementation of

InMemoryStorageInternals.data

#### Defined in

[packages/inmemory/src/inMemoryStorage/internal.ts:18](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/internal.ts#L18)

___

### index

• **index**: [`InMemoryDataIndex`](../modules/inmemory_src_inMemoryStorage_types.md#inmemorydataindex)

#### Implementation of

InMemoryStorageInternals.index

#### Defined in

[packages/inmemory/src/inMemoryStorage/internal.ts:19](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/internal.ts#L19)

___

### refCount

• **refCount**: `number`

#### Implementation of

InMemoryStorageInternals.refCount

#### Defined in

[packages/inmemory/src/inMemoryStorage/internal.ts:21](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/internal.ts#L21)

___

### removed

• **removed**: `boolean` = `false`

#### Implementation of

InMemoryStorageInternals.removed

#### Defined in

[packages/inmemory/src/inMemoryStorage/internal.ts:17](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/internal.ts#L17)

## Accessors

### documents

• `get` **documents**(): [`InMemoryDataStructure`](../modules/inmemory_src_inMemoryStorage_types.md#inmemorydatastructure)\<`RxDocType`\>

#### Returns

[`InMemoryDataStructure`](../modules/inmemory_src_inMemoryStorage_types.md#inmemorydatastructure)\<`RxDocType`\>

#### Implementation of

InMemoryStorageInternals.documents

#### Defined in

[packages/inmemory/src/inMemoryStorage/internal.ts:23](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/internal.ts#L23)

## Methods

### bulkGet

▸ **bulkGet**(`docIds`, `withDeleted`): `RxDocumentDataById`\<`RxDocType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docIds` | `string`[] |
| `withDeleted` | `boolean` |

#### Returns

`RxDocumentDataById`\<`RxDocType`\>

#### Implementation of

InMemoryStorageInternals.bulkGet

#### Defined in

[packages/inmemory/src/inMemoryStorage/internal.ts:67](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/internal.ts#L67)

___

### bulkPut

▸ **bulkPut**(`items`, `collectionName`, `schema`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `RxDocumentData`\<`RxDocType`\>[] |
| `collectionName` | `string` |
| `schema` | `Readonly`\<`RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>\> |

#### Returns

`void`

#### Implementation of

InMemoryStorageInternals.bulkPut

#### Defined in

[packages/inmemory/src/inMemoryStorage/internal.ts:44](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/internal.ts#L44)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

InMemoryStorageInternals.clear

#### Defined in

[packages/inmemory/src/inMemoryStorage/internal.ts:39](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/internal.ts#L39)
