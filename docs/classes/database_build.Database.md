[@pluto-encrypted/database](../README.md) / [database/build](../modules/database_build.md) / Database

# Class: Database

[database/build](../modules/database_build.md).Database

## Implements

- `Pluto`

## Table of contents

### Constructors

- [constructor](database_build.Database.md#constructor)

### Accessors

- [collections](database_build.Database.md#collections)
- [credentialrequestmetadatas](database_build.Database.md#credentialrequestmetadatas)
- [credentials](database_build.Database.md#credentials)
- [didpairs](database_build.Database.md#didpairs)
- [dids](database_build.Database.md#dids)
- [linksecrets](database_build.Database.md#linksecrets)
- [mediators](database_build.Database.md#mediators)
- [messages](database_build.Database.md#messages)
- [privatekeys](database_build.Database.md#privatekeys)

### Methods

- [backup](database_build.Database.md#backup)
- [clear](database_build.Database.md#clear)
- [fetchCredentialMetadata](database_build.Database.md#fetchcredentialmetadata)
- [getAllCredentials](database_build.Database.md#getallcredentials)
- [getAllDidPairs](database_build.Database.md#getalldidpairs)
- [getAllMediators](database_build.Database.md#getallmediators)
- [getAllMessages](database_build.Database.md#getallmessages)
- [getAllMessagesByDID](database_build.Database.md#getallmessagesbydid)
- [getAllMessagesByFromToDID](database_build.Database.md#getallmessagesbyfromtodid)
- [getAllMessagesOfType](database_build.Database.md#getallmessagesoftype)
- [getAllMessagesReceived](database_build.Database.md#getallmessagesreceived)
- [getAllMessagesReceivedFrom](database_build.Database.md#getallmessagesreceivedfrom)
- [getAllMessagesSent](database_build.Database.md#getallmessagessent)
- [getAllMessagesSentTo](database_build.Database.md#getallmessagessentto)
- [getAllPeerDIDs](database_build.Database.md#getallpeerdids)
- [getAllPrismDIDs](database_build.Database.md#getallprismdids)
- [getDIDInfoByAlias](database_build.Database.md#getdidinfobyalias)
- [getDIDInfoByDID](database_build.Database.md#getdidinfobydid)
- [getDIDPrivateKeyByID](database_build.Database.md#getdidprivatekeybyid)
- [getDIDPrivateKeysByDID](database_build.Database.md#getdidprivatekeysbydid)
- [getLinkSecret](database_build.Database.md#getlinksecret)
- [getMessage](database_build.Database.md#getmessage)
- [getPairByDID](database_build.Database.md#getpairbydid)
- [getPairByName](database_build.Database.md#getpairbyname)
- [getPrismDIDKeyPathIndex](database_build.Database.md#getprismdidkeypathindex)
- [getPrismLastKeyPathIndex](database_build.Database.md#getprismlastkeypathindex)
- [start](database_build.Database.md#start)
- [storeCredential](database_build.Database.md#storecredential)
- [storeCredentialMetadata](database_build.Database.md#storecredentialmetadata)
- [storeDIDPair](database_build.Database.md#storedidpair)
- [storeLinkSecret](database_build.Database.md#storelinksecret)
- [storeMediator](database_build.Database.md#storemediator)
- [storeMessage](database_build.Database.md#storemessage)
- [storeMessages](database_build.Database.md#storemessages)
- [storePeerDID](database_build.Database.md#storepeerdid)
- [storePrismDID](database_build.Database.md#storeprismdid)
- [storePrivateKeys](database_build.Database.md#storeprivatekeys)
- [createEncrypted](database_build.Database.md#createencrypted)

## Constructors

### constructor

• **new Database**(`dbOptions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbOptions` | `RxDatabaseCreator`\<`any`, `any`\> |

#### Defined in

packages/database/build/index.d.ts:16

## Accessors

### collections

• `get` **collections**(): `PlutoCollections`

#### Returns

`PlutoCollections`

#### Defined in

packages/database/build/index.d.ts:18

___

### credentialrequestmetadatas

• `get` **credentialrequestmetadatas**(): `CredentialRequestMetadataCollection`

#### Returns

`CredentialRequestMetadataCollection`

#### Defined in

packages/database/build/index.d.ts:19

___

### credentials

• `get` **credentials**(): `CredentialCollection`

#### Returns

`CredentialCollection`

#### Defined in

packages/database/build/index.d.ts:22

___

### didpairs

• `get` **didpairs**(): `DIDPairCollection`

#### Returns

`DIDPairCollection`

#### Defined in

packages/database/build/index.d.ts:21

___

### dids

• `get` **dids**(): `DIDCollection`

#### Returns

`DIDCollection`

#### Defined in

packages/database/build/index.d.ts:24

___

### linksecrets

• `get` **linksecrets**(): `LinkSecretColletion`

#### Returns

`LinkSecretColletion`

#### Defined in

packages/database/build/index.d.ts:20

___

### mediators

• `get` **mediators**(): `MediatorCollection`

#### Returns

`MediatorCollection`

#### Defined in

packages/database/build/index.d.ts:23

___

### messages

• `get` **messages**(): `MessageColletion`

#### Returns

`MessageColletion`

#### Defined in

packages/database/build/index.d.ts:26

___

### privatekeys

• `get` **privatekeys**(): `PrivateKeyColletion`

#### Returns

`PrivateKeyColletion`

#### Defined in

packages/database/build/index.d.ts:25

## Methods

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Defined in

packages/database/build/index.d.ts:17

___

### clear

▸ **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/index.d.ts:27

___

### fetchCredentialMetadata

▸ **fetchCredentialMetadata**(`linkSecretName`): `Promise`\<``null`` \| `CredentialRequestMeta`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<``null`` \| `CredentialRequestMeta`\>

#### Implementation of

Domain.Pluto.fetchCredentialMetadata

#### Defined in

packages/database/build/index.d.ts:71

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<`Credential`[]\>

#### Returns

`Promise`\<`Credential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

packages/database/build/index.d.ts:67

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<`DIDPair`[]\>

#### Returns

`Promise`\<`DIDPair`[]\>

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

packages/database/build/index.d.ts:45

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<`Mediator`[]\>

#### Returns

`Promise`\<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

packages/database/build/index.d.ts:66

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

packages/database/build/index.d.ts:38

___

### getAllMessagesByDID

▸ **getAllMessagesByDID**(`did`): `Promise`\<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesByDID

#### Defined in

packages/database/build/index.d.ts:55

___

### getAllMessagesByFromToDID

▸ **getAllMessagesByFromToDID**(`from`, `to`): `Promise`\<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `DID` |
| `to` | `DID` |

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesByFromToDID

#### Defined in

packages/database/build/index.d.ts:61

___

### getAllMessagesOfType

▸ **getAllMessagesOfType**(`type`, `relatedWithDID?`): `Promise`\<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `relatedWithDID?` | `DID` |

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesOfType

#### Defined in

packages/database/build/index.d.ts:60

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

packages/database/build/index.d.ts:57

___

### getAllMessagesReceivedFrom

▸ **getAllMessagesReceivedFrom**(`did`): `Promise`\<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceivedFrom

#### Defined in

packages/database/build/index.d.ts:59

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

packages/database/build/index.d.ts:56

___

### getAllMessagesSentTo

▸ **getAllMessagesSentTo**(`did`): `Promise`\<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSentTo

#### Defined in

packages/database/build/index.d.ts:58

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

#### Returns

`Promise`\<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

packages/database/build/index.d.ts:64

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<`PrismDIDInfo`[]\>

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

packages/database/build/index.d.ts:52

___

### getDIDInfoByAlias

▸ **getDIDInfoByAlias**(`alias`): `Promise`\<`PrismDIDInfo`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `string` |

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getDIDInfoByAlias

#### Defined in

packages/database/build/index.d.ts:54

___

### getDIDInfoByDID

▸ **getDIDInfoByDID**(`did`): `Promise`\<``null`` \| `PrismDIDInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<``null`` \| `PrismDIDInfo`\>

#### Implementation of

Domain.Pluto.getDIDInfoByDID

#### Defined in

packages/database/build/index.d.ts:53

___

### getDIDPrivateKeyByID

▸ **getDIDPrivateKeyByID**(`id`): `Promise`\<``null`` \| `PrivateKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| `PrivateKey`\>

#### Implementation of

Domain.Pluto.getDIDPrivateKeyByID

#### Defined in

packages/database/build/index.d.ts:50

___

### getDIDPrivateKeysByDID

▸ **getDIDPrivateKeysByDID**(`did`): `Promise`\<`PrivateKey`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<`PrivateKey`[]\>

#### Implementation of

Domain.Pluto.getDIDPrivateKeysByDID

#### Defined in

packages/database/build/index.d.ts:49

___

### getLinkSecret

▸ **getLinkSecret**(`linkSecretName?`): `Promise`\<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName?` | `string` |

#### Returns

`Promise`\<``null`` \| `string`\>

#### Implementation of

Domain.Pluto.getLinkSecret

#### Defined in

packages/database/build/index.d.ts:68

___

### getMessage

▸ **getMessage**(`id`): `Promise`\<``null`` \| `Message`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| `Message`\>

#### Implementation of

Domain.Pluto.getMessage

#### Defined in

packages/database/build/index.d.ts:35

___

### getPairByDID

▸ **getPairByDID**(`did`): `Promise`\<``null`` \| `DIDPair`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<``null`` \| `DIDPair`\>

#### Implementation of

Domain.Pluto.getPairByDID

#### Defined in

packages/database/build/index.d.ts:46

___

### getPairByName

▸ **getPairByName**(`name`): `Promise`\<``null`` \| `DIDPair`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<``null`` \| `DIDPair`\>

#### Implementation of

Domain.Pluto.getPairByName

#### Defined in

packages/database/build/index.d.ts:47

___

### getPrismDIDKeyPathIndex

▸ **getPrismDIDKeyPathIndex**(`did`): `Promise`\<``null`` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<``null`` \| `number`\>

#### Implementation of

Domain.Pluto.getPrismDIDKeyPathIndex

#### Defined in

packages/database/build/index.d.ts:62

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

packages/database/build/index.d.ts:63

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

packages/database/build/index.d.ts:40

___

### storeCredential

▸ **storeCredential**(`credential`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | `Credential` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeCredential

#### Defined in

packages/database/build/index.d.ts:65

___

### storeCredentialMetadata

▸ **storeCredentialMetadata**(`metadata`, `linkSecret`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `CredentialRequestMeta` |
| `linkSecret` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeCredentialMetadata

#### Defined in

packages/database/build/index.d.ts:70

___

### storeDIDPair

▸ **storeDIDPair**(`host`, `receiver`, `name`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `DID` |
| `receiver` | `DID` |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeDIDPair

#### Defined in

packages/database/build/index.d.ts:43

___

### storeLinkSecret

▸ **storeLinkSecret**(`linkSecret`, `linkSecretName`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecret` | `string` |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeLinkSecret

#### Defined in

packages/database/build/index.d.ts:69

___

### storeMediator

▸ **storeMediator**(`mediator`, `host`, `routing`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | `DID` |
| `host` | `DID` |
| `routing` | `DID` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeMediator

#### Defined in

packages/database/build/index.d.ts:51

___

### storeMessage

▸ **storeMessage**(`message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeMessage

#### Defined in

packages/database/build/index.d.ts:36

___

### storeMessages

▸ **storeMessages**(`messages`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | `Message`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeMessages

#### Defined in

packages/database/build/index.d.ts:37

___

### storePeerDID

▸ **storePeerDID**(`did`, `privateKeys`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |
| `privateKeys` | `PrivateKey`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storePeerDID

#### Defined in

packages/database/build/index.d.ts:42

___

### storePrismDID

▸ **storePrismDID**(`did`, `keyPathIndex`, `privateKey`, `privateKeyMetaId?`, `alias?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |
| `keyPathIndex` | `number` |
| `privateKey` | `PrivateKey` |
| `privateKeyMetaId?` | ``null`` \| `string` |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storePrismDID

#### Defined in

packages/database/build/index.d.ts:41

___

### storePrivateKeys

▸ **storePrivateKeys**(`privateKey`, `did`, `keyPathIndex`, `_metaId?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `PrivateKey` |
| `did` | `DID` |
| `keyPathIndex` | `number` |
| `_metaId?` | ``null`` \| `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storePrivateKeys

#### Defined in

packages/database/build/index.d.ts:44

___

### createEncrypted

▸ `Static` **createEncrypted**(`options`): `Promise`\<[`Database`](database_build.Database.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.autoStart?` | `boolean` |
| `options.encryptionKey` | `Uint8Array` |
| `options.importData?` | `RxDumpDatabase`\<`PlutoCollections`\> |
| `options.name` | `string` |
| `options.storage` | `RxStorage`\<`any`, `any`\> |

#### Returns

`Promise`\<[`Database`](database_build.Database.md)\>

#### Defined in

packages/database/build/index.d.ts:28
