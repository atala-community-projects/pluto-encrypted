import { type RxStorage, type RxStorageInstanceCreationParams, ensureRxStorageInstanceParamsAreCorrect, newRxError } from 'rxdb'
import { type DexieSettings } from 'rxdb/dist/types/types'

import { type DexieStorageInternals, RX_STORAGE_NAME_DEXIE, RxStorageDexieStatics, ensureNoBooleanIndex } from './dexie-helper'
import { type RxStorageInstanceDexie, createDexieStorageInstance } from './rx-storage-instance-dexie'

export class RxStorageDexie implements RxStorage<DexieStorageInternals, DexieSettings> {
  public name = RX_STORAGE_NAME_DEXIE
  public statics = RxStorageDexieStatics

  constructor (
    public settings: DexieSettings
  ) { }

  public async createStorageInstance<RxDocType>(
    params: RxStorageInstanceCreationParams<RxDocType, DexieSettings>
  ): Promise<RxStorageInstanceDexie<RxDocType>> {
    if (params.schema.keyCompression) {
      throw newRxError('UT5', { args: { databaseName: params.databaseName, collectionName: params.collectionName } })
    }

    ensureRxStorageInstanceParamsAreCorrect(params)
    ensureNoBooleanIndex(params.schema)

    const instance = await createDexieStorageInstance(this, params, this.settings)
    return instance
  }
}

export function getRxStorageDexie (
  settings: DexieSettings = {}
): RxStorageDexie {
  return new RxStorageDexie(settings)
}
