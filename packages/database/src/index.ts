/**
 * @packageDocumentation
 * @module database
 */
import { Domain } from "@atala/prism-wallet-sdk";
import {
  MangoQuerySelector, PROMISE_RESOLVE_FALSE, RxCollectionCreator,
  RxDatabase,
  RxDatabaseCreator,
  RxDumpDatabase,
  RxError,
  RxQuery,
  RxStorage,
  addRxPlugin,
  createRxDatabase,
  flatClone,
  getFromMapOrCreate,
  getFromMapOrThrow,
  removeRxDatabase
} from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { RxDBEncryptedMigrationPlugin } from "@pluto-encrypted/encryption";
import { BulkWriteRow, RxCollection, RxDocument, RxDocumentData } from "rxdb/dist/types/types";
import { RxDBJsonDumpPlugin } from "rxdb/plugins/json-dump";
import { RxDBQueryBuilderPlugin } from "rxdb/plugins/query-builder";
import { v4 as uuidv4 } from "uuid";
import CredentialSchema, {
  CredentialCollection,
  CredentialMethods
} from "./schemas/Credential";
import CredentialRequestMetadataSchema, {
  CredentialRequestMetadataCollection,
  CredentialRequestMetadataMethods
} from "./schemas/CredentialRequestMetadata";
import DIDSchema, { DIDCollection } from "./schemas/DID";
import DIDPairSchema, { DIDPairCollection } from "./schemas/DIDPair";
import LinkSecretSchema, {
  LinkSecretColletion,
  LinkSecretMethods
} from "./schemas/LinkSecret";
import MediatorSchema, {
  MediatorCollection,
  MediatorMethods
} from "./schemas/Mediator";
import MessageSchema, {
  MessageColletion,
  MessageMethods,
  MessageSchemaType
} from "./schemas/Message";
import PrivateKeySchema, {
  KeySpec, PrivateKeyColletion, PrivateKeyDocument,
  PrivateKeyMethods
} from "./schemas/PrivateKey";
import { PlutoCollections } from "./types";
import { DATA_MIGRATOR_BY_COLLECTION } from "@pluto-encrypted/encryption";
import { EncryptedDataMigrator } from "@pluto-encrypted/encryption";
import { mustMigrate } from "@pluto-encrypted/encryption";

export * from "./schemas/Credential";
export * from "./schemas/CredentialRequestMetadata";
export * from "./schemas/DID";
export * from "./schemas/DIDPair";
export * from "./schemas/LinkSecret";
export * from "./schemas/Mediator";
export * from "./schemas/Message";
export * from "./schemas/PrivateKey";
export type * from './types'
export type { Domain as WALLET_SDK_DOMAIN } from '@atala/prism-wallet-sdk'

export type ValuesOf<T> = T[keyof T];
export type PlutoDatabase = RxDatabase<PlutoCollections>;

/**
 * Pluto is a storage interface describing storage requirements of the edge agents
 * which will be implemented using this SDK. Implement this interface using your
 * preferred underlying storage technology, most appropriate for your use case.
 *
 */
export class Database implements Domain.Pluto {
  private _db!: RxDatabase<PlutoCollections, any, any>;

  protected get db() {
    if (!this._db) {
      throw new Error("Start Pluto first.");
    }
    return this._db;
  }

  constructor(private dbOptions: RxDatabaseCreator) {

    if (process.env.NODE_ENV === "debug") {
      addRxPlugin(RxDBDevModePlugin);
    }
    addRxPlugin(RxDBQueryBuilderPlugin);
    addRxPlugin(RxDBJsonDumpPlugin);
    addRxPlugin(RxDBEncryptedMigrationPlugin);
  }

  async backup() {
    return this.db.exportJSON();
  }

  get collections(): PlutoCollections {
    return this.db.collections
  }

  /**
   * CredentialRequestMetadatas
   * Stores anoncreds credential metadata + exposes orm functions
   * 
   * Count all Credential Metadatas with optional query
   * ```ts
   * await db.credentialmetadatas.count({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Find all credential metadatas matching the query
   * ```ts
   * await db.credentialmetadatas.find({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Find all credential metadatas by id
   * ```ts
   * await db.credentialmetadatas.findByIds([id])
   * ```
   * Find one credential metadatas matching the query
   * ```ts
   * await db.credentialmetadatas.findOne({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Remove any credential metadatas matching the query
   * ```ts
   * await db.credentialmetadatas.remove({selector: {id: {$eq: 1}}})
   * ```
   */
  get credentialrequestmetadatas(): CredentialRequestMetadataCollection {
    return this.db.collections.credentialrequestmetadatas
  }

