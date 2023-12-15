[pluto-encrypted - v0.2.0](../README.md) / [Exports](../modules.md) / Database

# Class: Database

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Implements

- `Pluto`

## Table of contents

### Constructors

- [constructor](Database.md#constructor)

### Properties

- [collections](Database.md#collections)

### Accessors

- [credentialrequestmetadatas](Database.md#credentialrequestmetadatas)
- [credentials](Database.md#credentials)
- [db](Database.md#db)
- [didpairs](Database.md#didpairs)
- [dids](Database.md#dids)
- [linksecrets](Database.md#linksecrets)
- [mediators](Database.md#mediators)
- [messages](Database.md#messages)
- [privatekeys](Database.md#privatekeys)

### Methods

- [backup](Database.md#backup)
- [clear](Database.md#clear)
- [fetchCredentialMetadata](Database.md#fetchcredentialmetadata)
- [getAllCredentials](Database.md#getallcredentials)
- [getAllDidPairs](Database.md#getalldidpairs)
- [getAllMediators](Database.md#getallmediators)
- [getAllMessages](Database.md#getallmessages)
- [getAllMessagesByDID](Database.md#getallmessagesbydid)
- [getAllMessagesByFromToDID](Database.md#getallmessagesbyfromtodid)
- [getAllMessagesOfType](Database.md#getallmessagesoftype)
- [getAllMessagesReceived](Database.md#getallmessagesreceived)
- [getAllMessagesReceivedFrom](Database.md#getallmessagesreceivedfrom)
- [getAllMessagesSent](Database.md#getallmessagessent)
- [getAllMessagesSentTo](Database.md#getallmessagessentto)
- [getAllPeerDIDs](Database.md#getallpeerdids)
- [getAllPrismDIDs](Database.md#getallprismdids)
- [getDIDInfoByAlias](Database.md#getdidinfobyalias)
- [getDIDInfoByDID](Database.md#getdidinfobydid)
- [getDIDPrivateKeyByID](Database.md#getdidprivatekeybyid)
- [getDIDPrivateKeysByDID](Database.md#getdidprivatekeysbydid)
- [getLinkSecret](Database.md#getlinksecret)
- [getMessage](Database.md#getmessage)
- [getPairByDID](Database.md#getpairbydid)
- [getPairByName](Database.md#getpairbyname)
- [getPrismDIDKeyPathIndex](Database.md#getprismdidkeypathindex)
- [getPrismLastKeyPathIndex](Database.md#getprismlastkeypathindex)
- [start](Database.md#start)
- [storeCredential](Database.md#storecredential)
- [storeCredentialMetadata](Database.md#storecredentialmetadata)
- [storeDIDPair](Database.md#storedidpair)
- [storeLinkSecret](Database.md#storelinksecret)
- [storeMediator](Database.md#storemediator)
- [storeMessage](Database.md#storemessage)
- [storeMessages](Database.md#storemessages)
- [storePeerDID](Database.md#storepeerdid)
- [storePrismDID](Database.md#storeprismdid)
- [storePrivateKeys](Database.md#storeprivatekeys)
- [createEncrypted](Database.md#createencrypted)

## Constructors

### constructor

• **new Database**(`dbOptions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbOptions` | `RxDatabaseCreator`\<`any`, `any`\> |

#### Defined in

[index.ts:118](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L118)

## Properties

### collections

• **collections**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `credentialrequestmetadatas` | `RxCollection`\<`CredentialRequestMetadataSchemaType`, `GenericORMType`\<`CredentialRequestMetadataDocument`\>\> |
| `credentials` | `RxCollection`\<`CredentialSchemaType`, `GenericORMType`\<`CredentialDocument`\>\> |
| `didpairs` | `RxCollection`\<`DIDPairSchemaType`, `GenericORMType`\<`DIDPairDocument`\>\> |
| `dids` | `RxCollection`\<`DIDSchemaType`, `GenericORMType`\<`DIDDocument`\>\> |
| `linksecrets` | `RxCollection`\<`LinkSecretSchemaType`, `GenericORMType`\<`LinkSecretDocument`\>\> |
| `mediators` | `RxCollection`\<`MediatorSchemaType`, `GenericORMType`\<`MediatorDocument`\>\> |
| `messages` | `RxCollection`\<`MessageSchemaType`, `GenericORMType`\<`MessageDocument`\>\> |
| `privatekeys` | `RxCollection`\<`KeySchemaType`, `GenericORMType`\<`PrivateKeyDocument`\>\> |

#### Defined in

[index.ts:100](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L100)

## Accessors

### credentialrequestmetadatas

• `get` **credentialrequestmetadatas**(): `CredentialRequestMetadataCollection`

CredentialRequestMetadatas
Stores anoncreds credential metadata + exposes orm functions

examples:
Count all Credential Metadatas
```ts
await db.credentialmetadatas.count({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Returns

`CredentialRequestMetadataCollection`

#### Defined in

[index.ts:134](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L134)

___

### credentials

• `get` **credentials**(): `CredentialCollection`

#### Returns

`CredentialCollection`

#### Defined in

[index.ts:146](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L146)

___

### db

• `get` **db**(): `PlutoDatabase`

#### Returns

`PlutoDatabase`

#### Defined in

[index.ts:111](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L111)

___

### didpairs

• `get` **didpairs**(): `DIDPairCollection`

#### Returns

`DIDPairCollection`

#### Defined in

[index.ts:142](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L142)

___

### dids

• `get` **dids**(): `DIDCollection`

#### Returns

`DIDCollection`

#### Defined in

[index.ts:155](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L155)

___

### linksecrets

• `get` **linksecrets**(): `LinkSecretColletion`

#### Returns

`LinkSecretColletion`

#### Defined in

[index.ts:138](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L138)

___

### mediators

• `get` **mediators**(): `MediatorCollection`

#### Returns

`MediatorCollection`

#### Defined in

[index.ts:150](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L150)

___

### messages

• `get` **messages**(): `MessageColletion`

#### Returns

`MessageColletion`

#### Defined in

[index.ts:163](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L163)

___

### privatekeys

• `get` **privatekeys**(): `PrivateKeyColletion`

#### Returns

`PrivateKeyColletion`

#### Defined in

[index.ts:159](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L159)

## Methods

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Defined in

[index.ts:120](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L120)

___

### clear

▸ **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[index.ts:167](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L167)

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

[index.ts:928](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L928)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<`Credential`[]\>

#### Returns

`Promise`\<`Credential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

[index.ts:878](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L878)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<`DIDPair`[]\>

#### Returns

`Promise`\<`DIDPair`[]\>

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

[index.ts:497](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L497)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<`Mediator`[]\>

#### Returns

`Promise`\<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

[index.ts:873](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L873)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

[index.ts:247](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L247)

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

[index.ts:686](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L686)

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

[index.ts:799](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L799)

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

[index.ts:768](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L768)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

[index.ts:719](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L719)

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

[index.ts:751](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L751)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

[index.ts:704](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L704)

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

[index.ts:734](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L734)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

#### Returns

`Promise`\<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

[index.ts:836](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L836)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<`PrismDIDInfo`[]\>

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

[index.ts:594](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L594)

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

[index.ts:659](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L659)

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

[index.ts:626](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L626)

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

[index.ts:570](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L570)

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

[index.ts:558](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L558)

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

[index.ts:885](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L885)

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

[index.ts:203](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L203)

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

[index.ts:506](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L506)

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

[index.ts:530](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L530)

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

[index.ts:820](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L820)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

[index.ts:828](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L828)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

[index.ts:257](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L257)

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

[index.ts:863](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L863)

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

[index.ts:917](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L917)

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

[index.ts:450](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L450)

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

[index.ts:907](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L907)

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

[index.ts:581](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L581)

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

[index.ts:217](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L217)

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

[index.ts:241](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L241)

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

[index.ts:414](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L414)

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

[index.ts:392](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L392)

___

### storePrivateKeys

▸ **storePrivateKeys**(`privateKey`, `did`, `keyPathIndex`, `metaId?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `PrivateKey` |
| `did` | `DID` |
| `keyPathIndex` | `number` |
| `metaId?` | ``null`` \| `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storePrivateKeys

#### Defined in

[index.ts:462](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L462)

___

### createEncrypted

▸ `Static` **createEncrypted**(`options`): `Promise`\<[`Database`](Database.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.encryptionKey` | `Uint8Array` |
| `options.importData?` | `RxDumpDatabase`\<`PlutoCollections`\> |
| `options.name` | `string` |
| `options.storage` | `RxStorage`\<`any`, `any`\> |

#### Returns

`Promise`\<[`Database`](Database.md)\>

#### Defined in

[index.ts:175](https://github.com/elribonazo/pluto-encrypted/blob/2b991d4/packages/database/src/index.ts#L175)
