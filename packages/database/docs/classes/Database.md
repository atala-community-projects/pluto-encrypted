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

- [\_db](Database.md#_db)
- [collections](Database.md#collections)
- [dbOptions](Database.md#dboptions)

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

- [applyORMStatics](Database.md#applyormstatics)
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
- [getPrivateKeyFromDB](Database.md#getprivatekeyfromdb)
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

[index.ts:121](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L121)

## Properties

### \_db

• `Private` **\_db**: [`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:98](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L98)

___

### collections

• **collections**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `credentialrequestmetadatas` | `RxCollection`\<`CredentialRequestMetadataSchemaType`, `GenericORMType`\<`CredentialRequestMetadataDocument`\>\> |
| `credentials` | `RxCollection`\<[`CredentialSchemaType`](../modules.md#credentialschematype), `GenericORMType`\<[`CredentialDocument`](../modules.md#credentialdocument)\>\> |
| `didpairs` | `RxCollection`\<[`DIDPairSchemaType`](../modules.md#didpairschematype), `GenericORMType`\<[`DIDPairDocument`](../modules.md#didpairdocument)\>\> |
| `dids` | `RxCollection`\<[`DIDSchemaType`](../modules.md#didschematype), `GenericORMType`\<[`DIDDocument`](../modules.md#diddocument)\>\> |
| `linksecrets` | `RxCollection`\<`LinkSecretSchemaType`, `GenericORMType`\<`LinkSecretDocument`\>\> |
| `mediators` | `RxCollection`\<[`MediatorSchemaType`](../modules.md#mediatorschematype), `GenericORMType`\<[`MediatorDocument`](../modules.md#mediatordocument)\>\> |
| `messages` | `RxCollection`\<[`MessageSchemaType`](../modules.md#messageschematype), `GenericORMType`\<[`MessageDocument`](../modules.md#messagedocument)\>\> |
| `privatekeys` | `RxCollection`\<[`KeySchemaType`](../modules.md#keyschematype), `GenericORMType`\<[`PrivateKeyDocument`](../modules.md#privatekeydocument)\>\> |

#### Defined in

[index.ts:100](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L100)

___

### dbOptions

• `Private` **dbOptions**: `RxDatabaseCreator`\<`any`, `any`\>

#### Defined in

[index.ts:121](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L121)

## Accessors

### credentialrequestmetadatas

• `get` **credentialrequestmetadatas**(): `CredentialRequestMetadataCollection`

#### Returns

`CredentialRequestMetadataCollection`

#### Defined in

[index.ts:127](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L127)

___

### credentials

• `get` **credentials**(): [`CredentialCollection`](../modules.md#credentialcollection)

#### Returns

[`CredentialCollection`](../modules.md#credentialcollection)

#### Defined in

[index.ts:139](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L139)

___

### db

• `get` **db**(): [`PlutoDatabase`](../modules.md#plutodatabase)

#### Returns

[`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:114](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L114)

___

### didpairs

• `get` **didpairs**(): [`DIDPairCollection`](../modules.md#didpaircollection)

#### Returns

[`DIDPairCollection`](../modules.md#didpaircollection)

#### Defined in

[index.ts:135](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L135)

___

### dids

• `get` **dids**(): [`DIDCollection`](../modules.md#didcollection)

#### Returns

[`DIDCollection`](../modules.md#didcollection)

#### Defined in

[index.ts:148](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L148)

___

### linksecrets

• `get` **linksecrets**(): `LinkSecretColletion`

#### Returns

`LinkSecretColletion`

#### Defined in

[index.ts:131](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L131)

___

### mediators

• `get` **mediators**(): [`MediatorCollection`](../modules.md#mediatorcollection)

#### Returns

[`MediatorCollection`](../modules.md#mediatorcollection)

#### Defined in

[index.ts:143](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L143)

___

### messages

• `get` **messages**(): [`MessageColletion`](../modules.md#messagecolletion)

#### Returns

[`MessageColletion`](../modules.md#messagecolletion)

#### Defined in

[index.ts:156](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L156)

___

### privatekeys

• `get` **privatekeys**(): [`PrivateKeyColletion`](../modules.md#privatekeycolletion)

#### Returns

[`PrivateKeyColletion`](../modules.md#privatekeycolletion)

#### Defined in

[index.ts:152](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L152)

## Methods

### applyORMStatics

▸ `Private` **applyORMStatics**(`collectionObj`): `RxCollectionCreator`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionObj` | `RxCollectionCreator`\<`any`\> |

#### Returns

`RxCollectionCreator`\<`any`\>

#### Defined in

[index.ts:245](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L245)

___

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<[`PlutoCollections`](../modules.md#plutocollections)\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<[`PlutoCollections`](../modules.md#plutocollections)\>\>

#### Defined in

[index.ts:123](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L123)

___

### clear

▸ **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[index.ts:160](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L160)

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

[index.ts:921](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L921)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<`Credential`[]\>

#### Returns

`Promise`\<`Credential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

[index.ts:871](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L871)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<`DIDPair`[]\>

#### Returns

`Promise`\<`DIDPair`[]\>

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

[index.ts:490](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L490)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<`Mediator`[]\>

#### Returns

`Promise`\<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

[index.ts:866](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L866)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

[index.ts:240](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L240)

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

[index.ts:679](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L679)

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

[index.ts:792](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L792)

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

[index.ts:761](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L761)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

[index.ts:712](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L712)

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

[index.ts:744](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L744)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

[index.ts:697](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L697)

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

[index.ts:727](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L727)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

#### Returns

`Promise`\<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

[index.ts:829](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L829)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<`PrismDIDInfo`[]\>

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

[index.ts:587](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L587)

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

[index.ts:652](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L652)

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

[index.ts:619](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L619)

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

[index.ts:563](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L563)

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

[index.ts:551](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L551)

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

[index.ts:878](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L878)

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

[index.ts:196](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L196)

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

[index.ts:499](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L499)

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

[index.ts:523](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L523)

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

[index.ts:813](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L813)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

[index.ts:821](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L821)

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

[index.ts:545](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L545)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

[index.ts:250](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L250)

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

[index.ts:856](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L856)

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

[index.ts:910](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L910)

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

[index.ts:443](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L443)

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

[index.ts:900](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L900)

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

[index.ts:574](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L574)

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

[index.ts:210](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L210)

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

[index.ts:234](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L234)

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

[index.ts:407](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L407)

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

[index.ts:385](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L385)

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

[index.ts:455](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L455)

___

### createEncrypted

▸ `Static` **createEncrypted**(`options`): `Promise`\<[`Database`](Database.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.encryptionKey` | `Uint8Array` |
| `options.importData?` | `RxDumpDatabase`\<[`PlutoCollections`](../modules.md#plutocollections)\> |
| `options.name` | `string` |
| `options.storage` | `RxStorage`\<`any`, `any`\> |

#### Returns

`Promise`\<[`Database`](Database.md)\>

#### Defined in

[index.ts:168](https://github.com/elribonazo/pluto-encrypted/blob/bdb77f5/packages/database/src/index.ts#L168)
