// import "./setup";

// import { describe, it, beforeEach, afterEach } from 'vitest';
// import path from 'path';

// import { createLevelDBStorage } from '../src'

// import { Database } from "../../database/src";

// const keyData = new Uint8Array(32);

// const databaseName = "prism-db";
// const databasePath = path.resolve(process.cwd(), databaseName);
// const defaultPassword = Buffer.from(keyData);

// describe("LevelDb init", () => {
//   let db: Database;

//   afterEach(async () => {
//     // jest.useRealTimers();
//     // sandbox.restore();
//   });

//   beforeEach(async () => {
//     // jest.useFakeTimers();
//     // sandbox = sinon.createSandbox();
//   });

//   it('should start up fine', async () => {
//     const storage = createLevelDBStorage({
//       dbPath: databasePath
//     })

//     const db = await Database.createEncrypted(
//       {
//         name: databaseName,
//         encryptionKey: defaultPassword,
//         storage: storage,
//       }
//     )
//       .catch(err => {
//         console.log(err)
//         throw err
//       });

//     // await db.close()
//   })

//   it('should be able to instanciate multiple databases in the same thread', async ({ expect }) => {

//     const db = await Database.createEncrypted(
//       {
//         name: databaseName,
//         encryptionKey: defaultPassword,
//         storage: createLevelDBStorage({
//           dbPath: "./db"
//         }),
//       }
//     );

//     await db.storeLinkSecret("first", "first")

//     const db2 = await Database.createEncrypted(
//       {
//         name: databaseName,
//         encryptionKey: defaultPassword,
//         storage: createLevelDBStorage({
//           dbPath: "./db2"
//         }),
//       }
//     );

//     await db2.storeLinkSecret("second", "second")

//     const firstLinkSecret = await db.getLinkSecret();

//     const secondLinkSecret = await db2.getLinkSecret();

//     expect(firstLinkSecret).toBe("first")
//     expect(secondLinkSecret).toBe("second")

//     await db.clear()
//     await db2.clear()



//   })
// })
import { describe, it, vi, beforeEach, afterEach } from 'vitest';

import { runTestSuite } from '@pluto-encrypted/test-suite'
import { createLevelDBStorage } from '../src'

describe("Testing suite", () => {
  runTestSuite({
    describe, it, beforeEach, afterEach
  }, {
    name: 'leveldb',
    getStorage() {
      return createLevelDBStorage({ dbPath: './db' })
    },
    getPerformanceStorage() {
      return {
        storage: createLevelDBStorage({ dbPath: './db' }),
        description: 'any'
      }
    },
    hasPersistence: true,
    hasMultiInstance: false,
    hasAttachments: false,
    async hasEncryption() {
      return 'RandomPassword'
    }
  })
})
