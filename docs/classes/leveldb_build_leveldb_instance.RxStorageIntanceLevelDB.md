[@pluto-encrypted/database](../README.md) / [leveldb/build/leveldb/instance](../modules/leveldb_build_leveldb_instance.md) / RxStorageIntanceLevelDB

# Class: RxStorageIntanceLevelDB\<RxDocType\>

[leveldb/build/leveldb/instance](../modules/leveldb_build_leveldb_instance.md).RxStorageIntanceLevelDB

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Implements

- `RxStorageInstance`\<`RxDocType`, `LevelDBStorageInternals`\<`RxDocType`\>, `LevelDBSettings`, `RxStorageDefaultCheckpoint`\>

## Table of contents

### Constructors

- [constructor](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#constructor)

### Properties

- [changes$](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#changes$)
- [closed](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#closed)
- [collectionName](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#collectionname)
- [conflictResultionTasks$](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#conflictresultiontasks$)
- [databaseName](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#databasename)
- [internals](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#internals)
- [options](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#options)
- [primaryPath](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#primarypath)
- [schema](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#schema)
- [storage](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#storage)

### Methods

- [bulkWrite](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#bulkwrite)
- [changeStream](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#changestream)
- [cleanup](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#cleanup)
- [close](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#close)
- [conflictResultionTasks](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#conflictresultiontasks)
- [count](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#count)
- [findDocumentsById](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#finddocumentsbyid)
- [getAttachmentData](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#getattachmentdata)
- [getChangedDocumentsSince](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#getchangeddocumentssince)
- [query](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#query)
- [remove](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#remove)
- [resolveConflictResultionTask](leveldb_build_leveldb_instance.RxStorageIntanceLevelDB.md#resolveconflictresultiontask)

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
| `internals` | `LevelDBStorageInternals`\<`RxDocType`\> |
| `options` | `Readonly`\<`LevelDBSettings`\> |

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:15

## Properties

### changes$

• **changes$**: `Subject`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocumentData`\<`RxDocType`\>\>, `RxStorageDefaultCheckpoint`\>\>

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:13

___

### closed

• **closed**: `boolean`

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:14

___

### collectionName

• `Readonly` **collectionName**: `string`

#### Implementation of

RxStorageInstance.collectionName

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:7

___

### conflictResultionTasks$

• **conflictResultionTasks$**: `Subject`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:12

___

### databaseName

• `Readonly` **databaseName**: `string`

#### Implementation of

RxStorageInstance.databaseName

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:6

___

### internals

• `Readonly` **internals**: `LevelDBStorageInternals`\<`RxDocType`\>

#### Implementation of

RxStorageInstance.internals

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:9

___

### options

• `Readonly` **options**: `Readonly`\<`LevelDBSettings`\>

#### Implementation of

RxStorageInstance.options

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:10

___

### primaryPath

• `Readonly` **primaryPath**: `StringKeys`\<`RxDocumentData`\<`RxDocType`\>\>

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:11

___

### schema

• `Readonly` **schema**: `Readonly`\<`RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>\>

#### Implementation of

RxStorageInstance.schema

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:8

___

### storage

• `Readonly` **storage**: `RxStorageLevelDBType`\<`RxDocType`\>

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:5

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

packages/leveldb/build/leveldb/instance.d.ts:16

___

### changeStream

▸ **changeStream**(): `Observable`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocType`\>, `RxStorageDefaultCheckpoint`\>\>

#### Returns

`Observable`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocType`\>, `RxStorageDefaultCheckpoint`\>\>

#### Implementation of

RxStorageInstance.changeStream

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:25

___

### cleanup

▸ **cleanup**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

RxStorageInstance.cleanup

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:26

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

RxStorageInstance.close

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:27

___

### conflictResultionTasks

▸ **conflictResultionTasks**(): `Observable`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Returns

`Observable`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Implementation of

RxStorageInstance.conflictResultionTasks

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:29

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

packages/leveldb/build/leveldb/instance.d.ts:19

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

packages/leveldb/build/leveldb/instance.d.ts:17

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

packages/leveldb/build/leveldb/instance.d.ts:20

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

packages/leveldb/build/leveldb/instance.d.ts:21

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

packages/leveldb/build/leveldb/instance.d.ts:18

___

### remove

▸ **remove**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

RxStorageInstance.remove

#### Defined in

packages/leveldb/build/leveldb/instance.d.ts:28

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

packages/leveldb/build/leveldb/instance.d.ts:30
