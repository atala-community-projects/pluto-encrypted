[@pluto-encrypted/database](../README.md) / [inmemory/build/inMemoryStorage/instance](../modules/inmemory_build_inMemoryStorage_instance.md) / RxStorageIntanceInMemory

# Class: RxStorageIntanceInMemory\<RxDocType\>

[inmemory/build/inMemoryStorage/instance](../modules/inmemory_build_inMemoryStorage_instance.md).RxStorageIntanceInMemory

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Implements

- `RxStorageInstance`\<`RxDocType`, `InMemoryStorageInternals`\<`RxDocType`\>, `InMemorySettings`, `RxStorageDefaultCheckpoint`\>

## Table of contents

### Constructors

- [constructor](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#constructor)

### Properties

- [changes$](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#changes$)
- [closed](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#closed)
- [collectionName](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#collectionname)
- [conflictResultionTasks$](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#conflictresultiontasks$)
- [databaseName](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#databasename)
- [internals](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#internals)
- [options](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#options)
- [primaryPath](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#primarypath)
- [schema](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#schema)
- [storage](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#storage)

### Methods

- [bulkWrite](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#bulkwrite)
- [changeStream](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#changestream)
- [cleanup](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#cleanup)
- [close](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#close)
- [conflictResultionTasks](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#conflictresultiontasks)
- [count](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#count)
- [findDocumentsById](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#finddocumentsbyid)
- [getAttachmentData](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#getattachmentdata)
- [getChangedDocumentsSince](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#getchangeddocumentssince)
- [query](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#query)
- [remove](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#remove)
- [resolveConflictResultionTask](inmemory_build_inMemoryStorage_instance.RxStorageIntanceInMemory.md#resolveconflictresultiontask)

## Constructors

### constructor

• **new RxStorageIntanceInMemory**\<`RxDocType`\>(`storage`, `databaseName`, `collectionName`, `schema`, `internals`, `options`)

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | `RxStorageInMemoryType`\<`RxDocType`\> |
| `databaseName` | `string` |
| `collectionName` | `string` |
| `schema` | `Readonly`\<`RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>\> |
| `internals` | `InMemoryStorageInternals`\<`RxDocType`\> |
| `options` | `Readonly`\<`InMemorySettings`\> |

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:15

## Properties

### changes$

• **changes$**: `Subject`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocumentData`\<`RxDocType`\>\>, `RxStorageDefaultCheckpoint`\>\>

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:13

___

### closed

• **closed**: `boolean`

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:14

___

### collectionName

• `Readonly` **collectionName**: `string`

#### Implementation of

RxStorageInstance.collectionName

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:7

___

### conflictResultionTasks$

• **conflictResultionTasks$**: `Subject`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:12

___

### databaseName

• `Readonly` **databaseName**: `string`

#### Implementation of

RxStorageInstance.databaseName

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:6

___

### internals

• `Readonly` **internals**: `InMemoryStorageInternals`\<`RxDocType`\>

#### Implementation of

RxStorageInstance.internals

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:9

___

### options

• `Readonly` **options**: `Readonly`\<`InMemorySettings`\>

#### Implementation of

RxStorageInstance.options

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:10

___

### primaryPath

• `Readonly` **primaryPath**: `StringKeys`\<`RxDocumentData`\<`RxDocType`\>\>

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:11

___

### schema

• `Readonly` **schema**: `Readonly`\<`RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>\>

#### Implementation of

RxStorageInstance.schema

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:8

___

### storage

• `Readonly` **storage**: `RxStorageInMemoryType`\<`RxDocType`\>

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:5

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

packages/inmemory/build/inMemoryStorage/instance.d.ts:16

___

### changeStream

▸ **changeStream**(): `Observable`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocType`\>, `RxStorageDefaultCheckpoint`\>\>

#### Returns

`Observable`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocType`\>, `RxStorageDefaultCheckpoint`\>\>

#### Implementation of

RxStorageInstance.changeStream

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:25

___

### cleanup

▸ **cleanup**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

RxStorageInstance.cleanup

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:26

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

RxStorageInstance.close

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:27

___

### conflictResultionTasks

▸ **conflictResultionTasks**(): `Observable`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Returns

`Observable`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Implementation of

RxStorageInstance.conflictResultionTasks

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:29

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

packages/inmemory/build/inMemoryStorage/instance.d.ts:19

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

packages/inmemory/build/inMemoryStorage/instance.d.ts:17

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

packages/inmemory/build/inMemoryStorage/instance.d.ts:20

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

packages/inmemory/build/inMemoryStorage/instance.d.ts:21

___

### query

▸ **query**(`preparedQuery`): `Promise`\<`RxStorageQueryResult`\<`RxDocType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `preparedQuery` | `InMemoryPreparedQuery`\<`RxDocType`\> |

#### Returns

`Promise`\<`RxStorageQueryResult`\<`RxDocType`\>\>

#### Implementation of

RxStorageInstance.query

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:18

___

### remove

▸ **remove**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

RxStorageInstance.remove

#### Defined in

packages/inmemory/build/inMemoryStorage/instance.d.ts:28

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

packages/inmemory/build/inMemoryStorage/instance.d.ts:30
