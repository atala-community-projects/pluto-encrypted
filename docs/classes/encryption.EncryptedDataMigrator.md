[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [encryption](../modules/encryption.md) / EncryptedDataMigrator

# Class: EncryptedDataMigrator

[encryption](../modules/encryption.md).EncryptedDataMigrator

## Table of contents

### Constructors

- [constructor](encryption.EncryptedDataMigrator.md#constructor)

### Properties

- [currentSchema](encryption.EncryptedDataMigrator.md#currentschema)
- [database](encryption.EncryptedDataMigrator.md#database)
- [migrationStrategies](encryption.EncryptedDataMigrator.md#migrationstrategies)
- [name](encryption.EncryptedDataMigrator.md#name)
- [newestCollection](encryption.EncryptedDataMigrator.md#newestcollection)

### Methods

- [countAllDocuments](encryption.EncryptedDataMigrator.md#countalldocuments)
- [migratePromise](encryption.EncryptedDataMigrator.md#migratepromise)

## Constructors

### constructor

• **new EncryptedDataMigrator**(`newestCollection`, `migrationStrategies`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newestCollection` | `RxCollection` |
| `migrationStrategies` | `NumberFunctionMap` |

#### Defined in

[packages/encryption/src/migration/index.ts:28](https://github.com/atala-community-projects/pluto-encrypted/blob/6657898/packages/encryption/src/migration/index.ts#L28)

## Properties

### currentSchema

• **currentSchema**: `RxSchema`\<`any`\>

#### Defined in

[packages/encryption/src/migration/index.ts:37](https://github.com/atala-community-projects/pluto-encrypted/blob/6657898/packages/encryption/src/migration/index.ts#L37)

___

### database

• **database**: `RxDatabase`

#### Defined in

[packages/encryption/src/migration/index.ts:38](https://github.com/atala-community-projects/pluto-encrypted/blob/6657898/packages/encryption/src/migration/index.ts#L38)

___

### migrationStrategies

• **migrationStrategies**: `NumberFunctionMap`

#### Defined in

[packages/encryption/src/migration/index.ts:30](https://github.com/atala-community-projects/pluto-encrypted/blob/6657898/packages/encryption/src/migration/index.ts#L30)

___

### name

• **name**: `string`

#### Defined in

[packages/encryption/src/migration/index.ts:39](https://github.com/atala-community-projects/pluto-encrypted/blob/6657898/packages/encryption/src/migration/index.ts#L39)

___

### newestCollection

• **newestCollection**: `RxCollection`

#### Defined in

[packages/encryption/src/migration/index.ts:29](https://github.com/atala-community-projects/pluto-encrypted/blob/6657898/packages/encryption/src/migration/index.ts#L29)

## Methods

### countAllDocuments

▸ **countAllDocuments**(`storage`, `storageInstance`, `schema`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`RxStorage`](../interfaces/encryption.RxStorage.md)\<`any`, `any`\> |
| `storageInstance` | `RxStorageInstance`\<`any`, `any`, `any`, `any`\> |
| `schema` | [`RxJsonSchema`](../modules/leveldb.md#rxjsonschema)\<`any`\> |

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/encryption/src/migration/index.ts:41](https://github.com/atala-community-projects/pluto-encrypted/blob/6657898/packages/encryption/src/migration/index.ts#L41)

___

### migratePromise

▸ **migratePromise**(`batchSize`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchSize` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/encryption/src/migration/index.ts:57](https://github.com/atala-community-projects/pluto-encrypted/blob/6657898/packages/encryption/src/migration/index.ts#L57)
