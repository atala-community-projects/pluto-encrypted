import { Domain } from "@input-output-hk/atala-prism-wallet-sdk";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { wrappedKeyEncryptionCryptoJsStorage } from "rxdb/plugins/encryption-crypto-js";
import {
  MangoQuerySelector,
  RxCollection,
  RxDatabase,
  RxDatabaseCreator,
  RxDumpDatabase,
  createRxDatabase,
} from "rxdb";
import { RxError } from "rxdb";
import { addRxPlugin } from "rxdb";
import { RxDBMigrationPlugin } from "rxdb/plugins/migration";
import { RxDBQueryBuilderPlugin } from "rxdb/plugins/query-builder";
import { v4 as uuidv4 } from "uuid";
import { RxDBJsonDumpPlugin } from "rxdb/plugins/json-dump";
import MessageSchema, {
  MessageColletion,
  MessageMethods,
  MessageSchemaType,
} from "./schemas/Message";
import DIDSchema, { DIDSchemaType } from "./schemas/DID";
import CredentialSchema, {
  CredentialCollection,
  CredentialMethods,
  CredentialSchemaType,
  CredentialSubjectType,
} from "./schemas/Credential";
import DIDPairSchema, { DIDPairSchemaType } from "./schemas/DIDPair";
import MediatorSchema, {
  MediatorCollection,
  MediatorMethods,
} from "./schemas/Mediator";
import PrivateKeySchema, {
  KeySpec,
  PrivateKeyColletion,
  PrivateKeyDocument,
  PrivateKeyMethods,
} from "./schemas/PrivateKey";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";

addRxPlugin(RxDBMigrationPlugin);
addRxPlugin(RxDBQueryBuilderPlugin);
//addRxPlugin(RxDBDevModePlugin);
addRxPlugin(RxDBJsonDumpPlugin);

export * from "./schemas/Message";
export * from "./schemas/DID";
export * from "./schemas/Credential";
export * from "./schemas/DIDPair";
export * from "./schemas/Mediator";
export * from "./schemas/PrivateKey";

