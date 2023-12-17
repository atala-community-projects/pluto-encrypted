[@pluto-encrypted/database](../README.md) / [leveldb/src/leveldb/internal](../modules/leveldb_src_leveldb_internal.md) / LevelDBInternal

# Class: LevelDBInternal\<RxDocType\>

[leveldb/src/leveldb/internal](../modules/leveldb_src_leveldb_internal.md).LevelDBInternal

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Implements

- [`LevelDBStorageInternals`](../modules/leveldb_src_leveldb_types.md#leveldbstorageinternals)\<`RxDocType`\>

## Table of contents

### Constructors

- [constructor](leveldb_src_leveldb_internal.LevelDBInternal.md#constructor)

### Properties

- [documents](leveldb_src_leveldb_internal.LevelDBInternal.md#documents)
- [refCount](leveldb_src_leveldb_internal.LevelDBInternal.md#refcount)
- [removed](leveldb_src_leveldb_internal.LevelDBInternal.md#removed)
- [schema](leveldb_src_leveldb_internal.LevelDBInternal.md#schema)

### Accessors

- [options](leveldb_src_leveldb_internal.LevelDBInternal.md#options)

### Methods

- [bulkGet](leveldb_src_leveldb_internal.LevelDBInternal.md#bulkget)
- [bulkPut](leveldb_src_leveldb_internal.LevelDBInternal.md#bulkput)
- [clear](leveldb_src_leveldb_internal.LevelDBInternal.md#clear)
- [close](leveldb_src_leveldb_internal.LevelDBInternal.md#close)
- [get](leveldb_src_leveldb_internal.LevelDBInternal.md#get)
- [getDocuments](leveldb_src_leveldb_internal.LevelDBInternal.md#getdocuments)
- [getIndex](leveldb_src_leveldb_internal.LevelDBInternal.md#getindex)
- [getInstance](leveldb_src_leveldb_internal.LevelDBInternal.md#getinstance)
- [set](leveldb_src_leveldb_internal.LevelDBInternal.md#set)
- [setIndex](leveldb_src_leveldb_internal.LevelDBInternal.md#setindex)
- [updateIndex](leveldb_src_leveldb_internal.LevelDBInternal.md#updateindex)
- [isLevelDBConstructor](leveldb_src_leveldb_internal.LevelDBInternal.md#isleveldbconstructor)

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

[packages/leveldb/src/leveldb/internal.ts:36](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L36)

## Properties

### documents

• **documents**: `Map`\<`string`, `RxDocumentData`\<`RxDocType`\>\>

#### Implementation of

LevelDBStorageInternals.documents

#### Defined in

[packages/leveldb/src/leveldb/internal.ts:21](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L21)

___

### refCount

• **refCount**: `number`

#### Implementation of

LevelDBStorageInternals.refCount

#### Defined in

[packages/leveldb/src/leveldb/internal.ts:19](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L19)

___

### removed

• **removed**: `boolean` = `false`

#### Implementation of

LevelDBStorageInternals.removed

#### Defined in

[packages/leveldb/src/leveldb/internal.ts:18](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L18)

___

### schema

• **schema**: `RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>

#### Implementation of

LevelDBStorageInternals.schema

#### Defined in

[packages/leveldb/src/leveldb/internal.ts:22](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L22)

## Accessors

### options

• `get` **options**(): `LevelDBInternalConstructor`\<`RxDocType`\>

#### Returns

`LevelDBInternalConstructor`\<`RxDocType`\>

#### Defined in

[packages/leveldb/src/leveldb/internal.ts:24](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L24)

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

[packages/leveldb/src/leveldb/internal.ts:97](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L97)

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

[packages/leveldb/src/leveldb/internal.ts:193](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L193)

___

### clear

▸ **clear**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Implementation of

LevelDBStorageInternals.clear

#### Defined in

[packages/leveldb/src/leveldb/internal.ts:184](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L184)

___

### close

▸ **close**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Implementation of

LevelDBStorageInternals.close

#### Defined in

[packages/leveldb/src/leveldb/internal.ts:189](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L189)

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

[packages/leveldb/src/leveldb/internal.ts:115](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L115)

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

[packages/leveldb/src/leveldb/internal.ts:47](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L47)

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

[packages/leveldb/src/leveldb/internal.ts:79](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L79)

___

### getInstance

▸ **getInstance**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/leveldb/src/leveldb/internal.ts:74](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L74)

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

[packages/leveldb/src/leveldb/internal.ts:133](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L133)

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

[packages/leveldb/src/leveldb/internal.ts:153](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L153)

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

[packages/leveldb/src/leveldb/internal.ts:172](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L172)

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

[packages/leveldb/src/leveldb/internal.ts:27](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/internal.ts#L27)
