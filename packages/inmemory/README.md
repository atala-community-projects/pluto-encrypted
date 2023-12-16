# @pluto-encrypted/inmemory
This package contains a RXDB compatible wrapper over inmemory and can be used as database engine inside @pluto-encrypted package with secure database encryption.

### Documentation
[@Pluto-encrypted REFERENCE](https://github.com/elribonazo/pluto-encrypted/blob/master/docs/README.md)

### How to use

Creating a InMemory compatible storage is very simple.

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

