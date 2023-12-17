[@pluto-encrypted/database](../README.md) / [database/build/cjs](../modules/database_build_cjs.md) / Database

# Class: Database

[database/build/cjs](../modules/database_build_cjs.md).Database

## Table of contents

### Constructors

- [constructor](database_build_cjs.Database.md#constructor)

### Properties

- [\_db](database_build_cjs.Database.md#_db)
- [dbOptions](database_build_cjs.Database.md#dboptions)

### Accessors

- [collections](database_build_cjs.Database.md#collections)
- [credentialrequestmetadatas](database_build_cjs.Database.md#credentialrequestmetadatas)
- [credentials](database_build_cjs.Database.md#credentials)
- [db](database_build_cjs.Database.md#db)
- [didpairs](database_build_cjs.Database.md#didpairs)
- [dids](database_build_cjs.Database.md#dids)
- [linksecrets](database_build_cjs.Database.md#linksecrets)
- [mediators](database_build_cjs.Database.md#mediators)
- [messages](database_build_cjs.Database.md#messages)
- [privatekeys](database_build_cjs.Database.md#privatekeys)

### Methods

- [applyORMStatics](database_build_cjs.Database.md#applyormstatics)
- [backup](database_build_cjs.Database.md#backup)
- [clear](database_build_cjs.Database.md#clear)
- [fetchCredentialMetadata](database_build_cjs.Database.md#fetchcredentialmetadata)
- [getAllCredentials](database_build_cjs.Database.md#getallcredentials)
- [getAllDidPairs](database_build_cjs.Database.md#getalldidpairs)
- [getAllMediators](database_build_cjs.Database.md#getallmediators)
- [getAllMessages](database_build_cjs.Database.md#getallmessages)
- [getAllMessagesByDID](database_build_cjs.Database.md#getallmessagesbydid)
- [getAllMessagesByFromToDID](database_build_cjs.Database.md#getallmessagesbyfromtodid)
- [getAllMessagesOfType](database_build_cjs.Database.md#getallmessagesoftype)
- [getAllMessagesReceived](database_build_cjs.Database.md#getallmessagesreceived)
- [getAllMessagesReceivedFrom](database_build_cjs.Database.md#getallmessagesreceivedfrom)
- [getAllMessagesSent](database_build_cjs.Database.md#getallmessagessent)
- [getAllMessagesSentTo](database_build_cjs.Database.md#getallmessagessentto)
- [getAllPeerDIDs](database_build_cjs.Database.md#getallpeerdids)
- [getAllPrismDIDs](database_build_cjs.Database.md#getallprismdids)
- [getDIDInfoByAlias](database_build_cjs.Database.md#getdidinfobyalias)
- [getDIDInfoByDID](database_build_cjs.Database.md#getdidinfobydid)
- [getDIDPrivateKeyByID](database_build_cjs.Database.md#getdidprivatekeybyid)
- [getDIDPrivateKeysByDID](database_build_cjs.Database.md#getdidprivatekeysbydid)
- [getLinkSecret](database_build_cjs.Database.md#getlinksecret)
- [getMessage](database_build_cjs.Database.md#getmessage)
- [getPairByDID](database_build_cjs.Database.md#getpairbydid)
- [getPairByName](database_build_cjs.Database.md#getpairbyname)
- [getPrismDIDKeyPathIndex](database_build_cjs.Database.md#getprismdidkeypathindex)
- [getPrismLastKeyPathIndex](database_build_cjs.Database.md#getprismlastkeypathindex)
- [getPrivateKeyFromDB](database_build_cjs.Database.md#getprivatekeyfromdb)
- [start](database_build_cjs.Database.md#start)
- [storeCredential](database_build_cjs.Database.md#storecredential)
- [storeCredentialMetadata](database_build_cjs.Database.md#storecredentialmetadata)
- [storeDIDPair](database_build_cjs.Database.md#storedidpair)
- [storeLinkSecret](database_build_cjs.Database.md#storelinksecret)
- [storeMediator](database_build_cjs.Database.md#storemediator)
- [storeMessage](database_build_cjs.Database.md#storemessage)
- [storeMessages](database_build_cjs.Database.md#storemessages)
- [storePeerDID](database_build_cjs.Database.md#storepeerdid)
- [storePrismDID](database_build_cjs.Database.md#storeprismdid)
- [storePrivateKeys](database_build_cjs.Database.md#storeprivatekeys)
- [createEncrypted](database_build_cjs.Database.md#createencrypted)

## Constructors

### constructor

• **new Database**(`dbOptions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbOptions` | `any` |

#### Defined in

packages/database/build/cjs/index.cjs:406

## Properties

### \_db

• **\_db**: `undefined` \| `RxDatabase`\<\{ `[key: string]`: `RxCollection`;  }, `any`, `any`\>

#### Defined in

packages/database/build/cjs/index.cjs:562

___

### dbOptions

• **dbOptions**: `any`

#### Defined in

packages/database/build/cjs/index.cjs:407

## Accessors

### collections

• `get` **collections**(): `Object`

#### Returns

`Object`

#### Defined in

packages/database/build/cjs/index.cjs:412

___

### credentialrequestmetadatas

• `get` **credentialrequestmetadatas**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/cjs/index.cjs:415

___

### credentials

• `get` **credentials**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/cjs/index.cjs:424

___

### db

• `get` **db**(): `RxDatabase`\<\{ `[key: string]`: `RxCollection`;  }, `any`, `any`\>

#### Returns

`RxDatabase`\<\{ `[key: string]`: `RxCollection`;  }, `any`, `any`\>

#### Defined in

packages/database/build/cjs/index.cjs:400

___

### didpairs

• `get` **didpairs**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/cjs/index.cjs:421

___

### dids

• `get` **dids**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/cjs/index.cjs:430

___

### linksecrets

• `get` **linksecrets**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/cjs/index.cjs:418

___

### mediators

• `get` **mediators**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/cjs/index.cjs:427

___

### messages

• `get` **messages**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/cjs/index.cjs:436

___

### privatekeys

• `get` **privatekeys**(): `undefined` \| `RxCollection`

#### Returns

`undefined` \| `RxCollection`

#### Defined in

packages/database/build/cjs/index.cjs:433

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

packages/database/build/cjs/index.cjs:521

___

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<\{ `[key: string]`: `RxCollection`;  }\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<\{ `[key: string]`: `RxCollection`;  }\>\>

#### Defined in

packages/database/build/cjs/index.cjs:409

___

### clear

▸ **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/cjs/index.cjs:439

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

packages/database/build/cjs/index.cjs:1016

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/cjs/index.cjs:983

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/cjs/index.cjs:691

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/cjs/index.cjs:979

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/cjs/index.cjs:517

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

packages/database/build/cjs/index.cjs:819

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

packages/database/build/cjs/index.cjs:919

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

packages/database/build/cjs/index.cjs:893

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/cjs/index.cjs:848

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

packages/database/build/cjs/index.cjs:877

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/database/build/cjs/index.cjs:835

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

packages/database/build/cjs/index.cjs:861

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

#### Returns

`Promise`\<`PeerDID`[]\>

#### Defined in

packages/database/build/cjs/index.cjs:949

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<`PrismDIDInfo`[]\>

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Defined in

packages/database/build/cjs/index.cjs:763

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

packages/database/build/cjs/index.cjs:801

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

packages/database/build/cjs/index.cjs:781

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

packages/database/build/cjs/index.cjs:745

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

packages/database/build/cjs/index.cjs:734

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

packages/database/build/cjs/index.cjs:987

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

packages/database/build/cjs/index.cjs:475

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

packages/database/build/cjs/index.cjs:696

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

packages/database/build/cjs/index.cjs:715

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

packages/database/build/cjs/index.cjs:935

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

packages/database/build/cjs/index.cjs:942

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

packages/database/build/cjs/index.cjs:731

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/database/build/cjs/index.cjs:524

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

packages/database/build/cjs/index.cjs:970

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

packages/database/build/cjs/index.cjs:1009

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

packages/database/build/cjs/index.cjs:658

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

packages/database/build/cjs/index.cjs:1003

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

packages/database/build/cjs/index.cjs:755

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

packages/database/build/cjs/index.cjs:488

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

packages/database/build/cjs/index.cjs:512

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

packages/database/build/cjs/index.cjs:629

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

packages/database/build/cjs/index.cjs:619

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

packages/database/build/cjs/index.cjs:665

___

### createEncrypted

▸ `Static` **createEncrypted**(`options`): `Promise`\<[`Database`](database_build_cjs.Database.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`Promise`\<[`Database`](database_build_cjs.Database.md)\>

#### Defined in

packages/database/build/cjs/index.cjs:446
