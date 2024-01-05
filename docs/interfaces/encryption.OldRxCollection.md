[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [encryption](../modules/encryption.md) / OldRxCollection

# Interface: OldRxCollection

[encryption](../modules/encryption.md).OldRxCollection

## Table of contents

### Properties

- [\_migrate](encryption.OldRxCollection.md#_migrate)
- [\_migratePromise](encryption.OldRxCollection.md#_migratepromise)
- [dataMigrator](encryption.OldRxCollection.md#datamigrator)
- [database](encryption.OldRxCollection.md#database)
- [newestCollection](encryption.OldRxCollection.md#newestcollection)
- [schema](encryption.OldRxCollection.md#schema)
- [storageInstance](encryption.OldRxCollection.md#storageinstance)
- [version](encryption.OldRxCollection.md#version)

## Properties

### \_migrate

• `Optional` **\_migrate**: `boolean`

#### Defined in

[packages/encryption/src/migration/index.ts:22](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/encryption/src/migration/index.ts#L22)

___

### \_migratePromise

• `Optional` **\_migratePromise**: `Promise`\<`any`\>

#### Defined in

[packages/encryption/src/migration/index.ts:23](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/encryption/src/migration/index.ts#L23)

___

### dataMigrator

• **dataMigrator**: [`EncryptedDataMigrator`](../classes/encryption.EncryptedDataMigrator.md)

#### Defined in

[packages/encryption/src/migration/index.ts:19](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/encryption/src/migration/index.ts#L19)

___

### database

• **database**: `RxDatabase`

#### Defined in

[packages/encryption/src/migration/index.ts:21](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/encryption/src/migration/index.ts#L21)

___

### newestCollection

• **newestCollection**: `RxCollection`

#### Defined in

[packages/encryption/src/migration/index.ts:20](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/encryption/src/migration/index.ts#L20)

___

### schema

• **schema**: `RxSchema`\<`any`\>

#### Defined in

[packages/encryption/src/migration/index.ts:17](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/encryption/src/migration/index.ts#L17)

___

### storageInstance

• **storageInstance**: `RxStorageInstance`\<`any`, `any`, `any`, `any`\>

#### Defined in

[packages/encryption/src/migration/index.ts:18](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/encryption/src/migration/index.ts#L18)

___

### version

• **version**: `number`

#### Defined in

[packages/encryption/src/migration/index.ts:16](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/encryption/src/migration/index.ts#L16)
