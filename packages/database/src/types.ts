import { PlutoCollections } from '@pluto-encrypted/schemas'
import { type MangoQuery, type MangoQueryNoLimit, type RxCollection, type RxDocument, type RxDumpDatabase, type RxStorage } from 'rxdb/dist/types/types'

export type NoKeys<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
}



export interface GenericORMType<RxDocType> extends RxCollection<any, any, any> {
  count: (this: RxCollection<any, any, any>, query: MangoQuery<any> | undefined) => Promise<number>
  findByIds: (this: RxCollection<any, any, any>, ids: string[]) => Map<string, RxDocument>
  find: (queryObj?: MangoQueryNoLimit<any> | string) => Array<RxDocument<RxDocType, any>>
  findOne: (queryObj?: MangoQueryNoLimit<any> | string) => RxDocument<RxDocType, any> | null
  remove: (queryObj?: MangoQueryNoLimit<any> | string) => Array<RxDocument<RxDocType, any>>
}


export interface createEncryptedOptions {
  name: string
  encryptionKey: Uint8Array
  importData?: RxDumpDatabase<PlutoCollections>
  storage: RxStorage<any, any>
}


