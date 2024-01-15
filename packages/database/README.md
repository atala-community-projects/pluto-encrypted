# Pluto-encrypted
Pluto Encrypted is a secure storage wrapper for (IndexDB, InMemory or LevelDB) and [AtalaPrism ](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/)([Pluto](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/interfaces/Domain.Pluto.html))

## USAGE
To install simply run

```bash
npm i pluto-encrypted --save
# or with yarnyarn add pluto-encrypted
```

## Usage
This package implements Pluto interface and is fully compatible with the Prism Agent (check-compatibility versions), in order to use it just create a database as follows.

DatabaseName is any string.
Password is a 32 bytes buffer.

```typescript
import { Database } from 'pluto-encrypted';
//You can use IndexDB any other storage that is compatible.
import IndexDB from "@pluto-encrypted/indexdb"; 
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
const defaultPassword = new Uint8Array(32).fill(1);
const db = await Database.createEncrypted<{
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
const messages = await db.getAllMessages();
```

Backup database into an unencrypted JSON string and restore from backup.
```typescript
import { Database } from 'pluto-encrypted';
//You can use IndexDB any other storage that is compatible.
import IndexDB from "@pluto-encrypted/indexdb"; 
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
const defaultPassword = new Uint8Array(32).fill(1);
const db = await Database.createEncrypted<{
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
        name: "my-db",
        encryptionKey: defaultPassword,
        storage: IndexDB,
        collections: getDefaultCollections()
    }
);
const backup = await db.backup();
const restoredDatabase = await Database.createEncrypted<{
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
        name: "my-db",
        encryptionKey: defaultPassword,
        storage: IndexDB,
        importData: backup,
        collections: getDefaultCollections()
    }
);
const messages = await restoredDatabase.getAllMessages();
```

If the database is later initialised with the wrong password the "createEncrypted" async function will throw an exception and will not let you decrypt any encrypted content.

## QA & Documentation
| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat) |
