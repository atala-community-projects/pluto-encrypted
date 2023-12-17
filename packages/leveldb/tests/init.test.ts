import "./setup";

import { describe, it, beforeEach, afterEach } from 'vitest';
import path from 'path';

import { createLevelDBStorage } from '../src'

import { Database } from "../../database/src";

const keyData = new Uint8Array(32);

const databaseName = "prism-db";
const databasePath = path.resolve(process.cwd(), databaseName);
const defaultPassword = Buffer.from(keyData);

describe("LevelDb init", () => {
  let db: Database;

  afterEach(async () => {
    // jest.useRealTimers();
    // sandbox.restore();
  });

  beforeEach(async () => {
    // jest.useFakeTimers();
    // sandbox = sinon.createSandbox();
  });

  it('should start up fine', async () => {
    const storage = createLevelDBStorage({
      dbPath: databasePath
    })

    const db = await Database.createEncrypted(
      {
        name: databaseName,
        encryptionKey: defaultPassword,
        storage: storage,
      }
    )
      .catch(err => {
        console.log(err)
        throw err
      });

    // await db.close()
  })
})
