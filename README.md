# Pluto-encrypted
Pluto Encrypted is a secure storage wrapper for IndexDB and [AtalaPrism ](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/)([Pluto](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/interfaces/Domain.Pluto.html))

This package is compatible with Atala Prism Wallet SDK v2.4.1

### Coverage
| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://raw.githubusercontent.com/elribonazo/pluto-encrypted/master/coverage/badge-statements.svg) | ![Branches](https://raw.githubusercontent.com/elribonazo/pluto-encrypted/master/coverage/badge-branches.svg) | ![Functions](https://raw.githubusercontent.com/elribonazo/pluto-encrypted/master/coverage/badge-functions.svg) | ![Lines](https://raw.githubusercontent.com/elribonazo/pluto-encrypted/master/coverage/badge-lines.svg) |

### Documentation

[SDK Reference](https://github.com/elribonazo/pluto-encrypted/blob/master/modules.md)

## USAGE
To install simply run

```bash
npm i pluto-encrypted --save
```

or with yarn

```bash
yarn add pluto-encrypted
```

## Usage
This package implements Pluto interface and is fully compatible with the Prism Agent (check-compatibility versions), in order to use it just create a database as follows.

DatabaseName is any string.
Password is a 32 bytes buffer.

```typescript
import { Database } from 'pluto-encrypted';
const db = await Database.createEncrypted(
    databaseName,
    password
);
const messages = await db.getAllMessages();
```

If the database is later initialised with the wrong password the "createEncrypted" async function will throw an exception and will not let you decrypt any encrypted content.
