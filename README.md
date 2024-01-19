# Pluto Encrypted
Is a community maintained project which aims to bring a scalable and future proof storage solution for Wallet SDK on typescript. By using this package you can ensure that this dependency will fit the AtalaPrism wallet SDK contract and provide the SDK with storage finally.

## Interface
Edge SDK Pluto interface [v4.0.0-rc1](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/interfaces/Domain.Pluto.html)
```typescript

export interface Pluto {

    storeCredentialMetadata(metadata: Anoncreds.CredentialRequestMeta, linkSecret: Anoncreds.LinkSecret): Promise<void>;

    fetchCredentialMetadata(linkSecretName: string): Promise<Anoncreds.CredentialRequestMeta | null>;

    start(): Promise<void>;

    storePrismDID(did: DID, keyPathIndex: number, privateKey: PrivateKey, privateKeyMetaId: string | null, alias?: string): Promise<void>;

    storePeerDID(did: DID, privateKeys: Array<PrivateKey>): Promise<void>;

    storeDIDPair(host: DID, receiver: DID, name: string): Promise<void>;

    storeMessage(message: Message): Promise<void>;

    storeMessages(messages: Array<Message>): Promise<void>;

    storePrivateKeys(privateKey: PrivateKey, did: DID, keyPathIndex: number, metaId: string | null): Promise<void>;

    storeMediator(mediator: DID, host: DID, routing: DID): Promise<void>;

    storeCredential(credential: Credential): Promise<void>;

    getAllPrismDIDs(): Promise<PrismDIDInfo[]>;

    getDIDInfoByDID(did: DID): Promise<PrismDIDInfo | null>;
 
    getDIDInfoByAlias(alias: string): Promise<PrismDIDInfo[]>;

    getPrismDIDKeyPathIndex(did: DID): Promise<number | null>;

    getPrismLastKeyPathIndex(): Promise<number>;

    getAllPeerDIDs(): Promise<Array<PeerDID>>;

    getDIDPrivateKeysByDID(did: DID): Promise<Array<PrivateKey>>;

    getDIDPrivateKeyByID(id: string): Promise<PrivateKey | null>;

    getAllDidPairs(): Promise<Array<DIDPair>>;

    getPairByDID(did: DID): Promise<DIDPair | null>;

    getPairByName(name: string): Promise<DIDPair | null>;

    getAllMessages(): Promise<Array<Message>>;

    getAllMessagesByDID(did: DID): Promise<Array<Message>>;

    getAllMessagesSent(): Promise<Array<Message>>;

    getAllMessagesReceived(): Promise<Array<Message>>;

    getAllMessagesSentTo(did: DID): Promise<Array<Message>>;

    getAllMessagesReceivedFrom(did: DID): Promise<Array<Message>>;

    getAllMessagesOfType(type: string, relatedWithDID?: DID): Promise<Array<Message>>;

    getAllMessagesByFromToDID(from: DID, to: DID): Promise<Array<Message>>;

    getMessage(id: string): Promise<Message | null>;

    getAllMediators(): Promise<Array<Mediator>>;

    getAllCredentials(): Promise<Array<Credential>>;

    getLinkSecret(linkSecretName?: string): Promise<Anoncreds.LinkSecret | null>;

    storeLinkSecret(linkSecret: Anoncreds.LinkSecret, linkSecretName: string): Promise<void>;
}
```

We currently support database wrappers for IndexDB, InMemory and are working together to bring you level-db with electron compatibility.
We are not going to stop here but ensure that our SDK can be used in any platform and language.

### Documentation & Contribution Guidelines
The pluto encrypted documentation is always available on all branches [HERE](https://github.com/elribonazo/pluto-encrypted/blob/master/docs/README.md) but we have also deployed an online version of documentation.

Go to documentation portal [here](https://atala-community-projects.github.io/pluto-encrypted)

Pull requests are WELCOME!! please check the [Contribution guidelines](https://github.com/elribonazo/pluto-encrypted/blob/master/CONTRIBUTION-GUIDELINES.md) first


### How to use

We currently provide 3 database storages - InMemory, IndexDB, and LevelDB.
In order to use this package, you must first install the database and pass a storage engine.

```bash
npm i @pluto-encrypted/database --save
npm i @pluto-encrypted/inmemory --save
# or npm i @pluto-encrypted/indexdb --save
# or npm i @pluto-encrypted/leveldb --save
```

### InMemory

```typescript
import InMemory from "@pluto-encrypted/inmemory";
import { Database } from "@pluto-encrypted/database";
import { 
    getDefaultCollections,
    DIDCollection,
    DIDPairCollection,
    MediatorCollection,
    PrivateKeyColletion,
    CredentialCollection,
    CredentialRequestMetadataCollection,
    LinkSecretColletion,
    MessageColletion
} from "@pluto-encrypted/schemas";
//default password must be 32 bytes long
const defaultPassword = new Uint8Array(32).fill(1);
const database = db = await Database.createEncrypted<{
    dids: DIDCollection;
    didpairs: DIDPairCollection;
    mediators: MediatorCollection;
    privatekeys: PrivateKeyColletion;
    credentials: CredentialCollection;
    credentialrequestmetadatas: CredentialRequestMetadataCollection;
    linksecrets: LinkSecretColletion;
    messages: MessageColletion;
}>(
    {
        name: `my-db`,
        encryptionKey: defaultPassword,
        storage: InMemory,
        collections: getDefaultCollections()
    }
);
```

### IndexDB

```typescript
import IndexDB from "@pluto-encrypted/indexdb";
import { Database } from "@pluto-encrypted/database";
import { 
    getDefaultCollections,
    DIDCollection,
    DIDPairCollection,
    MediatorCollection,
    PrivateKeyColletion,
    CredentialCollection,
    CredentialRequestMetadataCollection,
    LinkSecretColletion,
    MessageColletion
} from "@pluto-encrypted/schemas";
//default password must be 32 bytes long
const defaultPassword = new Uint8Array(32).fill(1);
const database = db = await Database.createEncrypted<{
    dids: DIDCollection;
    didpairs: DIDPairCollection;
    mediators: MediatorCollection;
    privatekeys: PrivateKeyColletion;
    credentials: CredentialCollection;
    credentialrequestmetadatas: CredentialRequestMetadataCollection;
    linksecrets: LinkSecretColletion;
    messages: MessageColletion;
}>(
    {
        name: `my-db`,
        encryptionKey: defaultPassword,
        storage: IndexDB,
        collections: getDefaultCollections()
    }
);
```

### LevelDB

```typescript
import { createLevelDBStorage } from "@pluto-encrypted/leveldb";
import { Database } from "@pluto-encrypted/database";
//default password must be 32 bytes long
const defaultPassword = new Uint8Array(32).fill(1);
const database = db = await Database.createEncrypted<{
    dids: DIDCollection;
    didpairs: DIDPairCollection;
    mediators: MediatorCollection;
    privatekeys: PrivateKeyColletion;
    credentials: CredentialCollection;
    credentialrequestmetadatas: CredentialRequestMetadataCollection;
    linksecrets: LinkSecretColletion;
    messages: MessageColletion;
}>(
    {
        name: `my-db`,
        encryptionKey: defaultPassword,
        storage: createLevelDBStorage({ 
            dbName: "demo",
            dbPath: "/tmp/demo" 
        }),
        collections: getDefaultCollections()
    }
);
```
