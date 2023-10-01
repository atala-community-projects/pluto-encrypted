import {
  Domain,
  Ed25519PrivateKey,
  KeyProperties,
  Secp256k1PrivateKey,
  X25519PrivateKey,
} from "@input-output-hk/atala-prism-wallet-sdk";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { wrappedKeyEncryptionCryptoJsStorage } from "rxdb/plugins/encryption-crypto-js";
import { MangoQuerySelector, RxCollection, RxDatabase, RxDatabaseCreator, RxDocument, RxJsonSchema, createRxDatabase } from "rxdb";
import { RxError } from "rxdb/dist/lib/rx-error";
import { addRxPlugin } from "rxdb";
import { RxDBMigrationPlugin } from "rxdb/plugins/migration";
import { RxDBQueryBuilderPlugin } from "rxdb/plugins/query-builder";
import { v4 as uuidv4 } from "uuid";


import MessageSchema, { MessageSchemaType } from "./schemas/Message";
import DIDSchema, { DIDSchemaType } from "./schemas/DID";
import CredentialSchema, { CredentialSchemaType } from "./schemas/Credential";
import DIDPairSchema, { DIDPairSchemaType } from "./schemas/DIDPair";
import MediatorSchema, { MediarorSchemaType } from "./schemas/Mediator";
import PrivateKeySchema, { KeySchemaType, KeySpec } from "./schemas/PrivateKey";

addRxPlugin(RxDBMigrationPlugin);
addRxPlugin(RxDBQueryBuilderPlugin);


export * from "./schemas/Message";
export * from './schemas/DID';
export * from './schemas/Credential';
export * from './schemas/DIDPair';
export * from './schemas/Mediator';
export * from './schemas/PrivateKey';

export type PlutoCollections = {
  messages: RxCollection<MessageSchemaType>;
  dids: RxCollection<DIDSchemaType>;
  verifiableCredentials: RxCollection<CredentialSchemaType>;
  didpairs: RxCollection<DIDPairSchemaType>;
  mediators: RxCollection<MediarorSchemaType>;
  privateKeys: RxCollection<KeySchemaType>;
};
export type PlutoDatabase = RxDatabase<PlutoCollections>;

/**
 * Pluto is a storage interface describing storage requirements of the edge agents
 * which will be implemented using this SDK. Implement this interface using your
 * preferred underlying storage technology, most appropriate for your use case.
 *
 */
export class Database implements Domain.Pluto {
  private _db!: PlutoDatabase;
  private get db() {
    if (!this._db) {
      throw new Error("Start Pluto first.");
    }
    return this._db;
  }

  private collections = {
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
  };

  constructor(private dbOptions: RxDatabaseCreator) { }

  static async createEncrypted(name: string, encryptionKey: Uint8Array) {
    return new Database({
      ignoreDuplicate: true,
      name: name,
      storage: wrappedKeyEncryptionCryptoJsStorage({
        storage: getRxStorageDexie(),
      }),
      password: Buffer.from(encryptionKey).toString("hex"),
    });
  }

  async getMessage(id: string): Promise<Domain.Message | null> {
    const message = await this.db.messages.findOne().where({ id: id }).exec()
    if (message) {
      return this.getDomainMessage(message)
    }
    return null;
  }

  async storeMessage(message: Domain.Message): Promise<void> {
    await this.db.messages.insert({
      ...message,
      to: message.to?.toString(),
      from: message.from?.toString()
    });
  }

  async storeMessages(messages: Domain.Message[]): Promise<void> {
    await Promise.all(messages.map((message) => this.storeMessage(message)));
  }

  async getAllMessages(): Promise<Domain.Message[]> {
    const messages = await this.db.messages.find().exec()
    return messages.map((message) => this.getDomainMessage(message))
  }

