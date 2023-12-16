

import { RxStorage, RxStorageDefaultStatics, RxStorageInstance, RxStorageInstanceCreationParams } from "rxdb";
import { InMemorySettings, InMemoryStorageInternals, RxStorageInMemoryType } from "./inMemoryStorage/types";
import { RxStorageIntanceInMemory } from "./inMemoryStorage/instance";
import { InMemoryInternal } from "./inMemoryStorage/internal";
import { wrappedKeyEncryptionStorage } from "@pluto-encrypted/encryption";

let inMemoryInstance: RxStorageInMemoryType<any>;
let internalInstance: InMemoryInternal<any>


function getRxStorageMemory<RxDocType>(settings: InMemorySettings = {}): RxStorageInMemoryType<RxDocType> {
    if (!inMemoryInstance) {
        inMemoryInstance = {
            name: "in-memory",
            statics: RxStorageDefaultStatics,
            async createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, InMemorySettings>): Promise<RxStorageInstance<RxDocType, InMemoryStorageInternals<RxDocType>, InMemorySettings, any>> {
                if (!internalInstance) {
                    internalInstance = new InMemoryInternal<RxDocType>(0)
                } else {
                    internalInstance.refCount++
                }
                return new RxStorageIntanceInMemory(
                    this,
                    params.databaseName,
                    params.collectionName,
                    params.schema,
                    internalInstance,
                    settings
                )
            }
        }
    }

    return inMemoryInstance
}

const storage: RxStorage<any, any> = wrappedKeyEncryptionStorage({
    storage: getRxStorageMemory()
})

export default storage;