
import { RxStorageInstance, RxStorageDefaultCheckpoint, StringKeys, RxDocumentData, EventBulk, RxStorageChangeEvent, RxJsonSchema, getPrimaryFieldOfPrimaryKey, BulkWriteRow, RxStorageBulkWriteResponse, newRxError, CategorizeBulkWriteRowsOutput, categorizeBulkWriteRows, PROMISE_RESOLVE_VOID, ensureNotFalsy, now, RxDocumentDataById, RxStorageQueryResult, RxStorageCountResult, RxConflictResultionTask, RxConflictResultionTaskSolution, getQueryMatcher, getStartIndexStringFromLowerBound, getStartIndexStringFromUpperBound, MangoQuerySelector, flatClone, getSortComparator } from "rxdb";
import {
    Subject, Observable
} from "rxjs";

import { InMemoryStorageInternals, InMemorySettings, RxStorageInMemoryType, InMemoryPreparedQuery } from "./types";
import { conditionMatches } from '@pluto-encrypted/shared'
import { fixTxPipe } from "@pluto-encrypted/shared";
import { QueryMatcher } from "rxdb/dist/types/types";


export class RxStorageIntanceInMemory<RxDocType> implements RxStorageInstance<
    RxDocType,
    InMemoryStorageInternals<RxDocType>,
    InMemorySettings,
    RxStorageDefaultCheckpoint>
{
    public readonly primaryPath: StringKeys<RxDocumentData<RxDocType>>;
    public conflictResultionTasks$: Subject<RxConflictResultionTask<RxDocType>> = new Subject()
    public changes$: Subject<EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, RxStorageDefaultCheckpoint>> = new Subject()
    public closed: boolean = false;

    constructor(
        public readonly storage: RxStorageInMemoryType<RxDocType>,
        public readonly databaseName: string,
        public readonly collectionName: string,
        public readonly schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>,
        public readonly internals: InMemoryStorageInternals<RxDocType>,
        public readonly options: Readonly<InMemorySettings>,
    ) {
        this.primaryPath = getPrimaryFieldOfPrimaryKey(this.schema.primaryKey);
    }

    async bulkWrite(
        documentWrites: BulkWriteRow<RxDocType>[],
        context: string): Promise<RxStorageBulkWriteResponse<RxDocType>> {

        const primaryPath = this.primaryPath;
        const ret: RxStorageBulkWriteResponse<RxDocType> = {
            success: {},
            error: {}
        };

        const documents = this.internals.documents
        const fixed = documentWrites.reduce<BulkWriteRow<RxDocType>[]>((fixedDocs, currentWriteDoc) => {
            const currentId = currentWriteDoc.document[this.primaryPath] as any;
            const previousDocument = currentWriteDoc.previous || this.internals.documents.get(currentId)
            if (context === "data-migrator-delete") {
                if (previousDocument && previousDocument._rev == currentWriteDoc.document._rev) {
                    fixedDocs.push(currentWriteDoc)
                }
            } else {
                if (previousDocument && previousDocument._rev !== currentWriteDoc.document._rev) {
                    currentWriteDoc.previous = previousDocument
                } else {
                    currentWriteDoc.previous = undefined
                }
                fixedDocs.push(currentWriteDoc)
            }
            return fixedDocs
        }, []);


        const categorized = categorizeBulkWriteRows<RxDocType>(
            this,
            primaryPath as any,
            documents as any,
            fixed,
            context
        );
        ret.error = categorized.errors;

        /**
        * Do inserts/updates
        */
        const bulkInsertDocs = categorized.bulkInsertDocs;
        for (let i = 0; i < bulkInsertDocs.length; ++i) {
            const writeRow = bulkInsertDocs[i]!;
            const docId = writeRow.document[primaryPath];
            await this.internals.bulkPut([writeRow.document], this.collectionName, this.schema)
            ret.success[docId as any] = writeRow.document;
        }

        const bulkUpdateDocs = categorized.bulkUpdateDocs;
        for (let i = 0; i < bulkUpdateDocs.length; ++i) {
            const writeRow = bulkUpdateDocs[i]!;
            const docId = writeRow.document[primaryPath];
            await this.internals.bulkPut([writeRow.document], this.collectionName, this.schema)
            ret.success[docId as any] = writeRow.document;
        }


        if (categorized.eventBulk.events.length > 0) {
            const lastState = ensureNotFalsy(categorized.newestRow).document;
            categorized.eventBulk.checkpoint = {
                id: lastState[primaryPath],
                lwt: lastState._meta.lwt
            };
            const endTime = now();
            categorized.eventBulk.events.forEach(event => (event as any).endTime = endTime);
            this.changes$.next(categorized.eventBulk);
        }

        return Promise.resolve(ret);
    }

    async findDocumentsById(ids: string[], withDeleted: boolean): Promise<RxDocumentDataById<RxDocType>> {
        return this.internals.bulkGet(ids, withDeleted)
    }

    async query(preparedQuery: InMemoryPreparedQuery<RxDocType>): Promise<RxStorageQueryResult<RxDocType>> {
        const { queryPlan, query } = preparedQuery;
        const selector = query.selector;
        const selectorKeys = Object.keys(selector);
        const skip = query.skip ? query.skip : 0;
        const limit = query.limit ? query.limit : Infinity;
        const skipPlusLimit = skip + limit;
        let queryMatcher: QueryMatcher<RxDocumentData<RxDocType>> = getQueryMatcher(
            this.schema,
            query
        );


        const queryPlanFields: string[] = queryPlan.index;
        let indexes: string[] = []
        if (queryPlanFields.length === 1) {
            indexes.push(fixTxPipe(queryPlanFields[0]!))
        } else {
            indexes.push(...queryPlanFields.map(field => fixTxPipe(field)))

        }

        const shouldAddCompoundIndexes = this.schema.indexes?.find((index) => {
            if (typeof index === "string") {
                return indexes.find((index2) => index2 === index)
            } else {
                return index.find((subIndex) => subIndex === subIndex)
            }
        });

        if (shouldAddCompoundIndexes) {
            indexes.splice(0, indexes.length)
            if (typeof shouldAddCompoundIndexes === "string") {
                indexes.push(shouldAddCompoundIndexes)
            } else {
                indexes.push(...shouldAddCompoundIndexes)
            }

        }

        const indexName: string = `[${indexes.join('+')}]`;
        const documentIds = this.internals.index.get(indexName);

        if (!documentIds) {
            return { documents: [] }
        }

        let documents = documentIds.reduce<RxDocumentData<RxDocType>[]>((allDocuments, id) => {
            const document = this.internals.data.get(id);
            if (document) {
                if (selectorKeys.length <= 0) {
                    return [...allDocuments, document]
                }
                const matches = queryMatcher(document)
                if (matches) {
                    return [...allDocuments, document]
                }
            }
            return allDocuments
        }, [])

        const sortComparator = getSortComparator(this.schema, preparedQuery.query);
        documents = documents.sort(sortComparator);
        documents = documents.slice(skip, skipPlusLimit);
        return {
            documents: documents
        }
    }

    async count(preparedQuery: any): Promise<RxStorageCountResult> {
        const result = await this.query(preparedQuery);
        return {
            count: result.documents.length,
            mode: 'fast'
        };
    }

    /* istanbul ignore next */
    getAttachmentData(documentId: string, attachmentId: string, digest: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

    /* istanbul ignore next */
    getChangedDocumentsSince(limit: number, checkpoint?: RxStorageDefaultCheckpoint | undefined): Promise<{ documents: RxDocumentData<RxDocType>[]; checkpoint: RxStorageDefaultCheckpoint; }> {
        throw new Error("Method not implemented.");
    }

    /* istanbul ignore next */
    changeStream(): Observable<EventBulk<RxStorageChangeEvent<RxDocType>, RxStorageDefaultCheckpoint>> {
        return this.changes$.asObservable();
    }

    async cleanup(): Promise<boolean> {
        this.internals.clear()

        return true;
    }

    /* istanbul ignore next */
    async close(): Promise<void> {
        if (this.closed) {
            return Promise.reject(new Error('already closed'));
        }
        this.closed = true;

        this.internals.refCount = this.internals.refCount - 1;
    }

    /* istanbul ignore next */
    async remove(): Promise<void> {
        return Promise.resolve()
    }

    conflictResultionTasks(): Observable<RxConflictResultionTask<RxDocType>> {
        return this.conflictResultionTasks$.asObservable();
    }

    /* istanbul ignore next */
    resolveConflictResultionTask(taskSolution: RxConflictResultionTaskSolution<RxDocType>): Promise<void> {
        return Promise.resolve()
    }

}