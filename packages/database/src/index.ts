/**
 * @packageDocumentation
 * @module database
 */
import SDK from '@atala/prism-wallet-sdk'
import { DatabaseCreateOptions, PlutoCollections, getDefaultCollections } from '@pluto-encrypted/schemas'
import { DatabaseBase } from '@pluto-encrypted/shared'
import {
  CollectionsOfDatabase,
  RxCollection,
  RxError
} from 'rxdb'

export type * from './types'

/**
 * Pluto is a storage interface describing storage requirements of the edge agents
 * which will be implemented using this SDK. Implement this interface using your
 * preferred underlying storage technology, most appropriate for your use case.
 */
export const Database = {
  createEncrypted: async function createEncrypted<
    Collections = CollectionsOfDatabase
  >(options: DatabaseCreateOptions<Collections & PlutoCollections>): Promise<DatabaseBase<Collections & PlutoCollections, PlutoCollections> & SDK.Domain.Pluto> {
    try {
      const { name, storage, encryptionKey, importData, autoStart = true, collections, withDefaultCollections = true } = options
      if (!storage) {
        throw new Error('Please provide a valid storage.')
      }

      const instance = new DatabaseBase<Collections & PlutoCollections, PlutoCollections>({
        ignoreDuplicate: true,
        name,
        storage,
        password: Buffer.from(encryptionKey).toString('hex')
      })

      if (withDefaultCollections) {
        instance.defaultCollections = getDefaultCollections()
      }

      if (autoStart) {
        await instance.start(collections)
      }

      if (importData) {
        await instance.db.importJSON(importData)
      }

      const proxy = new Proxy<DatabaseBase<Collections & PlutoCollections, PlutoCollections> & SDK.Domain.Pluto>(instance as any, {
        get(target, prop) {
          const staticMethodModels = Object.keys(target.db.collections).reduce<Map<string, Function>>((statics, collectionName) => {
            const currentCollection: RxCollection = target.db.collections[collectionName];
            Object.keys(currentCollection.statics).forEach((staticName) => {
              const func = currentCollection.statics[staticName];
              if (statics.has(staticName)) {
                throw new Error(`Static function in model ${collectionName}.${staticName} is duplicated, statics must be unique across al collections.`)
              }
              if (func && typeof func === "function") {
                statics.set(staticName, func)
              }
            })
            return statics
          }, new Map<string, Function>())
          if (typeof target[prop] === 'function') {
            // If the property is a function, return a function that calls it
            return function (...args) {
              return target[prop].apply(target, args);
            };
          } else {
            if (staticMethodModels.has(prop.toString())) {
              return staticMethodModels.get(prop.toString())
            }
            return target[prop];
          }
        },
      })


      return proxy;
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
}