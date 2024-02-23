[@pluto-encrypted](../README.md) / [Exports](../modules.md) / encryption

# Module: encryption

**`Description`**

This package is an rxdb encryption layer, a replacement for the vulnerable crypto-js dependency provided by the free version of rxDB.
The package can be used outside or Pluto as its fully compatible with RXDB.

**`Examples`**

In order to use this package in any RXDB environment type the following code.
Install the package with npm

```bash
npm i @pluto-encrypted/encryption --save
```
or with yarn
```bash
npm i @pluto-encrypted/encryption --save
```

Integrate in your existing RXDB storage.
```typescript
import { wrappedKeyEncryptionStorage } from "@pluto-encrypted/encryption";
import { RxStorage } from "rxdb";
const storage: RxStorage<any, any> = wrappedKeyEncryptionStorage({
    storage: [[ADD your RXDB instance here]],
})
export default storage;
```

## Table of contents

### Classes

- [EncryptedDataMigrator](../classes/encryption.EncryptedDataMigrator.md)

### Interfaces

- [EncryptableStorageType](../interfaces/encryption.EncryptableStorageType.md)
- [MigrationStateWithCollection](../interfaces/encryption.MigrationStateWithCollection.md)
- [OldRxCollection](../interfaces/encryption.OldRxCollection.md)
- [RxStorage](../interfaces/encryption.RxStorage.md)

### Type Aliases

