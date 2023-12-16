# Pluto Encrypted
Is a community maintained project which aims to bring a scalable and future proof storage solution for Wallet SDK on typescript. By using this package you can ensure that this dependency will fit the AtalaPrism wallet SDK contract and provide the SDK with storage finally.

This package is compatible with Atala Prism Wallet SDK v3.2.0

We currently support database wrappers for IndexDB, InMemory and are working together to bring you level-db with electron compatibility.
We are not going to stop here but ensure that our SDK can be used in any platform and language.

## QA & Documentation
| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-95.8%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-92.66%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-86.66%25-yellow.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-95.8%25-brightgreen.svg?style=flat) |

### Documentation

[@Pluto-encrypted REFERENCE](https://github.com/elribonazo/pluto-encrypted/blob/master/docs/README.md)


### Open source contributions
As we said, this is a community maintained project, a group of very powerful engineers that came together to improve something. 

Since AtalaPrism removed pluto each developer is like rebuilding the wheele while not being able to work on other more important areas. We think that, it is important to first build a set of simple wrappers:

1. InMemory
2. IndexDB
3. LevelDB

@database is basically the code, where u wrote the queries, etc. The rest are package engines.

In order to contribute, being a typescript mono-repo, its worth expoaining some keys things:

1. Insdtalling with npm from the root is inevitable. If we need to add an esxtra npm package we would do as follows:
npm i fly --save --workspace=@pluto-encrypted/data and that will install fly in workspace environment

2. Running the DEMOS directly from visual studio in 1 click.
From the root folder, without moving to any subdirectory we build the 3 packages.


```
npm i 
npm run build
```

3. Open using debugger tool
* LEVEL DB Electron
* INDEX DB
* LEVEL DB
* INMEMORY
* TEST

Running this from visual studio will let us debug and to straight to the root causes triggering the issues.


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

### IndexDB

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

### LevelDB

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
