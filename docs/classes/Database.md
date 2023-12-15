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

[index.ts:118](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L118)

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

[index.ts:100](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L100)

## Accessors

### credentialrequestmetadatas

• `get` **credentialrequestmetadatas**(): `CredentialRequestMetadataCollection`

CredentialRequestMetadatas
Stores anoncreds credential metadata + exposes orm functions

#### Count all Credential Metadatas with optional query
```ts
await db.credentialmetadatas.count({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all credential metadatas matching the query
```ts
await db.credentialmetadatas.find({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all credential metadatas by id
```ts
await db.credentialmetadatas.findByIds([id])
```
#### Find one credential metadatas matching the query
```ts
await db.credentialmetadatas.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Remove any credential metadatas matching the query
```ts
await db.credentialmetadatas.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`CredentialRequestMetadataCollection`

#### Defined in

[index.ts:152](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L152)

___

### credentials

• `get` **credentials**(): `CredentialCollection`

Credentials 
Stores credentials, both anoncreda and prism/jwt + exposes orm functions

#### Count all Credentials with optional query
```ts
await db.credentials.count({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all Credentials matching the query
```ts
await db.credentials.find({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all Credentials by id
```ts
await db.credentials.findByIds([id])
```
#### Find one Credentials matching the query
```ts
await db.credentials.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Remove any Credentials matching the query
```ts
await db.credentials.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`CredentialCollection`

#### Defined in

[index.ts:248](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L248)

___

### db

• `get` **db**(): `PlutoDatabase`

#### Returns

`PlutoDatabase`

#### Defined in

[index.ts:111](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L111)

___

### didpairs

• `get` **didpairs**(): `DIDPairCollection`

DIDPairs 
Stores groups of dids, also known as connections + exposes orm functions

#### Count all DIDPairs with optional query
```ts
await db.didpairs.count({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all DIDPairs matching the query
```ts
await db.didpairs.find({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all DIDPairs by id
```ts
await db.didpairs.findByIds([id])
```
#### Find one DIDPairs matching the query
```ts
await db.didpairs.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Remove any DIDPairs matching the query
```ts
await db.didpairs.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`DIDPairCollection`

#### Defined in

[index.ts:216](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L216)

___

### dids

• `get` **dids**(): `DIDCollection`

DIDs 
Stores dids + exposes orm functions

#### Count all DIDS with optional query
```ts
await db.dids.count({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all DIDS matching the query
```ts
await db.dids.find({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all DIDS by id
```ts
await db.dids.findByIds([id])
```
#### Find one DIDS matching the query
```ts
await db.dids.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Remove any DIDS matching the query
```ts
await db.dids.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`DIDCollection`

#### Defined in

[index.ts:312](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L312)

___

### linksecrets

• `get` **linksecrets**(): `LinkSecretColletion`

LinkSecrets 
Stores anoncreds link secrets + exposes orm functions

#### Count all LinkSecrets with optional query
```ts
await db.linksecrets.count({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all LinkSecrets matching the query
```ts
await db.linksecrets.find({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all LinkSecrets by id
```ts
await db.linksecrets.findByIds([id])
```
#### Find one LinkSecrets matching the query
```ts
await db.linksecrets.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Remove any LinkSecrets matching the query
```ts
await db.linksecrets.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`LinkSecretColletion`

#### Defined in

[index.ts:184](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L184)

___

### mediators

• `get` **mediators**(): `MediatorCollection`

Mediators 
Stores mediators + exposes orm functions

#### Count all Mediators with optional query
```ts
await db.mediators.count({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all Mediators matching the query
```ts
await db.mediators.find({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all Mediators by id
```ts
await db.mediators.findByIds([id])
```
#### Find one Mediators matching the query
```ts
await db.mediators.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Remove any Mediators matching the query
```ts
await db.mediators.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`MediatorCollection`

#### Defined in

[index.ts:280](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L280)

___

### messages

• `get` **messages**(): `MessageColletion`

Messages 
Stores Messages + exposes orm functions

#### Count all Messages with optional query
```ts
await db.messages.count({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all Messages matching the query
```ts
await db.messages.find({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all Messages by id
```ts
await db.messages.findByIds([id])
```
#### Find one Messages matching the query
```ts
await db.messages.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Remove any Messages matching the query
```ts
await db.messages.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`MessageColletion`

#### Defined in

[index.ts:376](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L376)

___

### privatekeys

• `get` **privatekeys**(): `PrivateKeyColletion`

PrivateKeys 
Stores privateKeys + exposes orm functions

#### Count all PrivateKeys with optional query
```ts
await db.privatekeys.count({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all PrivateKeys matching the query
```ts
await db.privatekeys.find({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Find all PrivateKeys by id
```ts
await db.privatekeys.findByIds([id])
```
#### Find one PrivateKeys matching the query
```ts
await db.privatekeys.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

#### Remove any PrivateKeys matching the query
```ts
await db.privatekeys.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`PrivateKeyColletion`

#### Defined in

[index.ts:344](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L344)

## Methods

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Defined in

[index.ts:120](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L120)

___

### clear

▸ **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[index.ts:380](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L380)

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

[index.ts:1141](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L1141)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<`Credential`[]\>

#### Returns

`Promise`\<`Credential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

[index.ts:1091](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L1091)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<`DIDPair`[]\>

#### Returns

`Promise`\<`DIDPair`[]\>

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

[index.ts:710](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L710)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<`Mediator`[]\>

#### Returns

`Promise`\<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

[index.ts:1086](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L1086)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

[index.ts:460](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L460)

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

[index.ts:899](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L899)

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

[index.ts:1012](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L1012)

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

[index.ts:981](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L981)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

[index.ts:932](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L932)

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

[index.ts:964](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L964)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

[index.ts:917](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L917)

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

[index.ts:947](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L947)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

#### Returns

`Promise`\<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

[index.ts:1049](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L1049)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<`PrismDIDInfo`[]\>

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

[index.ts:807](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L807)

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

[index.ts:872](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L872)

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

[index.ts:839](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L839)

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

[index.ts:783](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L783)

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

[index.ts:771](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L771)

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

[index.ts:1098](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L1098)

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

[index.ts:416](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L416)

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

[index.ts:719](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L719)

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

[index.ts:743](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L743)

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

[index.ts:1033](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L1033)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

[index.ts:1041](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L1041)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

[index.ts:470](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L470)

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

[index.ts:1076](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L1076)

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

[index.ts:1130](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L1130)

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

[index.ts:663](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L663)

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

[index.ts:1120](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L1120)

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

[index.ts:794](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L794)

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

[index.ts:430](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L430)

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

[index.ts:454](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L454)

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

[index.ts:627](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L627)

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

[index.ts:605](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L605)

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

[index.ts:675](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L675)

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

[index.ts:388](https://github.com/elribonazo/pluto-encrypted/blob/45c209f/packages/database/src/index.ts#L388)
