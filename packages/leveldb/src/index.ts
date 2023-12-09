import { wrappedKeyEncryptionCryptoJsStorage } from "rxdb/plugins/encryption-crypto-js";
import { RxStorage, RxStorageDefaultStatics, RxStorageInstance, RxStorageInstanceCreationParams } from "rxdb";
import { LevelDBSettings, LevelDBStorageInternals, RxStorageLevelDBType } from "./leveldb/types";

import { RxStorageIntanceLevelDB } from "./leveldb/instance";
import { LevelDBInternal } from "./leveldb/internal";

let internalInstance: LevelDBInternal<any>

function getRxStorageLevel<RxDocType>(settings: LevelDBSettings): RxStorageLevelDBType<RxDocType> {
    const levelDBInstance: RxStorageLevelDBType<any> = {
        name: "leveldb",
        statics: RxStorageDefaultStatics,
        async createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, LevelDBSettings>): Promise<RxStorageInstance<RxDocType, LevelDBStorageInternals<RxDocType>, LevelDBSettings, any>> {
            if (!internalInstance) {
                internalInstance = new LevelDBInternal<RxDocType>(0, settings.dbName)
                await internalInstance.getDocuments();
            }
            return new RxStorageIntanceLevelDB(
                this,
                params.databaseName,
                params.collectionName,
                params.schema,
                internalInstance,
                settings
            )
        }
    }

    return levelDBInstance
}


export function createLevelDBStorage(settings: LevelDBSettings) {
    const storage: RxStorage<any, any> = wrappedKeyEncryptionCryptoJsStorage({
        storage: getRxStorageLevel(settings)
    })
    return storage
}