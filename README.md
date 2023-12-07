# Pluto-encrypted
Pluto Encrypted is a secure storage wrapper for IndexDB and [AtalaPrism ](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/)([Pluto](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/interfaces/Domain.Pluto.html))

This package is compatible with Atala Prism Wallet SDK v3.1.0

### Coverage
| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://raw.githubusercontent.com/elribonazo/pluto-encrypted/master/packages/database/coverage/badge-statements.svg) | ![Branches](https://raw.githubusercontent.com/elribonazo/pluto-encrypted/master/packages/database/coverage/badge-branches.svg) | ![Functions](https://raw.githubusercontent.com/elribonazo/pluto-encrypted/master/packages/database/coverage/badge-functions.svg) | ![Lines](https://raw.githubusercontent.com/elribonazo/pluto-encrypted/master/packages/database/coverage/badge-lines.svg) |

### Documentation

[SDK Reference](https://github.com/elribonazo/pluto-encrypted/blob/master/packages/database/modules.md)

### How to use
We currently provide 2 database storages, one IndexDB and one InMemory storage.
In order to use this package, you must first install the database and pass a storage engine.

```bash
npm i @pluto-encrypted/database --save
npm i @pluto-encrypted/inmemory --save
```

```typescript
import InMemory from "@pluto-encrypted/inmemory";
import { Database } from "@pluto-encrypted/database";
//default password must be 32 bytes long
const defaultPassword = new Uint8Array(32).fill(1);
const database = db = await Database.createEncrypted(
    {
        name: `my-db`,
        encryptionKey: defaultPassword,
        storage: InMemory,
    }
);
```