import { faker } from "@faker-js/faker";
import { clone, randomNumber, randomString } from "async-test-util";
import { MangoQuery, RxDocumentData, RxJsonSchema, RxStorage, createRxDatabase, deepFreeze, ensureNotFalsy, fillWithDefaultSettings, getPrimaryFieldOfPrimaryKey, getQueryMatcher, getQueryPlan, getSortComparator, lastOfArray, newRxError, normalizeMangoQuery, now, randomCouchString } from "rxdb";
import { describe, it, beforeEach, afterEach } from 'vitest';

export type TestSuite = {
    describe: typeof describe,
    it: typeof it,
    beforeEach: typeof beforeEach,
    afterEach: typeof afterEach
}

export type TestDocType = { key: string; value: string; };
export type OptionalValueTestDoc = { key: string; value?: string; };
/**
 * Some storages had problems with umlauts and other special chars.
 * So we add these to all test strings.
 * TODO add emojis
 */
export const TEST_DATA_CHARSET = '0987654321ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzäöüÖÄßÜ[]{}\'';
export const TEST_DATA_CHARSET_LAST_SORTED = ensureNotFalsy(lastOfArray(TEST_DATA_CHARSET.split('').sort()));
// const someEmojis = '😊💩👵🍌';
export function randomStringWithSpecialChars(length: number) {
    return randomString(length, TEST_DATA_CHARSET);
}

/**
 * @returns a format of the query that can be used with the storage
 * when calling RxStorageInstance().query()
 */
export function prepareQuery<RxDocType>(schema, mutateableQuery) {
    if (!mutateableQuery.sort) {
        throw newRxError('SNH', {
            query: mutateableQuery
        });
    }

    /**
     * Store the query plan together with the
     * prepared query to save performance.
     */
    var queryPlan = getQueryPlan<RxDocType>(schema, mutateableQuery);
    return {
        query: mutateableQuery,
        queryPlan
    };
}

export function getTestDataSchema(): RxJsonSchema<RxDocumentData<TestDocType>> {
    return fillWithDefaultSettings({
        version: 0,
        type: 'object',
        primaryKey: 'key',
        properties: {
            key: {
                type: 'string',
                maxLength: 100
            },
            value: {
                type: 'string',
                maxLength: 100
            }
        },
        required: [
            'key',
            'value'
        ],
        indexes: [
            'value'
        ]
    });
}

export const EXAMPLE_REVISION_1 = '1-12080c42d471e3d2625e49dcca3b8e1a';
export const EXAMPLE_REVISION_2 = '2-22080c42d471e3d2625e49dcca3b8e2b';
export const EXAMPLE_REVISION_3 = '3-32080c42d471e3d2625e49dcca3b8e3c';
export const EXAMPLE_REVISION_4 = '4-42080c42d471e3d2625e49dcca3b8e3c';
export const testContext = 'rx-storage-implementations.test.ts';
export const testQueryContext = 'rx-storage-query-correctness.test.ts';


export type RxTestStorage = {
    // TODO remove name here, it can be read out already via getStorage().name
    readonly name: string;
    readonly getStorage: (encrypted?: boolean) => RxStorage<any, any>;
    /**
     * Returns a storage that is used in performance tests.
     * For example in a browser it should return the storage with an IndexedDB based adapter,
     * while in node.js it must use the filesystem.
     */
    readonly getPerformanceStorage: (encrypted?: boolean) => {
        storage: RxStorage<any, any>;
        /**
         * A description that describes the storage and setting.
         * For example 'dexie-native'.
         */
        description: string;
    };
    /**
     * True if the storage is able to
     * keep data after an instance is closed and opened again.
     */
    readonly hasPersistence: boolean;
    readonly hasMultiInstance: boolean;
    readonly hasAttachments: boolean;
    /**
     * To make it possible to test alternative encryption plugins,
     * you can specify hasEncryption to signal
     * the test runner that the given storage already contains an
     * encryption plugin that should be used to test encryption tests.
     * Otherwise the encryption-crypto-js plugin will be tested.
     *
     * hasEncryption must contain a function that is able
     * to create a new password.
     */
    readonly hasEncryption?: () => Promise<string>;
};



export type TestCorrectQueriesInput<RxDocType> = {
    notRunIfTrue?: () => boolean;
    testTitle: string;
    schema: RxJsonSchema<RxDocType>;
    data: RxDocType[];
    queries: ({
        info: string;
        query: MangoQuery<RxDocType>;
        expectedResultDocIds: string[];
        /**
         * If this is set, we expect the output
         * of the RxDB query planner to have
         * set selectorSatisfiedByIndex as the given value.
         */
        selectorSatisfiedByIndex?: boolean;
    } | undefined)[];
};
export function withIndexes<RxDocType>(
    schema: RxJsonSchema<RxDocType>,
    indexes: string[][]
): RxJsonSchema<RxDocType> {
    schema = clone(schema);
    schema.indexes = indexes;
    return schema;
}

