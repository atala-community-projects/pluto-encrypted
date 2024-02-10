[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [iagon/src](../modules/iagon_src.md) / IagonInternals

# Class: IagonInternals\<RxDocType\>

[iagon/src](../modules/iagon_src.md).IagonInternals

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Implements

- [`IagonStorageInternals`](../modules/iagon_src.md#iagonstorageinternals)\<`RxDocType`\>

## Table of contents

### Constructors

- [constructor](iagon_src.IagonInternals.md#constructor)

### Properties

- [\_\_collectionFolder](iagon_src.IagonInternals.md#__collectionfolder)
- [\_\_dataFolder](iagon_src.IagonInternals.md#__datafolder)
- [\_\_databaseFolder](iagon_src.IagonInternals.md#__databasefolder)
- [\_\_indexFolder](iagon_src.IagonInternals.md#__indexfolder)
- [indexes](iagon_src.IagonInternals.md#indexes)
- [refCount](iagon_src.IagonInternals.md#refcount)
- [sdk](iagon_src.IagonInternals.md#sdk)

### Methods

- [addDoc](iagon_src.IagonInternals.md#adddoc)
- [bulkGet](iagon_src.IagonInternals.md#bulkget)
- [bulkPut](iagon_src.IagonInternals.md#bulkput)
- [get](iagon_src.IagonInternals.md#get)
- [getDBDirectory](iagon_src.IagonInternals.md#getdbdirectory)
- [getIndex](iagon_src.IagonInternals.md#getindex)
- [initialiseDB](iagon_src.IagonInternals.md#initialisedb)
- [removeDoc](iagon_src.IagonInternals.md#removedoc)
- [removeFromIndex](iagon_src.IagonInternals.md#removefromindex)
- [resetDatabase](iagon_src.IagonInternals.md#resetdatabase)
- [updateIndex](iagon_src.IagonInternals.md#updateindex)

## Constructors

### constructor

• **new IagonInternals**\<`RxDocType`\>(`parameters`, `refCount?`)

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parameters` | [`IagonInternalParameters`](../modules/iagon_src.md#iagoninternalparameters) | `undefined` |
| `refCount` | `number` | `0` |

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:21](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L21)

## Properties

### \_\_collectionFolder

• **\_\_collectionFolder**: [`IagonFolder`](../modules/iagon_src.md#iagonfolder)

#### Implementation of

IagonStorageInternals.\_\_collectionFolder

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:13](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L13)

___

### \_\_dataFolder

• **\_\_dataFolder**: [`IagonFolder`](../modules/iagon_src.md#iagonfolder)

#### Implementation of

IagonStorageInternals.\_\_dataFolder

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:15](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L15)

___

### \_\_databaseFolder

• **\_\_databaseFolder**: [`IagonFolder`](../modules/iagon_src.md#iagonfolder)

#### Implementation of

IagonStorageInternals.\_\_databaseFolder

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:12](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L12)

___

### \_\_indexFolder

• **\_\_indexFolder**: [`IagonFolder`](../modules/iagon_src.md#iagonfolder)

#### Implementation of

IagonStorageInternals.\_\_indexFolder

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:14](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L14)

___

### indexes

• **indexes**: `Map`\<`string`, [`IagonFolder`](../modules/iagon_src.md#iagonfolder)\>

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:16](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L16)

___

### refCount

• **refCount**: `number` = `0`

#### Implementation of

IagonStorageInternals.refCount

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:21](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L21)

___

### sdk

• **sdk**: [`IagonAPI`](iagon_src.IagonAPI.md)

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:18](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L18)

## Methods

### addDoc

▸ **addDoc**(`docId`, `document`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | `string` |
| `document` | [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

IagonStorageInternals.addDoc

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:99](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L99)

___

### bulkGet

▸ **bulkGet**(`keys`): `Promise`\<`RxDocumentDataById`\<`RxDocType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`Promise`\<`RxDocumentDataById`\<`RxDocType`\>\>

#### Implementation of

IagonStorageInternals.bulkGet

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:96](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L96)

___

### bulkPut

▸ **bulkPut**(`items`, `collectionName`, `schema`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>[] |
| `collectionName` | `string` |
| `schema` | [`RxJsonSchema`](../modules/leveldb.md#rxjsonschema)\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

IagonStorageInternals.bulkPut

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:132](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L132)

___

### get

▸ **get**(`key`): `Promise`\<``null`` \| [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`\<``null`` \| [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>

#### Implementation of

IagonStorageInternals.get

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:120](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L120)

___

### getDBDirectory

▸ **getDBDirectory**(`databaseName`): `Promise`\<[`IagonFolder`](../modules/iagon_src.md#iagonfolder)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |

#### Returns

`Promise`\<[`IagonFolder`](../modules/iagon_src.md#iagonfolder)\>

#### Implementation of

IagonStorageInternals.getDBDirectory

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:25](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L25)

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

IagonStorageInternals.getIndex

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:158](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L158)

___

### initialiseDB

▸ **initialiseDB**(`databaseName`, `collectionName`): `Promise`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `collectionName` | `string` |

#### Returns

`Promise`\<`undefined`\>

#### Implementation of

IagonStorageInternals.initialiseDB

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:44](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L44)

___

### removeDoc

▸ **removeDoc**(`docId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

IagonStorageInternals.removeDoc

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:104](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L104)

___

### removeFromIndex

▸ **removeFromIndex**(`indexName`, `docId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexName` | `string` |
| `docId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

IagonStorageInternals.removeFromIndex

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:111](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L111)

___

### resetDatabase

▸ `Private` **resetDatabase**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:37](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L37)

___

### updateIndex

▸ **updateIndex**(`indexName`, `docId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexName` | `string` |
| `docId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

IagonStorageInternals.updateIndex

#### Defined in

[packages/iagon/src/IagonStorage/internals.ts:172](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/internals.ts#L172)
