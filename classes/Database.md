# Class: Database

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Implements

- `Pluto`

## Constructors

### constructor

• **new Database**(`dbOptions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbOptions` | `RxDatabaseCreator`<`any`, `any`\> |

#### Defined in

[index.ts:82](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L82)

## Properties

### \_db

• `Private` **\_db**: [`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:53](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L53)

___

### collections

• `Private` **collections**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `didpairs` | { `schema`: `Schema`<[`DIDPairSchemaType`](../modules.md#didpairschematype)\> = DIDPairSchema } |
| `didpairs.schema` | `Schema`<[`DIDPairSchemaType`](../modules.md#didpairschematype)\> |
| `dids` | { `schema`: `Schema`<[`DIDSchemaType`](../modules.md#didschematype)\> = DIDSchema } |
| `dids.schema` | `Schema`<[`DIDSchemaType`](../modules.md#didschematype)\> |
| `mediators` | { `schema`: `Schema`<[`MediarorSchemaType`](../modules.md#mediarorschematype)\> = MediatorSchema } |
| `mediators.schema` | `Schema`<[`MediarorSchemaType`](../modules.md#mediarorschematype)\> |
| `messages` | { `schema`: `Schema`<[`MessageSchemaType`](../modules.md#messageschematype)\> = MessageSchema } |
| `messages.schema` | `Schema`<[`MessageSchemaType`](../modules.md#messageschematype)\> |
| `privateKeys` | { `schema`: `Schema`<[`KeySchemaType`](../modules.md#keyschematype)\> = PrivateKeySchema } |
| `privateKeys.schema` | `Schema`<[`KeySchemaType`](../modules.md#keyschematype)\> |
| `verifiableCredentials` | { `schema`: `Schema`<`VerifiableCredential`\> = CredentialSchema } |
| `verifiableCredentials.schema` | `Schema`<`VerifiableCredential`\> |

#### Defined in

[index.ts:61](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L61)

___

### dbOptions

• `Private` **dbOptions**: `RxDatabaseCreator`<`any`, `any`\>

#### Defined in

[index.ts:82](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L82)

## Accessors

### db

• `Private` `get` **db**(): [`PlutoDatabase`](../modules.md#plutodatabase)

#### Returns

[`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:54](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L54)

## Methods

### getAllCredentials

▸ **getAllCredentials**(): `Promise`<`VerifiableCredential`[]\>

#### Returns

`Promise`<`VerifiableCredential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

[index.ts:626](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L626)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`<`DIDPair`[]\>

#### Returns

`Promise`<`DIDPair`[]\>

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

[index.ts:241](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L241)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`<`Mediator`[]\>

#### Returns

`Promise`<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

[index.ts:622](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L622)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

[index.ts:115](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L115)

___

### getAllMessagesByDID

▸ **getAllMessagesByDID**(`did`): `Promise`<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesByDID

#### Defined in

[index.ts:503](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L503)

___

### getAllMessagesByFromToDID

▸ **getAllMessagesByFromToDID**(`from`, `to`): `Promise`<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `DID` |
| `to` | `DID` |

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesByFromToDID

#### Defined in

[index.ts:588](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L588)

___

### getAllMessagesOfType

▸ **getAllMessagesOfType**(`type`, `relatedWithDID?`): `Promise`<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `relatedWithDID?` | `DID` |

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesOfType

#### Defined in

[index.ts:561](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L561)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

[index.ts:528](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L528)

___

### getAllMessagesReceivedFrom

▸ **getAllMessagesReceivedFrom**(`did`): `Promise`<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceivedFrom

#### Defined in

[index.ts:550](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L550)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

[index.ts:517](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L517)

___

### getAllMessagesSentTo

▸ **getAllMessagesSentTo**(`did`): `Promise`<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSentTo

#### Defined in

[index.ts:539](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L539)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`<`PeerDID`[]\>

#### Returns

`Promise`<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

[index.ts:618](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L618)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`<`PrismDIDInfo`[]\>

#### Returns

`Promise`<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

[index.ts:420](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L420)

___

### getDIDInfoByAlias

▸ **getDIDInfoByAlias**(`alias`): `Promise`<`PrismDIDInfo`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `string` |

#### Returns

`Promise`<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getDIDInfoByAlias

#### Defined in

[index.ts:476](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L476)

___

### getDIDInfoByDID

▸ **getDIDInfoByDID**(`did`): `Promise`<``null`` \| `PrismDIDInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`<``null`` \| `PrismDIDInfo`\>

#### Implementation of

Domain.Pluto.getDIDInfoByDID

#### Defined in

[index.ts:448](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L448)

___

### getDIDPrivateKeyByID

▸ **getDIDPrivateKeyByID**(`id`): `Promise`<``null`` \| `PrivateKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<``null`` \| `PrivateKey`\>

#### Implementation of

Domain.Pluto.getDIDPrivateKeyByID

#### Defined in

[index.ts:402](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L402)

___

### getDIDPrivateKeysByDID

▸ **getDIDPrivateKeysByDID**(`did`): `Promise`<`PrivateKey`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`<`PrivateKey`[]\>

#### Implementation of

Domain.Pluto.getDIDPrivateKeysByDID

#### Defined in

[index.ts:394](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L394)

___

### getDomainMessage

▸ `Private` **getDomainMessage**(`message`): `Message`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `RxDocument`<[`MessageSchemaType`](../modules.md#messageschematype), {}\> |

#### Returns

`Message`

#### Defined in

[index.ts:499](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L499)

___

### getMessage

▸ **getMessage**(`id`): `Promise`<``null`` \| `Message`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<``null`` \| `Message`\>

#### Implementation of

Domain.Pluto.getMessage

#### Defined in

[index.ts:95](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L95)

___

### getPairByDID

▸ **getPairByDID**(`did`): `Promise`<``null`` \| `DIDPair`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`<``null`` \| `DIDPair`\>

#### Implementation of

Domain.Pluto.getPairByDID

#### Defined in

[index.ts:250](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L250)

___

### getPairByName

▸ **getPairByName**(`name`): `Promise`<``null`` \| `DIDPair`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<``null`` \| `DIDPair`\>

#### Implementation of

Domain.Pluto.getPairByName

#### Defined in

[index.ts:275](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L275)

___

### getPrismDIDKeyPathIndex

▸ **getPrismDIDKeyPathIndex**(`did`): `Promise`<``null`` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`<``null`` \| `number`\>

#### Implementation of

Domain.Pluto.getPrismDIDKeyPathIndex

#### Defined in

[index.ts:606](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L606)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

[index.ts:610](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L610)

___

### getPrivateKeyFromDB

▸ `Private` **getPrivateKeyFromDB**(`privateKey`): `PrivateKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `RxDocument`<[`KeySchemaType`](../modules.md#keyschematype), {}\> |

#### Returns

`PrivateKey`

#### Defined in

[index.ts:297](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L297)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

[index.ts:120](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L120)

___

### storeCredential

▸ **storeCredential**(`credential`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | `VerifiableCredential` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.storeCredential

#### Defined in

[index.ts:614](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L614)

___

### storeDIDPair

▸ **storeDIDPair**(`host`, `receiver`, `name`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `DID` |
| `receiver` | `DID` |
| `name` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.storeDIDPair

#### Defined in

[index.ts:194](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L194)

___

### storeMediator

▸ **storeMediator**(`mediator`, `host`, `routing`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | `DID` |
| `host` | `DID` |
| `routing` | `DID` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.storeMediator

#### Defined in

[index.ts:407](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L407)

___

### storeMessage

▸ **storeMessage**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.storeMessage

#### Defined in

[index.ts:103](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L103)

___

### storeMessages

▸ **storeMessages**(`messages`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | `Message`[] |

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.storeMessages

#### Defined in

[index.ts:111](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L111)

___

### storePeerDID

▸ **storePeerDID**(`did`, `privateKeys`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |
| `privateKeys` | `PrivateKey`[] |

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.storePeerDID

#### Defined in

[index.ts:155](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L155)

___

### storePrismDID

▸ **storePrismDID**(`did`, `keyPathIndex`, `privateKey`, `privateKeyMetaId?`, `alias?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |
| `keyPathIndex` | `number` |
| `privateKey` | `PrivateKey` |
| `privateKeyMetaId?` | ``null`` \| `string` |
| `alias?` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.storePrismDID

#### Defined in

[index.ts:133](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L133)

___

### storePrivateKeys

▸ **storePrivateKeys**(`privateKey`, `did`, `keyPathIndex`, `metaId?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `PrivateKey` |
| `did` | `DID` |
| `keyPathIndex` | `number` |
| `metaId?` | ``null`` \| `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.storePrivateKeys

#### Defined in

[index.ts:206](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L206)

___

### createEncrypted

▸ `Static` **createEncrypted**(`name`, `encryptionKey`): `Promise`<[`Database`](Database.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `encryptionKey` | `Uint8Array` |

#### Returns

`Promise`<[`Database`](Database.md)\>

#### Defined in

[index.ts:84](https://github.com/elribonazo/pluto-encrypted/blob/2b80c30/src/index.ts#L84)
