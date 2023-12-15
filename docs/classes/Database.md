[pluto-encrypted - v0.2.0](../README.md) / Database

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

[index.ts:99](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L99)

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

[index.ts:133](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L133)

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

[index.ts:229](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L229)

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

[index.ts:197](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L197)

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

[index.ts:293](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L293)

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

[index.ts:165](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L165)

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

[index.ts:261](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L261)

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

[index.ts:357](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L357)

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

[index.ts:325](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L325)

## Methods

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<`PlutoCollections`\>\>

#### Defined in

[index.ts:101](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L101)

___

### clear

▸ **clear**(): `Promise`\<`void`\>

Use with caution, this will remove all entries from database
and then destroy the database itself.

#### Returns

`Promise`\<`void`\>

#### Defined in

[index.ts:365](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L365)

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

[index.ts:1136](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L1136)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<`Credential`[]\>

#### Returns

`Promise`\<`Credential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

[index.ts:1086](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L1086)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<`DIDPair`[]\>

#### Returns

`Promise`\<`DIDPair`[]\>

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

[index.ts:705](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L705)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<`Mediator`[]\>

#### Returns

`Promise`\<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

[index.ts:1081](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L1081)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

[index.ts:455](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L455)

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

[index.ts:894](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L894)

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

[index.ts:1007](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L1007)

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

[index.ts:976](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L976)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

[index.ts:927](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L927)

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

[index.ts:959](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L959)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

[index.ts:912](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L912)

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

[index.ts:942](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L942)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

#### Returns

`Promise`\<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

[index.ts:1044](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L1044)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<`PrismDIDInfo`[]\>

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

[index.ts:802](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L802)

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

[index.ts:867](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L867)

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

[index.ts:834](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L834)

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

[index.ts:778](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L778)

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

[index.ts:766](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L766)

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

[index.ts:1093](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L1093)

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

[index.ts:411](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L411)

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

[index.ts:714](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L714)

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

[index.ts:738](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L738)

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

[index.ts:1028](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L1028)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

[index.ts:1036](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L1036)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

[index.ts:465](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L465)

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

[index.ts:1071](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L1071)

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

[index.ts:1125](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L1125)

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

[index.ts:658](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L658)

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

[index.ts:1115](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L1115)

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

[index.ts:789](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L789)

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

[index.ts:425](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L425)

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

[index.ts:449](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L449)

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

[index.ts:622](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L622)

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

[index.ts:600](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L600)

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

[index.ts:670](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L670)

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

[index.ts:378](https://github.com/elribonazo/pluto-encrypted/blob/254f892/packages/database/src/index.ts#L378)
