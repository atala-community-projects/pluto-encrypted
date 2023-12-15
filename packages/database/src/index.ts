import { Domain } from "@atala/prism-wallet-sdk";
import {
  MangoQuerySelector,
  RxCollection,
  RxCollectionBase,
  RxCollectionCreator,
  RxDatabase,
  RxDatabaseCreator,
  RxDumpDatabase,
  RxQuery,
  RxStorage,
  createRxDatabase,
  flatClone,
  getFromMapOrThrow,
  removeRxDatabase
} from "rxdb";
import { RxError } from "rxdb";
import { addRxPlugin } from "rxdb";
import { RxDBMigrationPlugin } from "rxdb/plugins/migration";
import { RxDBQueryBuilderPlugin } from "rxdb/plugins/query-builder";
import { v4 as uuidv4 } from "uuid";
import { RxDBJsonDumpPlugin } from "rxdb/plugins/json-dump";
import MessageSchema, {
  MessageColletion,
  MessageDocument,
  MessageMethods,
  MessageSchemaType,
} from "./schemas/Message";
import DIDSchema, { DIDCollection, DIDDocument, DIDSchemaType } from "./schemas/DID";
import CredentialSchema, {
  CredentialCollection,
  CredentialDocument,
  CredentialMethods,
  CredentialSchemaType,
} from "./schemas/Credential";
import DIDPairSchema, { DIDPairCollection, DIDPairDocument, DIDPairSchemaType } from "./schemas/DIDPair";
import MediatorSchema, {
  MediatorCollection,
  MediatorDocument,
  MediatorMethods,
  MediatorSchemaType,
} from "./schemas/Mediator";
import PrivateKeySchema, {
  KeySchemaType,
  KeySpec,
  PrivateKeyColletion,
  PrivateKeyDocument,
  PrivateKeyMethods,
} from "./schemas/PrivateKey";
import LinkSecretSchema, {
  LinkSecretColletion,
  LinkSecretDocument,
  LinkSecretMethods,
  LinkSecretSchemaType,
} from "./schemas/LinkSecret";
import CredentialRequestMetadataSchema, {
  CredentialRequestMetadataCollection,
  CredentialRequestMetadataDocument,
  CredentialRequestMetadataMethods,
  CredentialRequestMetadataSchemaType,
} from "./schemas/CredentialRequestMetadata";
import { GenericORMType } from "./types";
import { BulkWriteRow, MangoQuerySelectorAndIndex, RxDocument, RxDocumentData } from "rxdb/dist/types/types";

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

export type ValuesOf<T> = T[keyof T];

