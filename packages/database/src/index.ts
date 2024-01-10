/**
 * 
 * @packageDocumentation
 * @module database
 */
import SDK from '@atala/prism-wallet-sdk'
import { getDefaultCollections } from '@pluto-encrypted/schemas'
import { DatabaseBase, ValuesOf } from '@pluto-encrypted/shared'
import {
  CollectionsOfDatabase,
  RxCollection,
  RxCollectionCreator,
  RxDumpDatabase,
  RxError,
  RxStorage
} from 'rxdb'

export type * from './types'

type ExtractDTcol2<P> = P extends RxCollectionCreator<infer T> ? T : any

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
    ExtendedCollections extends CollectionsOfDatabase = Collections & { [key in keyof ReturnType<typeof getDefaultCollections>]: RxCollection<ExtractDTcol2<ValuesOf<typeof getDefaultCollections>[key]>> },
    STATIC_RETURN = ExtendedCollections[keyof ExtendedCollections]['statics']
  >(options: {
    name: string;
    encryptionKey: Uint8Array;
    importData?: RxDumpDatabase<ExtendedCollections>;
    storage: RxStorage<any, any>;
    autoStart?: boolean;
    withDefaultCollections?: boolean;
    collections?: {
      [key in keyof Collections]: RxCollectionCreator<any>;
    };
  }): Promise<DatabaseBase<ExtendedCollections> & SDK.Domain.Pluto & STATIC_RETURN> {
    try {
      const { withDefaultCollections = true, collections } = options;
      const collectionMap = new Map<any, RxCollectionCreator<any>>();

      if (withDefaultCollections) {
        const defaultCollections = getDefaultCollections()
        Object.keys(getDefaultCollections()).forEach((collectionName) => {
          const currentCollection = defaultCollections[collectionName];
          if (currentCollection) {
            collectionMap.set(collectionName, currentCollection)
          }
        });
      }

      if (collections) {
        Object.keys(collections).forEach((collectionName) => {
          const currentCollection = collections[collectionName];
          if (currentCollection) {
            collectionMap.set(collectionName, currentCollection)
          }
        })
      }


      const instance = await this.createBaseEncrypted<ExtendedCollections>({
        ...options,
        collections: Object.fromEntries(collectionMap)
      });

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

      const proxy = new Proxy<DatabaseBase<ExtendedCollections> & SDK.Domain.Pluto & STATIC_RETURN>(instance as any, {
        get(target, propAny) {
          const prop = String(propAny)
          const destination = target[prop]
          if (typeof destination === 'function') {
            // If the property is a function, return a function that calls it
            return function (...args) {
              return destination.apply(target, args);
            };
          } else {
            if (staticMethodModels.has(prop.toString())) {
              return staticMethodModels.get(prop.toString())
            }
            return destination;
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