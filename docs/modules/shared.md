[@pluto-encrypted](../README.md) / [Exports](../modules.md) / shared

# Module: shared

**`Description`**

Shared is used by other dependencies of pluto-encrypted to reduce code duplication.

## Table of contents

### Classes

- [DatabaseBase](../classes/shared.DatabaseBase.md)

### Interfaces

- [DocWithIndexString](../interfaces/shared.DocWithIndexString.md)
- [MangoQueryOperators](../interfaces/shared.MangoQueryOperators.md)

### Type Aliases

- [DBOptions](shared.md#dboptions)
- [ExtractStaticMethods](shared.md#extractstaticmethods)
- [MangoQuerySelector](shared.md#mangoqueryselector)
- [PlainJsonValue](shared.md#plainjsonvalue)
- [PlainSimpleJsonObject](shared.md#plainsimplejsonobject)
- [PropertyType](shared.md#propertytype)
- [RxAttachmentData](shared.md#rxattachmentdata)
- [RxAttachmentDataBase](shared.md#rxattachmentdatabase)
- [RxDocumentData](shared.md#rxdocumentdata)
- [RxDocumentMeta](shared.md#rxdocumentmeta)
- [UnionToIntersection](shared.md#uniontointersection)
- [ValuesOf](shared.md#valuesof)

### Functions

- [boundEQ](shared.md#boundeq)
- [boundGE](shared.md#boundge)
- [boundGT](shared.md#boundgt)
- [boundLE](shared.md#boundle)
- [boundLT](shared.md#boundlt)
- [compareDocsWithIndex](shared.md#comparedocswithindex)
- [conditionMatches](shared.md#conditionmatches)
- [fixTxPipe](shared.md#fixtxpipe)
- [getPrivateKeyValue](shared.md#getprivatekeyvalue)
- [safeIndexList](shared.md#safeindexlist)

## Type Aliases

### DBOptions

Ƭ **DBOptions**: `RxDatabaseCreator`

#### Defined in

[packages/shared/src/index.ts:250](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L250)

___

### ExtractStaticMethods

Ƭ **ExtractStaticMethods**\<`T`\>: \{ [K in keyof T as T[K] extends Function ? K : never]: T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/shared/src/index.ts:14](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L14)

___

### MangoQuerySelector

Ƭ **MangoQuerySelector**\<`DocType`\>: `Partial`\<\{ [Property in Paths\<DocType\>]: MangoQueryOperators\<any\> \| PropertyType\<DocType, Property\> }\> & \{ `$and?`: [`MangoQuerySelector`](shared.md#mangoqueryselector)\<`DocType`\>[] ; `$nor?`: [`MangoQuerySelector`](shared.md#mangoqueryselector)\<`DocType`\>[] ; `$or?`: [`MangoQuerySelector`](shared.md#mangoqueryselector)\<`DocType`\>[]  }

#### Type parameters

| Name |
| :------ |
| `DocType` |

#### Defined in

node_modules/rxdb/dist/types/types/rx-query.d.ts:75

___

### PlainJsonValue

Ƭ **PlainJsonValue**: `string` \| `number` \| `boolean` \| [`PlainSimpleJsonObject`](shared.md#plainsimplejsonobject) \| [`PlainSimpleJsonObject`](shared.md#plainsimplejsonobject)[] \| [`PlainJsonValue`](shared.md#plainjsonvalue)[]

#### Defined in

node_modules/rxdb/dist/types/types/util.d.ts:6

___

### PlainSimpleJsonObject

Ƭ **PlainSimpleJsonObject**: `Object`

#### Index signature

▪ [k: `string`]: [`PlainJsonValue`](shared.md#plainjsonvalue) \| [`PlainJsonValue`](shared.md#plainjsonvalue)[]

#### Defined in

node_modules/rxdb/dist/types/types/util.d.ts:7

___

### PropertyType

Ƭ **PropertyType**\<`Type`, `Property`\>: `string` extends `Property` ? `unknown` : `Property` extends keyof `Type` ? `Type`[`Property`] : `Property` extends \`$\{number}\` ? `Type` extends `ReadonlyArray`\<infer ArrayType\> ? `ArrayType` : `unknown` : `Property` extends \`$\{infer Key}.$\{infer Rest}\` ? `Key` extends \`$\{number}\` ? `Type` extends `ReadonlyArray`\<infer ArrayType\> ? [`PropertyType`](shared.md#propertytype)\<`ArrayType`, `Rest`\> : `unknown` : `Key` extends keyof `Type` ? `Type`[`Key`] extends `Map`\<`string`, infer MapType\> ? `MapType` : [`PropertyType`](shared.md#propertytype)\<`Type`[`Key`], `Rest`\> : `unknown` : `unknown`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `Property` | extends `string` |

#### Defined in

node_modules/rxdb/dist/types/types/rx-query.d.ts:28

___

### RxAttachmentData

Ƭ **RxAttachmentData**: [`RxAttachmentDataBase`](shared.md#rxattachmentdatabase) & \{ `digest`: `string`  }

Meta data of the attachment
how it is send to, or comes out of the RxStorage implementation.

#### Defined in

node_modules/rxdb/dist/types/types/rx-storage.d.ts:121

___

### RxAttachmentDataBase

Ƭ **RxAttachmentDataBase**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | Size of the attachments data |
| `type` | `string` | Content type like 'plain/text' |

#### Defined in

node_modules/rxdb/dist/types/types/rx-storage.d.ts:105

___

### RxDocumentData

Ƭ **RxDocumentData**\<`T`\>: `T` & \{ `_attachments`: \{ `[attachmentId: string]`: [`RxAttachmentData`](shared.md#rxattachmentdata);  } ; `_deleted`: `boolean` ; `_meta`: [`RxDocumentMeta`](shared.md#rxdocumentmeta) ; `_rev`: `string`  }

The document data how it comes out of the storage instance.
Contains all meta data like revision, attachments and deleted-flag.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/rxdb/dist/types/types/rx-storage.d.ts:13

___

### RxDocumentMeta

Ƭ **RxDocumentMeta**: `Object`

Meta data that is attached to each document by RxDB.

#### Index signature

▪ [k: `string`]: [`PlainJsonValue`](shared.md#plainjsonvalue)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `lwt` | `number` | Last write time. Unix epoch in milliseconds. |

#### Defined in

node_modules/rxdb/dist/types/types/rx-document.d.ts:33

___

### UnionToIntersection

Ƭ **UnionToIntersection**\<`U`\>: `U` extends `any` ? (`k`: `U`) => `void` : `never` extends (`k`: infer I) => `void` ? `I` : `never`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Defined in

[packages/shared/src/index.ts:18](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L18)

___

### ValuesOf

Ƭ **ValuesOf**\<`T`\>: `T`[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/shared/src/index.ts:249](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L249)

## Functions

### boundEQ

▸ **boundEQ**\<`T`\>(`a`, `y`, `c`, `l?`, `h?`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |
| `y` | `T` |
| `c` | `Compare`\<`T`\> |
| `l?` | `any` |
| `h?` | `any` |

#### Returns

`any`

#### Defined in

[packages/shared/src/index.ts:207](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L207)

___

### boundGE

▸ **boundGE**\<`T`\>(`a`, `y`, `c`, `l?`, `h?`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |
| `y` | `T` |
| `c` | `Compare`\<`T`\> |
| `l?` | `any` |
| `h?` | `any` |

#### Returns

`any`

#### Defined in

[packages/shared/src/index.ts:195](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L195)

___

### boundGT

▸ **boundGT**\<`T`\>(`a`, `y`, `c`, `l?`, `h?`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |
| `y` | `T` |
| `c` | `Compare`\<`T`\> |
| `l?` | `any` |
| `h?` | `any` |

#### Returns

`any`

#### Defined in

[packages/shared/src/index.ts:198](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L198)

___

### boundLE

▸ **boundLE**\<`T`\>(`a`, `y`, `c`, `l?`, `h?`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |
| `y` | `T` |
| `c` | `Compare`\<`T`\> |
| `l?` | `any` |
| `h?` | `any` |

#### Returns

`any`

#### Defined in

[packages/shared/src/index.ts:204](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L204)

___

### boundLT

▸ **boundLT**\<`T`\>(`a`, `y`, `c`, `l?`, `h?`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |
| `y` | `T` |
| `c` | `Compare`\<`T`\> |
| `l?` | `any` |
| `h?` | `any` |

#### Returns

`any`

#### Defined in

[packages/shared/src/index.ts:201](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L201)

___

### compareDocsWithIndex

▸ **compareDocsWithIndex**\<`RxDocType`\>(`a`, `b`): ``1`` \| ``0`` \| ``-1``

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DocWithIndexString`](../interfaces/shared.DocWithIndexString.md)\<`RxDocType`\> |
| `b` | [`DocWithIndexString`](../interfaces/shared.DocWithIndexString.md)\<`RxDocType`\> |

#### Returns

``1`` \| ``0`` \| ``-1``

#### Defined in

[packages/shared/src/index.ts:29](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L29)

___

### conditionMatches

▸ **conditionMatches**\<`RxDocType`\>(`selector`, `key`, `document`): `boolean`

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`MangoQuerySelector`](shared.md#mangoqueryselector)\<`RxDocType`\> |
| `key` | `string` |
| `document` | [`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\> |

#### Returns

`boolean`

#### Defined in

[packages/shared/src/index.ts:42](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L42)

___

### fixTxPipe

▸ **fixTxPipe**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[packages/shared/src/index.ts:211](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L211)

___

### getPrivateKeyValue

▸ **getPrivateKeyValue**\<`RxDocType`\>(`document`, `schema`): `string`

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\> |
| `schema` | `Readonly`\<[`RxJsonSchema`](leveldb.md#rxjsonschema)\<[`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>\>\> |

#### Returns

`string`

#### Defined in

[packages/shared/src/index.ts:240](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L240)

___

### safeIndexList

▸ **safeIndexList**\<`RxDocType`\>(`schema`): `string`[][]

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `Readonly`\<[`RxJsonSchema`](leveldb.md#rxjsonschema)\<[`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>\>\> |

#### Returns

`string`[][]

#### Defined in

[packages/shared/src/index.ts:220](https://github.com/atala-community-projects/pluto-encrypted/blob/5df4bd7/packages/shared/src/index.ts#L220)
