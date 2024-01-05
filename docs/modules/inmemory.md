[@pluto-encrypted](../README.md) / [Exports](../modules.md) / inmemory

# Module: inmemory

**`Description`**

This is a RXDB InMemory storage that supports encryption middleware.
In order to use this in your pluto-encrypted database you must write the following code:
Creating a InMemory compatible storage is very simple.

```typescript
import InMemory from "@pluto-encrypted/inmemory";
import { Database } from "@pluto-encrypted/database";
//default password must be 32 bytes long
const defaultPassword = new Uint8Array(32).fill(1);
const database = db = await Database.createEncrypted({
         name: `my-db`,
         encryptionKey: defaultPassword,
         storage: InMemory,
});
```

## Table of contents

### Variables

- [storage](inmemory.md#storage)

## Variables

### storage

• `Const` **storage**: [`RxStorage`](../interfaces/encryption.RxStorage.md)\<`any`, `any`\>

InMemory storage

**`Description`**

Use this as storage in our RXDB database. For now there is no initialisation settings, so you can use it out of the box.

#### Defined in

[packages/inmemory/src/index.ts:61](https://github.com/atala-community-projects/pluto-encrypted/blob/b57641f/packages/inmemory/src/index.ts#L61)
