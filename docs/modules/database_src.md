[@pluto-encrypted](../README.md) / [Exports](../modules.md) / database/src

# Module: database/src

## Table of contents

### Namespaces

- [WALLET\_SDK\_DOMAIN](database_src.WALLET_SDK_DOMAIN.md)

### Classes

- [Database](../classes/database_src.Database.md)

### Interfaces

- [CredentialMethodTypes](../interfaces/database_src.CredentialMethodTypes.md)
- [CredentialRequestMetadataMethodTypes](../interfaces/database_src.CredentialRequestMetadataMethodTypes.md)
- [CredentialRequestMetadataSchemaType](../interfaces/database_src.CredentialRequestMetadataSchemaType.md)
- [CredentialSchemaType](../interfaces/database_src.CredentialSchemaType.md)
- [CredentialSubjectType](../interfaces/database_src.CredentialSubjectType.md)
- [DIDPairSchemaType](../interfaces/database_src.DIDPairSchemaType.md)
- [DIDSchemaType](../interfaces/database_src.DIDSchemaType.md)
- [GenericORMType](../interfaces/database_src.GenericORMType.md)
- [KeySchemaType](../interfaces/database_src.KeySchemaType.md)
- [KeySpec](../interfaces/database_src.KeySpec.md)
- [LinkSecretMethodTypes](../interfaces/database_src.LinkSecretMethodTypes.md)
- [LinkSecretSchemaType](../interfaces/database_src.LinkSecretSchemaType.md)
- [MediatorMethodTypes](../interfaces/database_src.MediatorMethodTypes.md)
- [MediatorSchemaType](../interfaces/database_src.MediatorSchemaType.md)
- [MessageMethodTypes](../interfaces/database_src.MessageMethodTypes.md)
- [MessageSchemaType](../interfaces/database_src.MessageSchemaType.md)
- [PlutoCollections](../interfaces/database_src.PlutoCollections.md)
- [PrivateKeyMethodTypes](../interfaces/database_src.PrivateKeyMethodTypes.md)
- [createEncryptedOptions](../interfaces/database_src.createEncryptedOptions.md)

### Type Aliases

