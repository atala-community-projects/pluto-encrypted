# @pluto-encrypted/leveldb
This package contains a RXDB compatible wrapper over leveldb and can be used as database engine inside @pluto-encrypted package with secure database encryption.

### Documentation
[@Pluto-encrypted REFERENCE](https://github.com/elribonazo/pluto-encrypted/blob/master/docs/README.md)

### How to use

Creating a levelDB compatible storage is very simple.

```typescript
import { createLevelDBStorage } from "@pluto-encrypted/leveldb";
import { Database } from "@pluto-encrypted/database";
//default password must be 32 bytes long
const defaultPassword = new Uint8Array(32).fill(1);
const database = db = await Database.createEncrypted(
    {
        name: `my-db`,
        encryptionKey: defaultPassword,
        storage: createLevelDBStorage({ 
            dbName: "demo",
            dbPath: "/tmp/demo" 
        }),
    }
);
```

## QA & Documentation
| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-90.7%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-69.76%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-98%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-90.82%25-brightgreen.svg?style=flat) |