  async start(): Promise<void> {
    const { dbOptions, collections } = this;
    try {
      const database = await createRxDatabase<PlutoDatabase>(dbOptions);
      await database.addCollections<PlutoCollections>(collections);
      this._db = database;
    } catch (err) {
      if (err instanceof RxError && (err as RxError).code === "DB1") {
        throw new Error("Invalid authentication");
      } else throw err;
    }
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
    await this.storePrivateKeys(
      privateKey,
      did,
      keyPathIndex,
      privateKeyMetaId ?? null
    );
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
            (all, [key, value]) => [
              ...all,
              {
                type: "string",
                name: key,
                value: `${value}`,
              },
            ],
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

  private getPrivateKeyFromDB(
    privateKey: RxDocument<KeySchemaType, {}>
  ): Domain.PrivateKey {
    const { type, keySpecification } = privateKey;
    const curve = keySpecification.find(
      (item) => item.name === KeyProperties.curve
    );
    const raw = keySpecification.find(
      (item) => item.name === KeyProperties.rawKey
    );
    if (!(type in Domain.KeyTypes)) {
      throw new Error(`Invalid KeyType ${type}`);
    }
    if (!curve) {
      throw new Error("Undefined key curve");
    }
    if (!raw) {
      throw new Error("Undefined key raw");
    }

    if (
      curve.value !== Domain.Curve.SECP256K1 &&
      curve.value !== Domain.Curve.ED25519 &&
      curve.value !== Domain.Curve.X25519
    ) {
      throw new Error(`Invalid key curve ${curve.value}`);
    }

    if (type === Domain.KeyTypes.EC) {
      if (curve.value === Domain.Curve.SECP256K1) {
        const index = keySpecification.find(
          (item) => item.name === KeyProperties.index
        );
        const seed = keySpecification.find(
          (item) => item.name === KeyProperties.seed
        );

        const privateKey = new Secp256k1PrivateKey(
          Buffer.from(raw.value, "hex")
        );

        privateKey.keySpecification.set(Domain.KeyProperties.rawKey, raw.value);

        privateKey.keySpecification.set(
          Domain.KeyProperties.curve,
          Domain.Curve.SECP256K1
        );

        if (index) {
          privateKey.keySpecification.set(
            Domain.KeyProperties.index,
            index.value
          );
        }

        if (seed) {
          privateKey.keySpecification.set(
            Domain.KeyProperties.seed,
            seed.value
          );
        }

        return privateKey;
      }

      if (curve.value === Domain.Curve.ED25519) {
        const privateKey = new Ed25519PrivateKey(Buffer.from(raw.value, "hex"));

        privateKey.keySpecification.set(Domain.KeyProperties.rawKey, raw.value);

        privateKey.keySpecification.set(
          Domain.KeyProperties.curve,
          Domain.Curve.SECP256K1
        );

        return privateKey;
      }
    }

    if (type === Domain.KeyTypes.Curve25519) {
      if (curve.value === Domain.Curve.X25519) {
        const privateKey = new X25519PrivateKey(Buffer.from(raw.value, "hex"));

        privateKey.keySpecification.set(Domain.KeyProperties.rawKey, raw.value);

        privateKey.keySpecification.set(
          Domain.KeyProperties.curve,
          Domain.Curve.SECP256K1
        );

        return privateKey;
      }
    }

    throw new Error(`Invalid key${curve.value} ${type}`);
  }

  async getDIDPrivateKeysByDID(did: Domain.DID): Promise<Domain.PrivateKey[]> {
    const privateKeys = await this.db.privateKeys
      .find()
      .where({ did: did.toString() })
      .exec();
    return privateKeys.map(this.getPrivateKeyFromDB);
  }

  async getDIDPrivateKeyByID(id: string): Promise<Domain.PrivateKey | null> {
    const privateKey = await this.db.privateKeys.findOne().where({ id }).exec();
    return privateKey ? this.getPrivateKeyFromDB(privateKey) : null;
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

  async getAllPrismDIDs(): Promise<Domain.PrismDIDInfo[]> {
    const dids = await this.db.dids.find().where({ method: "prism" }).exec();

    const prismDIDInfo: Domain.PrismDIDInfo[] = [];

    for (let did of dids) {
      const didPrivateKeys = await this.getDIDPrivateKeysByDID(
        Domain.DID.fromString(did.did)
      );

      for (let privateKey of didPrivateKeys) {
        const indexProp = privateKey.getProperty(Domain.KeyProperties.index);

        const index = indexProp ? parseInt(indexProp) : undefined;

        prismDIDInfo.push(
          new Domain.PrismDIDInfo(
            Domain.DID.fromString(did.did),
            index,
            did.alias
          )
        );
      }
    }

    return prismDIDInfo;
  }

  async getDIDInfoByDID(did: Domain.DID): Promise<Domain.PrismDIDInfo | null> {
    const didDB = await this.db.dids
      .findOne()
      .where({ did: did.toString() })
      .exec();

    if (didDB) {
      const [privateKey] = await this.getDIDPrivateKeysByDID(
        Domain.DID.fromString(didDB.did)
      );

      if (privateKey) {
        const indexProp = privateKey.getProperty(Domain.KeyProperties.index);
        const index = indexProp ? parseInt(indexProp) : undefined;
        return new Domain.PrismDIDInfo(
          Domain.DID.fromString(didDB.did),
          index,
          didDB.alias
        );
      }
    }

    return null;
  }

  async getDIDInfoByAlias(alias: string): Promise<Domain.PrismDIDInfo[]> {
    const dids = await this.db.dids.find().where({ alias: alias }).exec();
    const prismDIDInfo: Domain.PrismDIDInfo[] = [];
    for (let did of dids) {
      const didPrivateKeys = await this.getDIDPrivateKeysByDID(
        Domain.DID.fromString(did.did)
      );
      for (let privateKey of didPrivateKeys) {
        const indexProp = privateKey.getProperty(Domain.KeyProperties.index);
        const index = indexProp ? parseInt(indexProp) : undefined;
        prismDIDInfo.push(
          new Domain.PrismDIDInfo(
            Domain.DID.fromString(did.did),
            index,
            did.alias
          )
        );
      }
    }
    return prismDIDInfo;
  }


  private getDomainMessage(message: RxDocument<MessageSchemaType, {}>) {
    return Domain.Message.fromJson(JSON.stringify(message.toJSON()))
  }

  async getAllMessagesByDID(did: Domain.DID): Promise<Domain.Message[]> {
    const messages = await this.db.messages.find().where({
      $or: [
        {
          to: did.toString()
        },
        {
          from: did.toString()
        }
      ]
    }).exec()
    return messages.map(message => this.getDomainMessage(message))
  }

  async getAllMessagesSent(): Promise<Domain.Message[]> {
    const messages = await this.db.messages.find().where({
      $or: [
        {
          direction: Domain.MessageDirection.SENT
        }
      ]
    }).exec()
    return messages.map(message => this.getDomainMessage(message))
  }

  async getAllMessagesReceived(): Promise<Domain.Message[]> {
    const messages = await this.db.messages.find().where({
      $or: [
        {
          direction: Domain.MessageDirection.SENT
        }
      ]
    }).exec()
    return messages.map(message => this.getDomainMessage(message))
  }

  async getAllMessagesSentTo(did: Domain.DID): Promise<Domain.Message[]> {
    const messages = await this.db.messages.find().where({
      $or: [
        {
          to: did.toString()
        }
      ]
    }).exec()
    return messages.map(message => this.getDomainMessage(message))
  }

  async getAllMessagesReceivedFrom(did: Domain.DID): Promise<Domain.Message[]> {
    const messages = await this.db.messages.find().where({
      $or: [
        {
          from: did.toString()
        }
      ]
    }).exec()
    return messages.map(message => this.getDomainMessage(message))
  }

  async getAllMessagesOfType(
    type: string,
    relatedWithDID?: Domain.DID | undefined
  ): Promise<Domain.Message[]> {
    const query: MangoQuerySelector<MessageSchemaType>[] = [
      {
        piuri: type
      },
    ];
    if (relatedWithDID) {
      query.push({
        $or: [
          {
            from: relatedWithDID.toString()
          },
          {
            to: relatedWithDID.toString()
          }
        ]
      })
    }
    const messages = await this.db.messages.find().where({
      $and: query
    }).exec()
    return messages.map(message => this.getDomainMessage(message))
  }

  async getAllMessagesByFromToDID(
    from: Domain.DID,
    to: Domain.DID
  ): Promise<Domain.Message[]> {
    const messages = await this.db.messages.find().where({
      $or: [
        {
          from: from.toString()
        },
        {
          to: to.toString()
        }
      ]
    }).exec()
    return messages.map(message => this.getDomainMessage(message))
  }


  getPrismDIDKeyPathIndex(did: Domain.DID): Promise<number | null> {
    throw new Error("Method not implemented.");
  }

  getPrismLastKeyPathIndex(): Promise<number> {
    throw new Error("Method not implemented.");
  }

  storeCredential(credential: Domain.VerifiableCredential): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getAllPeerDIDs(): Promise<Domain.PeerDID[]> {
    throw new Error("Method not implemented.");
  }

  getAllMediators(): Promise<Domain.Mediator[]> {
    throw new Error("Method not implemented.");
  }

  getAllCredentials(): Promise<Domain.VerifiableCredential[]> {
    throw new Error("Method not implemented.");
  }
}
