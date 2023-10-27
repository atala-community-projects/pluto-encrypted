# pluto-encrypted - v0.1.5

## Classes

- [Database](classes/Database.md)

## Type Aliases

### CredentialCollection

Ƭ **CredentialCollection**: `RxCollection`<[`CredentialSchemaType`](modules.md#credentialschematype), [`CredentialMethodTypes`](modules.md#credentialmethodtypes)\>

#### Defined in

[schemas/Credential.ts:211](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Credential.ts#L211)

___

### CredentialDocument

Ƭ **CredentialDocument**: `RxDocument`<[`CredentialSchemaType`](modules.md#credentialschematype)\>

#### Defined in

[schemas/Credential.ts:190](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Credential.ts#L190)

___

### CredentialMethodTypes

Ƭ **CredentialMethodTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toDomainCredential` | (`this`: [`CredentialSchemaType`](modules.md#credentialschematype)) => `Domain.VerifiableCredential` |

#### Defined in

[schemas/Credential.ts:191](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Credential.ts#L191)

___

### CredentialSchemaType

Ƭ **CredentialSchemaType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aud` | `string`[] |
| `context` | `string`[] |
| `credentialSchema?` | `Domain.VerifiableCredentialTypeContainer` |
| `credentialStatus?` | `Domain.VerifiableCredentialTypeContainer` |
| `credentialSubject` | [`CredentialSubjectType`](modules.md#credentialsubjecttype)[] |
| `credentialType` | `Domain.CredentialType` |
| `evidence` | `Domain.VerifiableCredentialTypeContainer` |
| `expirationDate?` | `string` |
| `id?` | `string` |
| `issuanceDate` | `string` |
| `issuer` | `string` |
| `proof?` | `string` |
| `refreshService` | `Domain.VerifiableCredentialTypeContainer` |
| `subject?` | `string` |
| `termsOfUse` | `Domain.VerifiableCredentialTypeContainer` |
| `type` | `string`[] |
| `validFrom?` | `Domain.VerifiableCredentialTypeContainer` |
| `validUntil?` | `Domain.VerifiableCredentialTypeContainer` |

#### Defined in

[schemas/Credential.ts:11](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Credential.ts#L11)

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

[schemas/Credential.ts:5](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Credential.ts#L5)

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

[schemas/DIDPair.ts:4](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/DIDPair.ts#L4)

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

[schemas/DID.ts:3](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/DID.ts#L3)

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

[schemas/PrivateKey.ts:19](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/PrivateKey.ts#L19)

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

[schemas/PrivateKey.ts:14](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/PrivateKey.ts#L14)

___

### MediatorCollection

Ƭ **MediatorCollection**: `RxCollection`<[`MediatorSchemaType`](modules.md#mediatorschematype), [`MediatorMethodTypes`](modules.md#mediatormethodtypes)\>

#### Defined in

[schemas/Mediator.ts:41](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Mediator.ts#L41)

___

### MediatorDocument

Ƭ **MediatorDocument**: `RxDocument`<[`MediatorSchemaType`](modules.md#mediatorschematype)\>

#### Defined in

[schemas/Mediator.ts:37](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Mediator.ts#L37)

___

### MediatorMethodTypes

Ƭ **MediatorMethodTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toDomainMediator` | (`this`: [`MediatorSchemaType`](modules.md#mediatorschematype)) => `Domain.Mediator` |

#### Defined in

[schemas/Mediator.ts:38](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Mediator.ts#L38)

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

[schemas/Mediator.ts:5](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Mediator.ts#L5)

___

### MessageColletion

Ƭ **MessageColletion**: `RxCollection`<[`MessageSchemaType`](modules.md#messageschematype), [`MessageMethodTypes`](modules.md#messagemethodtypes)\>

#### Defined in

[schemas/Message.ts:116](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Message.ts#L116)

___

### MessageDocument

Ƭ **MessageDocument**: `RxDocument`<[`MessageSchemaType`](modules.md#messageschematype), [`MessageMethodTypes`](modules.md#messagemethodtypes)\>

#### Defined in

[schemas/Message.ts:110](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Message.ts#L110)

___

### MessageMethodTypes

Ƭ **MessageMethodTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toDomainMessage` | (`this`: [`MessageDocument`](modules.md#messagedocument)) => `Domain.Message` |

#### Defined in

[schemas/Message.ts:112](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Message.ts#L112)

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

[schemas/Message.ts:5](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Message.ts#L5)

___

### PlutoCollections

Ƭ **PlutoCollections**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `didpairs` | `RxCollection`<[`DIDPairSchemaType`](modules.md#didpairschematype)\> |
| `dids` | `RxCollection`<[`DIDSchemaType`](modules.md#didschematype)\> |
| `mediators` | [`MediatorCollection`](modules.md#mediatorcollection) |
| `messages` | [`MessageColletion`](modules.md#messagecolletion) |
| `privateKeys` | [`PrivateKeyColletion`](modules.md#privatekeycolletion) |
| `verifiableCredentials` | [`CredentialCollection`](modules.md#credentialcollection) |

#### Defined in

[index.ts:51](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/index.ts#L51)

___

### PlutoDatabase

Ƭ **PlutoDatabase**: `RxDatabase`<[`PlutoCollections`](modules.md#plutocollections)\>

#### Defined in

[index.ts:59](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/index.ts#L59)

___

### PrivateKeyColletion

Ƭ **PrivateKeyColletion**: `RxCollection`<[`KeySchemaType`](modules.md#keyschematype), [`PrivateKeyMethodTypes`](modules.md#privatekeymethodtypes)\>

#### Defined in

[schemas/PrivateKey.ts:66](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/PrivateKey.ts#L66)

___

### PrivateKeyDocument

Ƭ **PrivateKeyDocument**: `RxDocument`<[`KeySchemaType`](modules.md#keyschematype), [`PrivateKeyMethodTypes`](modules.md#privatekeymethodtypes)\>

#### Defined in

[schemas/PrivateKey.ts:70](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/PrivateKey.ts#L70)

___

### PrivateKeyMethodTypes

Ƭ **PrivateKeyMethodTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toDomainPrivateKey` | (`this`: [`PrivateKeyDocument`](modules.md#privatekeydocument)) => `Domain.PrivateKey` |

#### Defined in

[schemas/PrivateKey.ts:63](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/PrivateKey.ts#L63)

## Variables

### CredentialMethods

• `Const` **CredentialMethods**: [`CredentialMethodTypes`](modules.md#credentialmethodtypes)

#### Defined in

[schemas/Credential.ts:197](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Credential.ts#L197)

___

### MediatorMethods

• `Const` **MediatorMethods**: [`MediatorMethodTypes`](modules.md#mediatormethodtypes)

#### Defined in

[schemas/Mediator.ts:46](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Mediator.ts#L46)

___

### MessageMethods

• `Const` **MessageMethods**: [`MessageMethodTypes`](modules.md#messagemethodtypes)

#### Defined in

[schemas/Message.ts:121](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/Message.ts#L121)

___

### PrivateKeyMethods

• `Const` **PrivateKeyMethods**: [`PrivateKeyMethodTypes`](modules.md#privatekeymethodtypes)

#### Defined in

[schemas/PrivateKey.ts:75](https://github.com/elribonazo/pluto-encrypted/blob/3072dd9/src/schemas/PrivateKey.ts#L75)
