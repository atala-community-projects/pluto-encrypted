import {
  Subject,
  type Observable
} from 'rxjs'

import { now, type RxStorageInstance, type RxStorageDefaultCheckpoint, type StringKeys, type RxDocumentData, type EventBulk, type RxStorageChangeEvent, type RxJsonSchema, getPrimaryFieldOfPrimaryKey, type BulkWriteRow, type RxStorageBulkWriteResponse, newRxError, type CategorizeBulkWriteRowsOutput, categorizeBulkWriteRows, PROMISE_RESOLVE_VOID, ensureNotFalsy, type RxDocumentDataById, type DefaultPreparedQuery, type RxStorageQueryResult, type RxStorageCountResult, RX_META_LWT_MINIMUM, appendToArray, sortDocumentsByLastWriteTime, lastOfArray, type RxConflictResultionTask, type RxStorageInstanceCreationParams } from 'rxdb'
import { type DexieSettings } from 'rxdb/dist/types/types'
import { getDocsInDb, fromDexieToStorage, fromStorageToDexie, closeDexieDb, getDexieDbWithTables, type DexieStorageInternals } from './dexie-helper'
import { dexieQuery } from './dexie-query'
import { type RxStorageDexie } from './rx-storage-dexie'

let instanceId = now()

export class RxStorageInstanceDexie<RxDocType> implements RxStorageInstance<
RxDocType,
DexieStorageInternals,
DexieSettings,
RxStorageDefaultCheckpoint
> {
  public readonly primaryPath: StringKeys<RxDocumentData<RxDocType>>
  private readonly changes$ = new Subject<EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, RxStorageDefaultCheckpoint>>()
  public readonly instanceId = instanceId++
  public closed = false

  constructor (
    public readonly storage: RxStorageDexie,
    public readonly databaseName: string,
    public readonly collectionName: string,
    public readonly schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>,
    public readonly internals: DexieStorageInternals,
    public readonly options: Readonly<DexieSettings>,
    public readonly settings: DexieSettings
  ) {
    this.primaryPath = getPrimaryFieldOfPrimaryKey(this.schema.primaryKey)
  }

  async bulkWrite (
    documentWrites: Array<BulkWriteRow<RxDocType>>,
    context: string
  ): Promise<RxStorageBulkWriteResponse<RxDocType>> {
    ensureNotClosed(this)

    /**
     * Check some assumptions to ensure RxDB
     * does not call the storage with an invalid write.
     */
    documentWrites.forEach(row => {
      // ensure revision is set
      if (
        !row.document._rev ||
        (
          row.previous &&
          !row.previous._rev
        )
      ) {
        throw newRxError('SNH', { args: { row } })
      }
    })

    const state = await this.internals
    const ret: RxStorageBulkWriteResponse<RxDocType> = {
      success: {},
      error: {}
    }

    const documentKeys: string[] = documentWrites.map(writeRow => writeRow.document[this.primaryPath] as any)
    let categorized: CategorizeBulkWriteRowsOutput<RxDocType> | undefined
    await state.dexieDb.transaction(
      'rw',
      state.dexieTable,
      state.dexieDeletedTable,
      async () => {
        const docsInDbMap = new Map<string, RxDocumentData<RxDocType>>()
        const docsInDbWithInternals = await getDocsInDb<RxDocType>(this.internals, documentKeys)
        docsInDbWithInternals.forEach(docWithDexieInternals => {
          const doc = docWithDexieInternals ? fromDexieToStorage(docWithDexieInternals) : docWithDexieInternals
          if (doc) {
            docsInDbMap.set(doc[this.primaryPath], doc)
          }
          return doc
        })

        categorized = categorizeBulkWriteRows<RxDocType>(
          this,
          this.primaryPath as any,
          docsInDbMap,
          documentWrites,
          context
        )
        ret.error = categorized.errors

        /**
                 * Batch up the database operations
                 * so we can later run them in bulk.
                 */
        const bulkPutDocs: any[] = []
        const bulkRemoveDocs: string[] = []
        const bulkPutDeletedDocs: any[] = []
        const bulkRemoveDeletedDocs: string[] = []

        categorized.bulkInsertDocs.forEach(row => {
          const docId: string = (row.document as any)[this.primaryPath]
          ret.success[docId] = row.document as any
          bulkPutDocs.push(row.document)
        })
        categorized.bulkUpdateDocs.forEach(row => {
          const docId: string = (row.document as any)[this.primaryPath]
          ret.success[docId] = row.document as any
          if (
            row.document._deleted &&
            (row.previous && !row.previous._deleted)
          ) {
            // newly deleted
            bulkRemoveDocs.push(docId)
            bulkPutDeletedDocs.push(row.document)
          } else if (
            row.document._deleted &&
            row.previous && row.previous._deleted
          ) {
            // deleted was modified but is still deleted
            bulkPutDeletedDocs.push(row.document)
          } else if (!row.document._deleted) {
            // non-deleted was changed
            bulkPutDocs.push(row.document)
          } else {
            throw newRxError('SNH', { args: { row } })
          }
        })

        await Promise.all([
          bulkPutDocs.length > 0 ? state.dexieTable.bulkPut(bulkPutDocs.map(d => fromStorageToDexie(d))) : PROMISE_RESOLVE_VOID,
          bulkRemoveDocs.length > 0 ? state.dexieTable.bulkDelete(bulkRemoveDocs) : PROMISE_RESOLVE_VOID,
          bulkPutDeletedDocs.length > 0 ? state.dexieDeletedTable.bulkPut(bulkPutDeletedDocs.map(d => fromStorageToDexie(d))) : PROMISE_RESOLVE_VOID,
          bulkRemoveDeletedDocs.length > 0 ? state.dexieDeletedTable.bulkDelete(bulkRemoveDeletedDocs) : PROMISE_RESOLVE_VOID
        ])
      })

    categorized = ensureNotFalsy(categorized)
    if (categorized.eventBulk.events.length > 0) {
      const lastState = ensureNotFalsy(categorized.newestRow).document
      categorized.eventBulk.checkpoint = {
        id: lastState[this.primaryPath],
        lwt: lastState._meta.lwt
      }
      const endTime = now()
      categorized.eventBulk.events.forEach(event => {
        (event as any).endTime = endTime
      })
      this.changes$.next(categorized.eventBulk)
    }

    return ret
  }

  async findDocumentsById (
    ids: string[],
    deleted: boolean
  ): Promise<RxDocumentDataById<RxDocType>> {
    ensureNotClosed(this)
    const state = await this.internals
    const ret: RxDocumentDataById<RxDocType> = {}

    await state.dexieDb.transaction(
      'r',
      state.dexieTable,
      state.dexieDeletedTable,
      async () => {
        let docsInDb: Array<RxDocumentData<RxDocType>>
        if (deleted) {
          docsInDb = await getDocsInDb<RxDocType>(this.internals, ids)
        } else {
          docsInDb = await state.dexieTable.bulkGet(ids)
        }
        ids.forEach((id, idx) => {
          const documentInDb = docsInDb[idx]
          if (
            documentInDb &&
            (!documentInDb._deleted || deleted)
          ) {
            ret[id] = fromDexieToStorage(documentInDb)
          }
        })
      })
    return ret
  }

  async query (preparedQuery: DefaultPreparedQuery<RxDocType>): Promise<RxStorageQueryResult<RxDocType>> {
    ensureNotClosed(this)
    return await dexieQuery(
      this,
      preparedQuery,
      this.schema
    )
  }

  async count (
    preparedQuery: DefaultPreparedQuery<RxDocType>
  ): Promise<RxStorageCountResult> {
    const result = await dexieQuery(this, preparedQuery, this.schema)
    return {
      count: result.documents.length,
      mode: 'fast'
    }
  }

  /* istanbul ignore next */
  async getChangedDocumentsSince (
    limit: number,
    checkpoint?: RxStorageDefaultCheckpoint
  ): Promise<{
      documents: Array<RxDocumentData<RxDocType>>
      checkpoint: RxStorageDefaultCheckpoint
    }> {
    ensureNotClosed(this)
    const sinceLwt = checkpoint ? checkpoint.lwt : RX_META_LWT_MINIMUM
    const sinceId = checkpoint ? checkpoint.id : ''
    const state = await this.internals

    const [changedDocsNormal, changedDocsDeleted] = await Promise.all(
      [
        state.dexieTable,
        state.dexieDeletedTable
      ].map(async (table) => {
        const query = table
          .where('[_meta.lwt+' + this.primaryPath + ']')
          .above([sinceLwt, sinceId])
          .limit(limit)
        const changedDocuments: Array<RxDocumentData<RxDocType>> = await query.toArray()
        return changedDocuments.map(d => fromDexieToStorage(d))
      })
    )
    let changedDocs = changedDocsNormal!.slice(0)
    appendToArray(changedDocs, changedDocsDeleted!)

    changedDocs = sortDocumentsByLastWriteTime(this.primaryPath as any, changedDocs)
    changedDocs = changedDocs.slice(0, limit)

    const lastDoc = lastOfArray(changedDocs)
    return {
      documents: changedDocs,
      checkpoint: lastDoc
        ? {
            id: lastDoc[this.primaryPath],
            lwt: lastDoc._meta.lwt
          }
        : checkpoint ?? {
          id: '',
          lwt: 0
        }
    }
  }

  async remove (): Promise<void> {
    await Promise.resolve()
  }

  changeStream (): Observable<EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, RxStorageDefaultCheckpoint>> {
    ensureNotClosed(this)
    return this.changes$.asObservable()
  }

  async cleanup (): Promise<boolean> {
    ensureNotClosed(this)
    const state = await this.internals
    await state.dexieDb.transaction(
      'rw',
      state.dexieDeletedTable,
      async () => {
        const maxDeletionTime = now() - Infinity
        const toRemove = await state.dexieDeletedTable
          .where('_meta.lwt')
          .below(maxDeletionTime)
          .toArray()
        const removeIds: string[] = toRemove.map(doc => doc[this.primaryPath])
        await state.dexieDeletedTable.bulkDelete(removeIds)
      }
    )

    /**
     * TODO instead of deleting all deleted docs at once,
     * only clean up some of them and return false if there are more documents to clean up.
     * This ensures that when many documents have to be purged,
     * we do not block the more important tasks too long.
     */
    return true
  }

  /* istanbul ignore next */
  async getAttachmentData (): Promise<string> {
    ensureNotClosed(this)
    throw new Error('Attachments are not implemented in the dexie RxStorage. Make a pull request.')
  }

  async close (): Promise<void> {
    ensureNotClosed(this)
    this.closed = true
    this.changes$.complete()
    await closeDexieDb(this.internals)
    await PROMISE_RESOLVE_VOID
  }

  conflictResultionTasks (): Observable<RxConflictResultionTask<RxDocType>> {
    return new Subject()
  }

  /* istanbul ignore next */
  async resolveConflictResultionTask (): Promise<void> { }
}

export async function createDexieStorageInstance<RxDocType> (
  storage: RxStorageDexie,
  params: RxStorageInstanceCreationParams<RxDocType, DexieSettings>,
  settings: DexieSettings
): Promise<RxStorageInstanceDexie<RxDocType>> {
  const internals = await getDexieDbWithTables(
    params.databaseName,
    params.collectionName,
    settings,
    params.schema
  ) as any

  const instance = new RxStorageInstanceDexie(
    storage,
    params.databaseName,
    params.collectionName,
    params.schema,
    internals,
    params.options,
    settings
  )

  return await Promise.resolve(instance)
}

function ensureNotClosed (
  instance: RxStorageInstanceDexie<any>
) {
  if (instance.closed) {
    throw new Error('RxStorageInstanceDexie is closed ' + instance.databaseName + '-' + instance.collectionName)
  }
}
