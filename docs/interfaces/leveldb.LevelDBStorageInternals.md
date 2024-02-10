[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [leveldb](../modules/leveldb.md) / LevelDBStorageInternals

# Interface: LevelDBStorageInternals\<RxDocType\>

[leveldb](../modules/leveldb.md).LevelDBStorageInternals

Main storage interface for LevelDBStorage

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Table of contents

### Properties

- [bulkGet](leveldb.LevelDBStorageInternals.md#bulkget)
- [bulkPut](leveldb.LevelDBStorageInternals.md#bulkput)
- [clear](leveldb.LevelDBStorageInternals.md#clear)
- [close](leveldb.LevelDBStorageInternals.md#close)
- [documents](leveldb.LevelDBStorageInternals.md#documents)
- [get](leveldb.LevelDBStorageInternals.md#get)
- [getDocuments](leveldb.LevelDBStorageInternals.md#getdocuments)
- [getIndex](leveldb.LevelDBStorageInternals.md#getindex)
- [refCount](leveldb.LevelDBStorageInternals.md#refcount)
- [removed](leveldb.LevelDBStorageInternals.md#removed)
- [schema](leveldb.LevelDBStorageInternals.md#schema)
- [set](leveldb.LevelDBStorageInternals.md#set)
- [setIndex](leveldb.LevelDBStorageInternals.md#setindex)
- [updateIndex](leveldb.LevelDBStorageInternals.md#updateindex)

## Properties

### bulkGet

• **bulkGet**: (`keys`: `string`[]) => `Promise`\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>[]\>

#### Type declaration

▸ (`keys`): `Promise`\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

##### Returns

`Promise`\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>[]\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:52](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L52)

___

### bulkPut

• **bulkPut**: (`items`: `any`, `collectionName`: `string`, `schema`: `Readonly`\<[`RxJsonSchema`](../modules/leveldb.md#rxjsonschema)\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>\>) => `Promise`\<`any`\>

#### Type declaration

▸ (`items`, `collectionName`, `schema`): `Promise`\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `any` |
| `collectionName` | `string` |
| `schema` | `Readonly`\<[`RxJsonSchema`](../modules/leveldb.md#rxjsonschema)\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>\> |

##### Returns

`Promise`\<`any`\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:44](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L44)

___

### clear

• **clear**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:49](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L49)

___

### close

• **close**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:48](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L48)

___

### documents

• **documents**: `Map`\<`string`, [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:40](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L40)

___

### get

• **get**: (`key`: `string`) => `Promise`\<``null`` \| [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>

#### Type declaration

▸ (`key`): `Promise`\<``null`` \| [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

`Promise`\<``null`` \| [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:50](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L50)

___

### getDocuments

• **getDocuments**: (`query`: `string`[]) => `Promise`\<`Map`\<`string`, [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>\>

#### Type declaration

▸ (`query`): `Promise`\<`Map`\<`string`, [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string`[] |

##### Returns

`Promise`\<`Map`\<`string`, [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:39](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L39)

___

### getIndex

• **getIndex**: (`key`: `string`) => `Promise`\<`string`[]\>

#### Type declaration

▸ (`key`): `Promise`\<`string`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

`Promise`\<`string`[]\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:51](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L51)

___

### refCount

• **refCount**: `number`

#### Defined in

[packages/leveldb/src/leveldb/types.ts:42](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L42)

___

### removed

• **removed**: `boolean`

#### Defined in

[packages/leveldb/src/leveldb/types.ts:41](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L41)

___

### schema

• **schema**: [`RxJsonSchema`](../modules/leveldb.md#rxjsonschema)\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:43](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L43)

___

### set

• **set**: (`key`: `string`, `data`: [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>) => `Promise`\<`void`\>

#### Type declaration

▸ (`key`, `data`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `data` | [`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\> |

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:53](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L53)

___

### setIndex

• **setIndex**: (`key`: `string`, `ids`: `string`[]) => `Promise`\<`void`\>

#### Type declaration

▸ (`key`, `ids`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `ids` | `string`[] |

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:54](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L54)

___

### updateIndex

• **updateIndex**: (`key`: `string`, `id`: `string`) => `Promise`\<`void`\>

#### Type declaration

▸ (`key`, `id`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `id` | `string` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/leveldb/src/leveldb/types.ts:55](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/leveldb/src/leveldb/types.ts#L55)
