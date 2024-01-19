/**
 * @packageDocumentation
 * @module indexdb
 * @description This is a RXDB IndexDB storage that supports encryption middleware.
 * In order to use this in your pluto-encrypted database you must write the following code:
 * Creating a IndexDB compatible storage is very simple.
 * 
 * ```typescript
 * import IndexDB from "@pluto-encrypted/indexdb";
 * import { Database } from "@pluto-encrypted/database";
 * //default password must be 32 bytes long
 * const defaultPassword = new Uint8Array(32).fill(1);
 * const database = db = await Database.createEncrypted({
 *          name: `my-db`,
 *          encryptionKey: defaultPassword,
 *          storage: IndexDB,
 * });
 * ```
 *
 */

import { wrappedKeyEncryptionStorage } from '@pluto-encrypted/encryption'
import { RxStorage, RxStorageDefaultStatics, RxStorageInstanceCreationParams, newRxError } from 'rxdb'

import { IagonStorageInstance } from './instance'
import { IagonInternalParameters, IagonStorageInternals } from './types'
import { IagonInternals } from './internals'

class IagonStorage<
  RxDocType,
>{
  public name = "iagon"
  public statics = RxStorageDefaultStatics;
  public internalInstance: Map<string, IagonInternals<RxDocType>> = new Map()
  public refCount = 0;

  constructor(
    private settings: IagonInternalParameters,
  ) { }

  async createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, any>) {
    if (params.schema.keyCompression) {
      throw newRxError('UT5', { args: { databaseName: params.databaseName, collectionName: params.collectionName } })
    }
    this.refCount++;

    const internals = new IagonInternals<any>(this.settings, this.refCount)
    await internals.initialiseDB(params.databaseName, params.collectionName)

    return new IagonStorageInstance<any>(
      params.databaseName,
      internals,
      params.options,
      params.schema,
      params.collectionName
    );
  }
}

export function createIagonStorage(parameters: IagonInternalParameters) {
  const storage: RxStorage<any, any> = new IagonStorage<any>(parameters)
  return wrappedKeyEncryptionStorage({
    storage: storage
  });
}
