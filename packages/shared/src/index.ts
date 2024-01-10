/**
 * @packageDocumentation
 * 
 * @module shared
 * @description Shared is used by other dependencies of pluto-encrypted to reduce code duplication.
 *
 */
import { RxDBEncryptedMigrationPlugin } from '@pluto-encrypted/encryption'
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump'
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder'
import { CollectionsOfDatabase, RxCollectionCreator, addRxPlugin, createRxDatabase, removeRxDatabase, type MangoQuerySelector, type RxDocumentData, type RxJsonSchema, RxDatabase, RxDatabaseCreator, RxDumpDatabase, RxStorage } from 'rxdb'
export type { RxDocumentMeta, PlainJsonValue, PropertyType, PlainSimpleJsonObject } from 'rxdb/dist/types/types'
export type { MangoQuerySelector, RxAttachmentDataBase, MangoQueryOperators, RxDocumentData, RxAttachmentData } from 'rxdb'

export interface DocWithIndexString<RxDocType> {
  id: string
  doc: RxDocumentData<RxDocType>
  indexString: string
}

export function compareDocsWithIndex<RxDocType>(
  a: DocWithIndexString<RxDocType>,
  b: DocWithIndexString<RxDocType>
): 1 | 0 | -1 {
  if (a.indexString < b.indexString) {
    return -1
  } else if (a.indexString === b.indexString) {
    return 0
  } else {
    return 1
  }
}

export function conditionMatches<RxDocType>(selector: MangoQuerySelector<RxDocType>, key: string, document: RxDocumentData<RxDocType>) {
  if (key === '$and') {
    const matchingSelector = selector[key]!
    const matches = Object.values(matchingSelector).every((condition) => {
      const [conditionKey] = Object.keys(condition)
      const [conditionValue] = Object.values(condition)
      if (conditionKey === '$or') {
        return conditionValue!.some((orSelector) => {
          return conditionMatches(orSelector, '$or', document)
        })
      } else if (conditionKey === '$and') {
        return conditionValue!.every((orSelector) => conditionMatches(orSelector, '$or', document))
      } else if (document[conditionKey!] === conditionValue) {
        return true
      }

      return false
    })
    if (matches) {
      return true
    }
  } else if (key === '$or') {
    const matchingSelector = Object.keys(selector)
    const atLeastOneMatching = matchingSelector.find((conditionKey) => {
      if (conditionKey === '$or') {
        const matchingOrKey = selector[conditionKey]?.find((orKey) => {
          const [orKeyName] = Object.keys(orKey)
          const [orKeyValue] = Object.values(orKey)
          return document[orKeyName!] === orKeyValue
        })
        if (matchingOrKey) {
          return true
        }
      } else if (conditionKey === '$and') {
        const matchingAndKey = selector[conditionKey]?.find((andKey) => {
          const [andKeyName] = Object.keys(andKey)
          const [andKeyValue] = Object.values(andKey)
          return document[andKeyName!] === andKeyValue
        })
        if (matchingAndKey) {
          return true
        }
      } else {
        const conditionValue = selector[conditionKey]
        if (document[conditionKey] === conditionValue) {
          return true
        }
      }
      return false
    })
    if (atLeastOneMatching) {
      return true
    }
  } else {
    const selectorValue = selector[key]
    if (typeof selectorValue === 'object') {
      const selectorQueries = Object.keys(selectorValue)
      const [value] = Object.values(selector[key])
      for (const selectorQuery of selectorQueries) {
        if (selectorQuery === '$eq') {
          if (document[key] === value) {
            return true
          }
        }
      }
    }
  }
  return false
}

type Compare<T> = ((a: T, b: T) => number | null | undefined)

function ge<T>(a: T[], y: T, c: Compare<T>, l?: any, h?: any): number {
  let i: number = h + 1
  while (l <= h) {
    const m = (l + h) >>> 1
    const x: any = a[m]
    const p: any = (c !== undefined) ? c(x, y) : (x - (y as any))
    if (p >= 0) {
      i = m; h = m - 1
    } else {
      l = m + 1
    }
  }
  return i
}

function gt<T>(a: T[], y: T, c: Compare<T>, l?: any, h?: any): number {
  let i = h + 1
  while (l <= h) {
    const m = (l + h) >>> 1
    const x = a[m]
    const p: any = (c !== undefined) ? c(x!, y) : ((x as any) - (y as any))
    if (p > 0) {
      i = m; h = m - 1
    } else {
      l = m + 1
    }
  }
  return i
}

function lt<T>(a: T[], y: T, c: Compare<T>, l?: any, h?: any): number {
  let i = l - 1
  while (l <= h) {
    const m = (l + h) >>> 1; const x = a[m]
    const p: any = (c !== undefined) ? c(x!, y) : ((x as any) - (y as any))
    if (p < 0) {
      i = m; l = m + 1
    } else {
      h = m - 1
    }
  }
  return i
}

