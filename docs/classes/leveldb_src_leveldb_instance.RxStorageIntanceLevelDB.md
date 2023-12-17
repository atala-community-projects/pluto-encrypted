[@pluto-encrypted/database](../README.md) / [leveldb/src/leveldb/instance](../modules/leveldb_src_leveldb_instance.md) / RxStorageIntanceLevelDB

# Class: RxStorageIntanceLevelDB\<RxDocType\>

[leveldb/src/leveldb/instance](../modules/leveldb_src_leveldb_instance.md).RxStorageIntanceLevelDB

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Implements

- `RxStorageInstance`\<`RxDocType`, [`LevelDBStorageInternals`](../modules/leveldb_src_leveldb_types.md#leveldbstorageinternals)\<`RxDocType`\>, `LevelDBSettings`, `RxStorageDefaultCheckpoint`\>

## Table of contents

### Constructors

- [constructor](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#constructor)

### Properties

- [changes$](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#changes$)
- [closed](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#closed)
- [collectionName](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#collectionname)
- [conflictResultionTasks$](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#conflictresultiontasks$)
- [databaseName](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#databasename)
- [internals](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#internals)
- [options](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#options)
- [primaryPath](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#primarypath)
- [schema](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#schema)
- [storage](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#storage)

### Methods

- [bulkWrite](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#bulkwrite)
- [changeStream](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#changestream)
- [cleanup](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#cleanup)
- [close](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#close)
- [conflictResultionTasks](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#conflictresultiontasks)
- [count](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#count)
- [findDocumentsById](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#finddocumentsbyid)
- [getAttachmentData](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#getattachmentdata)
- [getChangedDocumentsSince](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#getchangeddocumentssince)
- [query](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#query)
- [remove](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#remove)
- [resolveConflictResultionTask](leveldb_src_leveldb_instance.RxStorageIntanceLevelDB.md#resolveconflictresultiontask)

## Constructors

### constructor

• **new RxStorageIntanceLevelDB**\<`RxDocType`\>(`storage`, `databaseName`, `collectionName`, `schema`, `internals`, `options`)

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | `RxStorageLevelDBType`\<`RxDocType`\> |
| `databaseName` | `string` |
| `collectionName` | `string` |
| `schema` | `Readonly`\<`RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>\> |
| `internals` | [`LevelDBStorageInternals`](../modules/leveldb_src_leveldb_types.md#leveldbstorageinternals)\<`RxDocType`\> |
| `options` | `Readonly`\<`LevelDBSettings`\> |

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:20](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L20)

## Properties

### changes$

• **changes$**: `Subject`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocumentData`\<`RxDocType`\>\>, `RxStorageDefaultCheckpoint`\>\>

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:17](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L17)

___

### closed

• **closed**: `boolean` = `false`

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:18](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L18)

___

### collectionName

• `Readonly` **collectionName**: `string`

#### Implementation of

RxStorageInstance.collectionName

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:23](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L23)

___

### conflictResultionTasks$

• **conflictResultionTasks$**: `Subject`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:16](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L16)

___

### databaseName

• `Readonly` **databaseName**: `string`

#### Implementation of

RxStorageInstance.databaseName

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:22](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L22)

___

### internals

• `Readonly` **internals**: [`LevelDBStorageInternals`](../modules/leveldb_src_leveldb_types.md#leveldbstorageinternals)\<`RxDocType`\>

#### Implementation of

RxStorageInstance.internals

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:25](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L25)

___

### options

• `Readonly` **options**: `Readonly`\<`LevelDBSettings`\>

#### Implementation of

RxStorageInstance.options

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:26](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L26)

___

### primaryPath

• `Readonly` **primaryPath**: `StringKeys`\<`RxDocumentData`\<`RxDocType`\>\>

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:15](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L15)

___

### schema

• `Readonly` **schema**: `Readonly`\<`RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>\>

#### Implementation of

RxStorageInstance.schema

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:24](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L24)

___

### storage

• `Readonly` **storage**: `RxStorageLevelDBType`\<`RxDocType`\>

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:21](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L21)

## Methods

### bulkWrite

▸ **bulkWrite**(`documentWrites`, `context`): `Promise`\<`RxStorageBulkWriteResponse`\<`RxDocType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `documentWrites` | `BulkWriteRow`\<`RxDocType`\>[] |
| `context` | `string` |

#### Returns

`Promise`\<`RxStorageBulkWriteResponse`\<`RxDocType`\>\>

#### Implementation of

RxStorageInstance.bulkWrite

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:31](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L31)

___

### changeStream

▸ **changeStream**(): `Observable`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocType`\>, `RxStorageDefaultCheckpoint`\>\>

#### Returns

`Observable`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocType`\>, `RxStorageDefaultCheckpoint`\>\>

#### Implementation of

RxStorageInstance.changeStream

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:148](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L148)

___

### cleanup

▸ **cleanup**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

RxStorageInstance.cleanup

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:152](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L152)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

RxStorageInstance.close

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:158](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L158)

___

### conflictResultionTasks

▸ **conflictResultionTasks**(): `Observable`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Returns

`Observable`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Implementation of

RxStorageInstance.conflictResultionTasks

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:173](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L173)

___

### count

▸ **count**(`preparedQuery`): `Promise`\<`RxStorageCountResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `preparedQuery` | `any` |

#### Returns

`Promise`\<`RxStorageCountResult`\>

#### Implementation of

RxStorageInstance.count

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:129](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L129)

___

### findDocumentsById

▸ **findDocumentsById**(`ids`, `withDeleted`): `Promise`\<`RxDocumentDataById`\<`RxDocType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |
| `withDeleted` | `boolean` |

#### Returns

`Promise`\<`RxDocumentDataById`\<`RxDocType`\>\>

#### Implementation of

RxStorageInstance.findDocumentsById

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:94](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L94)

___

### getAttachmentData

▸ **getAttachmentData**(`documentId`, `attachmentId`, `digest`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `documentId` | `string` |
| `attachmentId` | `string` |
| `digest` | `string` |

#### Returns

`Promise`\<`string`\>

#### Implementation of

RxStorageInstance.getAttachmentData

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:138](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L138)

___

### getChangedDocumentsSince

▸ **getChangedDocumentsSince**(`limit`, `checkpoint?`): `Promise`\<\{ `checkpoint`: `RxStorageDefaultCheckpoint` ; `documents`: `RxDocumentData`\<`RxDocType`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |
| `checkpoint?` | `RxStorageDefaultCheckpoint` |

#### Returns

`Promise`\<\{ `checkpoint`: `RxStorageDefaultCheckpoint` ; `documents`: `RxDocumentData`\<`RxDocType`\>[]  }\>

#### Implementation of

RxStorageInstance.getChangedDocumentsSince

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:143](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L143)

___

### query

▸ **query**(`preparedQuery`): `Promise`\<`RxStorageQueryResult`\<`RxDocType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `preparedQuery` | `LevelDBPreparedQuery`\<`RxDocType`\> |

#### Returns

`Promise`\<`RxStorageQueryResult`\<`RxDocType`\>\>

#### Implementation of

RxStorageInstance.query

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:105](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L105)

___

### remove

▸ **remove**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

RxStorageInstance.remove

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:169](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L169)

___

### resolveConflictResultionTask

▸ **resolveConflictResultionTask**(`taskSolution`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskSolution` | `RxConflictResultionTaskSolution`\<`RxDocType`\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

RxStorageInstance.resolveConflictResultionTask

#### Defined in

[packages/leveldb/src/leveldb/instance.ts:178](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/leveldb/src/leveldb/instance.ts#L178)
