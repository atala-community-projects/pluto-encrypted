[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [encryption](../modules/encryption.md) / RxStorage

# Interface: RxStorage\<Internals, InstanceCreationOptions\>

[encryption](../modules/encryption.md).RxStorage

A RxStorage is a module that acts
as a factory that can create multiple RxStorageInstance
objects.

All data inputs and outputs of a StorageInstance must be plain json objects.
Do not use Map, Set or anything else that cannot be JSON.stringify-ed.
This will ensure that the storage can exchange data
when it is a WebWorker or a WASM process or data is send via BroadcastChannel.

## Type parameters

| Name |
| :------ |
| `Internals` |
| `InstanceCreationOptions` |

## Table of contents

### Properties

- [name](encryption.RxStorage.md#name)
- [statics](encryption.RxStorage.md#statics)

### Methods

- [createStorageInstance](encryption.RxStorage.md#createstorageinstance)

## Properties

### name

• `Readonly` **name**: `string`

name of the storage engine
used to detect if plugins do not work so we can throw proper errors.

#### Defined in

node_modules/rxdb/dist/types/types/rx-storage.interface.d.ts:54

___

### statics

• `Readonly` **statics**: `Readonly`\<\{ `checkpointSchema`: `DeepReadonlyObject`\<`JsonSchema`\> ; `prepareQuery`: \<RxDocType\>(`schema`: [`RxJsonSchema`](../modules/leveldb.md#rxjsonschema)\<[`RxDocumentData`](../modules/shared.md#rxdocumentdata)\<`RxDocType`\>\>, `mutateableQuery`: [`FilledMangoQuery`](../modules/leveldb.md#filledmangoquery)\<`RxDocType`\>) => `any`  }\>

Static functions

#### Defined in

node_modules/rxdb/dist/types/types/rx-storage.interface.d.ts:59

## Methods

### createStorageInstance

▸ **createStorageInstance**\<`RxDocType`\>(`params`): `Promise`\<`RxStorageInstance`\<`RxDocType`, `Internals`, `InstanceCreationOptions`, `any`\>\>

Creates a storage instance
that can contain the NoSQL documents of a collection.

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `RxStorageInstanceCreationParams`\<`RxDocType`, `InstanceCreationOptions`\> |

#### Returns

`Promise`\<`RxStorageInstance`\<`RxDocType`, `Internals`, `InstanceCreationOptions`, `any`\>\>

#### Defined in

node_modules/rxdb/dist/types/types/rx-storage.interface.d.ts:65
