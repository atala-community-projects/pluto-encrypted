# pluto-encrypted - v0.0.25

## Classes

- [Database](classes/Database.md)

## Type Aliases

### CredentialSchemaType

Ƭ **CredentialSchemaType**: `Domain.VerifiableCredential`

#### Defined in

[schemas/Credential.ts:4](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/schemas/Credential.ts#L4)

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

[schemas/DIDPair.ts:4](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/schemas/DIDPair.ts#L4)

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

[schemas/DID.ts:3](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/schemas/DID.ts#L3)

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

[schemas/PrivateKey.ts:11](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/schemas/PrivateKey.ts#L11)

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

[schemas/PrivateKey.ts:6](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/schemas/PrivateKey.ts#L6)

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

[schemas/Mediator.ts:4](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/schemas/Mediator.ts#L4)

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

[schemas/Message.ts:6](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/schemas/Message.ts#L6)

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
| `privateKeys` | `RxCollection`<[`KeySchemaType`](modules.md#keyschematype)\> |
| `verifiableCredentials` | `RxCollection`<[`CredentialSchemaType`](modules.md#credentialschematype)\> |

#### Defined in

[index.ts:36](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L36)

___

### PlutoDatabase

Ƭ **PlutoDatabase**: `RxDatabase`<[`PlutoCollections`](modules.md#plutocollections)\>

#### Defined in

[index.ts:44](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L44)
