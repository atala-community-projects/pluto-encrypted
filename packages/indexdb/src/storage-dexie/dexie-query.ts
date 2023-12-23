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

import { type DefaultPreparedQuery, type RxDocumentData, type RxStorageQueryResult, getQueryMatcher, getSortComparator } from 'rxdb'
import { type QueryMatcher, type RxJsonSchema } from 'rxdb/dist/types/types'
import { dexieReplaceIfStartsWithPipe, fromDexieToStorage } from './dexie-helper'
import { type RxStorageInstanceDexie } from './rx-storage-instance-dexie'
import { fixTxPipe } from '@pluto-encrypted/shared'

/**
 * Runs mango queries over the Dexie.js database.
 */
export async function dexieQuery<RxDocType>(
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
