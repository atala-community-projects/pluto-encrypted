
import { RxStorageInstance, RxStorageDefaultCheckpoint, StringKeys, RxDocumentData, EventBulk, RxStorageChangeEvent, RxJsonSchema, getPrimaryFieldOfPrimaryKey, BulkWriteRow, RxStorageBulkWriteResponse, newRxError, CategorizeBulkWriteRowsOutput, categorizeBulkWriteRows, PROMISE_RESOLVE_VOID, ensureNotFalsy, now, RxDocumentDataById, RxStorageQueryResult, RxStorageCountResult, RxConflictResultionTask, RxConflictResultionTaskSolution, getQueryMatcher, getStartIndexStringFromLowerBound, getStartIndexStringFromUpperBound, MangoQuerySelector, flatClone, getSortComparator } from "rxdb";
import {
    Subject, Observable
} from "rxjs";

import { LevelDBStorageInternals, LevelDBSettings, RxStorageLevelDBType, LevelDBPreparedQuery } from "./types";

export class RxStorageIntanceLevelDB<RxDocType> implements RxStorageInstance<
    RxDocType,
    LevelDBStorageInternals<RxDocType>,
    LevelDBSettings,
    RxStorageDefaultCheckpoint>
{
    public readonly primaryPath: StringKeys<RxDocumentData<RxDocType>>;
    public conflictResultionTasks$: Subject<RxConflictResultionTask<RxDocType>> = new Subject()
    public changes$: Subject<EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, RxStorageDefaultCheckpoint>> = new Subject()
    public closed: boolean = false;

    constructor(
        public readonly storage: RxStorageLevelDBType<RxDocType>,
        public readonly databaseName: string,
        public readonly collectionName: string,
        public readonly schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>,
        public readonly internals: LevelDBStorageInternals<RxDocType>,
        public readonly options: Readonly<LevelDBSettings>,
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
        const documentKeys: string[] = documentWrites.map(writeRow => writeRow.document[this.primaryPath] as any);
        const documents = await this.internals.getDocuments(documentKeys)

        const fixed = documentWrites.reduce<BulkWriteRow<RxDocType>[]>((fixedDocs, currentWriteDoc) => {
            const currentId = currentWriteDoc.document[this.primaryPath] as any;
            if (context === "data-migrator-delete") {
                const previousDocument = currentWriteDoc.previous || documents.get(currentId)

                if (previousDocument) {
                    if (previousDocument._meta.lwt !== currentWriteDoc.document._meta.lwt) {
                        fixedDocs.push(currentWriteDoc)
                    }
                }
            } else {
                const previousDocument = currentWriteDoc.previous
                if (previousDocument) {
                    if (previousDocument._meta.lwt !== currentWriteDoc.document._meta.lwt) {
                        currentWriteDoc.previous = previousDocument
                    }
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
            documents,
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
        const docs: RxDocumentDataById<RxDocType> = {};
        for (let docId of ids) {
            const document = await this.internals.get(docId);
            if (document) {
                docs[docId] = document;
            }
        }
        return docs
    }

    async query(preparedQuery: LevelDBPreparedQuery<RxDocType>): Promise<RxStorageQueryResult<RxDocType>> {
        const selector = preparedQuery.query.selector;
        const selectorKeys = Object.keys(selector);
        const skip = preparedQuery.query.skip ? preparedQuery.query.skip : 0;
        const limit = preparedQuery.query.limit ? preparedQuery.query.limit : Infinity;
        const skipPlusLimit = skip + limit;
        const collectionIndex = `[${this.collectionName}+${preparedQuery.queryPlan.index.join("+")}]`
        const documentIds = await this.internals.getIndex(collectionIndex);
        const documents: RxDocumentData<RxDocType>[] = await this.internals.bulkGet(documentIds);
        const queryMatcher = getQueryMatcher(this.schema, preparedQuery.query)
        let filteredDocuments = documents.filter((document) => {
            if (selectorKeys.length <= 0) {
                return true
            } else {
                const matches = !queryMatcher || queryMatcher(document)
                if (matches) {
                    return true;
                }
            }
            return false
        })

        if (!preparedQuery.queryPlan.sortFieldsSameAsIndexFields) {
            const sortComparator = getSortComparator(this.schema, preparedQuery.query);
            filteredDocuments = filteredDocuments.sort(sortComparator);
        }

        filteredDocuments = filteredDocuments.slice(skip, skipPlusLimit);
        return {
            documents: filteredDocuments
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
        await this.internals.clear()
        return false;
    }

    /* istanbul ignore next */
    async close(): Promise<void> {
        if (this.closed) {
            return Promise.resolve()
        }

        await this.internals.close()
        this.changes$.complete();
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
