import { Dexie } from 'dexie';
import { RxDocumentData, RxJsonSchema, RxStorageDefaultStatics, flatClone, getFromMapOrCreate, getPrimaryFieldOfPrimaryKey, getSchemaByObjectPath, newRxError, toArray } from "rxdb";
import { DexieSettings } from "rxdb/dist/types/types";
import type {
    Table as DexieTable
} from 'dexie';
export const DEXIE_DOCS_TABLE_NAME = 'docs';
export const DEXIE_DELETED_DOCS_TABLE_NAME = 'deleted-docs';
export const DEXIE_CHANGES_TABLE_NAME = 'changes';

export const RX_STORAGE_NAME_DEXIE = 'dexie';

export const RxStorageDexieStatics = RxStorageDefaultStatics;
/**
 * The internals is a Promise that resolves
 * when the database has fully opened
 * and Dexie.on.ready was called
 * @link https://dexie.org/docs/Dexie/Dexie.on.ready
 *
 */
export type DexieStorageInternals = {
    dexieDb: Dexie;
    /**
     * Contains all normal non-deleted documents
     */
    dexieTable: DexieTable;
    /**
     * Contains all docs with _deleted: true
     * We need this because with dexie it is not possible to use a boolean field as index
     * which could be used to filter out deleted docs in queries.
     */
    dexieDeletedTable: DexieTable;
};

const DEXIE_STATE_DB_BY_NAME: Map<string, DexieStorageInternals> = new Map();
const REF_COUNT_PER_DEXIE_DB: Map<DexieStorageInternals, number> = new Map();
export async function getDexieDbWithTables(
    databaseName: string,
    collectionName: string,
    settings: DexieSettings,
    schema: RxJsonSchema<any>
): Promise<DexieStorageInternals> {
    const primaryPath = getPrimaryFieldOfPrimaryKey(schema.primaryKey);
    const dexieDbName = `rxdb-dexie-${databaseName}--${schema.version}--${collectionName}`;
    const useSettings = { ...settings, autoOpen: false };
    const dexieDb = new Dexie(dexieDbName, useSettings);

    const dexieStoresSettings = {
        [DEXIE_DOCS_TABLE_NAME]: getDexieStoreSchema(schema),
        [DEXIE_CHANGES_TABLE_NAME]: '++sequence, id',
        [DEXIE_DELETED_DOCS_TABLE_NAME]: `${primaryPath},_meta.lwt,[_meta.lwt+${primaryPath}]`
    };

    dexieDb.version(1).stores(dexieStoresSettings);

    await dexieDb.open();

    const state: DexieStorageInternals = {
        dexieDb,
        dexieTable: dexieDb[DEXIE_DOCS_TABLE_NAME],
        dexieDeletedTable: dexieDb[DEXIE_DELETED_DOCS_TABLE_NAME]
    };

    DEXIE_STATE_DB_BY_NAME.set(dexieDbName, state);
    REF_COUNT_PER_DEXIE_DB.set(state, 0);

    return state;
}

export async function closeDexieDb(statePromise: DexieStorageInternals) {
    const state = await statePromise;
    const prevCount = REF_COUNT_PER_DEXIE_DB.get(statePromise);
    const newCount = (prevCount as any) - 1;
    if (newCount === 0) {
        state.dexieDb.close();
        REF_COUNT_PER_DEXIE_DB.delete(statePromise);
    } else {
        REF_COUNT_PER_DEXIE_DB.set(statePromise, newCount);
    }
}

export function ensureNoBooleanIndex(schema: RxJsonSchema<any>) {
    if (!schema.indexes) {
        return;
    }
    const checkedFields = new Set<string>();
    schema.indexes.forEach(index => {
        const fields = toArray(index);
        fields.forEach(field => {
            if (checkedFields.has(field)) {
                return;
            }
            checkedFields.add(field);
            const schemaObj = getSchemaByObjectPath(schema, field);
            if (schemaObj.type === 'boolean') {
                throw newRxError('DXE1', {
                    schema,
                    index,
                    field
                });
            }
        });
    });
}



/**
 * It is not possible to set non-javascript-variable-syntax
 * keys as IndexedDB indexes. So we have to substitute the pipe-char
 * which comes from the key-compression plugin.
 */
