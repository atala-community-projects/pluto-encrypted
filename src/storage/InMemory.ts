import { BulkWriteRow, CategorizeBulkWriteRowsOutput, EventBulk, PROMISE_RESOLVE_VOID, RxConflictResultionTask, RxConflictResultionTaskSolution, RxDocumentData, RxDocumentDataById, RxJsonSchema, RxStorage, RxStorageBulkWriteResponse, RxStorageChangeEvent, RxStorageCountResult, RxStorageDefaultCheckpoint, RxStorageDefaultStatics, RxStorageInstance, RxStorageInstanceCreationParams, RxStorageQueryResult, StringKeys, categorizeBulkWriteRows, ensureNotFalsy, getPrimaryFieldOfPrimaryKey, newRxError, now } from "rxdb";
import {
    Subject, Observable
} from "rxjs";

type InMemoryStorageInternals = {
    /**
     * InMemoryStorageVariables
     */
    data: any;
    deletedData: any;

    bulkPut(a: any[], fromDeleted?: boolean): any;
    bulkDelete(a: any[], fromDeleted?: boolean): any;
}

type InMemorySettings = {
    /**
     * Concrete options for this storage
     */
}

class RxStorageIntanceInMemory<RxDocType> implements RxStorageInstance<
    RxDocType,
    InMemoryStorageInternals,
    InMemorySettings,
    RxStorageDefaultCheckpoint>
{
    public readonly primaryPath: StringKeys<RxDocumentData<RxDocType>>;
    private changes$: Subject<EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, RxStorageDefaultCheckpoint>> = new Subject();

    constructor(
        public readonly storage: RXStorageInMemory,
        public readonly databaseName: string,
        public readonly collectionName: string,
        public readonly schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>,
        public readonly internals: InMemoryStorageInternals,
        public readonly options: Readonly<InMemorySettings>,
    ) {
        this.primaryPath = getPrimaryFieldOfPrimaryKey(this.schema.primaryKey);
    }

    private getDocsInDb<RxDocType>(internals: InMemoryStorageInternals, docIds: string[]): Promise<RxDocumentData<RxDocType>[]> {
        /**
         * Returns all documents in the database.
         * Non-deleted plus deleted ones.
         */
        throw new Error("Not implemented")
    }

    fromInMemoryStorage(documentData: any): RxDocumentData<any> {
        throw new Error("Not implemented")
    }

    async bulkWrite(documentWrites: BulkWriteRow<RxDocType>[], context: string): Promise<RxStorageBulkWriteResponse<RxDocType>> {
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

        const state = this.internals;
        const ret: RxStorageBulkWriteResponse<RxDocType> = {
            success: {},
            error: {}
        };

        const documentKeys: string[] = documentWrites.map(writeRow => writeRow.document[this.primaryPath] as any);
        let categorized: CategorizeBulkWriteRowsOutput<RxDocType> | undefined;

        const docsInDbMap = new Map<string, RxDocumentData<RxDocType>>();
        const docsInDbWithInternals = await this.getDocsInDb<RxDocType>(this.internals, documentKeys);
        docsInDbWithInternals.forEach(docWithDexieInternals => {
            const doc = docWithDexieInternals ? this.fromInMemoryStorage(docWithDexieInternals) : docWithDexieInternals;
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
            bulkPutDocs.length > 0 ? state.bulkPut(bulkPutDocs.map(d => this.fromInMemoryStorage(d))) : PROMISE_RESOLVE_VOID,
            bulkRemoveDocs.length > 0 ? state.bulkDelete(bulkRemoveDocs) : PROMISE_RESOLVE_VOID,
            bulkPutDeletedDocs.length > 0 ? state.bulkPut(bulkPutDeletedDocs.map(d => this.fromInMemoryStorage(d)), true) : PROMISE_RESOLVE_VOID,
            bulkRemoveDeletedDocs.length > 0 ? state.bulkDelete(bulkRemoveDeletedDocs, true) : PROMISE_RESOLVE_VOID
        ]);


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

    findDocumentsById(ids: string[], withDeleted: boolean): Promise<RxDocumentDataById<RxDocType>> {
        throw new Error("Method not implemented.");
    }

    query(preparedQuery: any): Promise<RxStorageQueryResult<RxDocType>> {
        throw new Error("Method not implemented.");
    }

    count(preparedQuery: any): Promise<RxStorageCountResult> {
        throw new Error("Method not implemented.");
    }

    getAttachmentData(documentId: string, attachmentId: string, digest: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

    getChangedDocumentsSince(limit: number, checkpoint?: RxStorageDefaultCheckpoint | undefined): Promise<{ documents: RxDocumentData<RxDocType>[]; checkpoint: RxStorageDefaultCheckpoint; }> {
        throw new Error("Method not implemented.");
    }

    changeStream(): Observable<EventBulk<RxStorageChangeEvent<RxDocType>, RxStorageDefaultCheckpoint>> {
        throw new Error("Method not implemented.");
    }

    cleanup(minimumDeletedTime: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    close(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    remove(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    conflictResultionTasks(): Observable<RxConflictResultionTask<RxDocType>> {
        throw new Error("Method not implemented.");
    }

    resolveConflictResultionTask(taskSolution: RxConflictResultionTaskSolution<RxDocType>): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

class RXStorageInMemory implements RxStorage<InMemoryStorageInternals, InMemorySettings> {
    public name: string = "InMemory"
    public statics = RxStorageDefaultStatics;
    constructor(private settings: InMemorySettings) { }

    async createStorageInstance<RxDocType>(params?: RxStorageInstanceCreationParams<RxDocType, InMemorySettings>): Promise<RxStorageInstance<RxDocType, InMemoryStorageInternals, InMemorySettings, any>> {
        throw new Error("Method not implemented.");
    }
}


export function getRxStorageInMemory(settings: InMemorySettings = {}): RXStorageInMemory {
    const storage = new RXStorageInMemory(settings);
    return storage;
}