/**
 * @packageDocumentation
 * @module inmemory
 * @description This is a RXDB InMemory storage that supports encryption middleware.
 * In order to use this in your pluto-encrypted database you must write the following code:
 * Creating a InMemory compatible storage is very simple.
 *
 * ```typescript
 * import InMemory from "@pluto-encrypted/inmemory";
 * import { Database } from "@pluto-encrypted/database";
 * //default password must be 32 bytes long
 * const defaultPassword = new Uint8Array(32).fill(1);
 * const database = db = await Database.createEncrypted({
 *          name: `my-db`,
 *          encryptionKey: defaultPassword,
 *          storage: InMemory,
 * });
 * ```
 */
import { type RxStorage, RxStorageDefaultStatics, type RxStorageInstance, type RxStorageInstanceCreationParams, newRxError } from 'rxdb'
import { type InMemorySettings, type InMemoryStorageInternals, type RxStorageInMemoryType } from './inMemoryStorage/types'
import { RxStorageIntanceInMemory } from './inMemoryStorage/instance'
import { InMemoryInternal } from './inMemoryStorage/internal'
import { wrappedKeyEncryptionStorage } from '@pluto-encrypted/encryption'

const internalInstance = new Map<string, InMemoryInternal<any>>()

function getRxStorageMemory<RxDocType> (settings: InMemorySettings = {}): RxStorageInMemoryType<RxDocType> {
  const inMemoryInstance: RxStorageInMemoryType<any> = {
    name: 'in-memory',
    statics: RxStorageDefaultStatics,
    async createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, InMemorySettings>): Promise<RxStorageInstance<RxDocType, InMemoryStorageInternals<RxDocType>, InMemorySettings, any>> {
      if (params.schema.keyCompression) {
        throw newRxError('UT5', { args: { databaseName: params.databaseName, collectionName: params.collectionName } })
      }
      const existingInstance = internalInstance.get(params.databaseName)
      if (!existingInstance) {
        internalInstance.set(params.databaseName, new InMemoryInternal<RxDocType>(0))
      } else {
        existingInstance.refCount++
        internalInstance.set(params.databaseName, existingInstance)
      }
      return new RxStorageIntanceInMemory(
        this,
        params.databaseName,
        params.collectionName,
        params.schema,
        internalInstance.get(params.databaseName)!,
        settings
      )
    }
  }
  return inMemoryInstance
}

/**
 * InMemory storage
 * @description Use this as storage in our RXDB database. For now there is no initialisation settings, so you can use it out of the box.
 */
const storage: RxStorage<any, any> = wrappedKeyEncryptionStorage({
  storage: getRxStorageMemory()
})

export default storage