function le<T>(a: T[], y: T, c: Compare<T>, l?: any, h?: any): number {
  let i = l - 1
  while (l <= h) {
    const m = (l + h) >>> 1; const x = a[m]
    const p: any = (c !== undefined) ? c(x!, y) : ((x as any) - (y as any))
    if (p <= 0) {
      i = m; l = m + 1
    } else {
      h = m - 1
    }
  }
  return i
}

function eq<T>(a: T[], y: T, c: Compare<T>, l?: any, h?: any): number {
  while (l <= h) {
    const m = (l + h) >>> 1; const x = a[m]
    const p: any = (c !== undefined) ? c(x!, y) : ((x as any) - (y as any))
    if (p === 0) {
      return m
    }
    if (p <= 0) {
      l = m + 1
    } else {
      h = m - 1
    }
  }
  return -1
}

function norm<T>(a: T[], y: T, c: Compare<T>, l: any, h: any, f: any) {
  if (typeof c === 'function') {
    return f(a, y, c, (l === undefined) ? 0 : l | 0, (h === undefined) ? a.length - 1 : h | 0)
  }
  return f(a, y, undefined, (c === undefined) ? 0 : c | 0, (l === undefined) ? a.length - 1 : l | 0)
}

export function boundGE<T>(a: T[], y: T, c: Compare<T>, l?: any, h?: any) {
  return norm(a, y, c, l, h, ge)
}
export function boundGT<T>(a: T[], y: T, c: Compare<T>, l?: any, h?: any) {
  return norm(a, y, c, l, h, gt)
}
export function boundLT<T>(a: T[], y: T, c: Compare<T>, l?: any, h?: any) {
  return norm(a, y, c, l, h, lt)
}
export function boundLE<T>(a: T[], y: T, c: Compare<T>, l?: any, h?: any) {
  return norm(a, y, c, l, h, le)
}
export function boundEQ<T>(a: T[], y: T, c: Compare<T>, l?: any, h?: any) {
  return norm(a, y, c, l, h, eq)
}

export function fixTxPipe(str: string): string {
  const split = str.split('.')
  if (split.length > 1) {
    return split.map(part => fixTxPipe(part)).join('.')
  }

  return str
}

export function safeIndexList<RxDocType>(schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>) {
  const primaryKeyKey = typeof schema.primaryKey === 'string' ? schema.primaryKey : schema.primaryKey.key

  const allIndexes: string[][] = []
  for (const requiredIndexes of (schema.indexes ?? [])) {
    const currentIndexes: string[] = []
    if (typeof requiredIndexes === 'string') {
      currentIndexes.push(requiredIndexes)
    } else {
      currentIndexes.push(...requiredIndexes)
    }
    if (!currentIndexes.includes(primaryKeyKey)) {
      currentIndexes.unshift(primaryKeyKey)
    }
    allIndexes.push(currentIndexes)
  }

  return allIndexes
}

export function getPrivateKeyValue<RxDocType>(document: RxDocumentData<RxDocType>, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>) {
  const primaryKeyKey = typeof schema.primaryKey === 'string' ? schema.primaryKey : schema.primaryKey.key
  if (!primaryKeyKey) {
    throw new Error('Data must have a primaryKey defined of type string or number')
  }
  const id = document[primaryKeyKey] as string
  return id
}

export type ValuesOf<T> = T[keyof T]
export type DBOptions = RxDatabaseCreator;


export class DatabaseBase<Collections = CollectionsOfDatabase>  {
  private _db!: RxDatabase<Collections, any, any>

  get db() {
    if (!this._db) {
      throw new Error('Start Pluto first.')
    }
    return this._db
  }

  getCollection(name: string) {
    if (!this.db.collections[name]) {
      throw new Error("Collection does not exist")
    }
    return this.db.collections[name]
  }

  constructor(
    private readonly dbOptions: DBOptions
  ) {
    addRxPlugin(RxDBQueryBuilderPlugin)
    addRxPlugin(RxDBJsonDumpPlugin)
    addRxPlugin(RxDBEncryptedMigrationPlugin)
  }

  async backup() {
    return await this.db.exportJSON()
  }

  /**
   * Use with caution, this will remove all entries from database
   * and then destroy the database itself.
   */
  async clear() {
    const storages = Array.from(this.db.storageInstances.values())
    for (const storage of storages) {
      await storage.cleanup(Infinity)
    }
    await removeRxDatabase(this.dbOptions.name, this.db.storage)
  }

  /**
   * Start the database and build collections
   */
  async start(collections?: {
    [name: string]: RxCollectionCreator<any>
  }): Promise<void> {
    const { dbOptions } = this
    const database = await createRxDatabase<Collections>({
      ...dbOptions,
      multiInstance: false
    })
    const extendedCollections = collections ? collections : {};
    await database.addCollections(extendedCollections);

    this._db = database
  }
}