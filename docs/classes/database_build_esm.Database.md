[@pluto-encrypted/database](../README.md) / [database/build/esm](../modules/database_build_esm.md) / Database

# Class: Database

[database/build/esm](../modules/database_build_esm.md).Database

## Table of contents

### Constructors

- [constructor](database_build_esm.Database.md#constructor)

### Properties

- [\_db](database_build_esm.Database.md#_db)
- [dbOptions](database_build_esm.Database.md#dboptions)

### Accessors

- [collections](database_build_esm.Database.md#collections)
- [credentialrequestmetadatas](database_build_esm.Database.md#credentialrequestmetadatas)
- [credentials](database_build_esm.Database.md#credentials)
- [db](database_build_esm.Database.md#db)
- [didpairs](database_build_esm.Database.md#didpairs)
- [dids](database_build_esm.Database.md#dids)
- [linksecrets](database_build_esm.Database.md#linksecrets)
- [mediators](database_build_esm.Database.md#mediators)
- [messages](database_build_esm.Database.md#messages)
- [privatekeys](database_build_esm.Database.md#privatekeys)

### Methods

- [applyORMStatics](database_build_esm.Database.md#applyormstatics)
- [backup](database_build_esm.Database.md#backup)
- [clear](database_build_esm.Database.md#clear)
- [fetchCredentialMetadata](database_build_esm.Database.md#fetchcredentialmetadata)
- [getAllCredentials](database_build_esm.Database.md#getallcredentials)
- [getAllDidPairs](database_build_esm.Database.md#getalldidpairs)
- [getAllMediators](database_build_esm.Database.md#getallmediators)
- [getAllMessages](database_build_esm.Database.md#getallmessages)
- [getAllMessagesByDID](database_build_esm.Database.md#getallmessagesbydid)
- [getAllMessagesByFromToDID](database_build_esm.Database.md#getallmessagesbyfromtodid)
- [getAllMessagesOfType](database_build_esm.Database.md#getallmessagesoftype)
- [getAllMessagesReceived](database_build_esm.Database.md#getallmessagesreceived)
- [getAllMessagesReceivedFrom](database_build_esm.Database.md#getallmessagesreceivedfrom)
- [getAllMessagesSent](database_build_esm.Database.md#getallmessagessent)
- [getAllMessagesSentTo](database_build_esm.Database.md#getallmessagessentto)
- [getAllPeerDIDs](database_build_esm.Database.md#getallpeerdids)
- [getAllPrismDIDs](database_build_esm.Database.md#getallprismdids)
- [getDIDInfoByAlias](database_build_esm.Database.md#getdidinfobyalias)
- [getDIDInfoByDID](database_build_esm.Database.md#getdidinfobydid)
- [getDIDPrivateKeyByID](database_build_esm.Database.md#getdidprivatekeybyid)
- [getDIDPrivateKeysByDID](database_build_esm.Database.md#getdidprivatekeysbydid)
- [getLinkSecret](database_build_esm.Database.md#getlinksecret)
- [getMessage](database_build_esm.Database.md#getmessage)
- [getPairByDID](database_build_esm.Database.md#getpairbydid)
- [getPairByName](database_build_esm.Database.md#getpairbyname)
- [getPrismDIDKeyPathIndex](database_build_esm.Database.md#getprismdidkeypathindex)
- [getPrismLastKeyPathIndex](database_build_esm.Database.md#getprismlastkeypathindex)
- [getPrivateKeyFromDB](database_build_esm.Database.md#getprivatekeyfromdb)
- [start](database_build_esm.Database.md#start)
- [storeCredential](database_build_esm.Database.md#storecredential)
- [storeCredentialMetadata](database_build_esm.Database.md#storecredentialmetadata)
- [storeDIDPair](database_build_esm.Database.md#storedidpair)
- [storeLinkSecret](database_build_esm.Database.md#storelinksecret)
- [storeMediator](database_build_esm.Database.md#storemediator)
- [storeMessage](database_build_esm.Database.md#storemessage)
- [storeMessages](database_build_esm.Database.md#storemessages)
- [storePeerDID](database_build_esm.Database.md#storepeerdid)
- [storePrismDID](database_build_esm.Database.md#storeprismdid)
- [storePrivateKeys](database_build_esm.Database.md#storeprivatekeys)
- [createEncrypted](database_build_esm.Database.md#createencrypted)

## Constructors

### constructor

• **new Database**(`dbOptions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbOptions` | `any` |

#### Defined in

packages/database/build/esm/index.mjs:404

## Properties

### \_db

• **\_db**: `undefined` \| `RxDatabase`\<\{ `[key: string]`: `RxCollection`;  }, `any`, `any`\>

#### Defined in

packages/database/build/esm/index.mjs:560

___

### dbOptions

• **dbOptions**: `any`

#### Defined in

packages/database/build/esm/index.mjs:405

## Accessors

### collections

• `get` **collections**(): `Object`

#### Returns

`Object`

#### Defined in

packages/database/build/esm/index.mjs:410

___

### credentialrequestmetadatas

• `get` **credentialrequestmetadatas**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/esm/index.mjs:413

___

### credentials

• `get` **credentials**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/esm/index.mjs:422

___

### db

• `get` **db**(): `RxDatabase`\<\{ `[key: string]`: `RxCollection`;  }, `any`, `any`\>

#### Returns

`RxDatabase`\<\{ `[key: string]`: `RxCollection`;  }, `any`, `any`\>

#### Defined in

packages/database/build/esm/index.mjs:398

___

### didpairs

• `get` **didpairs**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/esm/index.mjs:419

___

### dids

• `get` **dids**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/esm/index.mjs:428

___

### linksecrets

• `get` **linksecrets**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/esm/index.mjs:416

___

### mediators

• `get` **mediators**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/esm/index.mjs:425

___

### messages

• `get` **messages**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/esm/index.mjs:434

___

### privatekeys

• `get` **privatekeys**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/esm/index.mjs:431

## Methods

### applyORMStatics

▸ **applyORMStatics**(`collectionObj`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionObj` | `any` |

#### Returns

`any`

#### Defined in

packages/database/build/esm/index.mjs:519

___

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<\{ `[key: string]`: `RxCollection`;  }\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<\{ `[key: string]`: `RxCollection`;  }\>\>

#### Defined in

packages/database/build/esm/index.mjs:407

___

### clear

▸ **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:437

___

### fetchCredentialMetadata

▸ **fetchCredentialMetadata**(`linkSecretName`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:1014

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:981

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:689

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:977

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:515

___

### getAllMessagesByDID

▸ **getAllMessagesByDID**(`did`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:817

___

### getAllMessagesByFromToDID

▸ **getAllMessagesByFromToDID**(`from`, `to`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `any` |
| `to` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:917

___

### getAllMessagesOfType

▸ **getAllMessagesOfType**(`type`, `relatedWithDID`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `relatedWithDID` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:891

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:846

___

### getAllMessagesReceivedFrom

▸ **getAllMessagesReceivedFrom**(`did`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:875

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:833

___

### getAllMessagesSentTo

▸ **getAllMessagesSentTo**(`did`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:859

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

#### Returns

`Promise`\<`PeerDID`[]\>

#### Defined in

packages/database/build/esm/index.mjs:947

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<`PrismDIDInfo`[]\>

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Defined in

packages/database/build/esm/index.mjs:761

___

### getDIDInfoByAlias

▸ **getDIDInfoByAlias**(`alias`): `Promise`\<`PrismDIDInfo`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `any` |

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Defined in

packages/database/build/esm/index.mjs:799

___

### getDIDInfoByDID

▸ **getDIDInfoByDID**(`did`): `Promise`\<``null`` \| `PrismDIDInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `any` |

#### Returns

`Promise`\<``null`` \| `PrismDIDInfo`\>

#### Defined in

packages/database/build/esm/index.mjs:779

___

### getDIDPrivateKeyByID

▸ **getDIDPrivateKeyByID**(`id`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:743

___

### getDIDPrivateKeysByDID

▸ **getDIDPrivateKeysByDID**(`did`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:732

___

### getLinkSecret

▸ **getLinkSecret**(`linkSecretName`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:985

___

### getMessage

▸ **getMessage**(`id`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/esm/index.mjs:473

___

### getPairByDID

▸ **getPairByDID**(`did`): `Promise`\<``null`` \| `DIDPair`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `any` |

#### Returns

`Promise`\<``null`` \| `DIDPair`\>

#### Defined in

packages/database/build/esm/index.mjs:694

___

### getPairByName

▸ **getPairByName**(`name`): `Promise`\<``null`` \| `DIDPair`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`Promise`\<``null`` \| `DIDPair`\>

#### Defined in

packages/database/build/esm/index.mjs:713

___

### getPrismDIDKeyPathIndex

▸ **getPrismDIDKeyPathIndex**(`did`): `Promise`\<``null`` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `any` |

#### Returns

`Promise`\<``null`` \| `number`\>

#### Defined in

packages/database/build/esm/index.mjs:933

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

packages/database/build/esm/index.mjs:940

___

### getPrivateKeyFromDB

▸ **getPrivateKeyFromDB**(`privateKey`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `any` |

#### Returns

`any`

#### Defined in

packages/database/build/esm/index.mjs:729

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:522

___

### storeCredential

▸ **storeCredential**(`credential`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:968

___

### storeCredentialMetadata

▸ **storeCredentialMetadata**(`metadata`, `linkSecret`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `any` |
| `linkSecret` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:1007

___

### storeDIDPair

▸ **storeDIDPair**(`host`, `receiver`, `name`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `any` |
| `receiver` | `any` |
| `name` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:656

___

### storeLinkSecret

▸ **storeLinkSecret**(`linkSecret`, `linkSecretName`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecret` | `any` |
| `linkSecretName` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:1001

___

### storeMediator

▸ **storeMediator**(`mediator`, `host`, `routing`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | `any` |
| `host` | `any` |
| `routing` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:753

___

### storeMessage

▸ **storeMessage**(`message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:486

___

### storeMessages

▸ **storeMessages**(`messages`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:510

___

### storePeerDID

▸ **storePeerDID**(`did`, `privateKeys`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `any` |
| `privateKeys` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:627

___

### storePrismDID

▸ **storePrismDID**(`did`, `keyPathIndex`, `privateKey`, `privateKeyMetaId`, `alias`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `any` |
| `keyPathIndex` | `any` |
| `privateKey` | `any` |
| `privateKeyMetaId` | `any` |
| `alias` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:617

___

### storePrivateKeys

▸ **storePrivateKeys**(`privateKey`, `did`, `keyPathIndex`, `_metaId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `any` |
| `did` | `any` |
| `keyPathIndex` | `any` |
| `_metaId` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/esm/index.mjs:663

___

### createEncrypted

▸ `Static` **createEncrypted**(`options`): `Promise`\<[`Database`](database_build_esm.Database.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`Promise`\<[`Database`](database_build_esm.Database.md)\>

#### Defined in

packages/database/build/esm/index.mjs:444
