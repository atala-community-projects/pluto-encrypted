[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / Database

# Class: Database

[database](../modules/database.md).Database

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Implements

- [`Pluto`](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md)

## Table of contents

### Constructors

- [constructor](database.Database.md#constructor)

### Properties

- [\_db](database.Database.md#_db)
- [dbOptions](database.Database.md#dboptions)

### Accessors

- [collections](database.Database.md#collections)
- [credentialrequestmetadatas](database.Database.md#credentialrequestmetadatas)
- [credentials](database.Database.md#credentials)
- [db](database.Database.md#db)
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
- [getDefaultCollections](database.Database.md#getdefaultcollections)
- [getLinkSecret](database.Database.md#getlinksecret)
- [getMessage](database.Database.md#getmessage)
- [getPairByDID](database.Database.md#getpairbydid)
- [getPairByName](database.Database.md#getpairbyname)
- [getPrismDIDKeyPathIndex](database.Database.md#getprismdidkeypathindex)
- [getPrismLastKeyPathIndex](database.Database.md#getprismlastkeypathindex)
- [getPrivateKeyFromDB](database.Database.md#getprivatekeyfromdb)
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

[packages/database/src/index.ts:80](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L80)

## Properties

### \_db

• `Private` **\_db**: `RxDatabase`\<[`PlutoCollections`](../interfaces/database.PlutoCollections.md), `any`, `any`\>

#### Defined in

[packages/database/src/index.ts:71](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L71)

___

### dbOptions

• `Private` `Readonly` **dbOptions**: `RxDatabaseCreator`\<`any`, `any`\>

#### Defined in

[packages/database/src/index.ts:80](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L80)

## Accessors

### collections

• `get` **collections**(): [`PlutoCollections`](../interfaces/database.PlutoCollections.md)

#### Returns

[`PlutoCollections`](../interfaces/database.PlutoCollections.md)

#### Defined in

[packages/database/src/index.ts:90](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L90)

___

### credentialrequestmetadatas

• `get` **credentialrequestmetadatas**(): [`CredentialRequestMetadataCollection`](../modules/database.md#credentialrequestmetadatacollection)

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

[`CredentialRequestMetadataCollection`](../modules/database.md#credentialrequestmetadatacollection)

#### Defined in

[packages/database/src/index.ts:122](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L122)

___

### credentials

• `get` **credentials**(): [`CredentialCollection`](../modules/database.md#credentialcollection)

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

[`CredentialCollection`](../modules/database.md#credentialcollection)

#### Defined in

[packages/database/src/index.ts:218](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L218)

___

### db

• `Protected` `get` **db**(): `RxDatabase`\<[`PlutoCollections`](../interfaces/database.PlutoCollections.md), `any`, `any`\>

#### Returns

`RxDatabase`\<[`PlutoCollections`](../interfaces/database.PlutoCollections.md), `any`, `any`\>

#### Defined in

[packages/database/src/index.ts:73](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L73)

___

### didpairs

• `get` **didpairs**(): [`DIDPairCollection`](../modules/database.md#didpaircollection)

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

[`DIDPairCollection`](../modules/database.md#didpaircollection)

#### Defined in

[packages/database/src/index.ts:186](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L186)

___

### dids

• `get` **dids**(): [`DIDCollection`](../modules/database.md#didcollection)

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

[`DIDCollection`](../modules/database.md#didcollection)

#### Defined in

[packages/database/src/index.ts:282](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L282)

___

### linksecrets

• `get` **linksecrets**(): [`LinkSecretColletion`](../modules/database.md#linksecretcolletion)

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

[`LinkSecretColletion`](../modules/database.md#linksecretcolletion)

#### Defined in

[packages/database/src/index.ts:154](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L154)

___

### mediators

• `get` **mediators**(): [`MediatorCollection`](../modules/database.md#mediatorcollection)

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

[`MediatorCollection`](../modules/database.md#mediatorcollection)

#### Defined in

[packages/database/src/index.ts:250](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L250)

___

### messages

• `get` **messages**(): [`MessageColletion`](../modules/database.md#messagecolletion)

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

[`MessageColletion`](../modules/database.md#messagecolletion)

#### Defined in

[packages/database/src/index.ts:346](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L346)

___

### privatekeys

• `get` **privatekeys**(): [`PrivateKeyColletion`](../modules/database.md#privatekeycolletion)

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

[`PrivateKeyColletion`](../modules/database.md#privatekeycolletion)

#### Defined in

[packages/database/src/index.ts:314](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L314)

## Methods

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<[`PlutoCollections`](../interfaces/database.PlutoCollections.md)\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<[`PlutoCollections`](../interfaces/database.PlutoCollections.md)\>\>

#### Defined in

[packages/database/src/index.ts:86](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L86)

___

### clear

▸ **clear**(): `Promise`\<`void`\>

Use with caution, this will remove all entries from database
and then destroy the database itself.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/database/src/index.ts:354](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L354)

___

### fetchCredentialMetadata

▸ **fetchCredentialMetadata**(`linkSecretName`): `Promise`\<``null`` \| [`CredentialRequestMeta`](../interfaces/database.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>

Fetch the AnonCreds Credential Metadata by its linkSecret name

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<``null`` \| [`CredentialRequestMeta`](../interfaces/database.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[fetchCredentialMetadata](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#fetchcredentialmetadata)

#### Defined in

[packages/database/src/index.ts:1119](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L1119)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<[`Credential`](database.WALLET_SDK_DOMAIN.Credential.md)[]\>

Retrieve all the stored credentials

#### Returns

`Promise`\<[`Credential`](database.WALLET_SDK_DOMAIN.Credential.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllCredentials](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallcredentials)

#### Defined in

[packages/database/src/index.ts:1068](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L1068)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<[`DIDPair`](database.WALLET_SDK_DOMAIN.DIDPair.md)[]\>

Gets all the stores didPairs

#### Returns

`Promise`\<[`DIDPair`](database.WALLET_SDK_DOMAIN.DIDPair.md)[]\>

[Domain.DIDPair[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.DIDPair.html)

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllDidPairs](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getalldidpairs)

#### Defined in

[packages/database/src/index.ts:683](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L683)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](../interfaces/database.WALLET_SDK_DOMAIN.Mediator.md)[]\>

Retrieve all stored mediators.

#### Returns

`Promise`\<[`Mediator`](../interfaces/database.WALLET_SDK_DOMAIN.Mediator.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllMediators](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallmediators)

#### Defined in

[packages/database/src/index.ts:1063](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L1063)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

Get all the stored messages

#### Returns

`Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

[Message[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllMessages](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallmessages)

#### Defined in

[packages/database/src/index.ts:482](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L482)

___

### getAllMessagesByDID

▸ **getAllMessagesByDID**(`did`): `Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored DIDComm messages, received from or sent to a given DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllMessagesByDID](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallmessagesbydid)

#### Defined in

[packages/database/src/index.ts:875](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L875)

___

### getAllMessagesByFromToDID

▸ **getAllMessagesByFromToDID**(`from`, `to`): `Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all DIDComm messages containing given "from" AND "to" DIDs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |
| `to` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllMessagesByFromToDID](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallmessagesbyfromtodid)

#### Defined in

[packages/database/src/index.ts:988](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L988)

___

### getAllMessagesOfType

▸ **getAllMessagesOfType**(`type`, `relatedWithDID?`): `Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored DIDComm messages with given message type, and
optionally, related to a given DID. "Related" means that message should
contain a given DID in either "from" or "to" field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `relatedWithDID?` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllMessagesOfType](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallmessagesoftype)

#### Defined in

[packages/database/src/index.ts:957](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L957)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored, received DIDComm messages.

#### Returns

`Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllMessagesReceived](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallmessagesreceived)

#### Defined in

[packages/database/src/index.ts:908](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L908)

___

### getAllMessagesReceivedFrom

▸ **getAllMessagesReceivedFrom**(`did`): `Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored DIDComm messages, received from a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllMessagesReceivedFrom](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallmessagesreceivedfrom)

#### Defined in

[packages/database/src/index.ts:940](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L940)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored, sent DIDComm messages.

#### Returns

`Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllMessagesSent](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallmessagessent)

#### Defined in

[packages/database/src/index.ts:893](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L893)

___

### getAllMessagesSentTo

▸ **getAllMessagesSentTo**(`did`): `Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored DIDComm messages, sent to a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](database.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllMessagesSentTo](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallmessagessentto)

#### Defined in

[packages/database/src/index.ts:923](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L923)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

Retrieve all stored Peer DIDs.

#### Returns

`Promise`\<`PeerDID`[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllPeerDIDs](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallpeerdids)

#### Defined in

[packages/database/src/index.ts:1025](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L1025)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<[`PrismDIDInfo`](database.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

Retrieve all stored PRISM DIDs.

#### Returns

`Promise`\<[`PrismDIDInfo`](database.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getAllPrismDIDs](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getallprismdids)

#### Defined in

[packages/database/src/index.ts:784](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L784)

___

### getDIDInfoByAlias

▸ **getDIDInfoByAlias**(`alias`): `Promise`\<[`PrismDIDInfo`](database.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

Retrieve DID information for a given DID alias.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `string` |

#### Returns

`Promise`\<[`PrismDIDInfo`](database.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getDIDInfoByAlias](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getdidinfobyalias)

#### Defined in

[packages/database/src/index.ts:848](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L848)

___

### getDIDInfoByDID

▸ **getDIDInfoByDID**(`did`): `Promise`\<``null`` \| [`PrismDIDInfo`](database.WALLET_SDK_DOMAIN.PrismDIDInfo.md)\>

Retrieve DID information for a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<``null`` \| [`PrismDIDInfo`](database.WALLET_SDK_DOMAIN.PrismDIDInfo.md)\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getDIDInfoByDID](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getdidinfobydid)

#### Defined in

[packages/database/src/index.ts:816](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L816)

___

### getDIDPrivateKeyByID

▸ **getDIDPrivateKeyByID**(`id`): `Promise`\<``null`` \| [`PrivateKey`](database.WALLET_SDK_DOMAIN.PrivateKey.md)\>

Retrieve private key for a given key ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| [`PrivateKey`](database.WALLET_SDK_DOMAIN.PrivateKey.md)\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getDIDPrivateKeyByID](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getdidprivatekeybyid)

#### Defined in

[packages/database/src/index.ts:760](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L760)

___

### getDIDPrivateKeysByDID

▸ **getDIDPrivateKeysByDID**(`did`): `Promise`\<[`PrivateKey`](database.WALLET_SDK_DOMAIN.PrivateKey.md)[]\>

Retrieve available private keys for a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`PrivateKey`](database.WALLET_SDK_DOMAIN.PrivateKey.md)[]\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getDIDPrivateKeysByDID](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getdidprivatekeysbydid)

#### Defined in

[packages/database/src/index.ts:746](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L746)

___

### getDefaultCollections

▸ `Private` **getDefaultCollections**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `credentialrequestmetadatas` | \{ `methods`: [`CredentialRequestMetadataMethodTypes`](../interfaces/database.CredentialRequestMetadataMethodTypes.md) = CredentialRequestMetadataMethods; `schema`: [`Schema`](../modules/database.md#schema)\<[`CredentialRequestMetadataSchemaType`](../interfaces/database.CredentialRequestMetadataSchemaType.md)\> = CredentialRequestMetadataSchema } |
| `credentialrequestmetadatas.methods` | [`CredentialRequestMetadataMethodTypes`](../interfaces/database.CredentialRequestMetadataMethodTypes.md) |
| `credentialrequestmetadatas.schema` | [`Schema`](../modules/database.md#schema)\<[`CredentialRequestMetadataSchemaType`](../interfaces/database.CredentialRequestMetadataSchemaType.md)\> |
| `credentials` | \{ `methods`: [`CredentialMethodTypes`](../interfaces/database.CredentialMethodTypes.md) = CredentialMethods; `schema`: [`Schema`](../modules/database.md#schema)\<[`CredentialSchemaType`](../interfaces/database.CredentialSchemaType.md)\> = CredentialSchema } |
| `credentials.methods` | [`CredentialMethodTypes`](../interfaces/database.CredentialMethodTypes.md) |
| `credentials.schema` | [`Schema`](../modules/database.md#schema)\<[`CredentialSchemaType`](../interfaces/database.CredentialSchemaType.md)\> |
| `didpairs` | \{ `schema`: [`Schema`](../modules/database.md#schema)\<[`DIDPairSchemaType`](../interfaces/database.DIDPairSchemaType.md)\> = DIDPairSchema } |
| `didpairs.schema` | [`Schema`](../modules/database.md#schema)\<[`DIDPairSchemaType`](../interfaces/database.DIDPairSchemaType.md)\> |
| `dids` | \{ `schema`: [`Schema`](../modules/database.md#schema)\<[`DIDSchemaType`](../interfaces/database.DIDSchemaType.md)\> = DIDSchema } |
| `dids.schema` | [`Schema`](../modules/database.md#schema)\<[`DIDSchemaType`](../interfaces/database.DIDSchemaType.md)\> |
| `linksecrets` | \{ `methods`: [`LinkSecretMethodTypes`](../interfaces/database.LinkSecretMethodTypes.md) = LinkSecretMethods; `schema`: [`Schema`](../modules/database.md#schema)\<[`LinkSecretSchemaType`](../interfaces/database.LinkSecretSchemaType.md)\> = LinkSecretSchema } |
| `linksecrets.methods` | [`LinkSecretMethodTypes`](../interfaces/database.LinkSecretMethodTypes.md) |
| `linksecrets.schema` | [`Schema`](../modules/database.md#schema)\<[`LinkSecretSchemaType`](../interfaces/database.LinkSecretSchemaType.md)\> |
| `mediators` | \{ `methods`: [`MediatorMethodTypes`](../interfaces/database.MediatorMethodTypes.md) = MediatorMethods; `schema`: [`Schema`](../modules/database.md#schema)\<[`MediatorSchemaType`](../interfaces/database.MediatorSchemaType.md)\> = MediatorSchema } |
| `mediators.methods` | [`MediatorMethodTypes`](../interfaces/database.MediatorMethodTypes.md) |
| `mediators.schema` | [`Schema`](../modules/database.md#schema)\<[`MediatorSchemaType`](../interfaces/database.MediatorSchemaType.md)\> |
| `messages` | \{ `methods`: [`MessageMethodTypes`](../interfaces/database.MessageMethodTypes.md) = MessageMethods; `schema`: [`Schema`](../modules/database.md#schema)\<[`MessageSchemaType`](../interfaces/database.MessageSchemaType.md)\> = MessageSchema } |
| `messages.methods` | [`MessageMethodTypes`](../interfaces/database.MessageMethodTypes.md) |
| `messages.schema` | [`Schema`](../modules/database.md#schema)\<[`MessageSchemaType`](../interfaces/database.MessageSchemaType.md)\> |
| `privatekeys` | \{ `methods`: [`PrivateKeyMethodTypes`](../interfaces/database.PrivateKeyMethodTypes.md) = PrivateKeyMethods; `schema`: [`Schema`](../modules/database.md#schema)\<[`KeySchemaType`](../interfaces/database.KeySchemaType.md)\> = PrivateKeySchema } |
| `privatekeys.methods` | [`PrivateKeyMethodTypes`](../interfaces/database.PrivateKeyMethodTypes.md) |
| `privatekeys.schema` | [`Schema`](../modules/database.md#schema)\<[`KeySchemaType`](../interfaces/database.KeySchemaType.md)\> |

#### Defined in

[packages/database/src/index.ts:487](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L487)

___

### getLinkSecret

▸ **getLinkSecret**(`linkSecretName?`): `Promise`\<``null`` \| `string`\>

Retrieve the anoncreds stored link secret by its name

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName?` | `string` |

#### Returns

`Promise`\<``null`` \| `string`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getLinkSecret](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getlinksecret)

#### Defined in

[packages/database/src/index.ts:1075](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L1075)

___

### getMessage

▸ **getMessage**(`id`): `Promise`\<``null`` \| [`Message`](database.WALLET_SDK_DOMAIN.Message.md)\>

Get a Message by its id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| [`Message`](database.WALLET_SDK_DOMAIN.Message.md)\>

[Message](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getMessage](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getmessage)

#### Defined in

[packages/database/src/index.ts:424](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L424)

___

### getPairByDID

▸ **getPairByDID**(`did`): `Promise`\<``null`` \| [`DIDPair`](database.WALLET_SDK_DOMAIN.DIDPair.md)\>

Get a did pair (connection) by one of its dids

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<``null`` \| [`DIDPair`](database.WALLET_SDK_DOMAIN.DIDPair.md)\>

[Domain.DIDPair](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.DIDPair.html)

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getPairByDID](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getpairbydid)

#### Defined in

[packages/database/src/index.ts:696](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L696)

___

### getPairByName

▸ **getPairByName**(`name`): `Promise`\<``null`` \| [`DIDPair`](database.WALLET_SDK_DOMAIN.DIDPair.md)\>

Retrieve a DID pair by a given pair name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<``null`` \| [`DIDPair`](database.WALLET_SDK_DOMAIN.DIDPair.md)\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getPairByName](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getpairbyname)

#### Defined in

[packages/database/src/index.ts:719](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L719)

___

### getPrismDIDKeyPathIndex

▸ **getPrismDIDKeyPathIndex**(`did`): `Promise`\<``null`` \| `number`\>

Retrieve a PRISM DID key path index for a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<``null`` \| `number`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getPrismDIDKeyPathIndex](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getprismdidkeypathindex)

#### Defined in

[packages/database/src/index.ts:1009](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L1009)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

Get the last used PRISM key path index.

#### Returns

`Promise`\<`number`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[getPrismLastKeyPathIndex](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#getprismlastkeypathindex)

#### Defined in

[packages/database/src/index.ts:1017](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L1017)

___

### getPrivateKeyFromDB

▸ `Private` **getPrivateKeyFromDB**(`privateKey`): [`PrivateKey`](database.WALLET_SDK_DOMAIN.PrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKeyDocument`](../modules/database.md#privatekeydocument) |

#### Returns

[`PrivateKey`](database.WALLET_SDK_DOMAIN.PrivateKey.md)

#### Defined in

[packages/database/src/index.ts:740](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L740)

___

### start

▸ **start**(`collections?`): `Promise`\<`void`\>

Start the database and build collections

#### Parameters

| Name | Type |
| :------ | :------ |
| `collections?` | `Partial`\<\{ `credentialrequestmetadatas`: `RxCollectionCreator`\<`any`\> ; `credentials`: `RxCollectionCreator`\<`any`\> ; `didpairs`: `RxCollectionCreator`\<`any`\> ; `dids`: `RxCollectionCreator`\<`any`\> ; `linksecrets`: `RxCollectionCreator`\<`any`\> ; `mediators`: `RxCollectionCreator`\<`any`\> ; `messages`: `RxCollectionCreator`\<`any`\> ; `privatekeys`: `RxCollectionCreator`\<`any`\>  }\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[start](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#start)

#### Defined in

[packages/database/src/index.ts:525](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L525)

___

### storeCredential

▸ **storeCredential**(`credential`): `Promise`\<`void`\>

Store a Credential into the Database

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](database.WALLET_SDK_DOMAIN.Credential.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[storeCredential](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#storecredential)

#### Defined in

[packages/database/src/index.ts:1052](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L1052)

___

### storeCredentialMetadata

▸ **storeCredentialMetadata**(`metadata`, `linkSecret`): `Promise`\<`void`\>

Store the AnonCreds Credential Metadata referencing its linkSecret name

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`CredentialRequestMeta`](../interfaces/database.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md) |
| `linkSecret` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[storeCredentialMetadata](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#storecredentialmetadata)

#### Defined in

[packages/database/src/index.ts:1108](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L1108)

___

### storeDIDPair

▸ **storeDIDPair**(`host`, `receiver`, `name`): `Promise`\<`void`\>

Stores a didpair

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |
| `receiver` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[storeDIDPair](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#storedidpair)

#### Defined in

[packages/database/src/index.ts:626](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L626)

___

### storeLinkSecret

▸ **storeLinkSecret**(`linkSecret`, `linkSecretName`): `Promise`\<`void`\>

Store a new anoncreds linkSecret

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecret` | `string` |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[storeLinkSecret](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#storelinksecret)

#### Defined in

[packages/database/src/index.ts:1098](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L1098)

___

### storeMediator

▸ **storeMediator**(`mediator`, `host`, `routing`): `Promise`\<`void`\>

Store a mediator information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |
| `host` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |
| `routing` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[storeMediator](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#storemediator)

#### Defined in

[packages/database/src/index.ts:771](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L771)

___

### storeMessage

▸ **storeMessage**(`message`): `Promise`\<`void`\>

Stores a message

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](database.WALLET_SDK_DOMAIN.Message.md) |

#### Returns

`Promise`\<`void`\>

void

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[storeMessage](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#storemessage)

#### Defined in

[packages/database/src/index.ts:443](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L443)

___

### storeMessages

▸ **storeMessages**(`messages`): `Promise`\<`void`\>

Stores multiple messages in 1 call

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | [`Message`](database.WALLET_SDK_DOMAIN.Message.md)[] |

#### Returns

`Promise`\<`void`\>

void

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[storeMessages](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#storemessages)

#### Defined in

[packages/database/src/index.ts:472](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L472)

___

### storePeerDID

▸ **storePeerDID**(`did`, `privateKeys`): `Promise`\<`void`\>

Stores a peerdid with its privateKeys

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |
| `privateKeys` | [`PrivateKey`](database.WALLET_SDK_DOMAIN.PrivateKey.md)[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[storePeerDID](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#storepeerdid)

#### Defined in

[packages/database/src/index.ts:584](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L584)

___

### storePrismDID

▸ **storePrismDID**(`did`, `keyPathIndex`, `privateKey`, `_privateKeyMetaId?`, `alias?`): `Promise`\<`void`\>

Stores a prismDID and its privateKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |
| `keyPathIndex` | `number` |
| `privateKey` | [`PrivateKey`](database.WALLET_SDK_DOMAIN.PrivateKey.md) |
| `_privateKeyMetaId?` | ``null`` \| `string` |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[storePrismDID](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#storeprismdid)

#### Defined in

[packages/database/src/index.ts:558](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L558)

___

### storePrivateKeys

▸ **storePrivateKeys**(`privateKey`, `did`, `keyPathIndex`): `Promise`\<`void`\>

Stores privateKeys references to an existing DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](database.WALLET_SDK_DOMAIN.PrivateKey.md) |
| `did` | [`DID`](database.WALLET_SDK_DOMAIN.DID.md) |
| `keyPathIndex` | `number` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md).[storePrivateKeys](../interfaces/database.WALLET_SDK_DOMAIN.Pluto.md#storeprivatekeys)

#### Defined in

[packages/database/src/index.ts:645](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L645)

___

### createEncrypted

▸ `Static` **createEncrypted**(`options`): `Promise`\<[`Database`](database.Database.md)\>

Creates a database instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.autoStart?` | `boolean` |
| `options.collections?` | `Partial`\<\{ `credentialrequestmetadatas`: `RxCollectionCreator`\<`any`\> ; `credentials`: `RxCollectionCreator`\<`any`\> ; `didpairs`: `RxCollectionCreator`\<`any`\> ; `dids`: `RxCollectionCreator`\<`any`\> ; `linksecrets`: `RxCollectionCreator`\<`any`\> ; `mediators`: `RxCollectionCreator`\<`any`\> ; `messages`: `RxCollectionCreator`\<`any`\> ; `privatekeys`: `RxCollectionCreator`\<`any`\>  }\> |
| `options.encryptionKey` | `Uint8Array` |
| `options.importData?` | `RxDumpDatabase`\<[`PlutoCollections`](../interfaces/database.PlutoCollections.md)\> |
| `options.name` | `string` |
| `options.storage` | [`RxStorage`](../interfaces/encryption.RxStorage.md)\<`any`, `any`\> |

#### Returns

`Promise`\<[`Database`](database.Database.md)\>

Database

#### Defined in

[packages/database/src/index.ts:367](https://github.com/atala-community-projects/pluto-encrypted/blob/6ccfad9/packages/database/src/index.ts#L367)
