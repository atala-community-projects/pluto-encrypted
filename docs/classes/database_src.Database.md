[@pluto-encrypted/database](../README.md) / [database/src](../modules/database_src.md) / Database

# Class: Database

[database/src](../modules/database_src.md).Database

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Implements

- `Pluto`

## Table of contents

### Constructors

- [constructor](database_src.Database.md#constructor)

### Accessors

- [collections](database_src.Database.md#collections)
- [credentialrequestmetadatas](database_src.Database.md#credentialrequestmetadatas)
- [credentials](database_src.Database.md#credentials)
- [didpairs](database_src.Database.md#didpairs)
- [dids](database_src.Database.md#dids)
- [linksecrets](database_src.Database.md#linksecrets)
- [mediators](database_src.Database.md#mediators)
- [messages](database_src.Database.md#messages)
- [privatekeys](database_src.Database.md#privatekeys)

### Methods

- [backup](database_src.Database.md#backup)
- [clear](database_src.Database.md#clear)
- [fetchCredentialMetadata](database_src.Database.md#fetchcredentialmetadata)
- [getAllCredentials](database_src.Database.md#getallcredentials)
- [getAllDidPairs](database_src.Database.md#getalldidpairs)
- [getAllMediators](database_src.Database.md#getallmediators)
- [getAllMessages](database_src.Database.md#getallmessages)
- [getAllMessagesByDID](database_src.Database.md#getallmessagesbydid)
- [getAllMessagesByFromToDID](database_src.Database.md#getallmessagesbyfromtodid)
- [getAllMessagesOfType](database_src.Database.md#getallmessagesoftype)
- [getAllMessagesReceived](database_src.Database.md#getallmessagesreceived)
- [getAllMessagesReceivedFrom](database_src.Database.md#getallmessagesreceivedfrom)
- [getAllMessagesSent](database_src.Database.md#getallmessagessent)
- [getAllMessagesSentTo](database_src.Database.md#getallmessagessentto)
- [getAllPeerDIDs](database_src.Database.md#getallpeerdids)
- [getAllPrismDIDs](database_src.Database.md#getallprismdids)
- [getDIDInfoByAlias](database_src.Database.md#getdidinfobyalias)
- [getDIDInfoByDID](database_src.Database.md#getdidinfobydid)
- [getDIDPrivateKeyByID](database_src.Database.md#getdidprivatekeybyid)
- [getDIDPrivateKeysByDID](database_src.Database.md#getdidprivatekeysbydid)
- [getLinkSecret](database_src.Database.md#getlinksecret)
- [getMessage](database_src.Database.md#getmessage)
- [getPairByDID](database_src.Database.md#getpairbydid)
- [getPairByName](database_src.Database.md#getpairbyname)
- [getPrismDIDKeyPathIndex](database_src.Database.md#getprismdidkeypathindex)
- [getPrismLastKeyPathIndex](database_src.Database.md#getprismlastkeypathindex)
- [start](database_src.Database.md#start)
- [storeCredential](database_src.Database.md#storecredential)
- [storeCredentialMetadata](database_src.Database.md#storecredentialmetadata)
- [storeDIDPair](database_src.Database.md#storedidpair)
- [storeLinkSecret](database_src.Database.md#storelinksecret)
- [storeMediator](database_src.Database.md#storemediator)
- [storeMessage](database_src.Database.md#storemessage)
- [storeMessages](database_src.Database.md#storemessages)
- [storePeerDID](database_src.Database.md#storepeerdid)
- [storePrismDID](database_src.Database.md#storeprismdid)
- [storePrivateKeys](database_src.Database.md#storeprivatekeys)
- [createEncrypted](database_src.Database.md#createencrypted)

## Constructors

### constructor

• **new Database**(`dbOptions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbOptions` | `RxDatabaseCreator`\<`any`, `any`\> |

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:79](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L79)
=======
[packages/database/src/index.ts:79](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L79)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

## Accessors

### collections

• `get` **collections**(): `PlutoCollections`

#### Returns

`PlutoCollections`

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:85](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L85)
=======
[packages/database/src/index.ts:85](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L85)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

___

### credentialrequestmetadatas

• `get` **credentialrequestmetadatas**(): [`CredentialRequestMetadataCollection`](../modules/database_src_schemas_CredentialRequestMetadata.md#credentialrequestmetadatacollection)

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

[`CredentialRequestMetadataCollection`](../modules/database_src_schemas_CredentialRequestMetadata.md#credentialrequestmetadatacollection)

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:117](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L117)
=======
[packages/database/src/index.ts:117](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L117)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:213](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L213)
=======
[packages/database/src/index.ts:213](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L213)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:181](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L181)
=======
[packages/database/src/index.ts:181](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L181)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:277](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L277)
=======
[packages/database/src/index.ts:277](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L277)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:149](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L149)
=======
[packages/database/src/index.ts:149](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L149)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:245](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L245)
=======
[packages/database/src/index.ts:245](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L245)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:341](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L341)
=======
[packages/database/src/index.ts:341](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L341)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:309](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L309)
=======
[packages/database/src/index.ts:309](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L309)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

## Methods

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:81](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L81)
=======
[packages/database/src/index.ts:81](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L81)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

___

### clear

▸ **clear**(): `Promise`\<`void`\>

Use with caution, this will remove all entries from database
and then destroy the database itself.

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:349](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L349)
=======
[packages/database/src/index.ts:349](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L349)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1180](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1180)
=======
[packages/database/src/index.ts:1180](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1180)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<`Credential`[]\>

#### Returns

`Promise`\<`Credential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1130](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1130)
=======
[packages/database/src/index.ts:1130](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1130)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:743](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L743)
=======
[packages/database/src/index.ts:743](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L743)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<`Mediator`[]\>

#### Returns

`Promise`\<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1125](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1125)
=======
[packages/database/src/index.ts:1125](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1125)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:466](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L466)
=======
[packages/database/src/index.ts:466](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L466)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:937](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L937)
=======
[packages/database/src/index.ts:937](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L937)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1050](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1050)
=======
[packages/database/src/index.ts:1050](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1050)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1019](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1019)
=======
[packages/database/src/index.ts:1019](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1019)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:970](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L970)
=======
[packages/database/src/index.ts:970](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L970)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1002](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1002)
=======
[packages/database/src/index.ts:1002](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1002)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:955](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L955)
=======
[packages/database/src/index.ts:955](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L955)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:985](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L985)
=======
[packages/database/src/index.ts:985](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L985)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

#### Returns

`Promise`\<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1087](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1087)
=======
[packages/database/src/index.ts:1087](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1087)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<`PrismDIDInfo`[]\>

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:845](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L845)
=======
[packages/database/src/index.ts:845](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L845)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:910](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L910)
=======
[packages/database/src/index.ts:910](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L910)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:877](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L877)
=======
[packages/database/src/index.ts:877](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L877)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:821](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L821)
=======
[packages/database/src/index.ts:821](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L821)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:809](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L809)
=======
[packages/database/src/index.ts:809](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L809)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1137](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1137)
=======
[packages/database/src/index.ts:1137](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1137)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:408](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L408)
=======
[packages/database/src/index.ts:408](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L408)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:757](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L757)
=======
[packages/database/src/index.ts:757](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L757)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:781](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L781)
=======
[packages/database/src/index.ts:781](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L781)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1071](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1071)
=======
[packages/database/src/index.ts:1071](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1071)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1079](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1079)
=======
[packages/database/src/index.ts:1079](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1079)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

___

### start

▸ **start**(): `Promise`\<`void`\>

Start the database and build collections

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:478](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L478)
=======
[packages/database/src/index.ts:478](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L478)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1114](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1114)
=======
[packages/database/src/index.ts:1114](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1114)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1169](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1169)
=======
[packages/database/src/index.ts:1169](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1169)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:685](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L685)
=======
[packages/database/src/index.ts:685](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L685)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:1159](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L1159)
=======
[packages/database/src/index.ts:1159](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L1159)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:832](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L832)
=======
[packages/database/src/index.ts:832](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L832)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:427](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L427)
=======
[packages/database/src/index.ts:427](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L427)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:456](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L456)
=======
[packages/database/src/index.ts:456](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L456)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:643](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L643)
=======
[packages/database/src/index.ts:643](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L643)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:616](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L616)
=======
[packages/database/src/index.ts:616](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L616)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

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

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:704](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L704)
=======
[packages/database/src/index.ts:704](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L704)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md

___

### createEncrypted

▸ `Static` **createEncrypted**(`options`): `Promise`\<[`Database`](database_src.Database.md)\>

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

`Promise`\<[`Database`](database_src.Database.md)\>

Database

#### Defined in

<<<<<<< HEAD:docs/classes/Database.md
[index.ts:362](https://github.com/elribonazo/pluto-encrypted/blob/e61ee01/packages/database/src/index.ts#L362)
=======
[packages/database/src/index.ts:362](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/index.ts#L362)
>>>>>>> aa5718f (fix: generate documentation for all the packages in 1 shot.):docs/classes/database_src.Database.md
