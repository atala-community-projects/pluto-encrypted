import { wrappedKeyEncryptionCryptoJsStorage } from "rxdb/plugins/encryption-crypto-js";
import { RxStorage, RxStorageDefaultStatics, RxStorageInstance, RxStorageInstanceCreationParams } from "rxdb";
import { LevelDBInternalConstructor, LevelDBSettings, LevelDBStorageInternals, RxStorageLevelDBType } from "./leveldb/types";

import { RxStorageIntanceLevelDB } from "./leveldb/instance";
import { LevelDBInternal } from "./leveldb/internal";

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
    if (!levelDBInstance) {
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
    const storage: RxStorage<any, any> = wrappedKeyEncryptionCryptoJsStorage({
        storage: getRxStorageLevel(settings)
    })
    return storage
}
