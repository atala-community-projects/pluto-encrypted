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

[index.ts:80](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L80)

## Properties

### \_db

• `Private` **\_db**: [`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:72](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L72)

___

### dbOptions

• `Private` **dbOptions**: `RxDatabaseCreator`<`any`, `any`\>

#### Defined in

[index.ts:80](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L80)

## Accessors

### db

• `Private` `get` **db**(): [`PlutoDatabase`](../modules.md#plutodatabase)

#### Returns

[`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:73](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L73)

## Methods

### backup

▸ **backup**(): `Promise`<`RxDumpDatabase`<[`PlutoCollections`](../modules.md#plutocollections)\>\>

#### Returns

`Promise`<`RxDumpDatabase`<[`PlutoCollections`](../modules.md#plutocollections)\>\>

#### Defined in

[index.ts:82](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L82)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`<`VerifiableCredential`[]\>

#### Returns

`Promise`<`VerifiableCredential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

[index.ts:666](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L666)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`<`DIDPair`[]\>

#### Returns

`Promise`<`DIDPair`[]\>

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

[index.ts:285](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L285)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`<`Mediator`[]\>

#### Returns

`Promise`<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

[index.ts:660](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L660)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

[index.ts:134](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L134)

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

[index.ts:450](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L450)

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

[index.ts:559](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L559)

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

[index.ts:529](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L529)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

[index.ts:481](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L481)

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

[index.ts:512](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L512)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

[index.ts:467](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L467)

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

[index.ts:495](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L495)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`<`PeerDID`[]\>

#### Returns

`Promise`<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

[index.ts:595](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L595)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`<`PrismDIDInfo`[]\>

#### Returns

`Promise`<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

[index.ts:373](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L373)

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

[index.ts:429](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L429)

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

[index.ts:399](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L399)

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

[index.ts:355](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L355)

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

[index.ts:347](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L347)

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

[index.ts:101](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L101)

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

[index.ts:294](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L294)

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

[index.ts:319](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L319)

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

[index.ts:579](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L579)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

[index.ts:587](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L587)

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

[index.ts:341](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L341)

___

### import

▸ **import**(`importData`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `importData` | `RxDumpDatabase`<[`PlutoCollections`](../modules.md#plutocollections)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:86](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L86)

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

[index.ts:616](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L616)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

[index.ts:139](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L139)

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

[index.ts:633](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L633)

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

[index.ts:238](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L238)

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

[index.ts:360](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L360)

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

[index.ts:109](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L109)

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

[index.ts:130](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L130)

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

[index.ts:199](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L199)

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

[index.ts:177](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L177)

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

[index.ts:250](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L250)

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

[index.ts:90](https://github.com/elribonazo/pluto-encrypted/blob/2eb624d/src/index.ts#L90)