export type PlutoCollections = {
  messages: MessageColletion;
  dids: RxCollection<DIDSchemaType>;
  didpairs: RxCollection<DIDPairSchemaType>;
  mediators: MediatorCollection;
  privatekeys: PrivateKeyColletion;
  verifiablecredentials: CredentialCollection;
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

  constructor(private dbOptions: RxDatabaseCreator) {}

  async backup() {
    return this.db.exportJSON();
  }

  async import(importData: RxDumpDatabase<PlutoCollections>) {
    await this.db.importJSON(importData);
  }

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
    const message = await this.db.messages.findOne().where({ id: id }).exec();
    if (message) {
      return message.toDomainMessage();
    }
    return null;
  }

  async storeMessage(message: Domain.Message): Promise<void> {
    const existing = await this.db.messages
      .findOne()
      .where({ id: message.id })
      .exec();

    if (existing) {
      await existing.patch({
        ...message,
        to: message.to?.toString(),
        from: message.from?.toString(),
      });
    } else {
      await this.db.messages.insert({
        ...message,
        to: message.to?.toString(),
        from: message.from?.toString(),
      });
    }
  }

  async storeMessages(messages: Domain.Message[]): Promise<void> {
    await Promise.all(messages.map((message) => this.storeMessage(message)));
  }

  async getAllMessages(): Promise<Domain.Message[]> {
    const messages = await this.db.messages.find().exec();
    return messages.map((message) => message.toDomainMessage());
  }

  async start(): Promise<void> {
    const { dbOptions } = this;
    try {
      const database = await createRxDatabase<PlutoDatabase>(dbOptions);
      await database.addCollections<PlutoCollections>({
        messages: {
          schema: MessageSchema,
          methods: MessageMethods,
        },
        dids: {
          schema: DIDSchema,
        },
        didpairs: {
          schema: DIDPairSchema,
        },
        mediators: {
          schema: MediatorSchema,
          methods: MediatorMethods,
        },
        privatekeys: {
          schema: PrivateKeySchema,
          methods: PrivateKeyMethods,
        },
        verifiablecredentials: {
          schema: CredentialSchema,
          methods: CredentialMethods,
        },
      });
      this._db = database;
    } catch (err) {
      /* istanbul ignore else */
      if ((err as RxError).code === "DB1") {
        throw new Error("Invalid authentication");
        /* istanbul ignore next */
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
        this.db.privatekeys.insert({
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
    metaId?: string | null
  ): Promise<void> {
    await this.db.privatekeys.insert({
      id: uuidv4(),
      did: did.toString(),
      type: privateKey.type,
      keySpecification: Array.from(privateKey.keySpecification).reduce(
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
    privateKey: PrivateKeyDocument
  ): Domain.PrivateKey {
    return privateKey.toDomainPrivateKey();
  }

  async getDIDPrivateKeysByDID(did: Domain.DID): Promise<Domain.PrivateKey[]> {
    const privateKeys = await this.db.privatekeys
      .find()
      .where({ did: did.toString() })
      .exec();
    return privateKeys.map(this.getPrivateKeyFromDB);
  }

  async getDIDPrivateKeyByID(id: string): Promise<Domain.PrivateKey | null> {
    const privateKey = await this.db.privatekeys.findOne().where({ id }).exec();
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
        const indexProp = privateKey.getProperty(Domain.KeyProperties.index)!;

        prismDIDInfo.push(
          new Domain.PrismDIDInfo(
            Domain.DID.fromString(did.did),
            parseInt(indexProp),
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
      const privateKeys = await this.getDIDPrivateKeysByDID(
        Domain.DID.fromString(didDB.did)
      );
      /* istanbul ignore if */
      if (!privateKeys.length) {
        throw new Error(
          "Imposible to recover PrismDIDInfo without its privateKey data."
        );
      }
      const indexProp = privateKeys
        .at(0)!
        .getProperty(Domain.KeyProperties.index);
      const index = indexProp ? parseInt(indexProp) : undefined;
      return new Domain.PrismDIDInfo(
        Domain.DID.fromString(didDB.did),
        index,
        didDB.alias
      );
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
        const indexProp = privateKey.getProperty(Domain.KeyProperties.index)!;
        prismDIDInfo.push(
          new Domain.PrismDIDInfo(
            Domain.DID.fromString(did.did),
            parseInt(indexProp),
            did.alias
          )
        );
      }
    }
    return prismDIDInfo;
  }

  async getAllMessagesByDID(did: Domain.DID): Promise<Domain.Message[]> {
    const messages = await this.db.messages
      .find()
      .where({
        $or: [
          {
            to: did.toString(),
          },
          {
            from: did.toString(),
          },
        ],
      })
      .exec();
    return messages.map((message) => message.toDomainMessage());
  }

  async getAllMessagesSent(): Promise<Domain.Message[]> {
    const messages = await this.db.messages
      .find()
      .where({
        $or: [
          {
            direction: Domain.MessageDirection.SENT,
          },
        ],
      })
      .exec();
    return messages.map((message) => message.toDomainMessage());
  }

  async getAllMessagesReceived(): Promise<Domain.Message[]> {
    const messages = await this.db.messages
      .find()
      .where({
        $or: [
          {
            direction: Domain.MessageDirection.RECEIVED,
          },
        ],
      })
      .exec();
    return messages.map((message) => message.toDomainMessage());
  }

  async getAllMessagesSentTo(did: Domain.DID): Promise<Domain.Message[]> {
    const messages = await this.db.messages
      .find()
      .where({
        $and: [
          {
            to: did.toString(),
          },
          {
            direction: Domain.MessageDirection.SENT,
          },
        ],
      })
      .exec();
    return messages.map((message) => message.toDomainMessage());
  }

  async getAllMessagesReceivedFrom(did: Domain.DID): Promise<Domain.Message[]> {
    const messages = await this.db.messages
      .find()
      .where({
        $and: [
          {
            from: did.toString(),
          },
          {
            direction: Domain.MessageDirection.RECEIVED,
          },
        ],
      })
      .exec();
    return messages.map((message) => message.toDomainMessage());
  }

  async getAllMessagesOfType(
    type: string,
    relatedWithDID?: Domain.DID | undefined
  ): Promise<Domain.Message[]> {
    const query: MangoQuerySelector<MessageSchemaType>[] = [
      {
        piuri: type,
      },
    ];
    if (relatedWithDID) {
      query.push({
        $or: [
          {
            from: relatedWithDID.toString(),
          },
          {
            to: relatedWithDID.toString(),
          },
        ],
      });
    }
    const messages = await this.db.messages
      .find()
      .where({
        $and: query,
      })
      .exec();
    return messages.map((message) => message.toDomainMessage());
  }

  async getAllMessagesByFromToDID(
    from: Domain.DID,
    to: Domain.DID
  ): Promise<Domain.Message[]> {
    const messages = await this.db.messages
      .find()
      .where({
        $or: [
          {
            from: from.toString(),
          },
          {
            to: to.toString(),
          },
        ],
      })
      .exec();
    return messages.map((message) => message.toDomainMessage());
  }

  async getPrismDIDKeyPathIndex(did: Domain.DID): Promise<number | null> {
    const [key] = await this.getDIDPrivateKeysByDID(did);
    if (!key) {
      return null;
    }
    return parseInt(key.index);
  }

  async getPrismLastKeyPathIndex(): Promise<number> {
    const results = await this.getAllPrismDIDs();
    if (results.length === 0) {
      return 0;
    }
    return Math.max(...results.map((result) => result.keyPathIndex));
  }

  async getAllPeerDIDs(): Promise<Domain.PeerDID[]> {
    const peerDIDs: Domain.PeerDID[] = [];
    const dids = await this.db.dids.find().where({ method: "peer" }).exec();
    for (let did of dids) {
      const peerDID = Domain.DID.fromString(did.did);
      const keys = await this.getDIDPrivateKeysByDID(peerDID);
      peerDIDs.push(
        new Domain.PeerDID(
          peerDID,
          keys.map((key) => ({
            keyCurve: {
              curve: key.curve as any,
            },
            value: key.raw,
          }))
        )
      );
    }
    return peerDIDs;
  }

  private parseCredentialSubject(credentialSubject: {
    [name: string]: any;
  }): CredentialSubjectType[] {
    return Object.keys(credentialSubject).reduce<CredentialSubjectType[]>(
      (all, key) => {
        const value = credentialSubject[key];
        all.push({
          type: "string",
          value: value,
          name: key,
        });
        return all;
      },
      []
    );
  }

  async storeCredential(
    credential: Domain.VerifiableCredential
  ): Promise<void> {
    await this.db.verifiablecredentials.insert({
      id: credential.id,
      credentialType: credential.credentialType,
      context: credential.context,
      type: credential.type,
      credentialSchema: credential.credentialSchema,
      credentialSubject: this.parseCredentialSubject(
        credential.credentialSubject
      ),
      credentialStatus: credential.credentialStatus,
      refreshService: credential.refreshService,
      evidence: credential.evidence,
      subject: credential.subject ? credential.subject.toString() : undefined,
      termsOfUse: credential.termsOfUse,
      issuer: credential.issuer.toString(),
      issuanceDate: credential.issuanceDate,
      expirationDate: credential.expirationDate,
      validFrom: credential.validFrom,
      validUntil: credential.validUntil,
      proof: credential.proof,
      aud: credential.aud,
    });
  }

  async getAllMediators(): Promise<Domain.Mediator[]> {
    return (await this.db.mediators.find().exec()).map((mediator) =>
      mediator.toDomainMediator()
    );
  }

  async getAllCredentials(): Promise<Domain.VerifiableCredential[]> {
    return (await this.db.verifiablecredentials.find().exec()).map(
      (verifiableCredential) => verifiableCredential.toDomainCredential()
    );
  }
}
