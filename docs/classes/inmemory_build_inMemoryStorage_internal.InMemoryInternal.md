[@pluto-encrypted/database](../README.md) / [inmemory/build/inMemoryStorage/internal](../modules/inmemory_build_inMemoryStorage_internal.md) / InMemoryInternal

# Class: InMemoryInternal\<RxDocType\>

[inmemory/build/inMemoryStorage/internal](../modules/inmemory_build_inMemoryStorage_internal.md).InMemoryInternal

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Implements

- `InMemoryStorageInternals`\<`RxDocType`\>

## Table of contents

### Constructors

- [constructor](inmemory_build_inMemoryStorage_internal.InMemoryInternal.md#constructor)

### Properties

- [data](inmemory_build_inMemoryStorage_internal.InMemoryInternal.md#data)
- [index](inmemory_build_inMemoryStorage_internal.InMemoryInternal.md#index)
- [refCount](inmemory_build_inMemoryStorage_internal.InMemoryInternal.md#refcount)
- [removed](inmemory_build_inMemoryStorage_internal.InMemoryInternal.md#removed)

### Accessors

- [documents](inmemory_build_inMemoryStorage_internal.InMemoryInternal.md#documents)

### Methods

- [bulkGet](inmemory_build_inMemoryStorage_internal.InMemoryInternal.md#bulkget)
- [bulkPut](inmemory_build_inMemoryStorage_internal.InMemoryInternal.md#bulkput)
- [clear](inmemory_build_inMemoryStorage_internal.InMemoryInternal.md#clear)

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

packages/inmemory/build/inMemoryStorage/internal.d.ts:8

## Properties

### data

• **data**: `InMemoryDataStructure`\<`RxDocType`\>

#### Implementation of

InMemoryStorageInternals.data

#### Defined in

packages/inmemory/build/inMemoryStorage/internal.d.ts:6

___

### index

• **index**: `InMemoryDataIndex`

#### Implementation of

InMemoryStorageInternals.index

#### Defined in

packages/inmemory/build/inMemoryStorage/internal.d.ts:7

___

### refCount

• **refCount**: `number`

#### Implementation of

InMemoryStorageInternals.refCount

#### Defined in

packages/inmemory/build/inMemoryStorage/internal.d.ts:4

___

### removed

• **removed**: `boolean`

#### Implementation of

InMemoryStorageInternals.removed

#### Defined in

packages/inmemory/build/inMemoryStorage/internal.d.ts:5

## Accessors

### documents

• `get` **documents**(): `InMemoryDataStructure`\<`RxDocType`\>

#### Returns

`InMemoryDataStructure`\<`RxDocType`\>

#### Implementation of

InMemoryStorageInternals.documents

#### Defined in

packages/inmemory/build/inMemoryStorage/internal.d.ts:9

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

packages/inmemory/build/inMemoryStorage/internal.d.ts:13

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

packages/inmemory/build/inMemoryStorage/internal.d.ts:12

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

InMemoryStorageInternals.clear

#### Defined in

packages/inmemory/build/inMemoryStorage/internal.d.ts:11
