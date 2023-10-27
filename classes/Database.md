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

[index.ts:78](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L78)

## Properties

### \_db

• `Private` **\_db**: [`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:70](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L70)

___

### dbOptions

• `Private` **dbOptions**: `RxDatabaseCreator`<`any`, `any`\>

#### Defined in

[index.ts:78](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L78)

## Accessors

### db

• `Private` `get` **db**(): [`PlutoDatabase`](../modules.md#plutodatabase)

#### Returns

[`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:71](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L71)

## Methods

### getAllCredentials

▸ **getAllCredentials**(): `Promise`<`VerifiableCredential`[]\>

#### Returns

`Promise`<`VerifiableCredential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

[index.ts:656](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L656)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`<`DIDPair`[]\>

#### Returns

`Promise`<`DIDPair`[]\>

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

[index.ts:275](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L275)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`<`Mediator`[]\>

#### Returns

`Promise`<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

[index.ts:650](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L650)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

[index.ts:124](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L124)

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

[index.ts:440](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L440)

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

[index.ts:549](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L549)

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

[index.ts:519](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L519)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

[index.ts:471](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L471)

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

[index.ts:502](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L502)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

[index.ts:457](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L457)

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

[index.ts:485](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L485)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`<`PeerDID`[]\>

#### Returns

`Promise`<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

[index.ts:585](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L585)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`<`PrismDIDInfo`[]\>

#### Returns

`Promise`<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

[index.ts:363](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L363)

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

[index.ts:419](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L419)

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

[index.ts:389](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L389)

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

[index.ts:345](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L345)

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

[index.ts:337](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L337)

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

[index.ts:91](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L91)

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

[index.ts:284](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L284)

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

[index.ts:309](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L309)

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

[index.ts:569](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L569)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

[index.ts:577](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L577)

___

### getPrivateKeyFromDB

▸ `Private` **getPrivateKeyFromDB**(`privateKey`): `PrivateKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKeyDocument`](../modules.md#privatekeydocument) |

#### Returns

`PrivateKey`

#### Defined in

[index.ts:331](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L331)

___

### parseCredentialSubject

▸ `Private` **parseCredentialSubject**(`credentialSubject`): [`CredentialSubjectType`](../modules.md#credentialsubjecttype)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialSubject` | `Object` |

#### Returns

[`CredentialSubjectType`](../modules.md#credentialsubjecttype)[]

#### Defined in

[index.ts:606](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L606)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

[index.ts:129](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L129)

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

[index.ts:623](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L623)

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

[index.ts:228](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L228)

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

[index.ts:350](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L350)

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

[index.ts:99](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L99)

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

[index.ts:120](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L120)

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

[index.ts:189](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L189)

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

[index.ts:167](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L167)

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

[index.ts:240](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L240)

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

[index.ts:80](https://github.com/elribonazo/pluto-encrypted/blob/f0623b5/src/index.ts#L80)
