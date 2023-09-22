import "./setup";

import expect from "expect";
import { Database } from "../src";

const databaseName = "test";
describe("Pluto + Dexie encrypted integration for browsers", () => {
  it("Should be able to instanciate an encrypted IndexDB Database and throw an error if started with wrong password", async () => {
    async function createAndLoad(password: Uint8Array) {
      const db = await Database.createEncrypted(
        databaseName,
        Buffer.from(password)
      );
      const messages = await db.getAllMessages();
      expect(messages.length).toEqual(0);
    }

    const keyData = new Uint8Array(32);
    await createAndLoad(keyData);
    const keyData2 = keyData;
    keyData2[0] = 1;
    keyData2[1] = 2;

    expect(createAndLoad(keyData2)).rejects.toThrowError(
      new Error("Invalid authentication")
    );
  });
});
