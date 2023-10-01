# pluto-encrypted - v0.1.1

## Classes

- [Database](classes/Database.md)

## Type Aliases

### CredentialSchemaType

Ƭ **CredentialSchemaType**: `Domain.VerifiableCredential`

#### Defined in

[schemas/Credential.ts:4](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/schemas/Credential.ts#L4)

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

[schemas/DIDPair.ts:4](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/schemas/DIDPair.ts#L4)

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

[schemas/DID.ts:3](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/schemas/DID.ts#L3)

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

[schemas/PrivateKey.ts:13](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/schemas/PrivateKey.ts#L13)

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

[schemas/PrivateKey.ts:8](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/schemas/PrivateKey.ts#L8)

___

### MediarorSchemaType

Ƭ **MediarorSchemaType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hostDID` | `string` |
| `id` | `string` |
| `mediatorDID` | `string` |
| `routingDID` | `string` |

#### Defined in

[schemas/Mediator.ts:4](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/schemas/Mediator.ts#L4)

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

[schemas/Message.ts:6](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/schemas/Message.ts#L6)

___

### PlutoCollections

Ƭ **PlutoCollections**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `didpairs` | `RxCollection`<[`DIDPairSchemaType`](modules.md#didpairschematype)\> |
| `dids` | `RxCollection`<[`DIDSchemaType`](modules.md#didschematype)\> |
| `mediators` | `RxCollection`<[`MediarorSchemaType`](modules.md#mediarorschematype)\> |
| `messages` | `RxCollection`<[`MessageSchemaType`](modules.md#messageschematype)\> |
| `privateKeys` | [`PrivateKeyColletion`](modules.md#privatekeycolletion) |
| `verifiableCredentials` | `RxCollection`<[`CredentialSchemaType`](modules.md#credentialschematype)\> |

#### Defined in

[index.ts:32](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/index.ts#L32)

___

### PlutoDatabase

Ƭ **PlutoDatabase**: `RxDatabase`<[`PlutoCollections`](modules.md#plutocollections)\>

#### Defined in

[index.ts:40](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/index.ts#L40)

___

### PrivateKeyColletion

Ƭ **PrivateKeyColletion**: `RxCollection`<[`KeySchemaType`](modules.md#keyschematype), [`PrivateKeyMethodTypes`](modules.md#privatekeymethodtypes)\>

#### Defined in

[schemas/PrivateKey.ts:60](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/schemas/PrivateKey.ts#L60)

___

### PrivateKeyDocument

Ƭ **PrivateKeyDocument**: `RxDocument`<[`KeySchemaType`](modules.md#keyschematype), [`PrivateKeyMethodTypes`](modules.md#privatekeymethodtypes)\>

#### Defined in

[schemas/PrivateKey.ts:61](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/schemas/PrivateKey.ts#L61)

___

### PrivateKeyMethodTypes

Ƭ **PrivateKeyMethodTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toPrivateKey` | () => `Domain.PrivateKey` |

#### Defined in

[schemas/PrivateKey.ts:57](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/schemas/PrivateKey.ts#L57)

## Variables

### PrivateKeyMethods

• `Const` **PrivateKeyMethods**: [`PrivateKeyMethodTypes`](modules.md#privatekeymethodtypes)

#### Defined in

[schemas/PrivateKey.ts:62](https://github.com/elribonazo/pluto-encrypted/blob/c09f011/src/schemas/PrivateKey.ts#L62)
