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

[index.ts:86](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L86)

## Properties

### \_db

• `Private` **\_db**: [`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:78](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L78)

___

### dbOptions

• `Private` **dbOptions**: `RxDatabaseCreator`<`any`, `any`\>

#### Defined in

[index.ts:86](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L86)

## Accessors

### db

• `Private` `get` **db**(): [`PlutoDatabase`](../modules.md#plutodatabase)

#### Returns

[`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:79](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L79)

## Methods

### backup

▸ **backup**(): `Promise`<`RxDumpDatabase`<[`PlutoCollections`](../modules.md#plutocollections)\>\>

#### Returns

`Promise`<`RxDumpDatabase`<[`PlutoCollections`](../modules.md#plutocollections)\>\>

#### Defined in

[index.ts:88](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L88)

___

### fetchCredentialMetadata

▸ **fetchCredentialMetadata**(`linkSecretName`): `Promise`<``null`` \| `CredentialRequestMeta`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName` | `string` |

#### Returns

`Promise`<``null`` \| `CredentialRequestMeta`\>

#### Implementation of

Domain.Pluto.fetchCredentialMetadata

#### Defined in

[index.ts:702](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L702)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`<`Credential`[]\>

#### Returns

`Promise`<`Credential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

[index.ts:660](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L660)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`<`DIDPair`[]\>

#### Returns

`Promise`<`DIDPair`[]\>

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

[index.ts:313](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L313)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`<`Mediator`[]\>

#### Returns

`Promise`<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

[index.ts:654](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L654)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

[index.ts:154](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L154)

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

[index.ts:478](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L478)

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

[index.ts:587](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L587)

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

[index.ts:557](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L557)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

[index.ts:509](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L509)

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

[index.ts:540](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L540)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

[index.ts:495](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L495)

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

[index.ts:523](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L523)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`<`PeerDID`[]\>

#### Returns

`Promise`<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

[index.ts:623](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L623)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`<`PrismDIDInfo`[]\>

#### Returns

`Promise`<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

[index.ts:401](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L401)

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

[index.ts:457](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L457)

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

[index.ts:427](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L427)

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

[index.ts:383](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L383)

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

[index.ts:375](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L375)

___

### getLinkSecret

▸ **getLinkSecret**(`linkSecretName?`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName?` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Implementation of

Domain.Pluto.getLinkSecret

#### Defined in

[index.ts:666](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L666)

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

[index.ts:121](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L121)

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

[index.ts:322](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L322)

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

[index.ts:347](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L347)

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

[index.ts:607](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L607)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

[index.ts:615](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L615)

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

[index.ts:369](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L369)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

[index.ts:159](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L159)

___

### storeCredential

▸ **storeCredential**(`credential`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | `Credential` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.storeCredential

#### Defined in

[index.ts:644](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L644)

___

### storeCredentialMetadata

▸ **storeCredentialMetadata**(`metadata`, `linkSecret`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `CredentialRequestMeta` |
| `linkSecret` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.storeCredentialMetadata

#### Defined in

[index.ts:691](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L691)

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

[index.ts:266](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L266)

___

### storeLinkSecret

▸ **storeLinkSecret**(`linkSecret`, `linkSecretName`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecret` | `string` |
| `linkSecretName` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.storeLinkSecret

#### Defined in

[index.ts:681](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L681)

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

[index.ts:388](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L388)

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

[index.ts:129](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L129)

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

[index.ts:150](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L150)

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

[index.ts:227](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L227)

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

[index.ts:205](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L205)

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

[index.ts:278](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L278)

___

### createEncrypted

▸ `Static` **createEncrypted**(`options`): `Promise`<[`Database`](Database.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.encryptionKey` | `Uint8Array` |
| `options.importData?` | `RxDumpDatabase`<[`PlutoCollections`](../modules.md#plutocollections)\> |
| `options.name` | `string` |
| `options.storageResolver` | () => `Promise`<`RxStorage`<`any`, `any`\>\> |

#### Returns

`Promise`<[`Database`](Database.md)\>

#### Defined in

[index.ts:92](https://github.com/elribonazo/pluto-encrypted/blob/6e9e46b/src/index.ts#L92)
