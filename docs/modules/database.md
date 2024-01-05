[@pluto-encrypted](../README.md) / [Exports](../modules.md) / database

# Module: database

## Table of contents

### Namespaces

- [WALLET\_SDK\_DOMAIN](database.WALLET_SDK_DOMAIN.md)

### Classes

- [Database](../classes/database.Database.md)

### Interfaces

- [CredentialMethodTypes](../interfaces/database.CredentialMethodTypes.md)
- [CredentialRequestMetadataMethodTypes](../interfaces/database.CredentialRequestMetadataMethodTypes.md)
- [CredentialRequestMetadataSchemaType](../interfaces/database.CredentialRequestMetadataSchemaType.md)
- [CredentialSchemaType](../interfaces/database.CredentialSchemaType.md)
- [CredentialSubjectType](../interfaces/database.CredentialSubjectType.md)
- [DIDPairSchemaType](../interfaces/database.DIDPairSchemaType.md)
- [DIDSchemaType](../interfaces/database.DIDSchemaType.md)
- [GenericORMType](../interfaces/database.GenericORMType.md)
- [KeySchemaType](../interfaces/database.KeySchemaType.md)
- [KeySpec](../interfaces/database.KeySpec.md)
- [LinkSecretMethodTypes](../interfaces/database.LinkSecretMethodTypes.md)
- [LinkSecretSchemaType](../interfaces/database.LinkSecretSchemaType.md)
- [MediatorMethodTypes](../interfaces/database.MediatorMethodTypes.md)
- [MediatorSchemaType](../interfaces/database.MediatorSchemaType.md)
- [MessageMethodTypes](../interfaces/database.MessageMethodTypes.md)
- [MessageSchemaType](../interfaces/database.MessageSchemaType.md)
- [PlutoCollections](../interfaces/database.PlutoCollections.md)
- [PrivateKeyMethodTypes](../interfaces/database.PrivateKeyMethodTypes.md)
- [createEncryptedOptions](../interfaces/database.createEncryptedOptions.md)

### Type Aliases

