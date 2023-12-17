[@pluto-encrypted/database](../README.md) / [leveldb/build/leveldb/internal](../modules/leveldb_build_leveldb_internal.md) / LevelDBInternal

# Class: LevelDBInternal\<RxDocType\>

[leveldb/build/leveldb/internal](../modules/leveldb_build_leveldb_internal.md).LevelDBInternal

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Implements

- `LevelDBStorageInternals`\<`RxDocType`\>

## Table of contents

### Constructors

- [constructor](leveldb_build_leveldb_internal.LevelDBInternal.md#constructor)

### Properties

- [documents](leveldb_build_leveldb_internal.LevelDBInternal.md#documents)
- [refCount](leveldb_build_leveldb_internal.LevelDBInternal.md#refcount)
- [removed](leveldb_build_leveldb_internal.LevelDBInternal.md#removed)
- [schema](leveldb_build_leveldb_internal.LevelDBInternal.md#schema)

### Accessors

- [options](leveldb_build_leveldb_internal.LevelDBInternal.md#options)

### Methods

- [bulkGet](leveldb_build_leveldb_internal.LevelDBInternal.md#bulkget)
- [bulkPut](leveldb_build_leveldb_internal.LevelDBInternal.md#bulkput)
- [clear](leveldb_build_leveldb_internal.LevelDBInternal.md#clear)
- [close](leveldb_build_leveldb_internal.LevelDBInternal.md#close)
- [get](leveldb_build_leveldb_internal.LevelDBInternal.md#get)
- [getDocuments](leveldb_build_leveldb_internal.LevelDBInternal.md#getdocuments)
- [getIndex](leveldb_build_leveldb_internal.LevelDBInternal.md#getindex)
- [getInstance](leveldb_build_leveldb_internal.LevelDBInternal.md#getinstance)
- [set](leveldb_build_leveldb_internal.LevelDBInternal.md#set)
- [setIndex](leveldb_build_leveldb_internal.LevelDBInternal.md#setindex)
- [updateIndex](leveldb_build_leveldb_internal.LevelDBInternal.md#updateindex)
- [isLevelDBConstructor](leveldb_build_leveldb_internal.LevelDBInternal.md#isleveldbconstructor)

## Constructors

### constructor

• **new LevelDBInternal**\<`RxDocType`\>(`_options`)

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | `LevelDBInternalConstructor`\<`RxDocType`\> |

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:17

## Properties

### documents

• **documents**: `Map`\<`string`, `RxDocumentData`\<`RxDocType`\>\>

#### Implementation of

LevelDBStorageInternals.documents

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:8

___

### refCount

• **refCount**: `number`

#### Implementation of

LevelDBStorageInternals.refCount

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:6

___

### removed

• **removed**: `boolean`

#### Implementation of

LevelDBStorageInternals.removed

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:5

___

### schema

• **schema**: `RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>

#### Implementation of

LevelDBStorageInternals.schema

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:9

## Accessors

### options

• `get` **options**(): `LevelDBInternalConstructor`\<`RxDocType`\>

#### Returns

`LevelDBInternalConstructor`\<`RxDocType`\>

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:10

## Methods

### bulkGet

▸ **bulkGet**(`keys`): `Promise`\<`RxDocumentData`\<`RxDocType`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`Promise`\<`RxDocumentData`\<`RxDocType`\>[]\>

#### Implementation of

LevelDBStorageInternals.bulkGet

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:21

___

### bulkPut

▸ **bulkPut**(`items`, `collectionName`, `schema`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `RxDocumentData`\<`RxDocType`\>[] |
| `collectionName` | `string` |
| `schema` | `Readonly`\<`RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

LevelDBStorageInternals.bulkPut

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:28

___

### clear

▸ **clear**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Implementation of

LevelDBStorageInternals.clear

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:26

___

### close

▸ **close**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Implementation of

LevelDBStorageInternals.close

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:27

___

### get

▸ **get**(`key`): `Promise`\<``null`` \| `RxDocumentData`\<`RxDocType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`\<``null`` \| `RxDocumentData`\<`RxDocType`\>\>

#### Implementation of

LevelDBStorageInternals.get

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:22

___

### getDocuments

▸ **getDocuments**(`query`): `Promise`\<`Map`\<`string`, `RxDocumentData`\<`RxDocType`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string`[] |

#### Returns

`Promise`\<`Map`\<`string`, `RxDocumentData`\<`RxDocType`\>\>\>

#### Implementation of

LevelDBStorageInternals.getDocuments

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:18

___

### getIndex

▸ **getIndex**(`key`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

LevelDBStorageInternals.getIndex

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:20

___

### getInstance

▸ **getInstance**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:19

___

### set

▸ **set**(`key`, `data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `data` | `RxDocumentData`\<`RxDocType`\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

LevelDBStorageInternals.set

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:23

___

### setIndex

▸ **setIndex**(`key`, `ids`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `ids` | `string`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

LevelDBStorageInternals.setIndex

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:24

___

### updateIndex

▸ **updateIndex**(`key`, `id`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

LevelDBStorageInternals.updateIndex

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:25

___

### isLevelDBConstructor

▸ `Static` **isLevelDBConstructor**\<`RxDocType`\>(`_options`): \_options is Object

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | `LevelDBInternalConstructor`\<`RxDocType`\> |

#### Returns

\_options is Object

#### Defined in

packages/leveldb/build/leveldb/internal.d.ts:11
