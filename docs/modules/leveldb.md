[@pluto-encrypted](../README.md) / [Exports](../modules.md) / leveldb

# Module: leveldb

**`Description`**

This is a RXDB LevelDB storage that supports encryption middleware.
In order to use this in your pluto-encrypted database you must write the following code:
Creating a LevelDB compatible storage is very simple.

```typescript
import { createLevelDBStorage } from "@pluto-encrypted/leveldb";
import { Database } from "@pluto-encrypted/database";
//default password must be 32 bytes long
const defaultPassword = new Uint8Array(32).fill(1);
const database = db = await Database.createEncrypted({
         name: `my-db`,
         encryptionKey: defaultPassword,
         storage: createLevelDBStorage({
         dbName: "demo",
         dbPath: "/tmp/demo"
      })
});
```

## Table of contents

### Interfaces

- [LevelDBStorageInternals](../interfaces/leveldb.LevelDBStorageInternals.md)
- [TopLevelProperty](../interfaces/leveldb.TopLevelProperty.md)

### Type Aliases

- [CRDTSchemaOptions](leveldb.md#crdtschemaoptions)
- [CompressionMode](leveldb.md#compressionmode)
- [DefaultPreparedQuery](leveldb.md#defaultpreparedquery)
- [FilledMangoQuery](leveldb.md#filledmangoquery)
- [IndexType](leveldb.md#indextype)
- [LevelDBDataIndex](leveldb.md#leveldbdataindex)
- [LevelDBDataStructure](leveldb.md#leveldbdatastructure)
- [LevelDBInternalConstructor](leveldb.md#leveldbinternalconstructor)
- [LevelDBPreparedQuery](leveldb.md#leveldbpreparedquery)
- [LevelDBSettings](leveldb.md#leveldbsettings)
- [LevelDBType](leveldb.md#leveldbtype)
- [MangoQuery](leveldb.md#mangoquery)
- [MangoQueryNoLimit](leveldb.md#mangoquerynolimit)
- [MangoQuerySelectorAndIndex](leveldb.md#mangoqueryselectorandindex)
- [MangoQuerySortDirection](leveldb.md#mangoquerysortdirection)
- [MangoQuerySortPart](leveldb.md#mangoquerysortpart)
- [PrimaryKey](leveldb.md#primarykey)
- [RxJsonSchema](leveldb.md#rxjsonschema)
- [RxQueryPlan](leveldb.md#rxqueryplan)
- [RxQueryPlanKey](leveldb.md#rxqueryplankey)
- [RxStorageLevelDBType](leveldb.md#rxstorageleveldbtype)
- [StringKeys](leveldb.md#stringkeys)

### Properties

- [Level](leveldb.md#level)

### Functions

- [createLevelDBStorage](leveldb.md#createleveldbstorage)

## Type Aliases

### CRDTSchemaOptions

Ƭ **CRDTSchemaOptions**\<`RxDocType`\>: `Object`

Options for the crdt plugin.
We set these in the schema because changing them
is not possible on the fly because it would
destroy the document state in an unpredictable way.

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | [`StringKeys`](leveldb.md#stringkeys)\<`RxDocType`\> \| `string` | Determines which field of the document must be used to store the crdt operations. The given field must exist with the content of "CRDT_FIELD_SCHEMA" in the properties part of your schema. |

#### Defined in

node_modules/rxdb/dist/types/types/plugins/crdt.d.ts:18

___

### CompressionMode

Ƭ **CompressionMode**: ``"deflate"``

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/API/Compression_Streams_API
Notice that atm we only support the deflate mode because firefox
does not support the CompressionStream API.

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:89

___

### DefaultPreparedQuery

Ƭ **DefaultPreparedQuery**\<`RxDocType`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `query` | [`FilledMangoQuery`](leveldb.md#filledmangoquery)\<`RxDocType`\> |
| `queryPlan` | [`RxQueryPlan`](leveldb.md#rxqueryplan) |

#### Defined in

node_modules/rxdb/dist/types/types/rx-storage.interface.d.ts:148

___

### FilledMangoQuery

Ƭ **FilledMangoQuery**\<`RxDocType`\>: `Override`\<[`MangoQuery`](leveldb.md#mangoquery)\<`RxDocType`\>, \{ `index?`: `string`[] ; `selector`: [`MangoQuerySelector`](shared.md#mangoqueryselector)\<`RxDocType`\> ; `skip`: `number` ; `sort`: [`MangoQuerySortPart`](leveldb.md#mangoquerysortpart)\<`RxDocType`\>[]  }\>

User provided mango queries will be filled up by RxDB via normalizeMangoQuery()
so we do not have to do many if-field-exist tests in the internals.

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Defined in

node_modules/rxdb/dist/types/types/rx-storage.interface.d.ts:75

___

### IndexType

Ƭ **IndexType**: `string` \| `number`

Index of a table can be a string or a number

#### Defined in

[packages/leveldb/src/leveldb/types.ts:7](https://github.com/atala-community-projects/pluto-encrypted/blob/5082617/packages/leveldb/src/leveldb/types.ts#L7)

___

### LevelDBDataIndex

Ƭ **LevelDBDataIndex**: `Map`\<[`IndexType`](leveldb.md#indextype), [`IndexType`](leveldb.md#indextype)[]\>

Data type for index keystorage
I used this to get faster searches based on what RXDB indexes we were
informed

#### Defined in

[packages/leveldb/src/leveldb/types.ts:18](https://github.com/atala-community-projects/pluto-encrypted/blob/5082617/packages/leveldb/src/leveldb/types.ts#L18)

___

### LevelDBDataStructure

Ƭ **LevelDBDataStructure**\<`RxDocType`\>: `Map`\<[`IndexType`](leveldb.md#indextype), [`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>\>

LevelDB internal data structure is a Map with an index
and RxDocumentData from RXDB

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Defined in

[packages/leveldb/src/leveldb/types.ts:12](https://github.com/atala-community-projects/pluto-encrypted/blob/5082617/packages/leveldb/src/leveldb/types.ts#L12)

___

### LevelDBInternalConstructor

Ƭ **LevelDBInternalConstructor**\<`RxDocType`\>: \{ `dbPath`: `string` ; `documents?`: `Map`\<`string`, [`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>\> ; `refCount`: `number` ; `schema`: [`RxJsonSchema`](leveldb.md#rxjsonschema)\<[`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>\>  } \| \{ `documents?`: `Map`\<`string`, [`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>\> ; `level`: [`LevelDBType`](leveldb.md#leveldbtype) ; `refCount`: `number` ; `schema`: [`RxJsonSchema`](leveldb.md#rxjsonschema)\<[`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>\>  }

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Defined in

[packages/leveldb/src/leveldb/types.ts:24](https://github.com/atala-community-projects/pluto-encrypted/blob/5082617/packages/leveldb/src/leveldb/types.ts#L24)

___

### LevelDBPreparedQuery

Ƭ **LevelDBPreparedQuery**\<`DocType`\>: [`DefaultPreparedQuery`](leveldb.md#defaultpreparedquery)\<`DocType`\>

#### Type parameters

| Name |
| :------ |
| `DocType` |

#### Defined in

[packages/leveldb/src/leveldb/types.ts:23](https://github.com/atala-community-projects/pluto-encrypted/blob/5082617/packages/leveldb/src/leveldb/types.ts#L23)

___

### LevelDBSettings

Ƭ **LevelDBSettings**: \{ `dbPath`: `string`  } \| \{ `level`: [`LevelDBType`](leveldb.md#leveldbtype)  }

#### Defined in

[packages/leveldb/src/leveldb/types.ts:60](https://github.com/atala-community-projects/pluto-encrypted/blob/5082617/packages/leveldb/src/leveldb/types.ts#L60)

___

### LevelDBType

Ƭ **LevelDBType**: [`Level`](leveldb.md#level)\<`string`, `string`\>

Query type for LevelDB

#### Defined in

[packages/leveldb/src/leveldb/types.ts:22](https://github.com/atala-community-projects/pluto-encrypted/blob/5082617/packages/leveldb/src/leveldb/types.ts#L22)

___

### MangoQuery

Ƭ **MangoQuery**\<`RxDocType`\>: [`MangoQueryNoLimit`](leveldb.md#mangoquerynolimit)\<`RxDocType`\> & \{ `limit?`: `number` ; `skip?`: `number`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RxDocType` | `any` |

#### Defined in

node_modules/rxdb/dist/types/types/rx-query.d.ts:124

___

### MangoQueryNoLimit

Ƭ **MangoQueryNoLimit**\<`RxDocType`\>: [`MangoQuerySelectorAndIndex`](leveldb.md#mangoqueryselectorandindex)\<`RxDocType`\> & \{ `sort?`: [`MangoQuerySortPart`](leveldb.md#mangoquerysortpart)\<`RxDocType`\>[]  }

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Defined in

node_modules/rxdb/dist/types/types/rx-query.d.ts:111

___

### MangoQuerySelectorAndIndex

Ƭ **MangoQuerySelectorAndIndex**\<`RxDocType`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RxDocType` | `any` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `index?` | `string` \| `string`[] | By default, the RxStorage implementation decides which index to use when running the query. For better performance, a different index might be defined by setting it in the query. How this improves performance and if the defined index is used, depends on the RxStorage implementation. |
| `selector?` | [`MangoQuerySelector`](shared.md#mangoqueryselector)\<`RxDocType`\> | Selector is optional, if not given, the query matches all documents that are not _deleted=true. |

#### Defined in

node_modules/rxdb/dist/types/types/rx-query.d.ts:92

___

### MangoQuerySortDirection

Ƭ **MangoQuerySortDirection**: ``"asc"`` \| ``"desc"``

Discussion was at:

**`Link`**

https://github.com/pubkey/rxdb/issues/1972

#### Defined in

node_modules/rxdb/dist/types/types/rx-query.d.ts:87

___

### MangoQuerySortPart

Ƭ **MangoQuerySortPart**\<`RxDocType`\>: \{ [k in StringKeys\<RxDocType\> \| string]: MangoQuerySortDirection }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RxDocType` | `any` |

#### Defined in

node_modules/rxdb/dist/types/types/rx-query.d.ts:88

___

### PrimaryKey

Ƭ **PrimaryKey**\<`RxDocType`\>: [`StringKeys`](leveldb.md#stringkeys)\<`RxDocType`\> \| `CompositePrimaryKey`\<`RxDocType`\>

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:33

___

### RxJsonSchema

Ƭ **RxJsonSchema**\<`RxDocType`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `additionalProperties?` | ``false`` | if not set, rxdb will set 'false' as default Having additionalProperties: true is not allowed on the root level to ensure that property names do not clash with properties of the RxDocument class or ORM methods. |
| `attachments?` | \{ `compression?`: [`CompressionMode`](leveldb.md#compressionmode) ; `encrypted?`: `boolean`  } | - |
| `attachments.compression?` | [`CompressionMode`](leveldb.md#compressionmode) | **`Link`** https://developer.mozilla.org/en-US/docs/Web/API/Compression_Streams_API |
| `attachments.encrypted?` | `boolean` | - |
| `crdt?` | [`CRDTSchemaOptions`](leveldb.md#crdtschemaoptions)\<`RxDocType`\> | - |
| `description?` | `string` | - |
| `encrypted?` | `string`[] \| readonly `string`[] | - |
| `indexes?` | (`string` \| `string`[])[] \| (`string` \| readonly `string`[])[] \| readonly (`string` \| `string`[])[] \| readonly (`string` \| readonly `string`[])[] | - |
| `keyCompression?` | `boolean` | - |
| `primaryKey` | [`PrimaryKey`](leveldb.md#primarykey)\<`RxDocType`\> | The primary key of the documents. Must be in the top level of the properties of the schema and that property must have the type 'string' |
| `properties` | \{ [key in StringKeys\<RxDocType\>]: TopLevelProperty } | - |
| `required?` | [`StringKeys`](leveldb.md#stringkeys)\<`RxDocType`\>[] \| readonly [`StringKeys`](leveldb.md#stringkeys)\<`RxDocType`\>[] | On the top level the required-array must be set because we always have to set the primary key to required. TODO required should be made non-optional on the top level |
| `sharding?` | \{ `mode`: ``"database"`` \| ``"collection"`` ; `shards`: `number`  } | Options for the sharding plugin of rxdb-premium. We set these on the schema because changing the shard amount or mode will require a migration. **`Link`** https://rxdb.info/rx-storage-sharding.html |
| `sharding.mode` | ``"database"`` \| ``"collection"`` | Either shard by collection or by database. For most use cases (IndexedDB based storages), sharding by collection is the way to go because it has a faster initial load time. |
| `sharding.shards` | `number` | Amount of shards. This value cannot be changed after you have stored data, if you change it anyway, you will loose the existing data. |
| `title?` | `string` | - |
| `type` | ``"object"`` \| `string` | TODO this looks like a typescript-bug we have to allows all string because the 'object'-literal is not recognized retry this in later typescript-versions |
| `version` | `number` | - |

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:91

___

### RxQueryPlan

Ƭ **RxQueryPlan**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `endKeys` | [`RxQueryPlanKey`](leveldb.md#rxqueryplankey)[] | - |
| `inclusiveEnd` | `boolean` | True if the last matching document must also be included into the result set. |
| `inclusiveStart` | `boolean` | True if the first matching document must also be included into the result set. |
| `index` | `string`[] | - |
| `selectorSatisfiedByIndex` | `boolean` | If the whole selector matching is satisfied by the index, we do not have to run a does-document-data-match-query stuff. |
| `sortFieldsSameAsIndexFields` | `boolean` | If the index does not match the sort params, we have to resort the query results. |
| `startKeys` | [`RxQueryPlanKey`](leveldb.md#rxqueryplankey)[] | TODO add a flag that determines if we have to run the selector matching on all results or if the used index anyway matches ALL operators. |

#### Defined in

node_modules/rxdb/dist/types/types/query-planner.d.ts:18

___

### RxQueryPlanKey

Ƭ **RxQueryPlanKey**: `string` \| `number` \| `undefined`

#### Defined in

node_modules/rxdb/dist/types/types/query-planner.d.ts:1

___

### RxStorageLevelDBType

Ƭ **RxStorageLevelDBType**\<`RxDocType`\>: [`RxStorage`](../interfaces/encryption.RxStorage.md)\<`RxDocType`, [`LevelDBSettings`](leveldb.md#leveldbsettings)\>

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Defined in

[packages/leveldb/src/leveldb/types.ts:58](https://github.com/atala-community-projects/pluto-encrypted/blob/5082617/packages/leveldb/src/leveldb/types.ts#L58)

___

### StringKeys

Ƭ **StringKeys**\<`X`\>: `Extract`\<keyof `X`, `string`\>

Can be used like 'keyof'
but only represents the string keys, not the Symbols or numbers.

**`Link`**

https://stackoverflow.com/a/51808262/3443137

#### Type parameters

| Name |
| :------ |
| `X` |

#### Defined in

node_modules/rxdb/dist/types/types/util.d.ts:50

## Properties

### Level

• **Level**: `any`

## Functions

### createLevelDBStorage

▸ **createLevelDBStorage**(`settings`): [`RxStorage`](../interfaces/encryption.RxStorage.md)\<`unknown`, [`LevelDBSettings`](leveldb.md#leveldbsettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`LevelDBSettings`](leveldb.md#leveldbsettings) |

#### Returns

[`RxStorage`](../interfaces/encryption.RxStorage.md)\<`unknown`, [`LevelDBSettings`](leveldb.md#leveldbsettings)\>

#### Defined in

[packages/leveldb/src/index.ts:97](https://github.com/atala-community-projects/pluto-encrypted/blob/5082617/packages/leveldb/src/index.ts#L97)
