import { Domain } from "@input-output-hk/atala-prism-wallet-sdk";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { wrappedKeyEncryptionCryptoJsStorage } from "rxdb/plugins/encryption-crypto-js";
import { createRxDatabase } from "rxdb";
import { RxError } from "rxdb/dist/lib/rx-error";
import { addRxPlugin } from "rxdb";
import { RxDBMigrationPlugin } from "rxdb/plugins/migration";
import { v4 as uuidv4 } from "uuid";

import MessageSchema from "./schemas/Message";
import DIDSchema from "./schemas/DID";
import { KeySpec, PlutoCollections, PlutoDatabase } from "./types";
import CredentialSchema from "./schemas/Credential";
import DIDPairSchema from "./schemas/DIDPair";
import MediatorSchema from "./schemas/Mediator";
import PrivateKeySchema from "./schemas/PrivateKey";

addRxPlugin(RxDBMigrationPlugin);
//New change

export class Database implements Domain.Pluto {
  constructor(private db: PlutoDatabase) {}

  static async createEncrypted(name: string, encryptionKey: Uint8Array) {
    try {
      const myDatabase = await createRxDatabase<PlutoDatabase>({
        ignoreDuplicate: true,
        name: name,
        storage: wrappedKeyEncryptionCryptoJsStorage({
          storage: getRxStorageDexie(),
        }),
        password: Buffer.from(encryptionKey).toString("hex"),
      });
      await myDatabase.addCollections<PlutoCollections>({
        messages: {
          schema: MessageSchema,
        },
        dids: {
          schema: DIDSchema,
        },
        verifiableCredentials: {
          schema: CredentialSchema,
        },
        didpairs: {
          schema: DIDPairSchema,
        },
        mediators: {
          schema: MediatorSchema,
        },
        privateKeys: {
          schema: PrivateKeySchema,
        },
      });
      return new Database(myDatabase);
    } catch (err) {
      if (err instanceof RxError && (err as RxError).code === "DB1") {
        throw new Error("Invalid authentication");
      } else throw err;
    }
  }

  async storeMessage(message: Domain.Message): Promise<void> {
    await this.db.messages.insert(message);
  }

  async storeMessages(messages: Domain.Message[]): Promise<void> {
    await Promise.all(messages.map(this.storeMessage));
  }

  async getAllMessages(): Promise<Domain.Message[]> {
    return this.db.messages.find({}).exec();
  }

