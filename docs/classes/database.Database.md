[@pluto-encrypted](../README.md) / [database](../modules/database.md) / Database

# Class: Database

[database](../modules/database.md).Database

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Implements

- `Pluto`

## Table of contents

### Constructors

- [constructor](database.Database.md#constructor)

### Accessors

- [collections](database.Database.md#collections)
- [credentialrequestmetadatas](database.Database.md#credentialrequestmetadatas)
- [credentials](database.Database.md#credentials)
- [didpairs](database.Database.md#didpairs)
- [dids](database.Database.md#dids)
- [linksecrets](database.Database.md#linksecrets)
- [mediators](database.Database.md#mediators)
- [messages](database.Database.md#messages)
- [privatekeys](database.Database.md#privatekeys)

### Methods

- [backup](database.Database.md#backup)
- [clear](database.Database.md#clear)
- [fetchCredentialMetadata](database.Database.md#fetchcredentialmetadata)
- [getAllCredentials](database.Database.md#getallcredentials)
- [getAllDidPairs](database.Database.md#getalldidpairs)
- [getAllMediators](database.Database.md#getallmediators)
- [getAllMessages](database.Database.md#getallmessages)
- [getAllMessagesByDID](database.Database.md#getallmessagesbydid)
- [getAllMessagesByFromToDID](database.Database.md#getallmessagesbyfromtodid)
- [getAllMessagesOfType](database.Database.md#getallmessagesoftype)
- [getAllMessagesReceived](database.Database.md#getallmessagesreceived)
- [getAllMessagesReceivedFrom](database.Database.md#getallmessagesreceivedfrom)
- [getAllMessagesSent](database.Database.md#getallmessagessent)
- [getAllMessagesSentTo](database.Database.md#getallmessagessentto)
- [getAllPeerDIDs](database.Database.md#getallpeerdids)
- [getAllPrismDIDs](database.Database.md#getallprismdids)
- [getDIDInfoByAlias](database.Database.md#getdidinfobyalias)
- [getDIDInfoByDID](database.Database.md#getdidinfobydid)
- [getDIDPrivateKeyByID](database.Database.md#getdidprivatekeybyid)
- [getDIDPrivateKeysByDID](database.Database.md#getdidprivatekeysbydid)
- [getLinkSecret](database.Database.md#getlinksecret)
- [getMessage](database.Database.md#getmessage)
- [getPairByDID](database.Database.md#getpairbydid)
- [getPairByName](database.Database.md#getpairbyname)
- [getPrismDIDKeyPathIndex](database.Database.md#getprismdidkeypathindex)
- [getPrismLastKeyPathIndex](database.Database.md#getprismlastkeypathindex)
- [start](database.Database.md#start)
- [storeCredential](database.Database.md#storecredential)
- [storeCredentialMetadata](database.Database.md#storecredentialmetadata)
- [storeDIDPair](database.Database.md#storedidpair)
- [storeLinkSecret](database.Database.md#storelinksecret)
- [storeMediator](database.Database.md#storemediator)
- [storeMessage](database.Database.md#storemessage)
- [storeMessages](database.Database.md#storemessages)
- [storePeerDID](database.Database.md#storepeerdid)
- [storePrismDID](database.Database.md#storeprismdid)
- [storePrivateKeys](database.Database.md#storeprivatekeys)
- [createEncrypted](database.Database.md#createencrypted)

## Constructors

### constructor

• **new Database**(`dbOptions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbOptions` | `RxDatabaseCreator`\<`any`, `any`\> |

#### Defined in

[database/src/index.ts:83](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L83)

## Accessors

### collections

• `get` **collections**(): `PlutoCollections`

#### Returns

`PlutoCollections`

#### Defined in

[database/src/index.ts:89](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L89)

___

### credentialrequestmetadatas

• `get` **credentialrequestmetadatas**(): `CredentialRequestMetadataCollection`

CredentialRequestMetadatas
Stores anoncreds credential metadata + exposes orm functions

Count all Credential Metadatas with optional query
```ts
await db.credentialmetadatas.count({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all credential metadatas matching the query
```ts
await db.credentialmetadatas.find({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all credential metadatas by id
```ts
await db.credentialmetadatas.findByIds([id])
```
Find one credential metadatas matching the query
```ts
await db.credentialmetadatas.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

Remove any credential metadatas matching the query
```ts
await db.credentialmetadatas.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`CredentialRequestMetadataCollection`

#### Defined in

[database/src/index.ts:121](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L121)

___

### credentials

• `get` **credentials**(): `CredentialCollection`

Credentials 
Stores credentials, both anoncreda and prism/jwt + exposes orm functions

Count all Credentials with optional query
```ts
await db.credentials.count({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all Credentials matching the query
```ts
await db.credentials.find({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all Credentials by id
```ts
await db.credentials.findByIds([id])
```
Find one Credentials matching the query
```ts
await db.credentials.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

Remove any Credentials matching the query
```ts
await db.credentials.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`CredentialCollection`

#### Defined in

[database/src/index.ts:217](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L217)

___

### didpairs

• `get` **didpairs**(): `DIDPairCollection`

DIDPairs 
Stores groups of dids, also known as connections + exposes orm functions

Count all DIDPairs with optional query
```ts
await db.didpairs.count({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all DIDPairs matching the query
```ts
await db.didpairs.find({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all DIDPairs by id
```ts
await db.didpairs.findByIds([id])
```
Find one DIDPairs matching the query
```ts
await db.didpairs.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

Remove any DIDPairs matching the query
```ts
await db.didpairs.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`DIDPairCollection`

#### Defined in

[database/src/index.ts:185](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L185)

___

### dids

• `get` **dids**(): `DIDCollection`

DIDs 
Stores dids + exposes orm functions

Count all DIDS with optional query
```ts
await db.dids.count({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all DIDS matching the query
```ts
await db.dids.find({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all DIDS by id
```ts
await db.dids.findByIds([id])
```
Find one DIDS matching the query
```ts
await db.dids.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

Remove any DIDS matching the query
```ts
await db.dids.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`DIDCollection`

#### Defined in

[database/src/index.ts:281](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L281)

___

### linksecrets

• `get` **linksecrets**(): `LinkSecretColletion`

LinkSecrets 
Stores anoncreds link secrets + exposes orm functions

Count all LinkSecrets with optional query
```ts
await db.linksecrets.count({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all LinkSecrets matching the query
```ts
await db.linksecrets.find({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all LinkSecrets by id
```ts
await db.linksecrets.findByIds([id])
```
Find one LinkSecrets matching the query
```ts
await db.linksecrets.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

Remove any LinkSecrets matching the query
```ts
await db.linksecrets.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`LinkSecretColletion`

#### Defined in

[database/src/index.ts:153](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L153)

___

### mediators

• `get` **mediators**(): `MediatorCollection`

Mediators 
Stores mediators + exposes orm functions

Count all Mediators with optional query
```ts
await db.mediators.count({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all Mediators matching the query
```ts
await db.mediators.find({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all Mediators by id
```ts
await db.mediators.findByIds([id])
```
Find one Mediators matching the query
```ts
await db.mediators.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

Remove any Mediators matching the query
```ts
await db.mediators.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`MediatorCollection`

#### Defined in

[database/src/index.ts:249](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L249)

___

### messages

• `get` **messages**(): `MessageColletion`

Messages 
Stores Messages + exposes orm functions

Count all Messages with optional query
```ts
await db.messages.count({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all Messages matching the query
```ts
await db.messages.find({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all Messages by id
```ts
await db.messages.findByIds([id])
```
Find one Messages matching the query
```ts
await db.messages.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

Remove any Messages matching the query
```ts
await db.messages.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`MessageColletion`

#### Defined in

[database/src/index.ts:345](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L345)

___

### privatekeys

• `get` **privatekeys**(): `PrivateKeyColletion`

PrivateKeys 
Stores privateKeys + exposes orm functions

Count all PrivateKeys with optional query
```ts
await db.privatekeys.count({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all PrivateKeys matching the query
```ts
await db.privatekeys.find({selector: {id: {$eq: 1}}}) //Query is optional
```

Find all PrivateKeys by id
```ts
await db.privatekeys.findByIds([id])
```
Find one PrivateKeys matching the query
```ts
await db.privatekeys.findOne({selector: {id: {$eq: 1}}}) //Query is optional
```

Remove any PrivateKeys matching the query
```ts
await db.privatekeys.remove({selector: {id: {$eq: 1}}})
```

#### Returns

`PrivateKeyColletion`

#### Defined in

[database/src/index.ts:313](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L313)

## Methods

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Defined in

[database/src/index.ts:85](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L85)

___

### clear

▸ **clear**(): `Promise`\<`void`\>

Use with caution, this will remove all entries from database
and then destroy the database itself.

#### Returns

`Promise`\<`void`\>

#### Defined in

[database/src/index.ts:353](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L353)

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

[database/src/index.ts:1184](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1184)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<`Credential`[]\>

#### Returns

`Promise`\<`Credential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

[database/src/index.ts:1134](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1134)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<`DIDPair`[]\>

Gets all the stores didPairs

#### Returns

`Promise`\<`DIDPair`[]\>

[Domain.DIDPair[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.DIDPair.html)

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

[database/src/index.ts:747](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L747)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<`Mediator`[]\>

#### Returns

`Promise`\<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

[database/src/index.ts:1129](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1129)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<`Message`[]\>

Get all the stored messages

#### Returns

`Promise`\<`Message`[]\>

[Message[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

[database/src/index.ts:470](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L470)

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

[database/src/index.ts:941](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L941)

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

[database/src/index.ts:1054](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1054)

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

[database/src/index.ts:1023](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1023)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

[database/src/index.ts:974](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L974)

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

[database/src/index.ts:1006](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1006)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

[database/src/index.ts:959](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L959)

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

[database/src/index.ts:989](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L989)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

#### Returns

`Promise`\<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

[database/src/index.ts:1091](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1091)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<`PrismDIDInfo`[]\>

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

[database/src/index.ts:849](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L849)

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

[database/src/index.ts:914](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L914)

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

[database/src/index.ts:881](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L881)

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

[database/src/index.ts:825](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L825)

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

[database/src/index.ts:813](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L813)

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

[database/src/index.ts:1141](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1141)

___

### getMessage

▸ **getMessage**(`id`): `Promise`\<``null`` \| `Message`\>

Get a Message by its id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| `Message`\>

[Message](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)

#### Implementation of

Domain.Pluto.getMessage

#### Defined in

[database/src/index.ts:412](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L412)

___

### getPairByDID

▸ **getPairByDID**(`did`): `Promise`\<``null`` \| `DIDPair`\>

Get a did pair (connection) by one of its dids

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<``null`` \| `DIDPair`\>

[Domain.DIDPair](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.DIDPair.html)

#### Implementation of

Domain.Pluto.getPairByDID

#### Defined in

[database/src/index.ts:761](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L761)

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

[database/src/index.ts:785](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L785)

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

[database/src/index.ts:1075](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1075)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

[database/src/index.ts:1083](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1083)

___

### start

▸ **start**(): `Promise`\<`void`\>

Start the database and build collections

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

[database/src/index.ts:482](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L482)

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

[database/src/index.ts:1118](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1118)

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

[database/src/index.ts:1173](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1173)

___

### storeDIDPair

▸ **storeDIDPair**(`host`, `receiver`, `name`): `Promise`\<`void`\>

Stores a didpair

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

[database/src/index.ts:689](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L689)

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

[database/src/index.ts:1163](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L1163)

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

[database/src/index.ts:836](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L836)

___

### storeMessage

▸ **storeMessage**(`message`): `Promise`\<`void`\>

Stores a message

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message` |

#### Returns

`Promise`\<`void`\>

void

#### Implementation of

Domain.Pluto.storeMessage

#### Defined in

[database/src/index.ts:431](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L431)

___

### storeMessages

▸ **storeMessages**(`messages`): `Promise`\<`void`\>

Stores multiple messages in 1 call

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | `Message`[] |

#### Returns

`Promise`\<`void`\>

void

#### Implementation of

Domain.Pluto.storeMessages

#### Defined in

[database/src/index.ts:460](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L460)

___

### storePeerDID

▸ **storePeerDID**(`did`, `privateKeys`): `Promise`\<`void`\>

Stores a peerdid with its privateKeys

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

[database/src/index.ts:647](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L647)

___

### storePrismDID

▸ **storePrismDID**(`did`, `keyPathIndex`, `privateKey`, `privateKeyMetaId?`, `alias?`): `Promise`\<`void`\>

Stores a prismDID and its privateKey

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

[database/src/index.ts:620](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L620)

___

### storePrivateKeys

▸ **storePrivateKeys**(`privateKey`, `did`, `keyPathIndex`, `_metaId?`): `Promise`\<`void`\>

Stores privateKeys references to an existing DID

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

[database/src/index.ts:708](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L708)

___

### createEncrypted

▸ `Static` **createEncrypted**(`options`): `Promise`\<[`Database`](database.Database.md)\>

Creates a database instance.

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

`Promise`\<[`Database`](database.Database.md)\>

Database

#### Defined in

[database/src/index.ts:366](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/database/src/index.ts#L366)