let storage: RxStorage<any, any>;

export function testCorrectQueries<RxDocType>(
    suite: TestSuite,
    testStorage: RxTestStorage,
    input: TestCorrectQueriesInput<RxDocType>
) {
    const { it, describe, beforeEach } = suite


    describe(`Testing - ${input.testTitle}`, () => {
        beforeEach(async () => {
            storage = await testStorage.getStorage()
        })


        if (input.notRunIfTrue && input.notRunIfTrue()) {
            return;
        }


        it(input.testTitle, async ({ expect }) => {
            const schema = fillWithDefaultSettings(clone(input.schema));
            const primaryPath = getPrimaryFieldOfPrimaryKey(schema.primaryKey);
            const storageInstance = await storage.createStorageInstance<RxDocType>({
                databaseInstanceToken: randomCouchString(10),
                databaseName: randomCouchString(12),
                collectionName: randomCouchString(12),
                schema,
                options: {},
                multiInstance: false,
                devMode: true
            });


            const rawDocsData = input.data.map(row => {
                const writeData = Object.assign(
                    {},
                    row,
                    {
                        _deleted: false,
                        _attachments: {},
                        _meta: {
                            lwt: now()
                        },
                        _rev: EXAMPLE_REVISION_1
                    }
                );
                return writeData;
            });

            await storageInstance.bulkWrite(
                rawDocsData.map(document => ({ document })),
                testQueryContext
            );

            const database = await createRxDatabase({
                name: randomCouchString(10),
                storage,
                allowSlowCount: true
            });
            const collections = await database.addCollections({
                test: {
                    schema: input.schema
                }
            });
            const collection = collections.test;
            await collection.bulkInsert(input.data);

            for (const queryData of input.queries) {
                if (!queryData) {
                    continue;
                }

                const queryForStorage = clone(queryData.query) as MangoQuery<RxDocType>;
                if (!queryForStorage.selector) {
                    queryForStorage.selector = {};
                }
                (queryForStorage.selector as any)._deleted = false;
                if (queryForStorage.index) {
                    (queryForStorage.index as any).unshift('_deleted');
                }
                const normalizedQuery = deepFreeze(normalizeMangoQuery(schema, queryForStorage));
                const skip = normalizedQuery.skip ? normalizedQuery.skip : 0;
                const limit = normalizedQuery.limit ? normalizedQuery.limit : Infinity;
                const skipPlusLimit = skip + limit;

                const preparedQuery = prepareQuery<RxDocType>(
                    schema,
                    normalizedQuery
                );

                // Test output of RxStorageStatics
                const queryMatcher = getQueryMatcher(schema, normalizedQuery);
                const sortComparator = getSortComparator(schema, normalizedQuery);
                const staticsResult = rawDocsData.slice(0)
                    .filter(d => queryMatcher(d))
                    .sort(sortComparator)
                    .slice(skip, skipPlusLimit);
                const resultStaticsIds = staticsResult.map(d => (d as any)[primaryPath]);

                expect(resultStaticsIds).toStrictEqual(queryData.expectedResultDocIds)



                // Test correct selectorSatisfiedByIndex
                if (typeof queryData.selectorSatisfiedByIndex !== 'undefined') {
                    const queryPlan = getQueryPlan(schema, normalizedQuery);
                    expect(queryPlan.selectorSatisfiedByIndex).toBe(queryData.selectorSatisfiedByIndex)
                }

                // Test output of RxStorageInstance.query();
                const resultFromStorage = await storageInstance.query(preparedQuery);
                const resultIds = resultFromStorage.documents.map(d => (d as any)[primaryPath]);

                expect(resultIds).toStrictEqual(queryData.expectedResultDocIds)


                // Test output of RxCollection.find()
                const rxQuery = collection.find(queryData.query);
                const resultFromCollection = await rxQuery.exec();
                const resultFromCollectionIds = resultFromCollection.map(d => d.primary);

                expect(resultFromCollectionIds).toStrictEqual(queryData.expectedResultDocIds)


                // Test output of .count()
                if (
                    !queryData.query.limit &&
                    !queryData.query.skip
                ) {
                    const countResult = await storageInstance.count(preparedQuery);
                    expect(countResult.count).toStrictEqual(queryData.expectedResultDocIds.length)

                }
            }

            await Promise.all([
                database.remove(),
                storageInstance.close()
            ]);
        });

    })
}