  start(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async storePrismDID(
    did: Domain.DID,
    keyPathIndex: number,
    privateKey: Domain.PrivateKey,
    privateKeyMetaId?: string | null,
    alias?: string | undefined
  ): Promise<void> {
    await this.db.dids.insert({
      did: did.toString(),
      method: did.method,
      methodId: did.methodId,
      schema: did.schema,
      alias: alias,
    });

    const initialSpec: KeySpec[] = [
      {
        type: "string",
        name: "raw",
        value: Buffer.from(privateKey.getEncoded()).toString("hex"),
      },
      {
        type: "number",
        name: "index",
        value: `${keyPathIndex}`,
      },
    ];

    const keySpecification = Array.from(privateKey.keySpecification).reduce(
      (all, [key, value]) => {
        all.push({
          type: "string",
          name: key,
          value: `${value}`,
        });
        return all;
      },
      initialSpec
    );

    await this.db.privateKeys.insert({
      id: uuidv4(),
      did: did.toString(),
      type: privateKey.type,
      keySpecification,
    });
  }

  async storePeerDID(
    did: Domain.DID,
    privateKeys: Domain.PrivateKey[]
  ): Promise<void> {
    await this.db.dids.insert({
      did: did.toString(),
      method: did.method,
      methodId: did.methodId,
      schema: did.schema,
    });

    await Promise.all(
      privateKeys.map((prv) =>
        this.db.privateKeys.insert({
          id: uuidv4(),
          did: did.toString(),
          type: prv.type,
          keySpecification: Array.from(prv.keySpecification).reduce(
            (all, [key, value]) => {
              all.push({
                type: "string",
                name: key,
                value: `${value}`,
              });
              return all;
            },
            [
              {
                type: "string",
                name: "raw",
                value: Buffer.from(prv.getEncoded()).toString("hex"),
              },
            ] as KeySpec[]
          ),
        })
      )
    );
  }

  async storeDIDPair(
    host: Domain.DID,
    receiver: Domain.DID,
    name: string
  ): Promise<void> {
    await this.db.didpairs.insert({
      hostDID: host.toString(),
      receiverDID: receiver.toString(),
      name,
    });
  }

  async storePrivateKeys(
    privateKey: Domain.PrivateKey,
    did: Domain.DID,
    keyPathIndex: number,
    metaId: string | null
  ): Promise<void> {
    await this.db.privateKeys.insert({
      id: uuidv4(),
      did: did.toString(),
      type: privateKey.type,
      keySpecification: Array.from(privateKey.keySpecification).reduce(
        (all, [key, value]) => {
          all.push({
            type: "string",
            name: key,
            value: `${value}`,
          });
          return all;
        },
        [
          {
            type: "string",
            name: "raw",
            value: Buffer.from(privateKey.getEncoded()).toString("hex"),
          },
          {
            type: "number",
            name: "index",
            value: `${keyPathIndex}`,
          },
        ] as KeySpec[]
      ),
    });
  }

  async storeMediator(
    mediator: Domain.DID,
    host: Domain.DID,
    routing: Domain.DID
  ): Promise<void> {
    await this.db.mediators.insert({
      id: uuidv4(),
      mediatorDID: mediator.toString(),
      hostDID: host.toString(),
      routingDID: routing.toString(),
    });
  }

  storeCredential(credential: Domain.VerifiableCredential): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getAllPrismDIDs(): Promise<Domain.PrismDIDInfo[]> {
    throw new Error("Method not implemented.");
  }
  getDIDInfoByDID(did: Domain.DID): Promise<Domain.PrismDIDInfo | null> {
    throw new Error("Method not implemented.");
  }
  getDIDInfoByAlias(alias: string): Promise<Domain.PrismDIDInfo[]> {
    throw new Error("Method not implemented.");
  }
  getPrismDIDKeyPathIndex(did: Domain.DID): Promise<number | null> {
    throw new Error("Method not implemented.");
  }
  getPrismLastKeyPathIndex(): Promise<number> {
    throw new Error("Method not implemented.");
  }
  getAllPeerDIDs(): Promise<Domain.PeerDID[]> {
    throw new Error("Method not implemented.");
  }
  getDIDPrivateKeysByDID(did: Domain.DID): Promise<Domain.PrivateKey[]> {
    throw new Error("Method not implemented.");
  }
  getDIDPrivateKeyByID(id: string): Promise<Domain.PrivateKey | null> {
    throw new Error("Method not implemented.");
  }
  async getAllDidPairs(): Promise<Domain.DIDPair[]> {
    const { DID, DIDPair } = Domain;
    const results = await this.db.didpairs.find().exec();
    return results.map(
      ({ hostDID, receiverDID, name }) =>
        new DIDPair(DID.fromString(hostDID), DID.fromString(receiverDID), name)
    );
  }
  async getPairByDID(did: Domain.DID): Promise<Domain.DIDPair | null> {
    const { DID, DIDPair } = Domain;
    const didPair = await this.db.didpairs
      .findOne()
      .where({
        $or: [
          {
            hostDID: did.toString(),
          },
          {
            receiverDID: did.toString(),
          },
        ],
      })
      .exec();
    return didPair
      ? new DIDPair(
          DID.fromString(didPair.hostDID),
          DID.fromString(didPair.receiverDID),
          didPair.name
        )
      : null;
  }
  async getPairByName(name: string): Promise<Domain.DIDPair | null> {
    const { DID, DIDPair } = Domain;
    const didPair = await this.db.didpairs
      .findOne()
      .where({
        $and: [
          {
            name,
          },
        ],
      })
      .exec();
    return didPair
      ? new DIDPair(
          DID.fromString(didPair.hostDID),
          DID.fromString(didPair.receiverDID),
          didPair.name
        )
      : null;
  }
  getAllMessagesByDID(did: Domain.DID): Promise<Domain.Message[]> {
    throw new Error("Method not implemented.");
  }
  getAllMessagesSent(): Promise<Domain.Message[]> {
    throw new Error("Method not implemented.");
  }
  getAllMessagesReceived(): Promise<Domain.Message[]> {
    throw new Error("Method not implemented.");
  }
  getAllMessagesSentTo(did: Domain.DID): Promise<Domain.Message[]> {
    throw new Error("Method not implemented.");
  }
  getAllMessagesReceivedFrom(did: Domain.DID): Promise<Domain.Message[]> {
    throw new Error("Method not implemented.");
  }
  getAllMessagesOfType(
    type: string,
    relatedWithDID?: Domain.DID | undefined
  ): Promise<Domain.Message[]> {
    throw new Error("Method not implemented.");
  }
  getAllMessagesByFromToDID(
    from: Domain.DID,
    to: Domain.DID
  ): Promise<Domain.Message[]> {
    throw new Error("Method not implemented.");
  }
  getMessage(id: string): Promise<Domain.Message | null> {
    throw new Error("Method not implemented.");
  }
  getAllMediators(): Promise<Domain.Mediator[]> {
    throw new Error("Method not implemented.");
  }
  getAllCredentials(): Promise<Domain.VerifiableCredential[]> {
    throw new Error("Method not implemented.");
  }
}
