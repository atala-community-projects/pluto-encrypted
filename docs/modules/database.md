[@pluto-encrypted](../README.md) / [Exports](../modules.md) / database

# Module: database

## Table of contents

### Interfaces

- [GenericORMType](../interfaces/database.GenericORMType.md)
- [createEncryptedOptions](../interfaces/database.createEncryptedOptions.md)

### Type Aliases

- [NoKeys](database.md#nokeys)

### Variables

- [Database](database.md#database)

## Type Aliases

### NoKeys

Ƭ **NoKeys**\<`T`, `K`\>: \{ [P in Exclude\<keyof T, K\>]: T[P] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[packages/database/src/types.ts:4](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/database/src/types.ts#L4)

## Variables

### Database

• `Const` **Database**: `Object`

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createBaseEncrypted` | \<Collections\>(`options`: \{ `autoStart?`: `boolean` ; `collections?`: \{ [key in string \| number \| symbol]: RxCollectionCreator\<any\> } ; `encryptionKey`: `Uint8Array` ; `importData?`: `RxDumpDatabase`\<`Collections`\> ; `name`: `string` ; `storage`: [`RxStorage`](../interfaces/encryption.RxStorage.md)\<`any`, `any`\>  }) => `Promise`\<`DatabaseBase`\<`Collections`\>\> |
| `createEncrypted` | \<Collections, ExtendedCollections, STATIC_RETURN\>(`options`: \{ `autoStart?`: `boolean` ; `collections?`: \{ [key in string \| number \| symbol]: RxCollectionCreator\<any\> } ; `encryptionKey`: `Uint8Array` ; `importData?`: `RxDumpDatabase`\<`ExtendedCollections`\> ; `name`: `string` ; `storage`: [`RxStorage`](../interfaces/encryption.RxStorage.md)\<`any`, `any`\> ; `withDefaultCollections?`: `boolean`  }) => `Promise`\<`DatabaseBase`\<`ExtendedCollections`\> & [`Pluto`](../interfaces/database-1.WALLET_SDK_DOMAIN.Pluto.md) & `STATIC_RETURN`\> |

#### Defined in

[packages/database/src/index.ts:26](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/database/src/index.ts#L26)
