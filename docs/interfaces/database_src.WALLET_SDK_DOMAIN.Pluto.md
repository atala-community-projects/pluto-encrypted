[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / [WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md) / Pluto

# Interface: Pluto

[database/src](../modules/database_src.md).[WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md).Pluto

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Implemented by

- [`Database`](../classes/database_src.Database.md)

## Table of contents

### Methods

- [fetchCredentialMetadata](database_src.WALLET_SDK_DOMAIN.Pluto.md#fetchcredentialmetadata)
- [getAllCredentials](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallcredentials)
- [getAllDidPairs](database_src.WALLET_SDK_DOMAIN.Pluto.md#getalldidpairs)
- [getAllMediators](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallmediators)
- [getAllMessages](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallmessages)
- [getAllMessagesByDID](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallmessagesbydid)
- [getAllMessagesByFromToDID](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallmessagesbyfromtodid)
- [getAllMessagesOfType](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallmessagesoftype)
- [getAllMessagesReceived](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallmessagesreceived)
- [getAllMessagesReceivedFrom](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallmessagesreceivedfrom)
- [getAllMessagesSent](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallmessagessent)
- [getAllMessagesSentTo](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallmessagessentto)
- [getAllPeerDIDs](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallpeerdids)
- [getAllPrismDIDs](database_src.WALLET_SDK_DOMAIN.Pluto.md#getallprismdids)
- [getDIDInfoByAlias](database_src.WALLET_SDK_DOMAIN.Pluto.md#getdidinfobyalias)
- [getDIDInfoByDID](database_src.WALLET_SDK_DOMAIN.Pluto.md#getdidinfobydid)
- [getDIDPrivateKeyByID](database_src.WALLET_SDK_DOMAIN.Pluto.md#getdidprivatekeybyid)
- [getDIDPrivateKeysByDID](database_src.WALLET_SDK_DOMAIN.Pluto.md#getdidprivatekeysbydid)
- [getLinkSecret](database_src.WALLET_SDK_DOMAIN.Pluto.md#getlinksecret)
- [getMessage](database_src.WALLET_SDK_DOMAIN.Pluto.md#getmessage)
- [getPairByDID](database_src.WALLET_SDK_DOMAIN.Pluto.md#getpairbydid)
- [getPairByName](database_src.WALLET_SDK_DOMAIN.Pluto.md#getpairbyname)
- [getPrismDIDKeyPathIndex](database_src.WALLET_SDK_DOMAIN.Pluto.md#getprismdidkeypathindex)
- [getPrismLastKeyPathIndex](database_src.WALLET_SDK_DOMAIN.Pluto.md#getprismlastkeypathindex)
- [start](database_src.WALLET_SDK_DOMAIN.Pluto.md#start)
- [storeCredential](database_src.WALLET_SDK_DOMAIN.Pluto.md#storecredential)
- [storeCredentialMetadata](database_src.WALLET_SDK_DOMAIN.Pluto.md#storecredentialmetadata)
- [storeDIDPair](database_src.WALLET_SDK_DOMAIN.Pluto.md#storedidpair)
- [storeLinkSecret](database_src.WALLET_SDK_DOMAIN.Pluto.md#storelinksecret)
- [storeMediator](database_src.WALLET_SDK_DOMAIN.Pluto.md#storemediator)
- [storeMessage](database_src.WALLET_SDK_DOMAIN.Pluto.md#storemessage)
- [storeMessages](database_src.WALLET_SDK_DOMAIN.Pluto.md#storemessages)
- [storePeerDID](database_src.WALLET_SDK_DOMAIN.Pluto.md#storepeerdid)
- [storePrismDID](database_src.WALLET_SDK_DOMAIN.Pluto.md#storeprismdid)
- [storePrivateKeys](database_src.WALLET_SDK_DOMAIN.Pluto.md#storeprivatekeys)

## Methods

### fetchCredentialMetadata

▸ **fetchCredentialMetadata**(`linkSecretName`): `Promise`\<``null`` \| [`CredentialRequestMeta`](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>

Fetch the AnonCreds Credential Metadata by its linkSecret name

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<``null`` \| [`CredentialRequestMeta`](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:24

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<[`Credential`](../classes/database_src.WALLET_SDK_DOMAIN.Credential.md)[]\>

Retrieve all the stored credentials

#### Returns

`Promise`\<[`Credential`](../classes/database_src.WALLET_SDK_DOMAIN.Credential.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:150

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<[`DIDPair`](../classes/database_src.WALLET_SDK_DOMAIN.DIDPair.md)[]\>

Retrieve all stored DID pairs (DIDComm connections).

#### Returns

`Promise`\<[`DIDPair`](../classes/database_src.WALLET_SDK_DOMAIN.DIDPair.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:96

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](database_src.WALLET_SDK_DOMAIN.Mediator.md)[]\>

Retrieve all stored mediators.

#### Returns

`Promise`\<[`Mediator`](database_src.WALLET_SDK_DOMAIN.Mediator.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:146

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored DIDComm messages.

#### Returns

`Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:108

___

### getAllMessagesByDID

▸ **getAllMessagesByDID**(`did`): `Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored DIDComm messages, received from or sent to a given DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:112

___

### getAllMessagesByFromToDID

▸ **getAllMessagesByFromToDID**(`from`, `to`): `Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all DIDComm messages containing given "from" AND "to" DIDs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |
| `to` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:138

___

### getAllMessagesOfType

▸ **getAllMessagesOfType**(`type`, `relatedWithDID?`): `Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored DIDComm messages with given message type, and
optionally, related to a given DID. "Related" means that message should
contain a given DID in either "from" or "to" field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `relatedWithDID?` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:134

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored, received DIDComm messages.

#### Returns

`Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:120

___

### getAllMessagesReceivedFrom

▸ **getAllMessagesReceivedFrom**(`did`): `Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored DIDComm messages, received from a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:128

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored, sent DIDComm messages.

#### Returns

`Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:116

___

### getAllMessagesSentTo

▸ **getAllMessagesSentTo**(`did`): `Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

Retrieve all stored DIDComm messages, sent to a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:124

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

Retrieve all stored Peer DIDs.

#### Returns

`Promise`\<`PeerDID`[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:84

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<[`PrismDIDInfo`](../classes/database_src.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

Retrieve all stored PRISM DIDs.

#### Returns

`Promise`\<[`PrismDIDInfo`](../classes/database_src.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:64

___

### getDIDInfoByAlias

▸ **getDIDInfoByAlias**(`alias`): `Promise`\<[`PrismDIDInfo`](../classes/database_src.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

Retrieve DID information for a given DID alias.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `string` |

#### Returns

`Promise`\<[`PrismDIDInfo`](../classes/database_src.WALLET_SDK_DOMAIN.PrismDIDInfo.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:72

___

### getDIDInfoByDID

▸ **getDIDInfoByDID**(`did`): `Promise`\<``null`` \| [`PrismDIDInfo`](../classes/database_src.WALLET_SDK_DOMAIN.PrismDIDInfo.md)\>

Retrieve DID information for a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<``null`` \| [`PrismDIDInfo`](../classes/database_src.WALLET_SDK_DOMAIN.PrismDIDInfo.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:68

___

### getDIDPrivateKeyByID

▸ **getDIDPrivateKeyByID**(`id`): `Promise`\<``null`` \| [`PrivateKey`](../classes/database_src.WALLET_SDK_DOMAIN.PrivateKey.md)\>

Retrieve private key for a given key ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| [`PrivateKey`](../classes/database_src.WALLET_SDK_DOMAIN.PrivateKey.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:92

___

### getDIDPrivateKeysByDID

▸ **getDIDPrivateKeysByDID**(`did`): `Promise`\<[`PrivateKey`](../classes/database_src.WALLET_SDK_DOMAIN.PrivateKey.md)[]\>

Retrieve available private keys for a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<[`PrivateKey`](../classes/database_src.WALLET_SDK_DOMAIN.PrivateKey.md)[]\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:88

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

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:154

___

### getMessage

▸ **getMessage**(`id`): `Promise`\<``null`` \| [`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)\>

Retrieve a DIDComm message by ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| [`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:142

___

### getPairByDID

▸ **getPairByDID**(`did`): `Promise`\<``null`` \| [`DIDPair`](../classes/database_src.WALLET_SDK_DOMAIN.DIDPair.md)\>

Retrieve a DID pair containing a given DID as either host or receiver.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<``null`` \| [`DIDPair`](../classes/database_src.WALLET_SDK_DOMAIN.DIDPair.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:100

___

### getPairByName

▸ **getPairByName**(`name`): `Promise`\<``null`` \| [`DIDPair`](../classes/database_src.WALLET_SDK_DOMAIN.DIDPair.md)\>

Retrieve a DID pair by a given pair name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<``null`` \| [`DIDPair`](../classes/database_src.WALLET_SDK_DOMAIN.DIDPair.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:104

___

### getPrismDIDKeyPathIndex

▸ **getPrismDIDKeyPathIndex**(`did`): `Promise`\<``null`` \| `number`\>

Retrieve a PRISM DID key path index for a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<``null`` \| `number`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:76

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

Get the last used PRISM key path index.

#### Returns

`Promise`\<`number`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:80

___

### start

▸ **start**(): `Promise`\<`void`\>

Pluto initialise function

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:28

___

### storeCredential

▸ **storeCredential**(`credential`): `Promise`\<`void`\>

Store a Credential into the Database

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../classes/database_src.WALLET_SDK_DOMAIN.Credential.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:60

___

### storeCredentialMetadata

▸ **storeCredentialMetadata**(`metadata`, `linkSecret`): `Promise`\<`void`\>

Store the AnonCreds Credential Metadata referencing its linkSecret name

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`CredentialRequestMeta`](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md) |
| `linkSecret` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:20

___

### storeDIDPair

▸ **storeDIDPair**(`host`, `receiver`, `name`): `Promise`\<`void`\>

Store a named pair of DIDs representing a DIDComm connection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |
| `receiver` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:40

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

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:158

___

### storeMediator

▸ **storeMediator**(`mediator`, `host`, `routing`): `Promise`\<`void`\>

Store a mediator information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |
| `host` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |
| `routing` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:56

___

### storeMessage

▸ **storeMessage**(`message`): `Promise`\<`void`\>

Store a DIDComm message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:44

___

### storeMessages

▸ **storeMessages**(`messages`): `Promise`\<`void`\>

Store an array of DIDComm messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | [`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:48

___

### storePeerDID

▸ **storePeerDID**(`did`, `privateKeys`): `Promise`\<`void`\>

Store a Peer DID and an array of its privateKeys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |
| `privateKeys` | [`PrivateKey`](../classes/database_src.WALLET_SDK_DOMAIN.PrivateKey.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:36

___

### storePrismDID

▸ **storePrismDID**(`did`, `keyPathIndex`, `privateKey`, `privateKeyMetaId`, `alias?`): `Promise`\<`void`\>

Store a PRISM DID and its private key with given metadata.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |
| `keyPathIndex` | `number` |
| `privateKey` | [`PrivateKey`](../classes/database_src.WALLET_SDK_DOMAIN.PrivateKey.md) |
| `privateKeyMetaId` | ``null`` \| `string` |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:32

___

### storePrivateKeys

▸ **storePrivateKeys**(`privateKey`, `did`, `keyPathIndex`, `metaId`): `Promise`\<`void`\>

Store a list of private keys with its metadata and a reference to the DID it belongs to.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](../classes/database_src.WALLET_SDK_DOMAIN.PrivateKey.md) |
| `did` | [`DID`](../classes/database_src.WALLET_SDK_DOMAIN.DID.md) |
| `keyPathIndex` | `number` |
| `metaId` | ``null`` \| `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pluto.d.ts:52
