// import { INDEX_MIN } from '../../query-planner';
// import { getQueryMatcher, getSortComparator } from '../../rx-query-helper';
// import type {
//     DefaultPreparedQuery,
//     QueryMatcher,
//     RxDocumentData,
//     RxQueryPlan,
//     RxStorageQueryResult
// } from '../../types';
// import {
//     dexieReplaceIfStartsWithPipe,
//     DEXIE_DOCS_TABLE_NAME,
//     fromDexieToStorage
// } from './dexie-helper';
// import type { RxStorageInstanceDexie } from './rx-storage-instance-dexie';

import { type DefaultPreparedQuery, INDEX_MIN, type RxDocumentData, type RxQueryPlan, type RxStorageQueryResult, getQueryMatcher, getSortComparator } from 'rxdb'
import { type QueryMatcher, type RxJsonSchema } from 'rxdb/dist/types/types'
import { DEXIE_DOCS_TABLE_NAME, dexieReplaceIfStartsWithPipe, fromDexieToStorage } from './dexie-helper'
import { type RxStorageInstanceDexie } from './rx-storage-instance-dexie'
import { fixTxPipe } from '@pluto-encrypted/shared'

export function mapKeyForKeyRange (k: any) {
  if (k === INDEX_MIN) {
    return -Infinity
  } else {
    return k
  }
}

export function getKeyRangeByQueryPlan (
  queryPlan: RxQueryPlan,
  IDBKeyRange?: any
) {
  if (!IDBKeyRange) {
    if (typeof window === 'undefined') {
      throw new Error('IDBKeyRange missing')
    } else {
      IDBKeyRange = window.IDBKeyRange
    }
  }

  const startKeys = queryPlan.startKeys.map(mapKeyForKeyRange)
  const endKeys = queryPlan.endKeys.map(mapKeyForKeyRange)

  let ret: any
  /**
     * If index has only one field,
     * we have to pass the keys directly, not the key arrays.
     */
  if (queryPlan.index.length === 1) {
    const equalKeys = startKeys[0] === endKeys[0]
    ret = IDBKeyRange.bound(
      startKeys[0],
      endKeys[0],
      equalKeys ? false : !queryPlan.inclusiveStart,
      equalKeys ? false : !queryPlan.inclusiveEnd
    )
  } else {
    ret = IDBKeyRange.bound(
      startKeys,
      endKeys,
      !queryPlan.inclusiveStart,
      !queryPlan.inclusiveEnd
    )
  }
  return ret
}

/**
 * Runs mango queries over the Dexie.js database.
 */
export async function dexieQuery<RxDocType> (
  instance: RxStorageInstanceDexie<RxDocType>,
  preparedQuery: DefaultPreparedQuery<RxDocType>,
  schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>
): Promise<RxStorageQueryResult<RxDocType>> {
  const state = await instance.internals
  const query = preparedQuery.query

  const skip = query.skip ? query.skip : 0
  const limit = query.limit ? query.limit : Infinity
  const skipPlusLimit = skip + limit
  const queryPlan = preparedQuery.queryPlan

  const queryMatcher: QueryMatcher<RxDocumentData<RxDocType>> = getQueryMatcher(
    instance.schema,
    preparedQuery.query
  )

  let rows: any[] = []

  const queryPlanFields: string[] = queryPlan.index
  const indexes: string[] = []
  if (queryPlanFields.length === 1) {
    indexes.push(dexieReplaceIfStartsWithPipe(fixTxPipe(queryPlanFields[0]!)))
  } else {
    indexes.push(...queryPlanFields.map(field => dexieReplaceIfStartsWithPipe(fixTxPipe(field))))
  }

  const shouldAddCompoundIndexes = schema.indexes?.find((index) => {
    if (typeof index === 'string') {
      return indexes.find((index2) => index2 === index)
    } else {
      return index.find((subIndex) => {
        return subIndex === index.find((indexValue) => indexValue === subIndex)
      })
    }
  })

  if (shouldAddCompoundIndexes) {
    indexes.splice(0, indexes.length)
    if (typeof shouldAddCompoundIndexes === 'string') {
      indexes.push(shouldAddCompoundIndexes)
    } else {
      indexes.push(...shouldAddCompoundIndexes)
    }
  }

  const results = await state.dexieTable.toArray()
  for (const item of results) {
    const docData = fromDexieToStorage(item)

    if (
      queryMatcher(docData)
    ) {
      rows.push(docData)
    }
  }

  const sortComparator = getSortComparator(instance.schema, preparedQuery.query)
  rows = rows.sort(sortComparator)

  // apply skip and limit boundaries.
  rows = rows.slice(skip, skipPlusLimit)
  return {
    documents: rows
  }
}

export async function dexieCount<RxDocType> (
  instance: RxStorageInstanceDexie<RxDocType>,
  preparedQuery: DefaultPreparedQuery<RxDocType>
): Promise<number> {
  const state = await instance.internals
  const queryPlan = preparedQuery.queryPlan
  const queryPlanFields: string[] = queryPlan.index

  const keyRange = getKeyRangeByQueryPlan(
    queryPlan,
    (state.dexieDb as any)._options.IDBKeyRange
  )
  let count: number = -1
  await state.dexieDb.transaction(
    'r',
    state.dexieTable,
    async (dexieTx) => {
      const tx = (dexieTx as any).idbtrans
      const store = tx.objectStore(DEXIE_DOCS_TABLE_NAME)
      let index: any
      if (
        queryPlanFields.length === 1 &&
        queryPlanFields[0] === instance.primaryPath
      ) {
        index = store
      } else {
        let indexName: string
        if (queryPlanFields.length === 1) {
          indexName = dexieReplaceIfStartsWithPipe(queryPlanFields[0]!)
        } else {
          indexName = '[' +
            queryPlanFields
              .map(field => dexieReplaceIfStartsWithPipe(field))
              .join('+') +
            ']'
        }
        index = store.index(indexName)
      }

      const request = index.count(keyRange)
      count = await new Promise<number>((resolve, reject) => {
        request.onsuccess = function () {
          resolve(request.result)
        }
        request.onerror = (err: any) => { reject(err) }
      })
    }
  )
  return count
}
