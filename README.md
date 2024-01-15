# Pluto Encrypted
Is a community maintained project which aims to bring a scalable and future proof storage solution for Wallet SDK on typescript. By using this package you can ensure that this dependency will fit the AtalaPrism wallet SDK contract and provide the SDK with storage finally.

This package is compatible with Atala Prism Wallet SDK v3.2.0

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
