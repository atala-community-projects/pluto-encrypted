/**
 * @packageDocumentation
 * @module database
 * Database package
 * 
 * fix for 1.9.2 :)
 */
import SDK from '@atala/prism-wallet-sdk'
import {
  type MangoQuerySelector, type RxCollectionCreator,
  type RxDatabase,
  type RxDatabaseCreator,
  type RxDumpDatabase,
  type RxError,
  type RxStorage,
  addRxPlugin,
  createRxDatabase,
  removeRxDatabase
} from 'rxdb'
import { RxDBEncryptedMigrationPlugin } from '@pluto-encrypted/encryption'
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump'
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder'
import { v4 as uuidv4 } from 'uuid'
import CredentialSchema, {
  type CredentialCollection,
  CredentialMethods
} from './schemas/Credential'
import CredentialRequestMetadataSchema, {
  type CredentialRequestMetadataCollection,
  CredentialRequestMetadataMethods
} from './schemas/CredentialRequestMetadata'
import DIDSchema, { type DIDCollection } from './schemas/DID'
import DIDPairSchema, { type DIDPairCollection } from './schemas/DIDPair'
import LinkSecretSchema, {
  type LinkSecretColletion,
  LinkSecretMethods
} from './schemas/LinkSecret'
import MediatorSchema, {
  type MediatorCollection,
  MediatorMethods
} from './schemas/Mediator'
import MessageSchema, {
  type MessageColletion,
  MessageMethods,
  type MessageSchemaType
} from './schemas/Message'
import PrivateKeySchema, {
  type KeySpec, type PrivateKeyColletion, type PrivateKeyDocument,
  PrivateKeyMethods
} from './schemas/PrivateKey'
import { type PlutoCollections } from './types'

export * from './schemas/Credential'
export * from './schemas/CredentialRequestMetadata'
export * from './schemas/DID'
export * from './schemas/DIDPair'
export * from './schemas/LinkSecret'
export * from './schemas/Mediator'
export * from './schemas/Message'
export * from './schemas/PrivateKey'
export type * from './types'
export type { Domain as WALLET_SDK_DOMAIN } from '@atala/prism-wallet-sdk'

export type ValuesOf<T> = T[keyof T]
export type PlutoDatabase = RxDatabase<PlutoCollections>

/**
 * Pluto is a storage interface describing storage requirements of the edge agents
 * which will be implemented using this SDK. Implement this interface using your
 * preferred underlying storage technology, most appropriate for your use case.
 */
export class Database implements SDK.Domain.Pluto {
  private _db!: RxDatabase<PlutoCollections, any, any>

  protected get db() {
    if (!this._db) {
      throw new Error('Start Pluto first.')
    }
    return this._db
  }

  constructor(private readonly dbOptions: RxDatabaseCreator) {
    addRxPlugin(RxDBQueryBuilderPlugin)
    addRxPlugin(RxDBJsonDumpPlugin)
    addRxPlugin(RxDBEncryptedMigrationPlugin)
  }

  async backup() {
    return await this.db.exportJSON()
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
    for (const storage of storages) {
      await storage.cleanup(Infinity)
    }
    await removeRxDatabase(this.dbOptions.name, this.db.storage)
  }

  /**
   * Creates a database instance.
   * @param options
   * @returns Database
   */
  static async createEncrypted(
    options: {
      name: string
      encryptionKey: Uint8Array
      importData?: RxDumpDatabase<PlutoCollections>
      storage: RxStorage<any, any>
      autoStart?: boolean
      collections?: Partial<{
        messages: RxCollectionCreator<any>
        dids: RxCollectionCreator<any>
        didpairs: RxCollectionCreator<any>
        mediators: RxCollectionCreator<any>
        privatekeys: RxCollectionCreator<any>
        credentials: RxCollectionCreator<any>
        credentialrequestmetadatas: RxCollectionCreator<any>
        linksecrets: RxCollectionCreator<any>
      }>
    }
  ) {
    try {
      const { name, storage, encryptionKey, importData, autoStart = true, collections } = options
      if (!storage) {
        throw new Error('Please provide a valid storage.')
      }
      const database = new Database({
        ignoreDuplicate: true,
        name,
        storage,
        password: Buffer.from(encryptionKey).toString('hex')
      })

      if (autoStart) {
        await database.start(collections)
      }

      if (importData) {
        await database.db.importJSON(importData)
      }

      return database
    } catch (err) {
      /* istanbul ignore else */
      if ((err as RxError).code === 'DB1') {
        throw new Error('Invalid Authentication')
      } else {
        /* istanbul ignore next */

        throw err
      }
    }
  }

