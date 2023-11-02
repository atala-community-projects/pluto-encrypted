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

[index.ts:88](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L88)

## Properties

### \_db

• `Private` **\_db**: [`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:80](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L80)

___

### dbOptions

• `Private` **dbOptions**: `RxDatabaseCreator`<`any`, `any`\>

#### Defined in

[index.ts:88](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L88)

## Accessors

### db

• `Private` `get` **db**(): [`PlutoDatabase`](../modules.md#plutodatabase)

#### Returns

[`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:81](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L81)

## Methods

### backup

▸ **backup**(): `Promise`<`RxDumpDatabase`<[`PlutoCollections`](../modules.md#plutocollections)\>\>

#### Returns

`Promise`<`RxDumpDatabase`<[`PlutoCollections`](../modules.md#plutocollections)\>\>

#### Defined in

[index.ts:90](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L90)

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

[index.ts:698](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L698)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`<`Credential`[]\>

#### Returns

`Promise`<`Credential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

[index.ts:656](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L656)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`<`DIDPair`[]\>

#### Returns

`Promise`<`DIDPair`[]\>

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

[index.ts:309](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L309)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`<`Mediator`[]\>

#### Returns

`Promise`<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

[index.ts:650](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L650)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

[index.ts:150](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L150)

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

[index.ts:474](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L474)

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

[index.ts:583](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L583)

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

[index.ts:553](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L553)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

[index.ts:505](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L505)

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

[index.ts:536](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L536)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`<`Message`[]\>

#### Returns

`Promise`<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

[index.ts:491](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L491)

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

[index.ts:519](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L519)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`<`PeerDID`[]\>

#### Returns

`Promise`<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

[index.ts:619](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L619)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`<`PrismDIDInfo`[]\>

#### Returns

`Promise`<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

[index.ts:397](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L397)

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

[index.ts:453](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L453)

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

[index.ts:423](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L423)

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

[index.ts:379](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L379)

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

[index.ts:371](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L371)

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

[index.ts:662](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L662)

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

[index.ts:117](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L117)

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

[index.ts:318](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L318)

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

[index.ts:343](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L343)

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

[index.ts:603](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L603)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

[index.ts:611](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L611)

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

[index.ts:365](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L365)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

[index.ts:155](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L155)

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

[index.ts:640](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L640)

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

[index.ts:687](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L687)

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

[index.ts:262](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L262)

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

[index.ts:677](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L677)

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

[index.ts:384](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L384)

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

[index.ts:125](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L125)

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

[index.ts:146](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L146)

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

[index.ts:223](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L223)

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

[index.ts:201](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L201)

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

[index.ts:274](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L274)

___

### createEncrypted

▸ `Static` **createEncrypted**(`name`, `encryptionKey`, `importData?`): `Promise`<[`Database`](Database.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `encryptionKey` | `Uint8Array` |
| `importData?` | `RxDumpDatabase`<[`PlutoCollections`](../modules.md#plutocollections)\> |

#### Returns

`Promise`<[`Database`](Database.md)\>

#### Defined in

[index.ts:94](https://github.com/elribonazo/pluto-encrypted/blob/fbe46b5/src/index.ts#L94)