export const DEXIE_PIPE_SUBSTITUTE = '__';
export function dexieReplaceIfStartsWithPipe(str: string): string {
    const split = str.split('.');
    if (split.length > 1) {
        return split.map(part => dexieReplaceIfStartsWithPipe(part)).join('.');
    }

    if (str.startsWith('|')) {
        const withoutFirst = str.substring(1);
        return DEXIE_PIPE_SUBSTITUTE + withoutFirst;
    } else {
        return str;
    }
}

export function dexieReplaceIfStartsWithPipeRevert(str: string): string {
    const split = str.split('.');
    if (split.length > 1) {
        return split.map(part => dexieReplaceIfStartsWithPipeRevert(part)).join('.');
    }

    if (str.startsWith(DEXIE_PIPE_SUBSTITUTE)) {
        const withoutFirst = str.substring(DEXIE_PIPE_SUBSTITUTE.length);
        return '|' + withoutFirst;
    } else {
        return str;
    }
}

/**
 * @recursive
 */
export function fromStorageToDexie(documentData: RxDocumentData<any>): any {
    if (!documentData || typeof documentData === 'string' || typeof documentData === 'number' || typeof documentData === 'boolean') {
        return documentData;
    } else if (Array.isArray(documentData)) {
        return documentData.map(row => fromStorageToDexie(row));
    } else if (typeof documentData === 'object') {
        const ret: any = {};
        Object.entries(documentData).forEach(([key, value]) => {
            if (typeof value === 'object') {
                value = fromStorageToDexie(value);
            }
            ret[dexieReplaceIfStartsWithPipe(key)] = value;
        });
        return ret;
    }
}

export function fromDexieToStorage(documentData: any): RxDocumentData<any> {
    if (!documentData || typeof documentData === 'string' || typeof documentData === 'number' || typeof documentData === 'boolean') {
        return documentData;
    } else if (Array.isArray(documentData)) {
        return documentData.map(row => fromDexieToStorage(row));
    } else if (typeof documentData === 'object') {
        const ret: any = {};
        Object.entries(documentData).forEach(([key, value]) => {
            if (typeof value === 'object' || Array.isArray(documentData)) {
                value = fromDexieToStorage(value);
            }
            ret[dexieReplaceIfStartsWithPipeRevert(key)] = value;
        });
        return ret;
    }
}


/**
 * Creates a string that can be used to create the dexie store.
 * @link https://dexie.org/docs/API-Reference#quick-reference
 */
export function getDexieStoreSchema(
    rxJsonSchema: RxJsonSchema<any>
): string {
    let parts: string[][] = [];

    /**
     * First part must be the primary key
     * @link https://github.com/dexie/Dexie.js/issues/1307#issuecomment-846590912
     */
    const primaryKey = getPrimaryFieldOfPrimaryKey(rxJsonSchema.primaryKey);
    parts.push([primaryKey]);

    // add other indexes
    if (rxJsonSchema.indexes) {
        rxJsonSchema.indexes.forEach(index => {
            const arIndex = toArray(index);
            parts.push(arIndex);
        });
    }

    // we also need the _meta.lwt+primaryKey index for the getChangedDocumentsSince() method.
    parts.push(['_meta.lwt', primaryKey]);

    /**
     * It is not possible to set non-javascript-variable-syntax
     * keys as IndexedDB indexes. So we have to substitute the pipe-char
     * which comes from the key-compression plugin.
     */
    parts = parts.map(part => {
        return part.map(str => dexieReplaceIfStartsWithPipe(str));
    });

    return parts.map(part => {
        if (part.length === 1) {
            return part[0];
        } else {
            return '[' + part.join('+') + ']';
        }
    }).join(', ');
}

/**
 * Returns all documents in the database.
 * Non-deleted plus deleted ones.
 */
export async function getDocsInDb<RxDocType>(
    internals: DexieStorageInternals,
    docIds: string[]
): Promise<RxDocumentData<RxDocType>[]> {
    const state = await internals;
    const [
        nonDeletedDocsInDb,
        deletedDocsInDb
    ] = await Promise.all([
        state.dexieTable.bulkGet(docIds),
        state.dexieDeletedTable.bulkGet(docIds)
    ]);
    const docsInDb = deletedDocsInDb.slice(0);
    nonDeletedDocsInDb.forEach((doc, idx) => {
        if (doc) {
            docsInDb[idx] = doc;
        }
    });
    return docsInDb;
}
