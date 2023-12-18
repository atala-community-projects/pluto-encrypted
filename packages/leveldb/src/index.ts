/**
 * @packageDocumentation
 * @module leveldb
 * @description This is a RXDB LevelDB storage that supports encryption middleware.
 * In order to use this in your pluto-encrypted database you must write the following code:
 * Creating a LevelDB compatible storage is very simple.
 * 
 * ```typescript
 * import { createLevelDBStorage } from "@pluto-encrypted/leveldb";
 * import { Database } from "@pluto-encrypted/database";
 * //default password must be 32 bytes long
 * const defaultPassword = new Uint8Array(32).fill(1);
 * const database = db = await Database.createEncrypted({
 *          name: `my-db`,
 *          encryptionKey: defaultPassword,
 *          storage: createLevelDBStorage({ 
 *          dbName: "demo",
 *          dbPath: "/tmp/demo" 
 *       })
 * });
 * ```
 */
import { RxStorage, RxStorageDefaultStatics, RxStorageInstance, RxStorageInstanceCreationParams } from "rxdb";
import { LevelDBInternalConstructor, LevelDBSettings, LevelDBStorageInternals, RxStorageLevelDBType } from "./leveldb/types";

import { RxStorageIntanceLevelDB } from "./leveldb/instance";
import { LevelDBInternal } from "./leveldb/internal";
import { wrappedKeyEncryptionStorage } from "@pluto-encrypted/encryption";

export type * from './leveldb/types';


export type { MangoQuerySelectorAndIndex, CRDTSchemaOptions, RxQueryPlanKey, PrimaryKey, StringKeys, TopLevelProperty, MangoQuerySortDirection } from "rxdb/dist/types/types";
export type { DefaultPreparedQuery, RxJsonSchema, FilledMangoQuery, CompressionMode, RxQueryPlan, MangoQuery, MangoQueryNoLimit, MangoQuerySortPart } from 'rxdb'
export type { Level } from 'level'
let internalInstance: LevelDBInternal<any>
export const RX_STORAGE_NAME_LEVELDB = 'leveldb';
let levelDBInstance: RxStorageLevelDBType<any>;

async function preloadData<RxDocType>(constructorProps: LevelDBInternalConstructor<RxDocType>) {
    try {
        const internalStorage = new LevelDBInternal<RxDocType>(constructorProps);
        await internalStorage.getDocuments([]);
        return internalStorage
    } catch (err) {
        throw err
    }
}

function getRxStorageLevel<RxDocType>(settings: LevelDBSettings): RxStorageLevelDBType<RxDocType> {
    if (true) {
        levelDBInstance = {
            name: RX_STORAGE_NAME_LEVELDB,
            statics: RxStorageDefaultStatics,
            async createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, LevelDBSettings>): Promise<RxStorageInstance<RxDocType, LevelDBStorageInternals<RxDocType>, LevelDBSettings, any>> {
                const levelDBConstructorProps: LevelDBInternalConstructor<RxDocType> = "level" in settings ?
                    {
                        level: settings.level,
                        refCount: 1,
                        schema: params.schema,
                    }
                    :
                    {
                        dbPath: settings.dbPath,
                        refCount: 1,
                        schema: params.schema,
                    };

                if (!internalInstance) {
                    internalInstance = await preloadData<RxDocType>(levelDBConstructorProps);
                } else {
                    internalInstance.refCount++
                }

                const rxStorageInstance = new RxStorageIntanceLevelDB<RxDocType>(
                    this,
                    params.databaseName,
                    params.collectionName,
                    params.schema,
                    internalInstance,
                    settings
                )

                return rxStorageInstance
            }
        }
    }
    else {
        console.warn('already got an instance')
    }

    return levelDBInstance
}


export function createLevelDBStorage(settings: LevelDBSettings) {
    const storage: RxStorage<any, any> = wrappedKeyEncryptionStorage({
        storage: getRxStorageLevel(settings)
    })
    return storage
}
