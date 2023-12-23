import {
    Subject,
    Observable
} from 'rxjs';

import { now, RxStorageInstance, RxStorageDefaultCheckpoint, StringKeys, RxDocumentData, EventBulk, RxStorageChangeEvent, RxJsonSchema, getPrimaryFieldOfPrimaryKey, BulkWriteRow, RxStorageBulkWriteResponse, newRxError, CategorizeBulkWriteRowsOutput, categorizeBulkWriteRows, PROMISE_RESOLVE_VOID, ensureNotFalsy, RxDocumentDataById, DefaultPreparedQuery, RxStorageQueryResult, RxStorageCountResult, RX_META_LWT_MINIMUM, appendToArray, sortDocumentsByLastWriteTime, lastOfArray, RxConflictResultionTask, RxConflictResultionTaskSolution, RxStorageInstanceCreationParams, addRxStorageMultiInstanceSupport } from "rxdb";
import { DexieStorageInternals, DexieSettings } from "rxdb/dist/types/types";
import { getDocsInDb, fromDexieToStorage, fromStorageToDexie, closeDexieDb, getDexieDbWithTables, RX_STORAGE_NAME_DEXIE } from "./dexie-helper";
import { dexieQuery, dexieCount } from "./dexie-query";
import { RxStorageDexie } from "./rx-storage-dexie";

let instanceId = now();

export class RxStorageInstanceDexie<RxDocType> implements RxStorageInstance<
    RxDocType,
    DexieStorageInternals,
    DexieSettings,
    RxStorageDefaultCheckpoint
