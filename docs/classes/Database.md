[@pluto-encrypted/database](../README.md) / Database

# Class: Database

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Implements

- `Pluto`

## Table of contents

### Constructors

- [constructor](Database.md#constructor)

### Accessors

- [credentialrequestmetadatas](Database.md#credentialrequestmetadatas)
- [credentials](Database.md#credentials)
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

<<<<<<< HEAD
[index.ts:99](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L99)
=======
[index.ts:99](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L99)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:133](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L133)
=======
[index.ts:133](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L133)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:229](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L229)
=======
[index.ts:229](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L229)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:197](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L197)
=======
[index.ts:197](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L197)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:293](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L293)
=======
[index.ts:293](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L293)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:165](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L165)
=======
[index.ts:165](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L165)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:261](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L261)
=======
[index.ts:261](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L261)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:357](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L357)
=======
[index.ts:357](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L357)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:325](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L325)
=======
[index.ts:325](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L325)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

## Methods

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Defined in

<<<<<<< HEAD
[index.ts:101](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L101)
=======
[index.ts:101](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L101)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

___

### clear

▸ **clear**(): `Promise`\<`void`\>

Use with caution, this will remove all entries from database
and then destroy the database itself.

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[index.ts:365](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L365)
=======
[index.ts:365](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L365)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:1187](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1187)
=======
[index.ts:1187](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1187)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<`Credential`[]\>

#### Returns

`Promise`\<`Credential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

<<<<<<< HEAD
[index.ts:1137](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1137)
=======
[index.ts:1137](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1137)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:751](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L751)
=======
[index.ts:751](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L751)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<`Mediator`[]\>

#### Returns

`Promise`\<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

<<<<<<< HEAD
[index.ts:1132](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1132)
=======
[index.ts:1132](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1132)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:469](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L469)
=======
[index.ts:469](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L469)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:945](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L945)
=======
[index.ts:945](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L945)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:1058](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1058)
=======
[index.ts:1058](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1058)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:1027](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1027)
=======
[index.ts:1027](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1027)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

<<<<<<< HEAD
[index.ts:978](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L978)
=======
[index.ts:978](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L978)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:1010](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1010)
=======
[index.ts:1010](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1010)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

<<<<<<< HEAD
[index.ts:963](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L963)
=======
[index.ts:963](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L963)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:993](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L993)
=======
[index.ts:993](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L993)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

#### Returns

`Promise`\<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

<<<<<<< HEAD
[index.ts:1095](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1095)
=======
[index.ts:1095](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1095)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<`PrismDIDInfo`[]\>

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

<<<<<<< HEAD
[index.ts:853](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L853)
=======
[index.ts:853](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L853)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:918](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L918)
=======
[index.ts:918](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L918)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:885](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L885)
=======
[index.ts:885](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L885)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:829](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L829)
=======
[index.ts:829](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L829)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:817](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L817)
=======
[index.ts:817](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L817)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:1144](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1144)
=======
[index.ts:1144](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1144)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:411](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L411)
=======
[index.ts:411](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L411)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:765](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L765)
=======
[index.ts:765](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L765)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:789](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L789)
=======
[index.ts:789](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L789)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:1079](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1079)
=======
[index.ts:1079](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1079)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

<<<<<<< HEAD
[index.ts:1087](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1087)
=======
[index.ts:1087](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1087)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

___

### start

▸ **start**(): `Promise`\<`void`\>

Start the database and build collections

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

<<<<<<< HEAD
[index.ts:481](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L481)
=======
[index.ts:481](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L481)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:1122](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1122)
=======
[index.ts:1122](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1122)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:1176](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1176)
=======
[index.ts:1176](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1176)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:693](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L693)
=======
[index.ts:693](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L693)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:1166](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L1166)
=======
[index.ts:1166](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L1166)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:840](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L840)
=======
[index.ts:840](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L840)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:430](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L430)
=======
[index.ts:430](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L430)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:459](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L459)
=======
[index.ts:459](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L459)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:651](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L651)
=======
[index.ts:651](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L651)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

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

<<<<<<< HEAD
[index.ts:624](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L624)
=======
[index.ts:624](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L624)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

___

### storePrivateKeys

▸ **storePrivateKeys**(`privateKey`, `did`, `keyPathIndex`, `metaId?`): `Promise`\<`void`\>

Stores privateKeys references to an existing DID

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

<<<<<<< HEAD
[index.ts:712](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L712)
=======
[index.ts:712](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L712)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])

___

### createEncrypted

▸ `Static` **createEncrypted**(`options`): `Promise`\<[`Database`](Database.md)\>

Creates a database instance.

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

Database

#### Defined in

<<<<<<< HEAD
[index.ts:378](https://github.com/elribonazo/pluto-encrypted/blob/3b8277b/packages/database/src/index.ts#L378)
=======
[index.ts:378](https://github.com/elribonazo/pluto-encrypted/blob/4b14587/packages/database/src/index.ts#L378)
>>>>>>> 7fdec06 (chore(docs): Rebuild docs [skip ci])