  /**
   * LinkSecrets 
   * Stores anoncreds link secrets + exposes orm functions
   * 
   * Count all LinkSecrets with optional query
   * ```ts
   * await db.linksecrets.count({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Find all LinkSecrets matching the query
   * ```ts
   * await db.linksecrets.find({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Find all LinkSecrets by id
   * ```ts
   * await db.linksecrets.findByIds([id])
   * ```
   * Find one LinkSecrets matching the query
   * ```ts
   * await db.linksecrets.findOne({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Remove any LinkSecrets matching the query
   * ```ts
   * await db.linksecrets.remove({selector: {id: {$eq: 1}}})
   * ```
   */
  get linksecrets(): LinkSecretColletion {
    return this.db.collections.linksecrets
  }

  /**
   * DIDPairs 
   * Stores groups of dids, also known as connections + exposes orm functions
   * 
   * Count all DIDPairs with optional query
   * ```ts
   * await db.didpairs.count({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Find all DIDPairs matching the query
   * ```ts
   * await db.didpairs.find({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Find all DIDPairs by id
   * ```ts
   * await db.didpairs.findByIds([id])
   * ```
   * Find one DIDPairs matching the query
   * ```ts
   * await db.didpairs.findOne({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Remove any DIDPairs matching the query
   * ```ts
   * await db.didpairs.remove({selector: {id: {$eq: 1}}})
   * ```
   */
  get didpairs(): DIDPairCollection {
    return this.db.collections.didpairs
  }

  /**
   * Credentials 
   * Stores credentials, both anoncreda and prism/jwt + exposes orm functions
   * 
   * Count all Credentials with optional query
   * ```ts
   * await db.credentials.count({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Find all Credentials matching the query
   * ```ts
   * await db.credentials.find({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Find all Credentials by id
   * ```ts
   * await db.credentials.findByIds([id])
   * ```
   * Find one Credentials matching the query
   * ```ts
   * await db.credentials.findOne({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Remove any Credentials matching the query
   * ```ts
   * await db.credentials.remove({selector: {id: {$eq: 1}}})
   * ```
   */
  get credentials(): CredentialCollection {
    return this.db.collections.credentials
  }

  /**
   * Mediators 
   * Stores mediators + exposes orm functions
   * 
   * Count all Mediators with optional query
   * ```ts
   * await db.mediators.count({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Find all Mediators matching the query
   * ```ts
   * await db.mediators.find({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Find all Mediators by id
   * ```ts
   * await db.mediators.findByIds([id])
   * ```
   * Find one Mediators matching the query
   * ```ts
   * await db.mediators.findOne({selector: {id: {$eq: 1}}}) //Query is optional
   * ```
   * 
   * Remove any Mediators matching the query
   * ```ts
   * await db.mediators.remove({selector: {id: {$eq: 1}}})
   * ```
   */
  get mediators(): MediatorCollection {
    return this.db.collections.mediators
  }

  /**
    * DIDs 
    * Stores dids + exposes orm functions
    * 
    * Count all DIDS with optional query
    * ```ts
    * await db.dids.count({selector: {id: {$eq: 1}}}) //Query is optional
    * ```
    * 
    * Find all DIDS matching the query
    * ```ts
    * await db.dids.find({selector: {id: {$eq: 1}}}) //Query is optional
    * ```
    * 
    * Find all DIDS by id
    * ```ts
    * await db.dids.findByIds([id])
    * ```
    * Find one DIDS matching the query
    * ```ts
    * await db.dids.findOne({selector: {id: {$eq: 1}}}) //Query is optional
    * ```
    * 
    * Remove any DIDS matching the query
    * ```ts
    * await db.dids.remove({selector: {id: {$eq: 1}}})
    * ```
    */
  get dids(): DIDCollection {
    return this.db.collections.dids
  }

