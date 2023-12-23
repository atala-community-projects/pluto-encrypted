# @pluto-encrypted/indexdb
This package contains a RXDB compatible wrapper over IndexDB and can be used as database engine inside @pluto-encrypted package with secure database encryption.

### Documentation
[@Pluto-encrypted REFERENCE](https://github.com/elribonazo/pluto-encrypted/blob/master/docs/README.md)

### How to use

Creating a IndexDB compatible storage is very simple.

```typescript
import IndexDB from "@pluto-encrypted/indexdb";
import { Database } from "@pluto-encrypted/database";
//default password must be 32 bytes long
const defaultPassword = new Uint8Array(32).fill(1);
const database = db = await Database.createEncrypted(
    {
        name: `my-db`,
        encryptionKey: defaultPassword,
        storage: IndexDB,
    }
);
```

## QA & Documentation
| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-76.25%25-red.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-64.12%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-76.81%25-red.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-77%25-red.svg?style=flat) |
