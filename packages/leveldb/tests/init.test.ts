import "./setup";

import fs from 'fs';

import { describe, it, beforeEach, afterEach } from 'vitest';
import { runTestSuite } from '@pluto-encrypted/test-suite';


import { createLevelDBStorage } from '../src'
import { Database } from "../../database/src";
import { getDefaultCollections } from "@pluto-encrypted/schemas";

const keyData = new Uint8Array(32);

const databaseName = "prism-db";
const defaultPassword = Buffer.from(keyData);

describe("Testing suite", () => {

  it('should be able to instanciate multiple databases in the same thread', async ({ expect }) => {
    if (fs.existsSync("./db1")) {
      fs.rmdirSync("./db1", { recursive: true })
    }
    if (fs.existsSync("./db2")) {
      fs.rmdirSync("./db2", { recursive: true })
    }
    const db = await Database.createEncrypted(
      {
        name: databaseName,
        encryptionKey: defaultPassword,
        storage: createLevelDBStorage({
          dbPath: "./db1"
        }),
        collections: getDefaultCollections()
      }
    );

    await db.storeLinkSecret("first", "first")

    const db2 = await Database.createEncrypted(
      {
        name: databaseName,
        encryptionKey: defaultPassword,
        storage: createLevelDBStorage({
          dbPath: "./db2"
        }),
        collections: getDefaultCollections()
      }
    );

    await db2.storeLinkSecret("second", "second")

    const firstLinkSecret = await db.getLinkSecret();

    const secondLinkSecret = await db2.getLinkSecret();

    expect(firstLinkSecret).toBe("first")
    expect(secondLinkSecret).toBe("second")

    await db.clear()
    await db2.clear()


    if (fs.existsSync("./db1")) {
      fs.rmdirSync("./db1", { recursive: true })
    }
    if (fs.existsSync("./db2")) {
      fs.rmdirSync("./db2", { recursive: true })
    }
  })

  describe("Level with dbPath", () => {
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
      hasBooleanIndexSupport: true,
      async hasEncryption() {
        return 'RandomPassword'
      }
    })
  })
})