  /**
    * PrivateKeys 
    * Stores privateKeys + exposes orm functions
    * 
    * Count all PrivateKeys with optional query
    * ```ts
    * await db.privatekeys.count({selector: {id: {$eq: 1}}}) //Query is optional
    * ```
    * 
    * Find all PrivateKeys matching the query
    * ```ts
    * await db.privatekeys.find({selector: {id: {$eq: 1}}}) //Query is optional
    * ```
    * 
    * Find all PrivateKeys by id
    * ```ts
    * await db.privatekeys.findByIds([id])
    * ```
    * Find one PrivateKeys matching the query
    * ```ts
    * await db.privatekeys.findOne({selector: {id: {$eq: 1}}}) //Query is optional
    * ```
    * 
    * Remove any PrivateKeys matching the query
    * ```ts
    * await db.privatekeys.remove({selector: {id: {$eq: 1}}})
    * ```
    */
  get privatekeys(): PrivateKeyColletion {
    return this.db.collections.privatekeys
  }

  /**
    * Messages 
    * Stores Messages + exposes orm functions
    * 
    * Count all Messages with optional query
    * ```ts
    * await db.messages.count({selector: {id: {$eq: 1}}}) //Query is optional
    * ```
    * 
    * Find all Messages matching the query
    * ```ts
    * await db.messages.find({selector: {id: {$eq: 1}}}) //Query is optional
    * ```
    * 
    * Find all Messages by id
    * ```ts
    * await db.messages.findByIds([id])
    * ```
    * Find one Messages matching the query
    * ```ts
    * await db.messages.findOne({selector: {id: {$eq: 1}}}) //Query is optional
    * ```
    * 
    * Remove any Messages matching the query
    * ```ts
    * await db.messages.remove({selector: {id: {$eq: 1}}})
    * ```
    */
  get messages(): MessageColletion {
    return this.db.collections.messages
  }

  /**
   * Use with caution, this will remove all entries from database
   * and then destroy the database itself.
   */
  async clear() {
    const storages = Array.from(this.db.storageInstances.values())
    for (let storage of storages) {
      await storage.cleanup(0)
    }
    await removeRxDatabase(this.dbOptions.name, this.db.storage);
  }

  /**
   * Creates a database instance.
   * @param options 
   * @returns Database
   */
  static async createEncrypted(
    options: {
      name: string,
      encryptionKey: Uint8Array,
      importData?: RxDumpDatabase<PlutoCollections>,
      storage: RxStorage<any, any>,
      autoStart?: boolean,
      collections?: Partial<{
        messages: RxCollectionCreator<any>;
        dids: RxCollectionCreator<any>;
        didpairs: RxCollectionCreator<any>;
        mediators: RxCollectionCreator<any>;
        privatekeys: RxCollectionCreator<any>;
        credentials: RxCollectionCreator<any>;
        credentialrequestmetadatas: RxCollectionCreator<any>;
        linksecrets: RxCollectionCreator<any>;
      }>
    }
  ) {
    try {
      const { name, storage, encryptionKey, importData, autoStart = true, collections } = options;
      if (!storage) {
        throw new Error("Please provide a valid storage.");
      }
      const database = new Database({
        ignoreDuplicate: true,
        name: name,
        storage: storage,
        password: Buffer.from(encryptionKey).toString('hex'),
      });

      if (autoStart) {
        await database.start(collections)
      }

      if (importData) {
        await database.db.importJSON(importData);
      }

      return database;
    } catch (err) {
      /* istanbul ignore else */
      if ((err as RxError).code === "DB1") {
        throw new Error("Invalid Authentication");
      } else {
        /* istanbul ignore next */
        throw err;
      }
    }
  }

  /**
   * Get a Message by its id
   * @param id 
   * @returns [Message](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)
   */
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

  /**
   * Stores a message
   * @param [Message](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html) 
   * @returns void
   */
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

  /**
   * Stores multiple messages in 1 call
   * @param [Message[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html) 
   * @returns void
   */
  async storeMessages(messages: Domain.Message[]): Promise<void> {
    for (let message of messages) {
      await this.storeMessage(message)
    }
  }

  /**
  * Get all the stored messages
  * @returns [Message[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html) 
  */
  async getAllMessages(): Promise<Domain.Message[]> {
    const messages = await this.db.messages.find();
    return messages.map((message) => message.toDomainMessage());
  }

  private getDefaultCollections() {
    return {
      messages: {
        schema: MessageSchema,
        methods: MessageMethods
      },
      dids: {
        schema: DIDSchema
      },
      didpairs: {
        schema: DIDPairSchema
      },
      mediators: {
        schema: MediatorSchema,
        methods: MediatorMethods
      },
      privatekeys: {
        schema: PrivateKeySchema,
        methods: PrivateKeyMethods
      },
      credentials: {
        schema: CredentialSchema,
        methods: CredentialMethods
      },
      credentialrequestmetadatas: {
        schema: CredentialRequestMetadataSchema,
        methods: CredentialRequestMetadataMethods
      },
      linksecrets: {
        schema: LinkSecretSchema,
        methods: LinkSecretMethods
      },
    }
  }

