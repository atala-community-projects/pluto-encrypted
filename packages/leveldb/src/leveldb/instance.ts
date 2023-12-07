
import { RxStorageInstance, RxStorageDefaultCheckpoint, StringKeys, RxDocumentData, EventBulk, RxStorageChangeEvent, RxJsonSchema, getPrimaryFieldOfPrimaryKey, BulkWriteRow, RxStorageBulkWriteResponse, newRxError, CategorizeBulkWriteRowsOutput, categorizeBulkWriteRows, PROMISE_RESOLVE_VOID, ensureNotFalsy, now, RxDocumentDataById, RxStorageQueryResult, RxStorageCountResult, RxConflictResultionTask, RxConflictResultionTaskSolution, getQueryMatcher, getStartIndexStringFromLowerBound, getStartIndexStringFromUpperBound, MangoQuerySelector, flatClone } from "rxdb";
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

        const categorized = categorizeBulkWriteRows<RxDocType>(
            this,
            primaryPath as any,
            this.internals.documents,
            documentWrites,
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
            this.internals.bulkPut([writeRow.document], this.collectionName, this.schema)
            ret.success[docId as any] = writeRow.document;
        }

        const bulkUpdateDocs = categorized.bulkUpdateDocs;
        for (let i = 0; i < bulkUpdateDocs.length; ++i) {
            const writeRow = bulkUpdateDocs[i]!;
            const docId = writeRow.document[primaryPath];
            this.internals.bulkPut([writeRow.document], this.collectionName, this.schema)
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

    private conditionMatches(selector: MangoQuerySelector<RxDocType>, key: string, document: RxDocumentData<RxDocType>) {
        if (key === "$and") {
            const matchingSelector = selector[key]!
            const conditionMatches = Object.values(matchingSelector).every((condition) => {
                const [conditionKey] = Object.keys(condition);
                const [conditionValue] = Object.values(condition);
                if (conditionKey === "$or") {
                    return conditionValue!.some((orSelector) => {

                        return this.conditionMatches(orSelector, "$or", document)
                    })
                } else if (conditionKey === "$and") {
                    return conditionValue!.every((orSelector) => this.conditionMatches(orSelector, "$or", document))
                } else if (document[conditionKey!] === conditionValue) {
                    return true;
                }

                return false;
            })
            if (conditionMatches) {
                return true
            }
        } else if (key === "$or") {
            const matchingSelector = Object.keys(selector)
            const atLeastOneMatching = matchingSelector.find((conditionKey) => {
                if (conditionKey === "$or") {
                    const matchingOrKey = selector[conditionKey]?.find((orKey) => {
                        const [orKeyName] = Object.keys(orKey)
                        const [orKeyValue] = Object.values(orKey)
                        return document[orKeyName!] === orKeyValue
                    })
                    if (matchingOrKey) {
                        return true;
                    }
                } else if (conditionKey === "$and") {
                    const matchingAndKey = selector[conditionKey]?.find((andKey) => {
                        const [andKeyName] = Object.keys(andKey)
                        const [andKeyValue] = Object.values(andKey)
                        return document[andKeyName!] === andKeyValue
                    })

                    if (matchingAndKey) {
                        return true;
                    }
                } else {
                    const conditionValue = selector[conditionKey]
                    if (document[conditionKey!] === conditionValue) {
                        return true;
                    }

                }
                return false;
            })
            if (atLeastOneMatching) {
                return true
            }
        } else {
            const selectorValue = selector[key]
            if (typeof selectorValue === "object") {
                const selectorQueries = Object.keys(selectorValue)
                const [value] = Object.values(selector[key])
                for (let selectorQuery of selectorQueries) {
                    if (selectorQuery === "$eq") {
                        if (document[key] === value) {
                            return true

                        }
                    }
                }
            }
        }
        return false
    }

    async query(preparedQuery: LevelDBPreparedQuery<RxDocType>): Promise<RxStorageQueryResult<RxDocType>> {

        const selector = preparedQuery.query.selector;
        const selectorKeys = Object.keys(selector);

        const collectionIndex = `[${this.collectionName}+${preparedQuery.queryPlan.index.join("+")}]`
        const documentIds = await this.internals.getIndex(collectionIndex);

        if (!documentIds) {
            return { documents: [] }
        }

        const documents: RxDocumentData<RxDocType>[] = [];
        debugger;
        for (let documentId of documentIds) {
            debugger;
            const document = await this.internals.get(documentId);
            debugger;
            if (document) {
                if (selectorKeys.length <= 0) {
                    documents.push(document)
                }
                for (let key of selectorKeys) {
                    const conditionMatches = this.conditionMatches(selector, key, document)
                    if (conditionMatches) {
                        documents.push(document)
                    }
                }
            }
        }

        return { documents }
    }

    /* istanbul ignore next */
    count(preparedQuery: any): Promise<RxStorageCountResult> {
        throw new Error("Method not implemented.");
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