export type PlutoCollections = {
  messages: MessageColletion;
  dids: DIDCollection;
  didpairs: DIDPairCollection;
  mediators: MediatorCollection;
  privatekeys: PrivateKeyColletion;
  credentials: CredentialCollection;
  credentialrequestmetadatas: CredentialRequestMetadataCollection;
  linksecrets: LinkSecretColletion;
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

  public collections!: {
    messages: RxCollection<MessageSchemaType, GenericORMType<MessageDocument>>;
    dids: RxCollection<DIDSchemaType, GenericORMType<DIDDocument>>;
    didpairs: RxCollection<DIDPairSchemaType, GenericORMType<DIDPairDocument>>;
    mediators: RxCollection<MediatorSchemaType, GenericORMType<MediatorDocument>>;
    privatekeys: RxCollection<KeySchemaType, GenericORMType<PrivateKeyDocument>>;
    credentials: RxCollection<CredentialSchemaType, GenericORMType<CredentialDocument>>;
    credentialrequestmetadatas: RxCollection<CredentialRequestMetadataSchemaType, GenericORMType<CredentialRequestMetadataDocument>>;
    linksecrets: RxCollection<LinkSecretSchemaType, GenericORMType<LinkSecretDocument>>;
  }

  get db() {
    if (!this._db) {
      throw new Error("Start Pluto first.");
    }
    return this._db;
  }

  constructor(private dbOptions: RxDatabaseCreator) { }

  async backup() {
    return this.db.exportJSON();
  }

  /**
   * test content
   */
  get credentialrequestmetadatas() {
    return this._db.collections.credentialrequestmetadatas
  }

  get linksecrets() {
    return this._db.collections.linksecrets
  }

  get didpairs() {
    return this._db.collections.didpairs
  }

  get credentials() {
    return this._db.collections.credentials
  }

  get mediators() {
    return this._db.collections.mediators
  }


  get dids() {
    return this._db.collections.dids
  }

  get privatekeys() {
    return this._db.collections.privatekeys
  }

  get messages() {
    return this._db.collections.messages
  }

  async clear() {
    const storages = Array.from(this.db.storageInstances.values())
    for (let storage of storages) {
      await storage.cleanup(0)
    }
    await removeRxDatabase(this.dbOptions.name, this.db.storage);
  }

  static async createEncrypted(
    options: {
      name: string,
      encryptionKey: Uint8Array,
      importData?: RxDumpDatabase<PlutoCollections>,
      storage: RxStorage<any, any>
    }
  ) {
    const { name, storage, encryptionKey, importData } = options;
    if (!storage) {
      throw new Error("Please provide a valid storage.");
    }
    const database = new Database({
      ignoreDuplicate: true,
      name: name,
      storage: storage,
      password: Buffer.from(encryptionKey).toString(),
    });

    await database.start()

    if (importData) {
      await database.db.importJSON(importData);
    }

    return database;
  }

  async getMessage(id: string): Promise<Domain.Message | null> {
    const message = await this.db.messages.findOne({
      selector: {
        id: {
          $eq: id
        }
      }
    });
    if (message) {
      return message.toDomainMessage();
    }
    return null;
  }

  async storeMessage(message: Domain.Message): Promise<void> {
    const existing = await this.db.messages
      .findOne({
        selector: {
          id: {
            $eq: message.id
          }
        }
      });
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
    for (let message of messages) {
      await this.storeMessage(message)
    }
  }

  async getAllMessages(): Promise<Domain.Message[]> {
    const messages = await this.db.messages.find();
    return messages.map((message) => message.toDomainMessage());
  }

  private applyORMStatics(collectionObj: RxCollectionCreator<any>) {
    return collectionObj
  }


  async start(): Promise<void> {
    const { dbOptions } = this;
    try {
      const database = await createRxDatabase<PlutoDatabase>({
        ...dbOptions,
        multiInstance: false
      });
      await database.addCollections<PlutoCollections>({
        messages: this.applyORMStatics({
          schema: MessageSchema,
          methods: MessageMethods,
        }),
        dids: this.applyORMStatics({
          schema: DIDSchema,
        }),
        didpairs: this.applyORMStatics({
          schema: DIDPairSchema,
        }),
        mediators: this.applyORMStatics({
          schema: MediatorSchema,
          methods: MediatorMethods,
        }),
        privatekeys: this.applyORMStatics({
          schema: PrivateKeySchema,
          methods: PrivateKeyMethods,
        }),
        credentials: this.applyORMStatics({
          schema: CredentialSchema,
          methods: CredentialMethods,
        }),
        credentialrequestmetadatas: this.applyORMStatics({
          schema: CredentialRequestMetadataSchema,
          methods: CredentialRequestMetadataMethods,
        }),
        linksecrets: this.applyORMStatics({
          schema: LinkSecretSchema,
          methods: LinkSecretMethods,
        }),
      });
      this._db = database;

      const execOrmNames = ['count', 'findByIds', 'find', 'findOne', "remove"];
      for (let ormNme of execOrmNames) {
        for (let collectionName in this.db.collections) {
          const collection: ValuesOf<PlutoCollections> = this.db.collections[collectionName]
          const originalOrmMethod = collection[ormNme]

          collection[ormNme] = new Proxy(originalOrmMethod, {
            async apply(target, thisArg, args) {

              if (target.name === ormNme) {
                if (ormNme === "remove") {
                  const rxDocumentArray = await collection.find(...args)
                  const docsData: RxDocumentData<any>[] = [];
                  const docsMap: Map<string, RxDocumentData<any>> = new Map();
                  rxDocumentArray.forEach(rxDocument => {
                    const data: RxDocumentData<any> = rxDocument.toMutableJSON(true) as any;
                    docsData.push(data);
                    docsMap.set(rxDocument.primary, data);
                  });

                  await Promise.all(
                    docsData.map(doc => {
                      const primary = (doc as any)[collection.schema.primaryPath];
                      const rxDocument = rxDocumentArray.find((doc) => doc[collection.schema.primaryPath] === primary)
                      return collection._runHooks('pre', 'remove', doc, rxDocument);
                    })
                  );

                  const removeDocs: BulkWriteRow<any>[] = docsData.map(doc => {
                    const writeDoc = flatClone(doc);
                    writeDoc._deleted = true;
                    return {
                      previous: doc,
                      document: writeDoc
                    };
                  });

                  const results = await collection.storageInstance.bulkWrite(
                    removeDocs,
                    'rx-collection-bulk-remove'
                  );

                  const successIds: string[] = Object.keys(results.success);

                  await Promise.all(
                    successIds.map(id => {
                      return collection._runHooks(
                        'post',
                        'remove',
                        docsMap.get(id),
                        rxDocumentArray.find((doc) => doc[collection.schema.primaryPath] === id)
                      );
                    })
                  );

                  const rxDocumentMap = rxDocumentArray.reduce((map, doc) => {
                    const primary = (doc as any)[collection.schema.primaryPath];
                    map.set(primary, doc);
                    return map
                  }, new Map<string, RxDocument<any>>());

                  const rxDocuments = successIds.map(id => getFromMapOrThrow(rxDocumentMap, id));
                  const [error] = Object.values(results.error)
                  if (error) {
                    //TODO: Improve error handling
                    throw new Error(`Could not remove ${JSON.stringify(error)}`)
                  }
                  return rxDocuments;
                }

                const query = Reflect.apply(target, thisArg, args) as RxQuery;

                if (!query.exec) {
                  throw new Error("Wrong ORM function does not return exec")
                }
                return query.exec()
              }
              return Reflect.apply(target, thisArg, args);
            }
          })


        }
      }

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
    for (let prv of privateKeys) {
      await this.db.privatekeys.insert({
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
              value: Buffer.from(prv.raw).toString("hex"),
            },
          ] as KeySpec[]
        ),
      })
    }
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
            value: Buffer.from(privateKey.raw).toString("hex"),
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
    const results = await this.db.didpairs.find()
    return results.map(
      ({ hostDID, receiverDID, name }) =>
        new DIDPair(DID.fromString(hostDID), DID.fromString(receiverDID), name)
    );
  }

  async getPairByDID(did: Domain.DID): Promise<Domain.DIDPair | null> {
    const { DID, DIDPair } = Domain;
    const didPair = await this.db.didpairs
      .findOne({
        selector: {
          $or: [
            {
              hostDID: did.toString(),
            },
            {
              receiverDID: did.toString(),
            },
          ],
        }
      })
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
      .findOne({
        selector: {
          $and: [
            {
              name,
            },
          ],
        }
      });

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
      .find({
        selector: {
          did: {
            $eq: did.toString()
          }
        }
      })
    return privateKeys.map(this.getPrivateKeyFromDB);
  }

  async getDIDPrivateKeyByID(id: string): Promise<Domain.PrivateKey | null> {
    const privateKey = await this.db.privatekeys.findOne({
      selector: {
        id: {
          $eq: id
        }
      }
    })
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
    const dids = await this.db.dids.find({
      selector: {
        method: {
          $eq: "prism"
        }
      }
    });

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
      .findOne({
        selector: {
          did: did.toString()
        }
      });

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
    const dids = await this.db.dids.find({
      selector: {
        alias: {
          $eq: alias
        }
      }
    });
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
      .find({
        selector: {
          $or: [
            {
              to: did.toString(),
            },
            {
              from: did.toString(),
            },
          ],
        }
      })

    return messages.map((message) => message.toDomainMessage());
  }

  async getAllMessagesSent(): Promise<Domain.Message[]> {
    const messages = await this.db.messages
      .find({
        selector: {
          $or: [
            {
              direction: Domain.MessageDirection.SENT,
            },
          ],
        }
      })

    return messages.map((message) => message.toDomainMessage());
  }

  async getAllMessagesReceived(): Promise<Domain.Message[]> {
    const messages = await this.db.messages
      .find({
        selector: {
          $or: [
            {
              direction: Domain.MessageDirection.RECEIVED,
            },
          ],
        }
      })

    return messages.map((message) => message.toDomainMessage());
  }

  async getAllMessagesSentTo(did: Domain.DID): Promise<Domain.Message[]> {
    const messages = await this.db.messages
      .find({
        selector: {
          $and: [
            {
              to: did.toString(),
            },
            {
              direction: Domain.MessageDirection.SENT,
            },
          ],
        }
      })
    return messages.map((message) => message.toDomainMessage());
  }

  async getAllMessagesReceivedFrom(did: Domain.DID): Promise<Domain.Message[]> {
    const messages = await this.db.messages
      .find({
        selector: {
          $and: [
            {
              from: did.toString(),
            },
            {
              direction: Domain.MessageDirection.RECEIVED,
            },
          ],
        }
      });
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
      .find({
        selector: {
          $and: query,
        }
      })

    return messages.map((message) => message.toDomainMessage());
  }

  async getAllMessagesByFromToDID(
    from: Domain.DID,
    to: Domain.DID
  ): Promise<Domain.Message[]> {
    const messages = await this.db.messages
      .find({
        selector: {
          $or: [
            {
              from: from.toString(),
            },
            {
              to: to.toString(),
            },
          ],
        }
      })

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
    if (!results || results.length === 0) {
      return 0;
    }
    return Math.max(...results.map((result) => result.keyPathIndex));
  }

  async getAllPeerDIDs(): Promise<Domain.PeerDID[]> {
    const peerDIDs: Domain.PeerDID[] = [];
    const dids = await this.db.dids.find({
      selector: {
        method: {
          $eq: 'peer'
        }
      }
    });
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

  async storeCredential(credential: Domain.Credential): Promise<void> {
    if (!credential.isStorable || !credential.isStorable()) {
      throw new Error("Credential is not storable");
    }
    const storable = credential.toStorable();
    if (!storable.id) storable.id = uuidv4();

    await this.db.credentials.insert(storable);
  }

  async getAllMediators(): Promise<Domain.Mediator[]> {
    const mediators = await this.db.mediators.find()
    return mediators.map((mediator) => mediator.toDomainMediator());
  }

  async getAllCredentials(): Promise<Domain.Credential[]> {
    const credentials = await this.db.credentials.find()
    return credentials.map(
      (verifiableCredential) => verifiableCredential.toDomainCredential()
    );
  }

  async getLinkSecret(
    linkSecretName?: string | undefined
  ): Promise<string | null> {
    const query = linkSecretName ?
      {
        selector: {
          name: {
            $eq: linkSecretName
          }
        }
      } : {}

    const linkSecret = await this.db.linksecrets
      .findOne(query);

    if (linkSecret) {
      return linkSecret.toDomainLinkSecret();
    }

    return null;
  }

  async storeLinkSecret(
    linkSecret: string,
    linkSecretName: string
  ): Promise<void> {
    await this.db.linksecrets.insert({
      name: linkSecretName,
      secret: linkSecret,
    });
  }

  async storeCredentialMetadata(
    metadata: Domain.Anoncreds.CredentialRequestMeta,
    linkSecret: string
  ): Promise<void> {
    await this.db.credentialrequestmetadatas.insert({
      ...metadata,
      id: uuidv4(),
      link_secret_name: linkSecret,
    });
  }

  async fetchCredentialMetadata(
    linkSecretName: string
  ): Promise<Domain.Anoncreds.CredentialRequestMeta | null> {
    const credentialRequestMetadata = await this.db.credentialrequestmetadatas
      .findOne({
        selector: {
          link_secret_name: {
            $eq: linkSecretName
          }
        }
      });

    if (credentialRequestMetadata) {
      return credentialRequestMetadata.toDomainCredentialRequestMetadata();
    }
    return null;
  }
}