  private async isMigrationNeeded(collection: RxCollection) {
    if (collection.schema.version === 0) {
      return PROMISE_RESOLVE_FALSE;
    }
    const dataMigrator = getFromMapOrCreate(
      DATA_MIGRATOR_BY_COLLECTION,
      collection,
      () => new EncryptedDataMigrator(
        collection.asRxCollection,
        collection.migrationStrategies
      )
    );
    debugger;
    const migrate = await mustMigrate(dataMigrator);
    return migrate
  }

  private async migration(database: RxDatabase<PlutoCollections, any, any>) {
    for (let collectionName of Object.keys(database.collections)) {
      const collection = database[collectionName].asRxCollection
      const needed = await this.isMigrationNeeded(collection)
      if (needed) {
        debugger;
        const migrator = new EncryptedDataMigrator(
          collection.asRxCollection,
          collection.migrationStrategies
        )
        const migration = await migrator.migratePromise(10)

      }
    }
  }

  /**
   * Start the database and build collections
   */
  async start(collections?: Partial<{
    messages: RxCollectionCreator<any>;
    dids: RxCollectionCreator<any>;
    didpairs: RxCollectionCreator<any>;
    mediators: RxCollectionCreator<any>;
    privatekeys: RxCollectionCreator<any>;
    credentials: RxCollectionCreator<any>;
    credentialrequestmetadatas: RxCollectionCreator<any>;
    linksecrets: RxCollectionCreator<any>;
  }>): Promise<void> {
    const { dbOptions } = this;

    const database = await createRxDatabase<PlutoCollections>({
      ...dbOptions,
      multiInstance: false
    });

    await database.addCollections({
      ...this.getDefaultCollections(),
      ...(collections || {})
    });

    await this.migration(database)

    this._db = database;

    const execOrmNames = ['count', 'findByIds', 'find', 'findOne', "remove"];
    for (let ormNme of execOrmNames) {
      for (let collectionName in this.db.collections) {
        const collection: ValuesOf<PlutoCollections> = this.db.collections[collectionName]
        const originalOrmMethod = collection[ormNme]

        collection[ormNme] = new Proxy(originalOrmMethod, {
          async apply(target, thisArg, args) {
            /* istanbul ignore else -- @preserve */
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
                /* istanbul ignore else -- @preserve */
                /* istanbul ignore if -- @preserve */
                if (error) {
                  //TODO: Improve error handling
                  /* istanbul ignore next -- @preserve */
                  throw new Error(`Could not remove ${JSON.stringify(error)}`)
                }
                return rxDocuments;
              }

              const query = Reflect.apply(target, thisArg, args) as RxQuery;
              return query.exec()
            }

            /* istanbul ignore next -- @preserve */
            return Reflect.apply(target, thisArg, args);
          }
        })


      }
    }


  }

  /**
   * Stores a prismDID and its privateKey
   * @param did 
   * @param keyPathIndex 
   * @param privateKey 
   * @param privateKeyMetaId 
   * @param alias 
   */
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

  /**
   * Stores a peerdid with its privateKeys
   * @param did 
   * @param privateKeys 
   */
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

  /**
   * Stores a didpair
   * @param host 
   * @param receiver 
   * @param name 
   */
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

  /**
   * Stores privateKeys references to an existing DID
   * @param privateKey 
   * @param did 
   * @param keyPathIndex 
   * @param _metaId 
   */
  async storePrivateKeys(
    privateKey: Domain.PrivateKey,
    did: Domain.DID,
    keyPathIndex: number,
    _metaId?: string | null
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

  /**
   * Gets all the stores didPairs
   * @returns [Domain.DIDPair[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.DIDPair.html)
   */
  async getAllDidPairs(): Promise<Domain.DIDPair[]> {
    const { DID, DIDPair } = Domain;
    const results = await this.db.didpairs.find()
    return results.map(
      ({ hostDID, receiverDID, name }) =>
        new DIDPair(DID.fromString(hostDID), DID.fromString(receiverDID), name)
    );
  }

  /**
   * Get a did pair (connection) by one of its dids
   * @param did 
   * @returns [Domain.DIDPair](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.DIDPair.html)
   */
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
    /* istanbul ignore else -- @preserve */
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