> {
    public readonly primaryPath: StringKeys<RxDocumentData<RxDocType>>;
    private changes$: Subject<EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, RxStorageDefaultCheckpoint>> = new Subject();
    public readonly instanceId = instanceId++;
    public closed = false;

    constructor(
        public readonly storage: RxStorageDexie,
        public readonly databaseName: string,
        public readonly collectionName: string,
        public readonly schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>,
        public readonly internals: DexieStorageInternals,
        public readonly options: Readonly<DexieSettings>,
        public readonly settings: DexieSettings
    ) {
        this.primaryPath = getPrimaryFieldOfPrimaryKey(this.schema.primaryKey);
    }

    async bulkWrite(
        documentWrites: BulkWriteRow<RxDocType>[],
        context: string
    ): Promise<RxStorageBulkWriteResponse<RxDocType>> {
        ensureNotClosed(this);


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
                throw newRxError('SNH', { args: { row } });
            }
        });



        const state = await this.internals;
        const ret: RxStorageBulkWriteResponse<RxDocType> = {
            success: {},
            error: {}
        };

        const documentKeys: string[] = documentWrites.map(writeRow => writeRow.document[this.primaryPath] as any);
        let categorized: CategorizeBulkWriteRowsOutput<RxDocType> | undefined;
        await state.dexieDb.transaction(
            'rw',
            state.dexieTable,
            state.dexieDeletedTable,
            async () => {
                const docsInDbMap = new Map<string, RxDocumentData<RxDocType>>();
                const docsInDbWithInternals = await getDocsInDb<RxDocType>(this.internals, documentKeys);
                docsInDbWithInternals.forEach(docWithDexieInternals => {
                    const doc = docWithDexieInternals ? fromDexieToStorage(docWithDexieInternals) : docWithDexieInternals;
                    if (doc) {
                        docsInDbMap.set(doc[this.primaryPath], doc);
                    }
                    return doc;
                });

                categorized = categorizeBulkWriteRows<RxDocType>(
                    this,
                    this.primaryPath as any,
                    docsInDbMap,
                    documentWrites,
                    context
                );
                ret.error = categorized.errors;

                /**
                 * Batch up the database operations
                 * so we can later run them in bulk.
                 */
                const bulkPutDocs: any[] = [];
                const bulkRemoveDocs: string[] = [];
                const bulkPutDeletedDocs: any[] = [];
                const bulkRemoveDeletedDocs: string[] = [];

                categorized.bulkInsertDocs.forEach(row => {
                    const docId: string = (row.document as any)[this.primaryPath];
                    ret.success[docId] = row.document as any;
                    bulkPutDocs.push(row.document);
                });
                categorized.bulkUpdateDocs.forEach(row => {
                    const docId: string = (row.document as any)[this.primaryPath];
                    ret.success[docId] = row.document as any;
                    if (
                        row.document._deleted &&
                        (row.previous && !row.previous._deleted)
                    ) {
                        // newly deleted
                        bulkRemoveDocs.push(docId);
                        bulkPutDeletedDocs.push(row.document);
                    } else if (
                        row.document._deleted &&
                        row.previous && row.previous._deleted
                    ) {
                        // deleted was modified but is still deleted
                        bulkPutDeletedDocs.push(row.document);
                    } else if (!row.document._deleted) {
                        // non-deleted was changed
                        bulkPutDocs.push(row.document);
                    } else {
                        throw newRxError('SNH', { args: { row } });
                    }
                });

                await Promise.all([
                    bulkPutDocs.length > 0 ? state.dexieTable.bulkPut(bulkPutDocs.map(d => fromStorageToDexie(d))) : PROMISE_RESOLVE_VOID,
                    bulkRemoveDocs.length > 0 ? state.dexieTable.bulkDelete(bulkRemoveDocs) : PROMISE_RESOLVE_VOID,
                    bulkPutDeletedDocs.length > 0 ? state.dexieDeletedTable.bulkPut(bulkPutDeletedDocs.map(d => fromStorageToDexie(d))) : PROMISE_RESOLVE_VOID,
                    bulkRemoveDeletedDocs.length > 0 ? state.dexieDeletedTable.bulkDelete(bulkRemoveDeletedDocs) : PROMISE_RESOLVE_VOID
                ]);
            });

        categorized = ensureNotFalsy(categorized);
        if (categorized.eventBulk.events.length > 0) {
            const lastState = ensureNotFalsy(categorized.newestRow).document;
            categorized.eventBulk.checkpoint = {
                id: lastState[this.primaryPath],
                lwt: lastState._meta.lwt
            };
            const endTime = now();
            categorized.eventBulk.events.forEach(event => (event as any).endTime = endTime);
            this.changes$.next(categorized.eventBulk);
        }

        return ret;
    }

    async findDocumentsById(
        ids: string[],
        deleted: boolean
    ): Promise<RxDocumentDataById<RxDocType>> {
        ensureNotClosed(this);
        const state = await this.internals;
        const ret: RxDocumentDataById<RxDocType> = {};

        await state.dexieDb.transaction(
            'r',
            state.dexieTable,
            state.dexieDeletedTable,
            async () => {
                let docsInDb: RxDocumentData<RxDocType>[];
                if (deleted) {
                    docsInDb = await getDocsInDb<RxDocType>(this.internals, ids);
                } else {
                    docsInDb = await state.dexieTable.bulkGet(ids);
                }
                ids.forEach((id, idx) => {
                    const documentInDb = docsInDb[idx];
                    if (
                        documentInDb &&
                        (!documentInDb._deleted || deleted)
                    ) {
                        ret[id] = fromDexieToStorage(documentInDb);
                    }
                });
            });
        return ret;
    }

    query(preparedQuery: DefaultPreparedQuery<RxDocType>): Promise<RxStorageQueryResult<RxDocType>> {
        ensureNotClosed(this);
        return dexieQuery(
            this,
            preparedQuery,
            this.schema
        );
    }
    async count(
        preparedQuery: DefaultPreparedQuery<RxDocType>
    ): Promise<RxStorageCountResult> {
        const result = await dexieQuery(this, preparedQuery, this.schema);
        return {
            count: result.documents.length,
            mode: 'fast'
        };
    }

    async getChangedDocumentsSince(
        limit: number,
        checkpoint?: RxStorageDefaultCheckpoint
    ): Promise<{
        documents: RxDocumentData<RxDocType>[];
        checkpoint: RxStorageDefaultCheckpoint;
    }> {
        ensureNotClosed(this);
        const sinceLwt = checkpoint ? checkpoint.lwt : RX_META_LWT_MINIMUM;
        const sinceId = checkpoint ? checkpoint.id : '';
        const state = await this.internals;


        const [changedDocsNormal, changedDocsDeleted] = await Promise.all(
            [
                state.dexieTable,
                state.dexieDeletedTable
            ].map(async (table) => {
                const query = table
                    .where('[_meta.lwt+' + this.primaryPath + ']')
                    .above([sinceLwt, sinceId])
                    .limit(limit);
                const changedDocuments: RxDocumentData<RxDocType>[] = await query.toArray();
                return changedDocuments.map(d => fromDexieToStorage(d));
            })
        );
        let changedDocs = changedDocsNormal!.slice(0);
        appendToArray(changedDocs, changedDocsDeleted!);

        changedDocs = sortDocumentsByLastWriteTime(this.primaryPath as any, changedDocs);
        changedDocs = changedDocs.slice(0, limit);

        const lastDoc = lastOfArray(changedDocs);
        return {
            documents: changedDocs,
            checkpoint: lastDoc ? {
                id: lastDoc[this.primaryPath] as any,
                lwt: lastDoc._meta.lwt
            } : checkpoint ? checkpoint : {
                id: '',
                lwt: 0
            }
        };
    }

    async remove(): Promise<void> {
        return Promise.resolve()
    }

    changeStream(): Observable<EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, RxStorageDefaultCheckpoint>> {
        ensureNotClosed(this);
        return this.changes$.asObservable();
    }

    async cleanup(minimumDeletedTime: number): Promise<boolean> {
        ensureNotClosed(this);
        const state = await this.internals;
        await state.dexieDb.transaction(
            'rw',
            state.dexieDeletedTable,
            async () => {
                const maxDeletionTime = now() - Infinity;
                const toRemove = await state.dexieDeletedTable
                    .where('_meta.lwt')
                    .below(maxDeletionTime)
                    .toArray();
                const removeIds: string[] = toRemove.map(doc => doc[this.primaryPath]);
                await state.dexieDeletedTable.bulkDelete(removeIds);
            }
        );

        /**
         * TODO instead of deleting all deleted docs at once,
         * only clean up some of them and return false if there are more documents to clean up.
         * This ensures that when many documents have to be purged,
         * we do not block the more important tasks too long.
         */
        return true;
    }

    getAttachmentData(_documentId: string, _attachmentId: string, _digest: string): Promise<string> {
        ensureNotClosed(this);
        throw new Error('Attachments are not implemented in the dexie RxStorage. Make a pull request.');
    }

    close(): Promise<void> {
        ensureNotClosed(this);
        this.closed = true;
        this.changes$.complete();
        closeDexieDb(this.internals);
        return PROMISE_RESOLVE_VOID;
    }

    conflictResultionTasks(): Observable<RxConflictResultionTask<RxDocType>> {
        return new Subject();
    }
    async resolveConflictResultionTask(_taskSolution: RxConflictResultionTaskSolution<RxDocType>): Promise<void> { }

}


export async function createDexieStorageInstance<RxDocType>(
    storage: RxStorageDexie,
    params: RxStorageInstanceCreationParams<RxDocType, DexieSettings>,
    settings: DexieSettings
): Promise<RxStorageInstanceDexie<RxDocType>> {
    const internals = await getDexieDbWithTables(
        params.databaseName,
        params.collectionName,
        settings,
        params.schema
    );

    const instance = new RxStorageInstanceDexie(
        storage,
        params.databaseName,
        params.collectionName,
        params.schema,
        internals,
        params.options,
        settings
    );

    return Promise.resolve(instance);
}



function ensureNotClosed(
    instance: RxStorageInstanceDexie<any>
) {
    if (instance.closed) {
        throw new Error('RxStorageInstanceDexie is closed ' + instance.databaseName + '-' + instance.collectionName);
    }
}
