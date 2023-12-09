[pluto-encrypted - v0.1.3](README.md) / Exports

# pluto-encrypted - v0.1.3

## Table of contents

### Classes

- [Database](classes/Database.md)

### Type Aliases

- [CredentialCollection](modules.md#credentialcollection)
- [CredentialDocument](modules.md#credentialdocument)
- [CredentialMethodTypes](modules.md#credentialmethodtypes)
- [CredentialSchemaType](modules.md#credentialschematype)
- [CredentialSubjectType](modules.md#credentialsubjecttype)
- [DIDPairSchemaType](modules.md#didpairschematype)
- [DIDSchemaType](modules.md#didschematype)
- [KeySchemaType](modules.md#keyschematype)
- [KeySpec](modules.md#keyspec)
- [MediatorCollection](modules.md#mediatorcollection)
- [MediatorDocument](modules.md#mediatordocument)
- [MediatorMethodTypes](modules.md#mediatormethodtypes)
- [MediatorSchemaType](modules.md#mediatorschematype)
- [MessageColletion](modules.md#messagecolletion)
- [MessageDocument](modules.md#messagedocument)
- [MessageMethodTypes](modules.md#messagemethodtypes)
- [MessageSchemaType](modules.md#messageschematype)
- [PlutoCollections](modules.md#plutocollections)
- [PlutoDatabase](modules.md#plutodatabase)
- [PrivateKeyColletion](modules.md#privatekeycolletion)
- [PrivateKeyDocument](modules.md#privatekeydocument)
- [PrivateKeyMethodTypes](modules.md#privatekeymethodtypes)

### Variables

- [CredentialMethods](modules.md#credentialmethods)
- [MediatorMethods](modules.md#mediatormethods)
- [MessageMethods](modules.md#messagemethods)
- [PrivateKeyMethods](modules.md#privatekeymethods)

## Type Aliases

### CredentialCollection

Ƭ **CredentialCollection**: `RxCollection`\<[`CredentialSchemaType`](modules.md#credentialschematype), [`CredentialMethodTypes`](modules.md#credentialmethodtypes)\>

#### Defined in

[schemas/Credential.ts:113](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Credential.ts#L113)

___

### CredentialDocument

Ƭ **CredentialDocument**: `RxDocument`\<[`CredentialSchemaType`](modules.md#credentialschematype)\>

#### Defined in

[schemas/Credential.ts:82](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Credential.ts#L82)

___

### CredentialMethodTypes

Ƭ **CredentialMethodTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toDomainCredential` | (`this`: [`CredentialSchemaType`](modules.md#credentialschematype)) => `Domain.Credential` |

#### Defined in

[schemas/Credential.ts:83](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Credential.ts#L83)

___

### CredentialSchemaType

Ƭ **CredentialSchemaType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `availableClaims?` | `string`[] |
| `credentialCreated?` | `string` |
| `credentialData` | `string` |
| `credentialSchema?` | `string` |
| `credentialUpdated?` | `string` |
| `id` | `string` |
| `issuer?` | `string` |
| `recoveryId` | `string` |
| `revoked?` | `boolean` |
| `subject?` | `string` |
| `validUntil?` | `string` |

#### Defined in

[schemas/Credential.ts:18](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Credential.ts#L18)

___

### CredentialSubjectType

Ƭ **CredentialSubjectType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |
| `value` | `string` |

#### Defined in

[schemas/Credential.ts:12](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Credential.ts#L12)

___

### DIDPairSchemaType

Ƭ **DIDPairSchemaType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hostDID` | `string` |
| `name` | `string` |
| `receiverDID` | `string` |

#### Defined in

[schemas/DIDPair.ts:3](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/DIDPair.ts#L3)

___

### DIDSchemaType

Ƭ **DIDSchemaType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alias?` | `string` |
| `did` | `string` |
| `method` | `string` |
| `methodId` | `string` |
| `schema` | `string` |

#### Defined in

[schemas/DID.ts:3](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/DID.ts#L3)

___

### KeySchemaType

Ƭ **KeySchemaType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `id` | `string` |
| `keySpecification` | [`KeySpec`](modules.md#keyspec)[] |
| `type` | `string` |

#### Defined in

[schemas/PrivateKey.ts:19](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/PrivateKey.ts#L19)

___

### KeySpec

Ƭ **KeySpec**: `Object`

PrivateKeySchema

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |
| `value` | `string` |

#### Defined in

[schemas/PrivateKey.ts:14](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/PrivateKey.ts#L14)

___

### MediatorCollection

Ƭ **MediatorCollection**: `RxCollection`\<[`MediatorSchemaType`](modules.md#mediatorschematype), [`MediatorMethodTypes`](modules.md#mediatormethodtypes)\>

#### Defined in

[schemas/Mediator.ts:41](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Mediator.ts#L41)

___

### MediatorDocument

Ƭ **MediatorDocument**: `RxDocument`\<[`MediatorSchemaType`](modules.md#mediatorschematype)\>

#### Defined in

[schemas/Mediator.ts:37](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Mediator.ts#L37)

___

### MediatorMethodTypes

Ƭ **MediatorMethodTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toDomainMediator` | (`this`: `RxDocument`\<[`MediatorSchemaType`](modules.md#mediatorschematype), [`MediatorMethodTypes`](modules.md#mediatormethodtypes)\>) => `Domain.Mediator` |

#### Defined in

[schemas/Mediator.ts:38](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Mediator.ts#L38)

___

### MediatorSchemaType

Ƭ **MediatorSchemaType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hostDID` | `string` |
| `id` | `string` |
| `mediatorDID` | `string` |
| `routingDID` | `string` |

#### Defined in

[schemas/Mediator.ts:5](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Mediator.ts#L5)

___

### MessageColletion

Ƭ **MessageColletion**: `RxCollection`\<[`MessageSchemaType`](modules.md#messageschematype), [`MessageMethodTypes`](modules.md#messagemethodtypes)\>

#### Defined in

[schemas/Message.ts:116](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Message.ts#L116)

___

### MessageDocument

Ƭ **MessageDocument**: `RxDocument`\<[`MessageSchemaType`](modules.md#messageschematype), [`MessageMethodTypes`](modules.md#messagemethodtypes)\>

#### Defined in

[schemas/Message.ts:110](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Message.ts#L110)

___

### MessageMethodTypes

Ƭ **MessageMethodTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toDomainMessage` | (`this`: [`MessageDocument`](modules.md#messagedocument)) => `Domain.Message` |

#### Defined in

[schemas/Message.ts:112](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Message.ts#L112)

___

### MessageSchemaType

Ƭ **MessageSchemaType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ack` | `string`[] |
| `attachments` | `Domain.AttachmentDescriptor`[] |
| `body` | `string` |
| `createdTime` | `string` |
| `direction` | `Domain.MessageDirection` |
| `expiresTimePlus` | `string` |
| `extraHeaders` | `string`[] |
| `from?` | `string` |
| `fromPrior?` | `string` |
| `id` | `string` |
| `piuri` | `string` |
| `pthid?` | `string` |
| `thid?` | `string` |
| `to?` | `string` |

#### Defined in

[schemas/Message.ts:5](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Message.ts#L5)

___

### PlutoCollections

Ƭ **PlutoCollections**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `credentialrequestmetadatas` | `CredentialRequestMetadataCollection` |
| `credentials` | [`CredentialCollection`](modules.md#credentialcollection) |
| `didpairs` | `RxCollection`\<[`DIDPairSchemaType`](modules.md#didpairschematype)\> |
| `dids` | `RxCollection`\<[`DIDSchemaType`](modules.md#didschematype)\> |
| `linksecrets` | `LinkSecretColletion` |
| `mediators` | [`MediatorCollection`](modules.md#mediatorcollection) |
| `messages` | [`MessageColletion`](modules.md#messagecolletion) |
| `privatekeys` | [`PrivateKeyColletion`](modules.md#privatekeycolletion) |

#### Defined in

[index.ts:60](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/index.ts#L60)

___

### PlutoDatabase

Ƭ **PlutoDatabase**: `RxDatabase`\<[`PlutoCollections`](modules.md#plutocollections)\>

#### Defined in

[index.ts:70](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/index.ts#L70)

___

### PrivateKeyColletion

Ƭ **PrivateKeyColletion**: `RxCollection`\<[`KeySchemaType`](modules.md#keyschematype), [`PrivateKeyMethodTypes`](modules.md#privatekeymethodtypes)\>

#### Defined in

[schemas/PrivateKey.ts:66](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/PrivateKey.ts#L66)

___

### PrivateKeyDocument

Ƭ **PrivateKeyDocument**: `RxDocument`\<[`KeySchemaType`](modules.md#keyschematype), [`PrivateKeyMethodTypes`](modules.md#privatekeymethodtypes)\>

#### Defined in

[schemas/PrivateKey.ts:70](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/PrivateKey.ts#L70)

___

### PrivateKeyMethodTypes

Ƭ **PrivateKeyMethodTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toDomainPrivateKey` | (`this`: [`PrivateKeyDocument`](modules.md#privatekeydocument)) => `Domain.PrivateKey` |

#### Defined in

[schemas/PrivateKey.ts:63](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/PrivateKey.ts#L63)

## Variables

### CredentialMethods

• `Const` **CredentialMethods**: [`CredentialMethodTypes`](modules.md#credentialmethodtypes)

#### Defined in

[schemas/Credential.ts:87](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Credential.ts#L87)

___

### MediatorMethods

• `Const` **MediatorMethods**: [`MediatorMethodTypes`](modules.md#mediatormethodtypes)

#### Defined in

[schemas/Mediator.ts:46](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Mediator.ts#L46)

___

### MessageMethods

• `Const` **MessageMethods**: [`MessageMethodTypes`](modules.md#messagemethodtypes)

#### Defined in

[schemas/Message.ts:121](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/Message.ts#L121)

___

### PrivateKeyMethods

• `Const` **PrivateKeyMethods**: [`PrivateKeyMethodTypes`](modules.md#privatekeymethodtypes)

#### Defined in

[schemas/PrivateKey.ts:75](https://github.com/elribonazo/pluto-encrypted/blob/b72569f/packages/database/src/schemas/PrivateKey.ts#L75)
