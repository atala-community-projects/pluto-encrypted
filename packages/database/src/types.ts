import { type RxJsonSchema } from 'rxdb'
import { RxCollectionCreator, RxDatabase, RxDatabaseCreator, type MangoQuery, type MangoQueryNoLimit, type RxCollection, type RxDocument, type RxDumpDatabase, type RxStorage } from 'rxdb/dist/types/types'
import { type CredentialCollection } from './schemas/Credential'
import { type CredentialRequestMetadataCollection } from './schemas/CredentialRequestMetadata'
import { type DIDCollection } from './schemas/DID'
import { type DIDPairCollection } from './schemas/DIDPair'
import { type LinkSecretColletion } from './schemas/LinkSecret'
import { type MediatorCollection } from './schemas/Mediator'
import { type MessageColletion } from './schemas/Message'
import { type PrivateKeyColletion } from './schemas/PrivateKey'

export type NoKeys<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
}

export type Schema<T> = RxJsonSchema<T> & {
  encrypted: Array<keyof T>
}

export interface GenericORMType<RxDocType> extends RxCollection<any, any, any> {
  count: (this: RxCollection<any, any, any>, query: MangoQuery<any> | undefined) => Promise<number>
  findByIds: (this: RxCollection<any, any, any>, ids: string[]) => Map<string, RxDocument>
  find: (queryObj?: MangoQueryNoLimit<any> | string) => Array<RxDocument<RxDocType, any>>
  findOne: (queryObj?: MangoQueryNoLimit<any> | string) => RxDocument<RxDocType, any> | null
  remove: (queryObj?: MangoQueryNoLimit<any> | string) => Array<RxDocument<RxDocType, any>>
}

export interface PlutoCollections {
  messages: MessageColletion
  dids: DIDCollection
  didpairs: DIDPairCollection
  mediators: MediatorCollection
  privatekeys: PrivateKeyColletion
  credentials: CredentialCollection
  credentialrequestmetadatas: CredentialRequestMetadataCollection
  linksecrets: LinkSecretColletion
}

export interface createEncryptedOptions {
  name: string
  encryptionKey: Uint8Array
  importData?: RxDumpDatabase<PlutoCollections>
  storage: RxStorage<any, any>
}

export type ValuesOf<T> = T[keyof T]
export type DatabaseCreateOptions<CreatedCollections> = {
  name: string
  encryptionKey: Uint8Array
  importData?: RxDumpDatabase<ExtendedCollections<CreatedCollections>>
  storage: RxStorage<any, any>
  autoStart?: boolean
  collections?: {
    [key in keyof CreatedCollections]: RxCollectionCreator<any>
  }
}
export type DBOptions = RxDatabaseCreator;
export type ExtendedCollections<T> = PlutoCollections & { [key in keyof T]: ValuesOf<T> }
export type PlutoDatabase<Collections> = RxDatabase<ExtendedCollections<Collections>>