- [CredentialCollection](database_src.md#credentialcollection)
- [CredentialDocument](database_src.md#credentialdocument)
- [CredentialRequestMetadataCollection](database_src.md#credentialrequestmetadatacollection)
- [CredentialRequestMetadataDocument](database_src.md#credentialrequestmetadatadocument)
- [DIDCollection](database_src.md#didcollection)
- [DIDDocument](database_src.md#diddocument)
- [DIDPairCollection](database_src.md#didpaircollection)
- [DIDPairDocument](database_src.md#didpairdocument)
- [LinkSecretColletion](database_src.md#linksecretcolletion)
- [LinkSecretDocument](database_src.md#linksecretdocument)
- [MediatorCollection](database_src.md#mediatorcollection)
- [MediatorDocument](database_src.md#mediatordocument)
- [MessageColletion](database_src.md#messagecolletion)
- [MessageDocument](database_src.md#messagedocument)
- [NoKeys](database_src.md#nokeys)
- [PlutoDatabase](database_src.md#plutodatabase)
- [PrivateKeyColletion](database_src.md#privatekeycolletion)
- [PrivateKeyDocument](database_src.md#privatekeydocument)
- [Schema](database_src.md#schema)
- [ValuesOf](database_src.md#valuesof)

## Type Aliases

### CredentialCollection

Ƭ **CredentialCollection**: `RxCollection`\<[`CredentialSchemaType`](../interfaces/database_src.CredentialSchemaType.md), [`CredentialMethodTypes`](../interfaces/database_src.CredentialMethodTypes.md), [`CredentialDocument`](database_src.md#credentialdocument)\>

#### Defined in

[packages/database/src/schemas/Credential.ts:103](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Credential.ts#L103)

___

### CredentialDocument

Ƭ **CredentialDocument**: `RxDocument`\<[`CredentialSchemaType`](../interfaces/database_src.CredentialSchemaType.md)\>

#### Defined in

[packages/database/src/schemas/Credential.ts:72](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Credential.ts#L72)

___

### CredentialRequestMetadataCollection

Ƭ **CredentialRequestMetadataCollection**: `RxCollection`\<[`CredentialRequestMetadataSchemaType`](../interfaces/database_src.CredentialRequestMetadataSchemaType.md), [`CredentialRequestMetadataMethodTypes`](../interfaces/database_src.CredentialRequestMetadataMethodTypes.md), [`CredentialRequestMetadataDocument`](database_src.md#credentialrequestmetadatadocument)\>

#### Defined in

[packages/database/src/schemas/CredentialRequestMetadata.ts:62](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/CredentialRequestMetadata.ts#L62)

___

### CredentialRequestMetadataDocument

Ƭ **CredentialRequestMetadataDocument**: `RxDocument`\<[`CredentialRequestMetadataSchemaType`](../interfaces/database_src.CredentialRequestMetadataSchemaType.md)\>

#### Defined in

[packages/database/src/schemas/CredentialRequestMetadata.ts:43](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/CredentialRequestMetadata.ts#L43)

___

### DIDCollection

Ƭ **DIDCollection**: `RxCollection`\<[`DIDSchemaType`](../interfaces/database_src.DIDSchemaType.md), `any`, [`DIDDocument`](database_src.md#diddocument)\>

#### Defined in

[packages/database/src/schemas/DID.ts:43](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/DID.ts#L43)

___

### DIDDocument

Ƭ **DIDDocument**: `RxDocument`\<[`DIDSchemaType`](../interfaces/database_src.DIDSchemaType.md)\>

#### Defined in

[packages/database/src/schemas/DID.ts:41](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/DID.ts#L41)

___

### DIDPairCollection

Ƭ **DIDPairCollection**: `RxCollection`\<[`DIDPairSchemaType`](../interfaces/database_src.DIDPairSchemaType.md), `any`, [`DIDPairDocument`](database_src.md#didpairdocument)\>

#### Defined in

[packages/database/src/schemas/DIDPair.ts:31](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/DIDPair.ts#L31)

___

### DIDPairDocument

Ƭ **DIDPairDocument**: `RxDocument`\<[`DIDPairSchemaType`](../interfaces/database_src.DIDPairSchemaType.md)\>

#### Defined in

[packages/database/src/schemas/DIDPair.ts:30](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/DIDPair.ts#L30)

___

### LinkSecretColletion

Ƭ **LinkSecretColletion**: `RxCollection`\<[`LinkSecretSchemaType`](../interfaces/database_src.LinkSecretSchemaType.md), [`LinkSecretMethodTypes`](../interfaces/database_src.LinkSecretMethodTypes.md), [`LinkSecretDocument`](database_src.md#linksecretdocument)\>

#### Defined in

[packages/database/src/schemas/LinkSecret.ts:36](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/LinkSecret.ts#L36)

___

### LinkSecretDocument

Ƭ **LinkSecretDocument**: `RxDocument`\<[`LinkSecretSchemaType`](../interfaces/database_src.LinkSecretSchemaType.md), [`LinkSecretMethodTypes`](../interfaces/database_src.LinkSecretMethodTypes.md)\>

#### Defined in

[packages/database/src/schemas/LinkSecret.ts:27](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/LinkSecret.ts#L27)

___

### MediatorCollection

Ƭ **MediatorCollection**: `RxCollection`\<[`MediatorSchemaType`](../interfaces/database_src.MediatorSchemaType.md), [`MediatorMethodTypes`](../interfaces/database_src.MediatorMethodTypes.md), [`MediatorDocument`](database_src.md#mediatordocument)\>

#### Defined in

[packages/database/src/schemas/Mediator.ts:39](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Mediator.ts#L39)

___

### MediatorDocument

Ƭ **MediatorDocument**: `RxDocument`\<[`MediatorSchemaType`](../interfaces/database_src.MediatorSchemaType.md)\>

#### Defined in

[packages/database/src/schemas/Mediator.ts:35](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Mediator.ts#L35)

___

### MessageColletion

Ƭ **MessageColletion**: `RxCollection`\<[`MessageSchemaType`](../interfaces/database_src.MessageSchemaType.md), [`MessageMethodTypes`](../interfaces/database_src.MessageMethodTypes.md), [`MessageDocument`](database_src.md#messagedocument)\>

#### Defined in

[packages/database/src/schemas/Message.ts:113](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L113)

___

### MessageDocument

Ƭ **MessageDocument**: `RxDocument`\<[`MessageSchemaType`](../interfaces/database_src.MessageSchemaType.md), [`MessageMethodTypes`](../interfaces/database_src.MessageMethodTypes.md)\>

#### Defined in

[packages/database/src/schemas/Message.ts:107](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/Message.ts#L107)

___

### NoKeys

Ƭ **NoKeys**\<`T`, `K`\>: \{ [P in Exclude\<keyof T, K\>]: T[P] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[packages/database/src/types.ts:12](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/types.ts#L12)

___

### PlutoDatabase

Ƭ **PlutoDatabase**: `RxDatabase`\<[`PlutoCollections`](../interfaces/database_src.PlutoCollections.md)\>

#### Defined in

[packages/database/src/index.ts:63](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/index.ts#L63)

___

### PrivateKeyColletion

Ƭ **PrivateKeyColletion**: `RxCollection`\<[`KeySchemaType`](../interfaces/database_src.KeySchemaType.md), [`PrivateKeyMethodTypes`](../interfaces/database_src.PrivateKeyMethodTypes.md), [`PrivateKeyDocument`](database_src.md#privatekeydocument)\>

#### Defined in

[packages/database/src/schemas/PrivateKey.ts:59](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/PrivateKey.ts#L59)

___

### PrivateKeyDocument

Ƭ **PrivateKeyDocument**: `RxDocument`\<[`KeySchemaType`](../interfaces/database_src.KeySchemaType.md), [`PrivateKeyMethodTypes`](../interfaces/database_src.PrivateKeyMethodTypes.md)\>

#### Defined in

[packages/database/src/schemas/PrivateKey.ts:64](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/schemas/PrivateKey.ts#L64)

___

### Schema

Ƭ **Schema**\<`T`\>: [`RxJsonSchema`](leveldb.md#rxjsonschema)\<`T`\> & \{ `encrypted`: keyof `T`[]  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/database/src/types.ts:16](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/types.ts#L16)

___

### ValuesOf

Ƭ **ValuesOf**\<`T`\>: `T`[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/database/src/index.ts:62](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/index.ts#L62)
