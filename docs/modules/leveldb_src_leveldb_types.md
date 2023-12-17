[@pluto-encrypted/database](../README.md) / leveldb/src/leveldb/types

# Module: leveldb/src/leveldb/types

## Table of contents

### Type Aliases

- [IndexType](leveldb_src_leveldb_types.md#indextype)
- [LevelDBDataIndex](leveldb_src_leveldb_types.md#leveldbdataindex)
- [LevelDBDataStructure](leveldb_src_leveldb_types.md#leveldbdatastructure)
- [LevelDBStorageInternals](leveldb_src_leveldb_types.md#leveldbstorageinternals)
- [LevelDBType](leveldb_src_leveldb_types.md#leveldbtype)

## Type Aliases

### IndexType

Ƭ **IndexType**: `string` \| `number`

Index of a table can be a string or a number

#### Defined in

[packages/leveldb/src/leveldb/types.ts:7](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/types.ts#L7)

___

### LevelDBDataIndex

Ƭ **LevelDBDataIndex**: `Map`\<[`IndexType`](leveldb_src_leveldb_types.md#indextype), [`IndexType`](leveldb_src_leveldb_types.md#indextype)[]\>

Data type for index keystorage
I used this to get faster searches based on what RXDB indexes we were
informed

#### Defined in

[packages/leveldb/src/leveldb/types.ts:18](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/types.ts#L18)

___

### LevelDBDataStructure

Ƭ **LevelDBDataStructure**\<`RxDocType`\>: `Map`\<[`IndexType`](leveldb_src_leveldb_types.md#indextype), `RxDocumentData`\<`RxDocType`\>\>

LevelDB internal data structure is a Map with an index
and RxDocumentData from RXDB

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Defined in

[packages/leveldb/src/leveldb/types.ts:12](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/types.ts#L12)

___

### LevelDBStorageInternals

Ƭ **LevelDBStorageInternals**\<`RxDocType`\>: `Object`

Main storage interface for LevelDBStorage

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `documents` | `Map`\<`string`, `RxDocumentData`\<`RxDocType`\>\> |
| `refCount` | `number` |
| `removed` | `boolean` |
| `schema` | `RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\> |
| `bulkGet` | (`keys`: `string`[]) => `Promise`\<`RxDocumentData`\<`RxDocType`\>[]\> |
| `bulkPut` | (`items`: `any`, `collectionName`: `string`, `schema`: `Readonly`\<`RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>\>) => `Promise`\<`any`\> |
| `clear` | () => `Promise`\<`void`\> |
| `close` | () => `Promise`\<`void`\> |
| `get` | (`key`: `string`) => `Promise`\<``null`` \| `RxDocumentData`\<`RxDocType`\>\> |
| `getDocuments` | (`query`: `string`[]) => `Promise`\<`Map`\<`string`, `RxDocumentData`\<`RxDocType`\>\>\> |
| `getIndex` | (`key`: `string`) => `Promise`\<`string`[]\> |
| `set` | (`key`: `string`, `data`: `RxDocumentData`\<`RxDocType`\>) => `Promise`\<`void`\> |
| `setIndex` | (`key`: `string`, `ids`: `string`[]) => `Promise`\<`void`\> |
| `updateIndex` | (`key`: `string`, `id`: `string`) => `Promise`\<`void`\> |

#### Defined in

[packages/leveldb/src/leveldb/types.ts:38](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/types.ts#L38)

___

### LevelDBType

Ƭ **LevelDBType**: `Level`\<`string`, `string`\>

Query type for LevelDB

#### Defined in

[packages/leveldb/src/leveldb/types.ts:22](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/types.ts#L22)
