[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [iagon/src](../modules/iagon_src.md) / IagonStorageInstance

# Class: IagonStorageInstance\<RxDocType\>

[iagon/src](../modules/iagon_src.md).IagonStorageInstance

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Implements

- `RxStorageInstance`\<`RxDocType`, [`IagonStorageInternals`](../modules/iagon_src.md#iagonstorageinternals)\<`any`\>, [`IagonInternalParameters`](../modules/iagon_src.md#iagoninternalparameters), `RxStorageDefaultCheckpoint`\>

## Table of contents

### Constructors

- [constructor](iagon_src.IagonStorageInstance.md#constructor)

### Properties

- [changes$](iagon_src.IagonStorageInstance.md#changes$)
- [collectionName](iagon_src.IagonStorageInstance.md#collectionname)
- [conflictResultionTasks$](iagon_src.IagonStorageInstance.md#conflictresultiontasks$)
- [databaseName](iagon_src.IagonStorageInstance.md#databasename)
- [internals](iagon_src.IagonStorageInstance.md#internals)
- [isInitialised](iagon_src.IagonStorageInstance.md#isinitialised)
- [options](iagon_src.IagonStorageInstance.md#options)
- [primaryPath](iagon_src.IagonStorageInstance.md#primarypath)
- [refCount](iagon_src.IagonStorageInstance.md#refcount)
- [schema](iagon_src.IagonStorageInstance.md#schema)

### Methods

- [bulkWrite](iagon_src.IagonStorageInstance.md#bulkwrite)
- [changeStream](iagon_src.IagonStorageInstance.md#changestream)
- [cleanup](iagon_src.IagonStorageInstance.md#cleanup)
- [close](iagon_src.IagonStorageInstance.md#close)
- [conflictResultionTasks](iagon_src.IagonStorageInstance.md#conflictresultiontasks)
- [count](iagon_src.IagonStorageInstance.md#count)
- [findDocumentsById](iagon_src.IagonStorageInstance.md#finddocumentsbyid)
- [getAllDocuments](iagon_src.IagonStorageInstance.md#getalldocuments)
- [getAttachmentData](iagon_src.IagonStorageInstance.md#getattachmentdata)
- [getChangedDocumentsSince](iagon_src.IagonStorageInstance.md#getchangeddocumentssince)
- [query](iagon_src.IagonStorageInstance.md#query)
- [remove](iagon_src.IagonStorageInstance.md#remove)
- [resolveConflictResultionTask](iagon_src.IagonStorageInstance.md#resolveconflictresultiontask)
- [resolveDocumentIds](iagon_src.IagonStorageInstance.md#resolvedocumentids)

## Constructors

### constructor

• **new IagonStorageInstance**\<`RxDocType`\>(`databaseName`, `internals`, `options`, `schema`, `collectionName`, `refCount?`)

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `databaseName` | `string` | `undefined` |
| `internals` | [`IagonInternals`](iagon_src.IagonInternals.md)\<`RxDocType`\> | `undefined` |
| `options` | `Readonly`\<[`IagonInternalParameters`](../modules/iagon_src.md#iagoninternalparameters)\> | `undefined` |
| `schema` | `Readonly`\<[`RxJsonSchema`](../modules/leveldb.md#rxjsonschema)\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>\> | `undefined` |
| `collectionName` | `string` | `undefined` |
| `refCount` | `number` | `0` |

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:27](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L27)

## Properties

### changes$

• **changes$**: `Subject`\<`EventBulk`\<`RxStorageChangeEvent`\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>, `RxStorageDefaultCheckpoint`\>\>

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:25](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L25)

___

### collectionName

• **collectionName**: `string`

#### Implementation of

RxStorageInstance.collectionName

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:32](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L32)

___

### conflictResultionTasks$

• **conflictResultionTasks$**: `Subject`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:24](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L24)

___

### databaseName

• **databaseName**: `string`

#### Implementation of

RxStorageInstance.databaseName

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:28](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L28)

___

### internals

• **internals**: [`IagonInternals`](iagon_src.IagonInternals.md)\<`RxDocType`\>

#### Implementation of

RxStorageInstance.internals

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:29](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L29)

___

### isInitialised

• **isInitialised**: `boolean` = `false`

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:22](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L22)

___

### options

• **options**: `Readonly`\<[`IagonInternalParameters`](../modules/iagon_src.md#iagoninternalparameters)\>

#### Implementation of

RxStorageInstance.options

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:30](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L30)

___

### primaryPath

• `Readonly` **primaryPath**: [`StringKeys`](../modules/leveldb.md#stringkeys)\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:20](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L20)

___

### refCount

• **refCount**: `number` = `0`

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:33](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L33)

___

### schema

• **schema**: `Readonly`\<[`RxJsonSchema`](../modules/leveldb.md#rxjsonschema)\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>\>

#### Implementation of

RxStorageInstance.schema

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:31](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L31)

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

[packages/iagon/src/IagonStorage/instance.ts:176](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L176)

___

### changeStream

▸ **changeStream**(): `Observable`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocType`\>, `any`\>\>

#### Returns

`Observable`\<`EventBulk`\<`RxStorageChangeEvent`\<`RxDocType`\>, `any`\>\>

#### Implementation of

RxStorageInstance.changeStream

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:153](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L153)

___

### cleanup

▸ **cleanup**(`minimumDeletedTime`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minimumDeletedTime` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

RxStorageInstance.cleanup

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:146](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L146)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

RxStorageInstance.close

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:150](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L150)

___

### conflictResultionTasks

▸ **conflictResultionTasks**(): `Observable`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Returns

`Observable`\<`RxConflictResultionTask`\<`RxDocType`\>\>

#### Implementation of

RxStorageInstance.conflictResultionTasks

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:159](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L159)

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

[packages/iagon/src/IagonStorage/instance.ts:132](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L132)

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

[packages/iagon/src/IagonStorage/instance.ts:38](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L38)

___

### getAllDocuments

▸ `Private` **getAllDocuments**(): `Promise`\<`Map`\<`string`, [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>\>

#### Returns

`Promise`\<`Map`\<`string`, [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>\>

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:165](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L165)

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

[packages/iagon/src/IagonStorage/instance.ts:139](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L139)

___

### getChangedDocumentsSince

▸ **getChangedDocumentsSince**(`limit`, `checkpoint?`): `Promise`\<\{ `checkpoint`: `any` ; `documents`: [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |
| `checkpoint?` | `any` |

#### Returns

`Promise`\<\{ `checkpoint`: `any` ; `documents`: [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>[]  }\>

#### Implementation of

RxStorageInstance.getChangedDocumentsSince

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:142](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L142)

___

### query

▸ **query**(`preparedQuery`): `Promise`\<`RxStorageQueryResult`\<`RxDocType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `preparedQuery` | `any` |

#### Returns

`Promise`\<`RxStorageQueryResult`\<`RxDocType`\>\>

#### Implementation of

RxStorageInstance.query

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:69](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L69)

___

### remove

▸ **remove**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

RxStorageInstance.remove

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:156](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L156)

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

[packages/iagon/src/IagonStorage/instance.ts:162](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L162)

___

### resolveDocumentIds

▸ `Private` **resolveDocumentIds**(`ids`, `selectorKeys`, `queryMatcher`): `Promise`\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |
| `selectorKeys` | `string`[] |
| `queryMatcher` | `QueryMatcher`\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\> |

#### Returns

`Promise`\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>[]\>

#### Defined in

[packages/iagon/src/IagonStorage/instance.ts:52](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/iagon/src/IagonStorage/instance.ts#L52)
