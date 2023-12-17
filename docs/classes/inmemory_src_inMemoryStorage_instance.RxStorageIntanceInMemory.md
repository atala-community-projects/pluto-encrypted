[@pluto-encrypted/database](../README.md) / [inmemory/src/inMemoryStorage/instance](../modules/inmemory_src_inMemoryStorage_instance.md) / RxStorageIntanceInMemory

# Class: RxStorageIntanceInMemory\<RxDocType\>

[inmemory/src/inMemoryStorage/instance](../modules/inmemory_src_inMemoryStorage_instance.md).RxStorageIntanceInMemory

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Implements

- `RxStorageInstance`\<`RxDocType`, [`InMemoryStorageInternals`](../modules/inmemory_src_inMemoryStorage_types.md#inmemorystorageinternals)\<`RxDocType`\>, `InMemorySettings`, `RxStorageDefaultCheckpoint`\>

## Table of contents

### Constructors

- [constructor](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#constructor)

### Properties

- [changes$](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#changes$)
- [closed](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#closed)
- [collectionName](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#collectionname)
- [conflictResultionTasks$](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#conflictresultiontasks$)
- [databaseName](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#databasename)
- [internals](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#internals)
- [options](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#options)
- [primaryPath](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#primarypath)
- [schema](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#schema)
- [storage](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#storage)

### Methods

- [bulkWrite](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#bulkwrite)
- [changeStream](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#changestream)
- [cleanup](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#cleanup)
- [close](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#close)
- [conflictResultionTasks](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#conflictresultiontasks)
- [count](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#count)
- [findDocumentsById](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#finddocumentsbyid)
- [getAttachmentData](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#getattachmentdata)
- [getChangedDocumentsSince](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#getchangeddocumentssince)
- [query](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#query)
- [remove](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#remove)
- [resolveConflictResultionTask](inmemory_src_inMemoryStorage_instance.RxStorageIntanceInMemory.md#resolveconflictresultiontask)

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
| `internals` | [`InMemoryStorageInternals`](../modules/inmemory_src_inMemoryStorage_types.md#inmemorystorageinternals)\<`RxDocType`\> |
| `options` | `Readonly`\<`InMemorySettings`\> |

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:22](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L22)

## Properties

### changes$

• **changes$**: `Subject`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocumentData`\<`RxDocType`\>\>, `RxStorageDefaultCheckpoint`\>\>

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:19](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L19)

___

### closed

• **closed**: `boolean` = `false`

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:20](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L20)

___

### collectionName

• `Readonly` **collectionName**: `string`

#### Implementation of

RxStorageInstance.collectionName

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:25](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L25)

___

### conflictResultionTasks$

• **conflictResultionTasks$**: `Subject`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:18](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L18)

___

### databaseName

• `Readonly` **databaseName**: `string`

#### Implementation of

RxStorageInstance.databaseName

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:24](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L24)

___

### internals

• `Readonly` **internals**: [`InMemoryStorageInternals`](../modules/inmemory_src_inMemoryStorage_types.md#inmemorystorageinternals)\<`RxDocType`\>

#### Implementation of

RxStorageInstance.internals

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:27](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L27)

___

### options

• `Readonly` **options**: `Readonly`\<`InMemorySettings`\>

#### Implementation of

RxStorageInstance.options

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:28](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L28)

___

### primaryPath

• `Readonly` **primaryPath**: `StringKeys`\<`RxDocumentData`\<`RxDocType`\>\>

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:17](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L17)

___

### schema

• `Readonly` **schema**: `Readonly`\<`RxJsonSchema`\<`RxDocumentData`\<`RxDocType`\>\>\>

#### Implementation of

RxStorageInstance.schema

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:26](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L26)

___

### storage

• `Readonly` **storage**: `RxStorageInMemoryType`\<`RxDocType`\>

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:23](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L23)

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

[packages/inmemory/src/inMemoryStorage/instance.ts:33](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L33)

___

### changeStream

▸ **changeStream**(): `Observable`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocType`\>, `RxStorageDefaultCheckpoint`\>\>

#### Returns

`Observable`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocType`\>, `RxStorageDefaultCheckpoint`\>\>

#### Implementation of

RxStorageInstance.changeStream

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:140](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L140)

___

### cleanup

▸ **cleanup**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

RxStorageInstance.cleanup

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:144](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L144)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

RxStorageInstance.close

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:151](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L151)

___

### conflictResultionTasks

▸ **conflictResultionTasks**(): `Observable`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Returns

`Observable`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Implementation of

RxStorageInstance.conflictResultionTasks

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:165](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L165)

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

[packages/inmemory/src/inMemoryStorage/instance.ts:121](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L121)

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

[packages/inmemory/src/inMemoryStorage/instance.ts:86](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L86)

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

[packages/inmemory/src/inMemoryStorage/instance.ts:130](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L130)

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

[packages/inmemory/src/inMemoryStorage/instance.ts:135](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L135)

___

### query

▸ **query**(`preparedQuery`): `Promise`\<`RxStorageQueryResult`\<`RxDocType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `preparedQuery` | [`InMemoryPreparedQuery`](../modules/inmemory_src_inMemoryStorage_types.md#inmemorypreparedquery)\<`RxDocType`\> |

#### Returns

`Promise`\<`RxStorageQueryResult`\<`RxDocType`\>\>

#### Implementation of

RxStorageInstance.query

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:90](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L90)

___

### remove

▸ **remove**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

RxStorageInstance.remove

#### Defined in

[packages/inmemory/src/inMemoryStorage/instance.ts:161](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L161)

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

[packages/inmemory/src/inMemoryStorage/instance.ts:170](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/inmemory/src/inMemoryStorage/instance.ts#L170)