- [CredentialCollection](database.md#credentialcollection)
- [CredentialDocument](database.md#credentialdocument)
- [CredentialRequestMetadataCollection](database.md#credentialrequestmetadatacollection)
- [CredentialRequestMetadataDocument](database.md#credentialrequestmetadatadocument)
- [DIDCollection](database.md#didcollection)
- [DIDDocument](database.md#diddocument)
- [DIDPairCollection](database.md#didpaircollection)
- [DIDPairDocument](database.md#didpairdocument)
- [LinkSecretColletion](database.md#linksecretcolletion)
- [LinkSecretDocument](database.md#linksecretdocument)
- [MediatorCollection](database.md#mediatorcollection)
- [MediatorDocument](database.md#mediatordocument)
- [MessageColletion](database.md#messagecolletion)
- [MessageDocument](database.md#messagedocument)
- [NoKeys](database.md#nokeys)
- [PlutoDatabase](database.md#plutodatabase)
- [PrivateKeyColletion](database.md#privatekeycolletion)
- [PrivateKeyDocument](database.md#privatekeydocument)
- [Schema](database.md#schema)
- [ValuesOf](database.md#valuesof)

## Type Aliases

### CredentialCollection

Ƭ **CredentialCollection**: `RxCollection`\<[`CredentialSchemaType`](../interfaces/database.CredentialSchemaType.md), [`CredentialMethodTypes`](../interfaces/database.CredentialMethodTypes.md), [`CredentialDocument`](database.md#credentialdocument)\>

#### Defined in

[packages/database/src/schemas/Credential.ts:103](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/Credential.ts#L103)

___

### CredentialDocument

Ƭ **CredentialDocument**: `RxDocument`\<[`CredentialSchemaType`](../interfaces/database.CredentialSchemaType.md)\>

#### Defined in

[packages/database/src/schemas/Credential.ts:72](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/Credential.ts#L72)

___

### CredentialRequestMetadataCollection

Ƭ **CredentialRequestMetadataCollection**: `RxCollection`\<[`CredentialRequestMetadataSchemaType`](../interfaces/database.CredentialRequestMetadataSchemaType.md), [`CredentialRequestMetadataMethodTypes`](../interfaces/database.CredentialRequestMetadataMethodTypes.md), [`CredentialRequestMetadataDocument`](database.md#credentialrequestmetadatadocument)\>

#### Defined in

[packages/database/src/schemas/CredentialRequestMetadata.ts:62](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/CredentialRequestMetadata.ts#L62)

___

### CredentialRequestMetadataDocument

Ƭ **CredentialRequestMetadataDocument**: `RxDocument`\<[`CredentialRequestMetadataSchemaType`](../interfaces/database.CredentialRequestMetadataSchemaType.md)\>

#### Defined in

[packages/database/src/schemas/CredentialRequestMetadata.ts:43](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/CredentialRequestMetadata.ts#L43)

___

### DIDCollection

Ƭ **DIDCollection**: `RxCollection`\<[`DIDSchemaType`](../interfaces/database.DIDSchemaType.md), `any`, [`DIDDocument`](database.md#diddocument)\>

#### Defined in

[packages/database/src/schemas/DID.ts:43](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/DID.ts#L43)

___

### DIDDocument

Ƭ **DIDDocument**: `RxDocument`\<[`DIDSchemaType`](../interfaces/database.DIDSchemaType.md)\>

#### Defined in

[packages/database/src/schemas/DID.ts:41](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/DID.ts#L41)

___

### DIDPairCollection

Ƭ **DIDPairCollection**: `RxCollection`\<[`DIDPairSchemaType`](../interfaces/database.DIDPairSchemaType.md), `any`, [`DIDPairDocument`](database.md#didpairdocument)\>

#### Defined in

[packages/database/src/schemas/DIDPair.ts:31](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/DIDPair.ts#L31)

___

### DIDPairDocument

Ƭ **DIDPairDocument**: `RxDocument`\<[`DIDPairSchemaType`](../interfaces/database.DIDPairSchemaType.md)\>

#### Defined in

[packages/database/src/schemas/DIDPair.ts:30](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/DIDPair.ts#L30)

___

### LinkSecretColletion

Ƭ **LinkSecretColletion**: `RxCollection`\<[`LinkSecretSchemaType`](../interfaces/database.LinkSecretSchemaType.md), [`LinkSecretMethodTypes`](../interfaces/database.LinkSecretMethodTypes.md), [`LinkSecretDocument`](database.md#linksecretdocument)\>

#### Defined in

[packages/database/src/schemas/LinkSecret.ts:36](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/LinkSecret.ts#L36)

___

### LinkSecretDocument

Ƭ **LinkSecretDocument**: `RxDocument`\<[`LinkSecretSchemaType`](../interfaces/database.LinkSecretSchemaType.md), [`LinkSecretMethodTypes`](../interfaces/database.LinkSecretMethodTypes.md)\>

#### Defined in

[packages/database/src/schemas/LinkSecret.ts:27](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/LinkSecret.ts#L27)

___

### MediatorCollection

Ƭ **MediatorCollection**: `RxCollection`\<[`MediatorSchemaType`](../interfaces/database.MediatorSchemaType.md), [`MediatorMethodTypes`](../interfaces/database.MediatorMethodTypes.md), [`MediatorDocument`](database.md#mediatordocument)\>

#### Defined in

[packages/database/src/schemas/Mediator.ts:39](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/Mediator.ts#L39)

___

### MediatorDocument

Ƭ **MediatorDocument**: `RxDocument`\<[`MediatorSchemaType`](../interfaces/database.MediatorSchemaType.md)\>

#### Defined in

[packages/database/src/schemas/Mediator.ts:35](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/Mediator.ts#L35)

___

### MessageColletion

Ƭ **MessageColletion**: `RxCollection`\<[`MessageSchemaType`](../interfaces/database.MessageSchemaType.md), [`MessageMethodTypes`](../interfaces/database.MessageMethodTypes.md), [`MessageDocument`](database.md#messagedocument)\>

#### Defined in

[packages/database/src/schemas/Message.ts:113](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/Message.ts#L113)

___

### MessageDocument

Ƭ **MessageDocument**: `RxDocument`\<[`MessageSchemaType`](../interfaces/database.MessageSchemaType.md), [`MessageMethodTypes`](../interfaces/database.MessageMethodTypes.md)\>

#### Defined in

[packages/database/src/schemas/Message.ts:107](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/Message.ts#L107)

___

### NoKeys

Ƭ **NoKeys**\<`T`, `K`\>: \{ [P in Exclude\<keyof T, K\>]: T[P] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[packages/database/src/types.ts:12](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/types.ts#L12)

___

### PlutoDatabase

Ƭ **PlutoDatabase**: `RxDatabase`\<[`PlutoCollections`](../interfaces/database.PlutoCollections.md)\>

#### Defined in

[packages/database/src/index.ts:62](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/index.ts#L62)

___

### PrivateKeyColletion

Ƭ **PrivateKeyColletion**: `RxCollection`\<[`KeySchemaType`](../interfaces/database.KeySchemaType.md), [`PrivateKeyMethodTypes`](../interfaces/database.PrivateKeyMethodTypes.md), [`PrivateKeyDocument`](database.md#privatekeydocument)\>

#### Defined in

[packages/database/src/schemas/PrivateKey.ts:59](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/PrivateKey.ts#L59)

___

### PrivateKeyDocument

Ƭ **PrivateKeyDocument**: `RxDocument`\<[`KeySchemaType`](../interfaces/database.KeySchemaType.md), [`PrivateKeyMethodTypes`](../interfaces/database.PrivateKeyMethodTypes.md)\>

#### Defined in

[packages/database/src/schemas/PrivateKey.ts:64](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/schemas/PrivateKey.ts#L64)

___

### Schema

Ƭ **Schema**\<`T`\>: [`RxJsonSchema`](leveldb.md#rxjsonschema)\<`T`\> & \{ `encrypted`: keyof `T`[]  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/database/src/types.ts:16](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/types.ts#L16)

___

### ValuesOf

Ƭ **ValuesOf**\<`T`\>: `T`[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/database/src/index.ts:61](https://github.com/atala-community-projects/pluto-encrypted/blob/12959ad3/packages/database/src/index.ts#L61)
