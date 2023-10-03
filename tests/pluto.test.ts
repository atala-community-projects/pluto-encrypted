import "./setup";

import expect from "expect";
import { Database, PrivateKeyMethods } from "../src";
import { randomUUID } from "crypto";
import { Domain } from "@input-output-hk/atala-prism-wallet-sdk";
import * as Fixtures from "./fixtures";
import * as sinon from "sinon";

const databaseName = "prism-db";
const keyData = new Uint8Array(32);

const messageType = "https://didcomm.org/basicmessage/2.0/message";
const createMessage = (
  from?: Domain.DID,
  to?: Domain.DID,
  direction: Domain.MessageDirection = Domain.MessageDirection.SENT
) => {
  const message = new Domain.Message(
    "{}",
    randomUUID(),
    messageType,
    from,
    to,
    [],
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    direction
  );
  return message;
};
const defaultPassword = Buffer.from(keyData);

let sandbox: sinon.SinonSandbox;

describe("Pluto + Dexie encrypted integration for browsers", () => {
  afterEach(async () => {
    jest.useRealTimers();
    sandbox.restore();
  });

  beforeEach(async () => {
    jest.useFakeTimers();
    sandbox = sinon.createSandbox();
  });

  it("Should require to start pluto database before using it", async () => {
    const db = await Database.createEncrypted(databaseName, defaultPassword);
    expect(db.getAllMessages()).rejects.toThrowError(
      new Error("Start Pluto first.")
    );
  });

  it("Should be able to instanciate an encrypted IndexDB Database and throw an error if started with wrong password", async () => {
    async function createAndLoad(password: Uint8Array) {
      const db = await Database.createEncrypted(
        databaseName,
        Buffer.from(password)
      );
      await db.start();
      const messages = await db.getAllMessages();
      expect(messages.length).toEqual(0);
    }

    await createAndLoad(keyData);

    const keyData2 = keyData;
    keyData2[0] = 1;
    keyData2[1] = 2;

    expect(createAndLoad(keyData2)).rejects.toThrowError(
      new Error("Invalid authentication")
    );
  });

  describe("Pluto Unit testing", () => {
    let db: Database;

    beforeEach(async () => {
      db = await Database.createEncrypted(
        `${databaseName}${randomUUID()}`,
        defaultPassword
      );
      await db.start();
    });

    it("Should store a new Prism DID and its privateKeys", async () => {
      const did = Domain.DID.fromString(
        "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
      );
      const privateKey = Fixtures.secp256K1.privateKey;
      await db.storePrismDID(did, 0, privateKey);
      expect((await db.getAllPrismDIDs()).length).toBe(1);
      expect(await db.getDIDInfoByDID(did)).not.toBe(null);
    });

    it("Should throw an exception if a wrong key object from Database is loaded", async () => {
      const wrongKey: any = {
        keySpecification: [],
        toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
      };
      expect(() => {
        wrongKey.toDomainPrivateKey();
      }).toThrowError(new Error(`Invalid KeyType undefined`));

      const wrongKey2: any = {
        type: "sds",
        keySpecification: [],
        toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
      };
      expect(() => {
        wrongKey2.toDomainPrivateKey();
      }).toThrowError(new Error(`Invalid KeyType sds`));

      const wrongKey3: any = {
        type: Domain.KeyTypes.Curve25519,
        keySpecification: [],
        toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
      };
      expect(() => {
        wrongKey3.toDomainPrivateKey();
      }).toThrowError(new Error("Undefined key curve"));

      const wrongKey4: any = {
        type: Domain.KeyTypes.Curve25519,
        keySpecification: [
          {
            name: Domain.KeyProperties.curve,
            type: "string",
            value: "asd",
          },
        ],
        toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
      };
      expect(() => {
        wrongKey4.toDomainPrivateKey();
      }).toThrowError(new Error("Invalid key curve asd"));

      const wrongKey5: any = {
        type: Domain.KeyTypes.Curve25519,
        keySpecification: [
          {
            name: Domain.KeyProperties.curve,
            type: "string",
            value: Domain.Curve.ED25519,
          },
        ],
        toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
      };
      expect(() => {
        wrongKey5.toDomainPrivateKey();
      }).toThrowError(new Error("Undefined key raw"));

      const correctKey: any = {
        type: Domain.KeyTypes.EC,
        keySpecification: [
          {
            name: Domain.KeyProperties.curve,
            type: "string",
            value: Domain.Curve.SECP256K1,
          },
          {
            name: Domain.KeyProperties.rawKey,
            type: "string",
            value: Buffer.from(Fixtures.secp256K1.privateKey.raw).toString(
              "hex"
            ),
          },
        ],
        toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
      };

      correctKey.toDomainPrivateKey();

      const correctKeyWithIndex: any = {
        type: Domain.KeyTypes.EC,
        keySpecification: [
          {
            name: Domain.KeyProperties.curve,
            type: "string",
            value: Domain.Curve.SECP256K1,
          },
          {
            name: Domain.KeyProperties.rawKey,
            type: "string",
            value: Buffer.from(Fixtures.secp256K1.privateKey.raw).toString(
              "hex"
            ),
          },
          {
            name: Domain.KeyProperties.index,
            type: "string",
            value: Fixtures.secp256K1.privateKey.index,
          },
          {
            name: Domain.KeyProperties.seed,
            type: "string",
            value: "A12456",
          },
        ],
        toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
      };

      correctKeyWithIndex.toDomainPrivateKey();

      const correctEd25519Key: any = {
        type: Domain.KeyTypes.EC,
        keySpecification: [
          {
            name: Domain.KeyProperties.curve,
            type: "string",
            value: Domain.Curve.ED25519,
          },
          {
            name: Domain.KeyProperties.rawKey,
            type: "string",
            value: Buffer.from(Fixtures.ed25519.privateKey.raw).toString("hex"),
          },
        ],
        toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
      };

      correctEd25519Key.toDomainPrivateKey();

      const correctX25519Key: any = {
        type: Domain.KeyTypes.Curve25519,
        keySpecification: [
          {
            name: Domain.KeyProperties.curve,
            type: "string",
            value: Domain.Curve.X25519,
          },
          {
            name: Domain.KeyProperties.rawKey,
            type: "string",
            value: Buffer.from(Fixtures.x25519.privateKey.raw).toString("hex"),
          },
        ],
        toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
      };

      correctX25519Key.toDomainPrivateKey();
    });

    it("Should return null when no privateKey is found by its id", async () => {
      const did = Domain.DID.fromString(
        "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
      );
      expect(await db.getDIDInfoByDID(did)).toBe(null);
    });

    it("Should return null when no privateKey is found by its id", async () => {
      expect(await db.getDIDPrivateKeyByID("not fund")).toBe(null);
    });

    it("Should return null when no privateKey is found by its did", async () => {
      const did = Domain.DID.fromString(
        "did:prism::t8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
      );
      expect((await db.getDIDPrivateKeysByDID(did)).length).toBe(0);
    });

    it("Should store a new Prism DID and its privateKeys with privateKeyMetadataId", async () => {
      const did = Domain.DID.fromString(
        "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
      );
      const privateKey = Fixtures.secp256K1.privateKey;
      await db.storePrismDID(did, 0, privateKey, did.toString());
      expect((await db.getAllPrismDIDs()).length).toBe(1);
    });

    it("Should store a new Prism DID and its privateKeys with privateKeyMetadataId and alias", async () => {
      const did = Domain.DID.fromString(
        "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
      );
      const privateKey = Fixtures.secp256K1.privateKey;
      await db.storePrismDID(
        did,
        0,
        privateKey,
        did.toString(),
        "defaultalias"
      );
      expect((await db.getAllPrismDIDs()).length).toBe(1);
    });

    it("Should store a new Prism DID and its privateKeys and fetch it by its alias", async () => {
      const did = Domain.DID.fromString(
        "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
      );
      const alias = "default";
      const privateKey = Fixtures.secp256K1.privateKey;
      await db.storePrismDID(did, 0, privateKey, null, alias);
      expect((await db.getDIDInfoByAlias(alias)).length).toBe(1);
    });

    it("Should store a Message and fetch it", async () => {
      const message = createMessage();
      await db.storeMessage(message);
      const dbMesaage = await db.getMessage(message.id);
      expect(dbMesaage).not.toBe(null);
      expect(dbMesaage!.id).toBe(message.id);
    });

    it("Should get all the messages", async () => {
      const allMessages = await db.getAllMessages();
      expect(allMessages.length).toBe(0);
    });

    it("Should fetch stored messages either by type or by did", async () => {
      const from = Domain.DID.fromString("did:prism:123456");
      const to = Domain.DID.fromString("did:prism:654321");
      const from2 = Domain.DID.fromString("did:prism:12345644");
      const to2 = Domain.DID.fromString("did:prism:65432133");

      await db.storeMessages([
        createMessage(from, to, Domain.MessageDirection.RECEIVED),
        createMessage(from2, to2, Domain.MessageDirection.SENT),
      ]);

      const byType = await db.getAllMessagesOfType(messageType);
      expect(byType.length).toBe(2);

      const byType2 = await db.getAllMessagesOfType(messageType, from);
      expect(byType2.length).toBe(1);

      const byType4 = await db.getAllMessagesSent();
      expect(byType4.length).toBe(1);

      const byType5 = await db.getAllMessagesReceived();
      expect(byType5.length).toBe(1);

      const byType6 = await db.getAllMessagesSentTo(to2);
      expect(byType6.length).toBe(1);

      const byType7 = await db.getAllMessagesReceivedFrom(from);
      expect(byType7.length).toBe(1);

      const byType8 = await db.getAllMessagesByFromToDID(from, to);
      expect(byType8.length).toBe(1);

      const byType9 = await db.getAllMessagesByDID(from);
      expect(byType9.length).toBe(1);

      const byType10 = await db.getAllMessages();
      expect(byType10.length).toBe(2);
    });

    it("Should return null if message is not found by id ", async () => {
      const dbMesaage = await db.getMessage("notfound");
      expect(dbMesaage).toBe(null);
    });

    it("Should store multiple messages", async () => {
      await db.storeMessages([createMessage(), createMessage()]);
    });

    it("Should store a peerDID", async () => {
      const did = new Domain.DID(
        "did",
        "peer",
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      );
      await db.storePeerDID(did, [
        Fixtures.ed25519.privateKey,
        Fixtures.x25519.privateKey,
      ]);
    });

    it("Should store a didPair", async () => {
      const host = Domain.DID.fromString("did:prism:123456");
      const receiver = Domain.DID.fromString("did:prism:654321");
      const name = "example";
      await db.storeDIDPair(host, receiver, name);
    });

    it("Should get all the didPairs", async () => {
      const host = Domain.DID.fromString("did:prism:123456");
      const receiver = Domain.DID.fromString("did:prism:654321");
      const name = "example";
      expect((await db.getAllDidPairs()).length).toBe(0);
      await db.storeDIDPair(host, receiver, name);
      expect((await db.getAllDidPairs()).length).toBe(1);
    });

    it("Should get a did pair by its did", async () => {
      const host = Domain.DID.fromString("did:prism:123456");
      const receiver = Domain.DID.fromString("did:prism:654321");
      const notfound = Domain.DID.fromString("did:prism:65432155555");

      const name = "example";
      await db.storeDIDPair(host, receiver, name);
      expect(await db.getPairByDID(host)).not.toBe(null);
      expect(await db.getPairByDID(notfound)).toBe(null);
    });

    it("Should get a did pair by its name", async () => {
      const host = Domain.DID.fromString("did:prism:123456");
      const receiver = Domain.DID.fromString("did:prism:654321");
      const name = "example";
      await db.storeDIDPair(host, receiver, name);
      expect(await db.getPairByName(name)).not.toBe(null);
      expect(await db.getPairByName(" ")).toBe(null);
    });

    it("Should store a mediator", async () => {
      const host = Domain.DID.fromString("did:prism:333333");
      const mediator = Domain.DID.fromString("did:prism:444444");
      const routing = Domain.DID.fromString("did:prism:555555");
      await db.storeMediator(mediator, host, routing);
    });

    it("Should throw an error when an incomplete did is loaded from db", async () => {
      const did = Domain.DID.fromString("did:prism:65432133");

      await (db as any).db.dids.insert({
        did: did.toString(),
        method: did.method,
        methodId: did.methodId,
        schema: did.schema,
      });
      expect(db.getDIDInfoByDID(did)).rejects.toThrowError(
        "Imposible to recover PrismDIDInfo without its privateKey data."
      );
    });
  });
});
