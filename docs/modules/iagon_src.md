[@pluto-encrypted](../README.md) / [Exports](../modules.md) / iagon/src

# Module: iagon/src

## Table of contents

### Enumerations

- [VISIBILITY](../enums/iagon_src.VISIBILITY.md)

### Classes

- [IagonAPI](../classes/iagon_src.IagonAPI.md)
- [IagonInternals](../classes/iagon_src.IagonInternals.md)
- [IagonStorageInstance](../classes/iagon_src.IagonStorageInstance.md)

### Type Aliases

- [IagonFile](iagon_src.md#iagonfile)
- [IagonFolder](iagon_src.md#iagonfolder)
- [IagonInternalParameters](iagon_src.md#iagoninternalparameters)
- [IagonResponse](iagon_src.md#iagonresponse)
- [IagonStorageInternals](iagon_src.md#iagonstorageinternals)

### Functions

- [createIagonStorage](iagon_src.md#createiagonstorage)

## Type Aliases

### IagonFile

Ƭ **IagonFile**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__v` | `number` |
| `_id` | `string` |
| `availability` | `string` |
| `client_id` | `string` |
| `createdAt` | `string` |
| `file_size_byte_encrypted` | ``24`` |
| `file_size_byte_native` | ``0`` |
| `index_listing` | `boolean` |
| `name` | `string` |
| `parent_directory_id` | `string` \| ``null`` |
| `path` | `string` |
| `region` | `string` \| ``null`` |
| `unique_id` | `string` |
| `updated_at` | `string` |
| `visibility` | [`VISIBILITY`](../enums/iagon_src.VISIBILITY.md) |

#### Defined in

[packages/iagon/src/IagonStorage/types.ts:28](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/types.ts#L28)

___

### IagonFolder

Ƭ **IagonFolder**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__v` | `number` |
| `_id` | `string` |
| `client_id` | `string` |
| `created_at` | `string` |
| `directory_name` | `string` |
| `index_listing` | `boolean` |
| `parent_directory_id` | `string` \| ``null`` |
| `path` | `string` |
| `updated_at` | `string` |
| `visibility` | [`VISIBILITY`](../enums/iagon_src.VISIBILITY.md) |

#### Defined in

[packages/iagon/src/IagonStorage/types.ts:15](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/types.ts#L15)

___

### IagonInternalParameters

Ƭ **IagonInternalParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey` | `string` |
| `password` | `Uint8Array` |

#### Defined in

[packages/iagon/src/IagonStorage/types.ts:5](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/types.ts#L5)

___

### IagonResponse

Ƭ **IagonResponse**\<`Data`\>: \{ `data`: `Data` ; `success`: ``true``  } \| \{ `message`: `string` ; `success`: ``false``  }

#### Type parameters

| Name |
| :------ |
| `Data` |

#### Defined in

[packages/iagon/src/IagonStorage/types.ts:46](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/types.ts#L46)

___

### IagonStorageInternals

Ƭ **IagonStorageInternals**\<`RxDocType`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__collectionFolder` | [`IagonFolder`](iagon_src.md#iagonfolder) |
| `__dataFolder` | [`IagonFolder`](iagon_src.md#iagonfolder) |
| `__databaseFolder` | [`IagonFolder`](iagon_src.md#iagonfolder) |
| `__indexFolder` | [`IagonFolder`](iagon_src.md#iagonfolder) |
| `refCount` | `number` |
| `addDoc` | (`docId`: `string`, `document`: [`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>) => `Promise`\<`void`\> |
| `bulkGet` | (`keys`: `string`[]) => `Promise`\<`RxDocumentDataById`\<`RxDocType`\>\> |
| `bulkPut` | (`items`: [`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>[], `collectionName`: `string`, `schema`: `Readonly`\<[`RxJsonSchema`](leveldb.md#rxjsonschema)\<[`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>\>\>) => `Promise`\<`void`\> |
| `get` | (`key`: `string`) => `Promise`\<``null`` \| [`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>\> |
| `getDBDirectory` | (`databaseName`: `string`) => `Promise`\<[`IagonFolder`](iagon_src.md#iagonfolder)\> |
| `getIndex` | (`key`: `string`) => `Promise`\<`string`[]\> |
| `initialiseDB` | (`databaseName`: `string`, `collectionName`: `string`) => `Promise`\<`void`\> |
| `removeDoc` | (`docId`: `string`) => `Promise`\<`void`\> |
| `removeFromIndex` | (`indexName`: `string`, `docId`: `string`) => `Promise`\<`void`\> |
| `updateIndex` | (`indexName`: `string`, `docId`: `string`) => `Promise`\<`void`\> |

#### Defined in

[packages/iagon/src/IagonStorage/types.ts:54](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/types.ts#L54)

## Functions

### createIagonStorage

▸ **createIagonStorage**(`parameters`): [`RxStorage`](../interfaces/encryption.RxStorage.md)\<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IagonInternalParameters`](iagon_src.md#iagoninternalparameters) |

#### Returns

[`RxStorage`](../interfaces/encryption.RxStorage.md)\<`any`, `any`\>

#### Defined in

[packages/iagon/src/IagonStorage/index.ts:60](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/iagon/src/IagonStorage/index.ts#L60)
