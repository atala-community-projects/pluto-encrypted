import "./setup";

import expect from "expect";
import { Database } from "../src";
import { randomUUID } from "crypto";
import { Apollo, Domain } from "@input-output-hk/atala-prism-wallet-sdk";

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

  it("Should store a new DID and its privateKeys", async () => {
    const db = await Database.createEncrypted(
      `${databaseName}${randomUUID()}`,
      Buffer.from(new Uint8Array(32))
    );
    const did = Domain.DID.fromString(
      "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
    );
    const privateKey = new Apollo().createPrivateKey({
      type: Domain.KeyTypes.EC,
      curve: Domain.Curve.ED25519,
    });
    await db.storePrismDID(did, 0, privateKey);
  });
});
