import {
    Subject, type Observable
} from 'rxjs'

import { RxStorageInstance, StringKeys, RxDocumentData, RxConflictResultionTask, EventBulk, RxStorageChangeEvent, RxStorageDefaultCheckpoint, RxJsonSchema, getPrimaryFieldOfPrimaryKey, BulkWriteRow, RxConflictResultionTaskSolution, RxDocumentDataById, RxStorageBulkWriteResponse, RxStorageCountResult, RxStorageQueryResult, categorizeBulkWriteRows, ensureNotFalsy, now, getQueryMatcher, getSortComparator } from "rxdb";
import { IagonInternalParameters, IagonStorageInternals } from './types';
import { IagonInternals } from './internals';
import { QueryMatcher } from 'rxdb/dist/types/types';
import { fixTxPipe } from '@pluto-encrypted/shared';


export class IagonStorageInstance<
    RxDocType,
> implements RxStorageInstance<
    RxDocType,
    IagonStorageInternals<any>,
    IagonInternalParameters,
    RxStorageDefaultCheckpoint
> {
    public readonly primaryPath: StringKeys<RxDocumentData<RxDocType>>

    public isInitialised = false;

    public conflictResultionTasks$ = new Subject<RxConflictResultionTask<RxDocType>>()
    public changes$ = new Subject<EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, RxStorageDefaultCheckpoint>>()

    constructor(
        public databaseName: string,
        public internals: IagonInternals<RxDocType>,
        public options: Readonly<IagonInternalParameters>,
        public schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>,
        public collectionName: string,
        public refCount: number = 0
    ) {
        this.primaryPath = getPrimaryFieldOfPrimaryKey(this.schema.primaryKey)
    }

    async findDocumentsById(ids: string[], withDeleted: boolean): Promise<RxDocumentDataById<RxDocType>> {
        const allFiles = await this.internals.sdk.getFiles(this.internals.__dataFolder._id);
        const matchingFiles = allFiles.filter((file) => ids.includes(file.name));
        const documents: RxDocumentDataById<RxDocType> = {}
        for (let file of matchingFiles) {
            const fileContent = await this.internals.sdk.getFile({ file: file })
            const doc = JSON.parse(Buffer.from(fileContent).toString());
            const id = doc[this.primaryPath];
            documents[id] = doc;
        }
        return documents
    }


    private async resolveDocumentIds(ids: string[], selectorKeys: string[], queryMatcher: QueryMatcher<RxDocumentData<RxDocType>>): Promise<Array<RxDocumentData<RxDocType>>> {
        const documents: Array<RxDocumentData<RxDocType>> = [];
        for (let documentId of ids) {
            const document = await this.internals.get(documentId)
            if (document) {
                if (selectorKeys.length <= 0) {
                    documents.push(document)
                }
                const matches = queryMatcher(document)
                if (matches) {
                    documents.push(document)
                }
            }
        }
        return documents
    }

    async query(preparedQuery: any): Promise<RxStorageQueryResult<RxDocType>> {
        const { queryPlan, query } = preparedQuery
        const selector = query.selector
        const selectorKeys = Object.keys(selector)
        const skip = query.skip ? query.skip : 0
        const limit = query.limit ? query.limit : Infinity
        const skipPlusLimit = skip + limit
        const queryMatcher: QueryMatcher<RxDocumentData<RxDocType>> = getQueryMatcher(
            this.schema,
            query
        )

        const queryPlanFields: string[] = queryPlan.index
        const indexes: string[] = []
        if (queryPlanFields.length === 1) {
            indexes.push(fixTxPipe(queryPlanFields[0]!))
        } else {
            indexes.push(...queryPlanFields.map(field => fixTxPipe(field)))
        }

        const shouldAddCompoundIndexes = this.schema.indexes?.find((index) => {
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
            indexes.push(this.collectionName)
            if (typeof shouldAddCompoundIndexes === 'string') {
                indexes.push(shouldAddCompoundIndexes)
            } else {
                indexes.push(...shouldAddCompoundIndexes)
            }
        } else {
            indexes.unshift(this.collectionName)
        }

        const indexName: string = `[${indexes.join('+')}]`

        const documentIds = await this.internals.getIndex(indexName)

        if (!documentIds || documentIds.length <= 0) {
            return { documents: [] }
        }

        let documents = await this.resolveDocumentIds(
            documentIds,
            selectorKeys,
            queryMatcher
        )

        const sortComparator = getSortComparator(this.schema, preparedQuery.query)
        documents = documents.sort(sortComparator)
        documents = documents.slice(skip, skipPlusLimit)
        return {
            documents
        }
    }
    async count(preparedQuery: any): Promise<RxStorageCountResult> {
        const result = await this.query(preparedQuery)
        return {
            count: result.documents.length,
            mode: 'fast'
        }
    }
    getAttachmentData(documentId: string, attachmentId: string, digest: string): Promise<string> {
        throw new Error('Method not implemented.');
    }
    getChangedDocumentsSince(limit: number, checkpoint?: any): Promise<{ documents: RxDocumentData<RxDocType>[]; checkpoint: any; }> {
        throw new Error('Method not implemented.');
    }

    async cleanup(minimumDeletedTime: number): Promise<boolean> {
        await this.internals.sdk.removeDirectory(this.internals.__collectionFolder, true)
        return true
    }
    close(): Promise<void> {
        return Promise.resolve()
    }
    changeStream(): Observable<EventBulk<RxStorageChangeEvent<RxDocType>, any>> {
        return this.changes$.asObservable()
    }
    remove(): Promise<void> {
        return Promise.resolve()
    }
    conflictResultionTasks(): Observable<RxConflictResultionTask<RxDocType>> {
        return this.conflictResultionTasks$.asObservable()
    }
    resolveConflictResultionTask(taskSolution: RxConflictResultionTaskSolution<RxDocType>): Promise<void> {
        return Promise.resolve()
    }
    private async getAllDocuments() {
        const allDocuments: Map<string, RxDocumentData<RxDocType>> = new Map();
        const dataFiles = await this.internals.sdk.getFiles(this.internals.__dataFolder._id);
        for (let file of dataFiles) {
            const fileContent = await this.internals.sdk.getFile({ file });
            const rxDoc: RxDocumentData<RxDocType> = JSON.parse(Buffer.from(fileContent).toString())
            const currentId = rxDoc[this.primaryPath] as any;
            allDocuments.set(currentId, rxDoc)
        }
        return allDocuments
    }
    async bulkWrite(documentWrites: BulkWriteRow<RxDocType>[], context: string): Promise<RxStorageBulkWriteResponse<RxDocType>> {
        const primaryPath = this.primaryPath
        const ret: RxStorageBulkWriteResponse<RxDocType> = {
            success: {},
            error: {}
        }
        const documents = await this.getAllDocuments()
        const fixed: BulkWriteRow<RxDocType>[] = []
        for (let currentWriteDoc of documentWrites) {
            const currentId = currentWriteDoc.document[this.primaryPath] as any;
            const previousDocument = currentWriteDoc.previous ?? documents.get(currentId)
            if (context === 'data-migrator-delete') {
                if (previousDocument && previousDocument._rev === currentWriteDoc.document._rev) {
                    fixed.push(currentWriteDoc)
                }
            } else {
                if (previousDocument && previousDocument._rev !== currentWriteDoc.document._rev) {
                    currentWriteDoc.previous = previousDocument
                } else {
                    currentWriteDoc.previous = undefined
                }
                fixed.push(currentWriteDoc)
            }
        }

        const categorized = categorizeBulkWriteRows<RxDocType>(
            this,
            primaryPath as any,
            documents,
            fixed,
            context
        )
        ret.error = categorized.errors

        /**
         * Do inserts/updates
         */
        const bulkInsertDocs = categorized.bulkInsertDocs
        for (let i = 0; i < bulkInsertDocs.length; ++i) {
            const writeRow = bulkInsertDocs[i]!
            const docId = writeRow.document[primaryPath]
            await this.internals.bulkPut([writeRow.document], this.collectionName, this.schema)
            ret.success[docId as any] = writeRow.document
        }

        const bulkUpdateDocs = categorized.bulkUpdateDocs
        for (let i = 0; i < bulkUpdateDocs.length; ++i) {
            const writeRow = bulkUpdateDocs[i]!
            const docId = writeRow.document[primaryPath]
            await this.internals.bulkPut([writeRow.document], this.collectionName, this.schema)
            ret.success[docId as any] = writeRow.document
        }

        if (categorized.eventBulk.events.length > 0) {
            const lastState = ensureNotFalsy(categorized.newestRow).document
            categorized.eventBulk.checkpoint = {
                id: lastState[primaryPath],
                lwt: lastState._meta.lwt
            }
            const endTime = now()
            categorized.eventBulk.events.forEach(event => {
                (event as any).endTime = endTime
            })
            this.changes$.next(categorized.eventBulk)
        }

        return Promise.resolve(ret)
    }
}