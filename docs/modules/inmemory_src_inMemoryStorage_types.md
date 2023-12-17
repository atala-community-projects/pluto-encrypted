[@pluto-encrypted/database](../README.md) / inmemory/src/inMemoryStorage/types

# Module: inmemory/src/inMemoryStorage/types

## Table of contents

### Type Aliases

- [InMemoryDataIndex](inmemory_src_inMemoryStorage_types.md#inmemorydataindex)
- [InMemoryDataStructure](inmemory_src_inMemoryStorage_types.md#inmemorydatastructure)
- [InMemoryPreparedQuery](inmemory_src_inMemoryStorage_types.md#inmemorypreparedquery)
- [InMemoryStorageInternals](inmemory_src_inMemoryStorage_types.md#inmemorystorageinternals)
- [IndexType](inmemory_src_inMemoryStorage_types.md#indextype)

## Type Aliases

### InMemoryDataIndex

Ƭ **InMemoryDataIndex**: `Map`\<[`IndexType`](inmemory_src_inMemoryStorage_types.md#indextype), [`IndexType`](inmemory_src_inMemoryStorage_types.md#indextype)[]\>

Data type for index keystorage
I used this to get faster searches based on what RXDB indexes we were
informed

#### Defined in

[packages/inmemory/src/inMemoryStorage/types.ts:17](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/types.ts#L17)

___

### InMemoryDataStructure

Ƭ **InMemoryDataStructure**\<`RxDocType`\>: `Map`\<[`IndexType`](inmemory_src_inMemoryStorage_types.md#indextype), `RxDocumentData`\<`RxDocType`\>\>

InMemory internal data structure is a Map with an index
and RxDocumentData from RXDB

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Defined in

[packages/inmemory/src/inMemoryStorage/types.ts:11](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/types.ts#L11)

___

### InMemoryPreparedQuery

Ƭ **InMemoryPreparedQuery**\<`DocType`\>: `DefaultPreparedQuery`\<`DocType`\>

Query type for InMemory

#### Type parameters

| Name |
| :------ |
| `DocType` |

#### Defined in

[packages/inmemory/src/inMemoryStorage/types.ts:21](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/types.ts#L21)

___

### InMemoryStorageInternals

Ƭ **InMemoryStorageInternals**\<`RxDocType`\>: `Object`

Main storage interface for InMemoryStorage

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`InMemoryDataStructure`](inmemory_src_inMemoryStorage_types.md#inmemorydatastructure)\<`RxDocType`\> |
| `documents` | [`InMemoryDataStructure`](inmemory_src_inMemoryStorage_types.md#inmemorydatastructure)\<`RxDocType`\> |
| `index` | [`InMemoryDataIndex`](inmemory_src_inMemoryStorage_types.md#inmemorydataindex) |
| `refCount` | `number` |
| `removed` | `boolean` |
| `bulkGet` | (`docIds`: `string`[], `withDeleted`: `boolean`) => `RxDocumentDataById`\<`RxDocType`\> |
| `bulkPut` | (`items`: `any`, `collectionName`: `string`, `schema`: `Readonly`\<`RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>\>) => `any` |
| `clear` | () => `void` |

#### Defined in

[packages/inmemory/src/inMemoryStorage/types.ts:25](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/types.ts#L25)

___

### IndexType

Ƭ **IndexType**: `string` \| `number`

Index of a table can be a string or a number

#### Defined in

[packages/inmemory/src/inMemoryStorage/types.ts:6](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/types.ts#L6)