  /**
   * Get a Message by its id
   * @param id
   * @returns [Message](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)
   */
  async getMessage(id: string): Promise<SDK.Domain.Message | null> {
    const message = await this.db.messages.findOne({
      selector: {
        id: {
          $eq: id
        }
      }
    }).exec()
    if (message) {
      return message.toDomainMessage()
    }
    return null
  }

  /**
   * Stores a message
   * @param [Message](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)
   * @returns void
   */
  async storeMessage(message: SDK.Domain.Message): Promise<void> {
    const existing = await this.db.messages
      .findOne({
        selector: {
          id: {
            $eq: message.id
          }
        }
      }).exec()
    if (existing) {
      await existing.patch({
        ...message,
        to: message.to?.toString(),
        from: message.from?.toString()
      })
    } else {
      await this.db.messages.insert({
        ...message,
        to: message.to?.toString(),
        from: message.from?.toString()
      })
    }
  }

  /**
   * Stores multiple messages in 1 call
   * @param [Message[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)
   * @returns void
   */
  async storeMessages(messages: SDK.Domain.Message[]): Promise<void> {
    for (const message of messages) {
      await this.storeMessage(message)
    }
  }

  /**
  * Get all the stored messages
  * @returns [Message[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)
  */
  async getAllMessages(): Promise<SDK.Domain.Message[]> {
    const messages = await this.db.messages.find().exec()
    return messages.map((message) => message.toDomainMessage())
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
      }
    }
  }

  /**
   * Start the database and build collections
   */
  async start(collections?: Partial<{
    messages: RxCollectionCreator<any>
    dids: RxCollectionCreator<any>
    didpairs: RxCollectionCreator<any>
    mediators: RxCollectionCreator<any>
    privatekeys: RxCollectionCreator<any>
    credentials: RxCollectionCreator<any>
    credentialrequestmetadatas: RxCollectionCreator<any>
    linksecrets: RxCollectionCreator<any>
  }>): Promise<void> {
    const { dbOptions } = this

    const database = await createRxDatabase<PlutoCollections>({
      ...dbOptions,
      multiInstance: false
    })

    await database.addCollections({
      ...this.getDefaultCollections(),
      ...(collections ?? {}) as any
    })

    this._db = database
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
    did: SDK.Domain.DID,
    keyPathIndex: number,
    privateKey: SDK.Domain.PrivateKey,
    _privateKeyMetaId?: string | null,
    alias?: string | undefined
  ): Promise<void> {
    await this.db.dids.insert({
      did: did.toString(),
      method: did.method,
      methodId: did.methodId,
      schema: did.schema,
      alias
    })
    await this.storePrivateKeys(
      privateKey,
      did,
      keyPathIndex
    )
  }

  /**
   * Stores a peerdid with its privateKeys
   * @param did
   * @param privateKeys
   */
  async storePeerDID(
    did: SDK.Domain.DID,
    privateKeys: SDK.Domain.PrivateKey[]
  ): Promise<void> {
    await this.db.dids.insert({
      did: did.toString(),
      method: did.method,
      methodId: did.methodId,
      schema: did.schema
    })
    for (const prv of privateKeys) {
      await this.db.privatekeys.insert({
        id: uuidv4(),
        did: did.toString(),
        type: prv.type,
        keySpecification: Array.from(prv.keySpecification).reduce<KeySpec[]>(
          (all, [key, value]) => [
            ...all,
            {
              type: 'string',
              name: key,
              value: `${value}`
            }
          ],
          [
            {
              type: 'string',
              name: 'raw',
              value: Buffer.from(prv.raw).toString('hex')
            }
          ]
        )
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
    host: SDK.Domain.DID,
    receiver: SDK.Domain.DID,
    name: string
  ): Promise<void> {
    await this.db.didpairs.insert({
      hostDID: host.toString(),
      receiverDID: receiver.toString(),
      name
    })
  }

  /**
   * Stores privateKeys references to an existing DID
   * @param privateKey
   * @param did
   * @param keyPathIndex
   * @param _metaId
   */
  async storePrivateKeys(
    privateKey: SDK.Domain.PrivateKey,
    did: SDK.Domain.DID,
    keyPathIndex: number
  ): Promise<void> {
    await this.db.privatekeys.insert({
      id: uuidv4(),
      did: did.toString(),
      type: privateKey.type,
      keySpecification: Array.from(privateKey.keySpecification).reduce<KeySpec[]>(
        (all, [key, value]) => [
          ...all,
          {
            type: 'string',
            name: key,
            value: `${value}`
          }
        ],
        [
          {
            type: 'string',
            name: 'raw',
            value: Buffer.from(privateKey.raw).toString('hex')
          },
          {
            type: 'number',
            name: 'index',
            value: `${keyPathIndex}`
          }
        ]
      )
    })
  }

  /**
   * Gets all the stores didPairs
   * @returns [Domain.DIDPair[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.DIDPair.html)
   */
  async getAllDidPairs(): Promise<SDK.Domain.DIDPair[]> {
    const results = await this.db.didpairs.find().exec()
    return results.map(
      ({ hostDID, receiverDID, name }) =>
        new SDK.Domain.DIDPair(SDK.Domain.DID.fromString(hostDID), SDK.Domain.DID.fromString(receiverDID), name)
    )
  }

  /**
   * Get a did pair (connection) by one of its dids
   * @param did
   * @returns [Domain.DIDPair](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.DIDPair.html)
   */
  async getPairByDID(did: SDK.Domain.DID): Promise<SDK.Domain.DIDPair | null> {
    const didPair = await this.db.didpairs
      .findOne({
        selector: {
          $or: [
            {
              hostDID: did.toString()
            },
            {
              receiverDID: did.toString()
            }
          ]
        }
      }).exec()
    return didPair
      ? new SDK.Domain.DIDPair(
        SDK.Domain.DID.fromString(didPair.hostDID),
        SDK.Domain.DID.fromString(didPair.receiverDID),
        didPair.name
      )
      : null
  }

  async getPairByName(name: string): Promise<SDK.Domain.DIDPair | null> {
    const didPair = await this.db.didpairs
      .findOne({
        selector: {
          $and: [
            {
              name
            }
          ]
        }
      }).exec()

    return didPair
      ? new SDK.Domain.DIDPair(
        SDK.Domain.DID.fromString(didPair.hostDID),
        SDK.Domain.DID.fromString(didPair.receiverDID),
        didPair.name
      )
      : null
  }

  private getPrivateKeyFromDB(
    privateKey: PrivateKeyDocument
  ): SDK.Domain.PrivateKey {
    return privateKey.toDomainPrivateKey()
  }

  async getDIDPrivateKeysByDID(did: SDK.Domain.DID): Promise<SDK.Domain.PrivateKey[]> {
    const privateKeys = await this.db.privatekeys
      .find({
        selector: {
          did: {
            $eq: did.toString()
          }
        }
      }).exec()
    return privateKeys.map((privateKey) => {
      return this.getPrivateKeyFromDB(privateKey)
    })
  }

  async getDIDPrivateKeyByID(id: string): Promise<SDK.Domain.PrivateKey | null> {
    const privateKey = await this.db.privatekeys.findOne({
      selector: {
        id: {
          $eq: id
        }
      }
    }).exec()
    return privateKey ? this.getPrivateKeyFromDB(privateKey) : null
  }

  async storeMediator(
    mediator: SDK.Domain.DID,
    host: SDK.Domain.DID,
    routing: SDK.Domain.DID
  ): Promise<void> {
    await this.db.mediators.insert({
      id: uuidv4(),
      mediatorDID: mediator.toString(),
      hostDID: host.toString(),
      routingDID: routing.toString()
    })
  }

  async getAllPrismDIDs(): Promise<SDK.Domain.PrismDIDInfo[]> {
    const dids = await this.db.dids.find({
      selector: {
        method: {
          $eq: 'prism'
        }
      }
    }).exec()

    const prismDIDInfo: SDK.Domain.PrismDIDInfo[] = []

    for (const did of dids) {
      const didPrivateKeys = await this.getDIDPrivateKeysByDID(
        SDK.Domain.DID.fromString(did.did)
      )

      for (const privateKey of didPrivateKeys) {
        const indexProp = privateKey.getProperty(SDK.Domain.KeyProperties.index)!

        prismDIDInfo.push(
          new SDK.Domain.PrismDIDInfo(
            SDK.Domain.DID.fromString(did.did),
            parseInt(indexProp),
            did.alias
          )
        )
      }
    }

    return prismDIDInfo
  }

  async getDIDInfoByDID(did: SDK.Domain.DID): Promise<SDK.Domain.PrismDIDInfo | null> {
    const didDB = await this.db.dids
      .findOne({
        selector: {
          did: did.toString()
        }
      }).exec()

    if (didDB) {
      const privateKeys = await this.getDIDPrivateKeysByDID(
        SDK.Domain.DID.fromString(didDB.did)
      )
      /* istanbul ignore if */
      if (privateKeys.length === 0) {
        throw new Error(
          'Imposible to recover PrismDIDInfo without its privateKey data.'
        )
      }
      const indexProp = privateKeys
        .at(0)!
        .getProperty(SDK.Domain.KeyProperties.index)
      const index = indexProp ? parseInt(indexProp) : undefined
      return new SDK.Domain.PrismDIDInfo(
        SDK.Domain.DID.fromString(didDB.did),
        index,
        didDB.alias
      )
    }

    return null
  }

  async getDIDInfoByAlias(alias: string): Promise<SDK.Domain.PrismDIDInfo[]> {
    const dids = await this.db.dids.find({
      selector: {
        alias: {
          $eq: alias
        }
      }
    }).exec()
    const prismDIDInfo: SDK.Domain.PrismDIDInfo[] = []
    for (const did of dids) {
      const didPrivateKeys = await this.getDIDPrivateKeysByDID(
        SDK.Domain.DID.fromString(did.did)
      )
      for (const privateKey of didPrivateKeys) {
        const indexProp = privateKey.getProperty(SDK.Domain.KeyProperties.index)!
        prismDIDInfo.push(
          new SDK.Domain.PrismDIDInfo(
            SDK.Domain.DID.fromString(did.did),
            parseInt(indexProp),
            did.alias
          )
        )
      }
    }
    return prismDIDInfo
  }

  async getAllMessagesByDID(did: SDK.Domain.DID): Promise<SDK.Domain.Message[]> {
    const messages = await this.db.messages
      .find({
        selector: {
          $or: [
            {
              to: did.toString()
            },
            {
              from: did.toString()
            }
          ]
        }
      }).exec()

    return messages.map((message) => message.toDomainMessage())
  }

  async getAllMessagesSent(): Promise<SDK.Domain.Message[]> {
    const messages = await this.db.messages
      .find({
        selector: {
          $or: [
            {
              direction: SDK.Domain.MessageDirection.SENT
            }
          ]
        }
      }).exec()

    return messages.map((message) => message.toDomainMessage())
  }

  async getAllMessagesReceived(): Promise<SDK.Domain.Message[]> {
    const messages = await this.db.messages
      .find({
        selector: {
          $or: [
            {
              direction: SDK.Domain.MessageDirection.RECEIVED
            }
          ]
        }
      }).exec()

    return messages.map((message) => message.toDomainMessage())
  }

  async getAllMessagesSentTo(did: SDK.Domain.DID): Promise<SDK.Domain.Message[]> {
    const messages = await this.db.messages
      .find({
        selector: {
          $and: [
            {
              to: did.toString()
            },
            {
              direction: SDK.Domain.MessageDirection.SENT
            }
          ]
        }
      }).exec()
    return messages.map((message) => message.toDomainMessage())
  }

  async getAllMessagesReceivedFrom(did: SDK.Domain.DID): Promise<SDK.Domain.Message[]> {
    const messages = await this.db.messages
      .find({
        selector: {
          $and: [
            {
              from: did.toString()
            },
            {
              direction: SDK.Domain.MessageDirection.RECEIVED
            }
          ]
        }
      }).exec()
    return messages.map((message) => message.toDomainMessage())
  }

  async getAllMessagesOfType(
    type: string,
    relatedWithDID?: SDK.Domain.DID | undefined
  ): Promise<SDK.Domain.Message[]> {
    const query: Array<MangoQuerySelector<MessageSchemaType>> = [
      {
        piuri: type
      }
    ]
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
    const messages = await this.db.messages
      .find({
        selector: {
          $and: query
        }
      }).exec()

    return messages.map((message) => message.toDomainMessage())
  }

  async getAllMessagesByFromToDID(
    from: SDK.Domain.DID,
    to: SDK.Domain.DID
  ): Promise<SDK.Domain.Message[]> {
    const messages = await this.db.messages
      .find({
        selector: {
          $or: [
            {
              from: from.toString()
            },
            {
              to: to.toString()
            }
          ]
        }
      }).exec()

    return messages.map((message) => message.toDomainMessage())
  }

  async getPrismDIDKeyPathIndex(did: SDK.Domain.DID): Promise<number | null> {
    const [key] = await this.getDIDPrivateKeysByDID(did)
    if (!key) {
      return null
    }
    return key.index || 0
  }

  async getPrismLastKeyPathIndex(): Promise<number> {
    const results = await this.getAllPrismDIDs()
    if (!results || results.length === 0) {
      return 0
    }
    return Math.max(...results.map((result) => result.keyPathIndex))
  }

  async getAllPeerDIDs(): Promise<SDK.PeerDID[]> {
    const peerDIDs: SDK.PeerDID[] = []
    const dids = await this.db.dids.find({
      selector: {
        method: {
          $eq: 'peer'
        }
      }
    }).exec()
    for (const did of dids) {
      const peerDID = SDK.Domain.DID.fromString(did.did)
      const keys = await this.getDIDPrivateKeysByDID(peerDID)
      peerDIDs.push(
        new SDK.PeerDID(
          peerDID,
          keys.map((key) => ({
            keyCurve: {
              curve: key.curve as any
            },
            value: key.raw
          }))
        )
      )
    }
    return peerDIDs
  }

  async storeCredential(credential: SDK.Domain.Credential): Promise<void> {
    if (!credential.isStorable || !credential.isStorable()) {
      throw new Error('Credential is not storable')
    }
    const storable = credential.toStorable()
    /* istanbul ignore else -- @preserve */
    if (!storable.id) storable.id = uuidv4()

    await this.db.credentials.insert(storable)
  }

  async getAllMediators(): Promise<SDK.Domain.Mediator[]> {
    const mediators = await this.db.mediators.find().exec()
    return mediators.map((mediator) => mediator.toDomainMediator())
  }

  async getAllCredentials(): Promise<SDK.Domain.Credential[]> {
    const credentials = await this.db.credentials.find().exec()
    return credentials.map(
      (verifiableCredential) => verifiableCredential.toDomainCredential()
    )
  }

  async getLinkSecret(
    linkSecretName?: string | undefined
  ): Promise<string | null> {
    const query = linkSecretName
      ? {
        selector: {
          name: {
            $eq: linkSecretName
          }
        }
      }
      : {}

    const linkSecret = await this.db.linksecrets
      .findOne(query).exec()

    if (linkSecret) {
      return linkSecret.toDomainLinkSecret()
    }

    return null
  }

  async storeLinkSecret(
    linkSecret: string,
    linkSecretName: string
  ): Promise<void> {
    await this.db.linksecrets.insert({
      name: linkSecretName,
      secret: linkSecret
    })
  }

  async storeCredentialMetadata(
    metadata: SDK.Domain.Anoncreds.CredentialRequestMeta,
    linkSecret: string
  ): Promise<void> {
    await this.db.credentialrequestmetadatas.insert({
      ...metadata,
      id: uuidv4(),
      link_secret_name: linkSecret
    })
  }

  async fetchCredentialMetadata(
    linkSecretName: string
  ): Promise<SDK.Domain.Anoncreds.CredentialRequestMeta | null> {
    const credentialRequestMetadata = await this.db.credentialrequestmetadatas
      .findOne({
        selector: {
          link_secret_name: {
            $eq: linkSecretName
          }
        }
      }).exec()

    if (credentialRequestMetadata) {
      return credentialRequestMetadata.toDomainCredentialRequestMetadata()
    }
    return null
  }
}
