/**
 * @packageDocumentation
 * @module database
 */
import SDK from '@atala/prism-wallet-sdk'
import { getDefaultCollections } from '@pluto-encrypted/schemas'
import { DatabaseBase } from '@pluto-encrypted/shared'
import {
  CollectionsOfDatabase,
  RxCollection,
  RxCollectionCreator,
  RxDumpDatabase,
  RxError,
  RxStorage
} from 'rxdb'

export type * from './types'

/**
 * Pluto is a storage interface describing storage requirements of the edge agents
 * which will be implemented using this SDK. Implement this interface using your
 * preferred underlying storage technology, most appropriate for your use case.
 */
export const Database = {
  createBaseEncrypted: async function createBaseEncrypted<
    Collections extends CollectionsOfDatabase,
  >(options: {
    name: string;
    encryptionKey: Uint8Array;
    importData?: RxDumpDatabase<Collections>;
    storage: RxStorage<any, any>;
    autoStart?: boolean;
    collections?: {
      [key in keyof Collections]: RxCollectionCreator<any>;
    };
  }) {

    const {
      name,
      storage,
      encryptionKey,
      importData,
      autoStart = true,
      collections
    } = options

    if (!storage) {
      throw new Error('Please provide a valid storage.')
    }

    const instance = new DatabaseBase<Collections>({
      ignoreDuplicate: true,
      name,
      storage,
      password: Buffer.from(encryptionKey).toString('hex')
    })

    if (autoStart) {
      await instance.start(collections)
    }

    if (importData) {
      await instance.db.importJSON(importData)
    }

    return instance
  },
  createEncrypted: async function createEncrypted<
    Collections extends CollectionsOfDatabase,
    ExtendedCollections extends CollectionsOfDatabase = Collections & ReturnType<typeof getDefaultCollections>
  >(options: {
    name: string;
    encryptionKey: Uint8Array;
    importData?: RxDumpDatabase<ExtendedCollections>;
    storage: RxStorage<any, any>;
    autoStart?: boolean;
    collections?: {
      [key in keyof (ExtendedCollections)]: RxCollectionCreator<any>;
    };
  }): Promise<DatabaseBase<ExtendedCollections> & SDK.Domain.Pluto> {
    try {

      const instance = await this.createBaseEncrypted<ExtendedCollections>({
        ...options
      })

      const currentCollections = instance.db.collections;
      const collectionKeys = Object.keys(currentCollections)

      const staticMethodModels = collectionKeys.reduce<Map<string, Function>>((statics, collectionName) => {
        const currentCollection: RxCollection = instance.getCollection(collectionName);
        Object.keys(currentCollection.statics).forEach((staticName) => {
          const func = currentCollection.statics[staticName]!;
          if (statics.has(staticName)) {
            throw new Error(`Static function in model ${collectionName}.${staticName} is duplicated, statics must be unique across al collections.`)
          }
          statics.set(staticName, func)
        })
        return statics
      }, new Map<string, Function>());

      const proxy = new Proxy<DatabaseBase<ExtendedCollections> & SDK.Domain.Pluto>(instance as any, {
        get(target, prop) {
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