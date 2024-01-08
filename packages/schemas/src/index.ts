/**
 * @packageDocumentation
 * @module database
 */
import { RxDBEncryptedMigrationPlugin } from '@pluto-encrypted/encryption'
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump'
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder'
import { CollectionsOfDatabase, addRxPlugin, removeRxDatabase, RxCollectionCreator, createRxDatabase, RxDatabaseCreator, RxDumpDatabase, RxStorage } from 'rxdb'
import { PlutoDatabase, ExtendedCollections, DBOptions } from './types'
import { CredentialSchema, CredentialMethods, CredentialStaticMethods } from './schemas/credential'
import { CredentialRequestMetadataSchema, CredentialRequestMetadataMethods, CredentialRequestMetadataStaticMethods } from './schemas/credentialRequestMetadata'
import { DIDSchema, DIDStaticMethods } from './schemas/did'
import { DIDPairSchema, DIDPairStaticMethods } from './schemas/didpair'
import { LinkSecretSchema, LinkSecretMethods, LinkSecretStaticMethods } from './schemas/linksecret'
import { MediatorSchema, MediatorMethods, MediatorStaticMethods } from './schemas/mediator'
import { MessageSchema, MessageMethods, MessageStaticMethods } from './schemas/message'
import { PrivateKeySchema, PrivateKeyMethods, PrivateKeyStaticMethods } from './schemas/privatekey'



export * from './schemas/credential'
export * from './schemas/credentialRequestMetadata'
export * from './schemas/did'
export * from './schemas/didpair'
export * from './schemas/linksecret'
export * from './schemas/mediator'
export * from './schemas/message'
export * from './schemas/privatekey'


export * from './types'
export type { Domain as WALLET_SDK_DOMAIN } from '@atala/prism-wallet-sdk'


export function getDefaultCollections(extendedCollections: { [name: string]: RxCollectionCreator } = {}): { [name: string]: RxCollectionCreator } {
    return {
        messages: {
            schema: MessageSchema,
            methods: MessageMethods,
            statics: MessageStaticMethods
        },
        dids: {
            schema: DIDSchema,
            statics: DIDStaticMethods
        },
        didpairs: {
            schema: DIDPairSchema,
            statics: DIDPairStaticMethods
        },
        mediators: {
            schema: MediatorSchema,
            methods: MediatorMethods,
            statics: MediatorStaticMethods
        },
        privatekeys: {
            schema: PrivateKeySchema,
            methods: PrivateKeyMethods,
            statics: PrivateKeyStaticMethods
        },
        credentials: {
            schema: CredentialSchema,
            methods: CredentialMethods,
            statics: CredentialStaticMethods
        },
        credentialrequestmetadatas: {
            schema: CredentialRequestMetadataSchema,
            methods: CredentialRequestMetadataMethods,
            statics: CredentialRequestMetadataStaticMethods
        },
        linksecrets: {
            schema: LinkSecretSchema,
            methods: LinkSecretMethods,
            statics: LinkSecretStaticMethods
        },
        ...extendedCollections,
    }
}


export class DatabaseBase<Collections = CollectionsOfDatabase>  {
    private _db!: PlutoDatabase<Collections>
    get db() {
        if (!this._db) {
            throw new Error('Start Pluto first.')
        }
        return this._db
    }

    constructor(private readonly dbOptions: DBOptions) {
        addRxPlugin(RxDBQueryBuilderPlugin)
        addRxPlugin(RxDBJsonDumpPlugin)
        addRxPlugin(RxDBEncryptedMigrationPlugin)
    }

    async backup() {
        return await this.db.exportJSON()
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
     * Start the database and build collections
     */
    async start(collections?: {
        [name: string]: RxCollectionCreator<any>
    }): Promise<void> {
        const { dbOptions } = this
        const database = await createRxDatabase<ExtendedCollections<Collections>>({
            ...dbOptions,
            multiInstance: false
        })
        await database.addCollections(getDefaultCollections(collections));
        this._db = database
    }
}