- [CipherWithOutput](encryption.md#cipherwithoutput)
- [InternalStorePasswordDocType](encryption.md#internalstorepassworddoctype)

### Functions

- [\_getOldCollections](encryption.md#_getoldcollections)
- [\_migrateDocuments](encryption.md#_migratedocuments)
- [createOldCollection](encryption.md#createoldcollection)
- [decryptString](encryption.md#decryptstring)
- [deleteOldCollection](encryption.md#deleteoldcollection)
- [encryptString](encryption.md#encryptstring)
- [getBatchOfOldCollection](encryption.md#getbatchofoldcollection)
- [getMigrationStateByDatabase](encryption.md#getmigrationstatebydatabase)
- [getOldCollectionDocs](encryption.md#getoldcollectiondocs)
- [isDocumentDataWithoutRevisionEqual](encryption.md#isdocumentdatawithoutrevisionequal)
- [migrateDocumentData](encryption.md#migratedocumentdata)
- [mustMigrate](encryption.md#mustmigrate)
- [onDatabaseDestroy](encryption.md#ondatabasedestroy)
- [runStrategyIfNotNull](encryption.md#runstrategyifnotnull)
- [wrappedKeyEncryptionStorage](encryption.md#wrappedkeyencryptionstorage)

## Type Aliases

### CipherWithOutput

Ƭ **CipherWithOutput**: `Cipher` & \{ `decrypt`: (`ciphertext`: `Uint8Array`, `output?`: `Uint8Array`) => `Uint8Array` ; `encrypt`: (`plaintext`: `Uint8Array`, `output?`: `Uint8Array`) => `Uint8Array`  }

#### Defined in

node_modules/@noble/ciphers/utils.d.ts:62

___

### InternalStorePasswordDocType

Ƭ **InternalStorePasswordDocType**: `InternalStoreDocType`\<\{ `hash`: `string`  }\>

#### Defined in

[packages/encryption/src/index.ts:106](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/index.ts#L106)

## Functions

### \_getOldCollections

▸ **_getOldCollections**(`dataMigrator`): `Promise`\<[`OldRxCollection`](../interfaces/encryption.OldRxCollection.md)[]\>

get an array with OldCollection-instances from all existing old storage-instances

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataMigrator` | [`EncryptedDataMigrator`](../classes/encryption.EncryptedDataMigrator.md) |

#### Returns

`Promise`\<[`OldRxCollection`](../interfaces/encryption.OldRxCollection.md)[]\>

#### Defined in

[packages/encryption/src/migration/index.ts:140](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L140)

___

### \_migrateDocuments

▸ **_migrateDocuments**\<`RxDocType`\>(`oldCollection`, `documentsData`): `Promise`\<\{ `doc`: `any` ; `type`: `string`  }[]\>

transform documents data and save them to the new collection

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldCollection` | [`OldRxCollection`](../interfaces/encryption.OldRxCollection.md) |
| `documentsData` | [`RxDocumentData`](shared.md#rxdocumentdata)\<`RxDocType`\>[] |

#### Returns

`Promise`\<\{ `doc`: `any` ; `type`: `string`  }[]\>

status-action with status and migrated document

#### Defined in

[packages/encryption/src/migration/index.ts:287](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L287)

___

### createOldCollection

▸ **createOldCollection**(`version`, `schemaObj`, `dataMigrator`): `Promise`\<[`OldRxCollection`](../interfaces/encryption.OldRxCollection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |
| `schemaObj` | [`RxJsonSchema`](leveldb.md#rxjsonschema)\<`any`\> |
| `dataMigrator` | [`EncryptedDataMigrator`](../classes/encryption.EncryptedDataMigrator.md) |

#### Returns

`Promise`\<[`OldRxCollection`](../interfaces/encryption.OldRxCollection.md)\>

#### Defined in

[packages/encryption/src/migration/index.ts:79](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L79)

___

### decryptString

▸ **decryptString**(`chacha`, `cipherText`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chacha` | [`CipherWithOutput`](encryption.md#cipherwithoutput) |
| `cipherText` | `string` |

#### Returns

`string`

#### Defined in

[packages/encryption/src/index.ts:78](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/index.ts#L78)

___

### deleteOldCollection

▸ **deleteOldCollection**(`oldCollection`): `Promise`\<`void`\>

deletes this.storageInstance and removes it from the database.collectionsCollection

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldCollection` | [`OldRxCollection`](../interfaces/encryption.OldRxCollection.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/encryption/src/migration/index.ts:426](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L426)

___

### encryptString

▸ **encryptString**(`chacha`, `value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chacha` | [`CipherWithOutput`](encryption.md#cipherwithoutput) |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[packages/encryption/src/index.ts:63](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/index.ts#L63)

___

### getBatchOfOldCollection

▸ **getBatchOfOldCollection**(`oldCollection`, `batchSize`, `notMatching`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldCollection` | [`OldRxCollection`](../interfaces/encryption.OldRxCollection.md) |
| `batchSize` | `number` |
| `notMatching` | `any`[] |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[packages/encryption/src/migration/index.ts:193](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L193)

___

### getMigrationStateByDatabase

▸ **getMigrationStateByDatabase**(`database`): `BehaviorSubject`\<`Observable`\<[`MigrationStateWithCollection`](../interfaces/encryption.MigrationStateWithCollection.md)\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `database` | `RxDatabase` |

#### Returns

`BehaviorSubject`\<`Observable`\<[`MigrationStateWithCollection`](../interfaces/encryption.MigrationStateWithCollection.md)\>[]\>

#### Defined in

[packages/encryption/src/migration/index.ts:447](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L447)

___

### getOldCollectionDocs

▸ **getOldCollectionDocs**(`dataMigrator`): `Promise`\<[`RxDocumentData`](shared.md#rxdocumentdata)\<`InternalStoreCollectionDocType`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataMigrator` | [`EncryptedDataMigrator`](../classes/encryption.EncryptedDataMigrator.md) |

#### Returns

`Promise`\<[`RxDocumentData`](shared.md#rxdocumentdata)\<`InternalStoreCollectionDocType`\>[]\>

#### Defined in

[packages/encryption/src/migration/index.ts:121](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L121)

___

### isDocumentDataWithoutRevisionEqual

▸ **isDocumentDataWithoutRevisionEqual**\<`T`\>(`doc1`, `doc2`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc1` | `T` |
| `doc2` | `T` |

#### Returns

`boolean`

#### Defined in

[packages/encryption/src/migration/index.ts:271](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L271)

___

### migrateDocumentData

▸ **migrateDocumentData**(`oldCollection`, `docData`): `Promise`\<`any` \| ``null``\>

runs the doc-data through all following migrationStrategies
so it will match the newest schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldCollection` | [`OldRxCollection`](../interfaces/encryption.OldRxCollection.md) |
| `docData` | `any` |

#### Returns

`Promise`\<`any` \| ``null``\>

final object or null if migrationStrategy deleted it

**`Throws`**

Error if final doc does not match final schema or migrationStrategy crashes

#### Defined in

[packages/encryption/src/migration/index.ts:226](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L226)

___

### mustMigrate

▸ **mustMigrate**(`dataMigrator`): `Promise`\<`boolean`\>

returns true if a migration is needed

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataMigrator` | [`EncryptedDataMigrator`](../classes/encryption.EncryptedDataMigrator.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/encryption/src/migration/index.ts:161](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L161)

___

### onDatabaseDestroy

▸ **onDatabaseDestroy**(`database`): `void`

Complete on database destroy
so people do not have to unsubscribe

#### Parameters

| Name | Type |
| :------ | :------ |
| `database` | `RxDatabase` |

#### Returns

`void`

#### Defined in

[packages/encryption/src/migration/index.ts:459](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L459)

___

### runStrategyIfNotNull

▸ **runStrategyIfNotNull**(`oldCollection`, `version`, `docOrNull`): `Promise`\<`any` \| ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldCollection` | [`OldRxCollection`](../interfaces/encryption.OldRxCollection.md) |
| `version` | `number` |
| `docOrNull` | `any` |

#### Returns

`Promise`\<`any` \| ``null``\>

#### Defined in

[packages/encryption/src/migration/index.ts:175](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/migration/index.ts#L175)

___

### wrappedKeyEncryptionStorage

▸ **wrappedKeyEncryptionStorage**\<`Internals`, `InstanceCreationOptions`\>(`args`): [`RxStorage`](../interfaces/encryption.RxStorage.md)\<`Internals`, `InstanceCreationOptions`\>

Create encrypted storage for pluto-encrypted

#### Type parameters

| Name |
| :------ |
| `Internals` |
| `InstanceCreationOptions` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`EncryptableStorageType`](../interfaces/encryption.EncryptableStorageType.md)\<`Internals`, `InstanceCreationOptions`\> | { storage: RxStorage<Internals, InstanceCreationOptions>; } |

#### Returns

[`RxStorage`](../interfaces/encryption.RxStorage.md)\<`Internals`, `InstanceCreationOptions`\>

RxStorage<Internals, InstanceCreationOptions>

#### Defined in

[packages/encryption/src/index.ts:119](https://github.com/atala-community-projects/pluto-encrypted/blob/b730e61/packages/encryption/src/index.ts#L119)
