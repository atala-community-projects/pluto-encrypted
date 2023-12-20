import { RxDocumentData, RxDocumentWriteData, RxJsonSchema, RxStorage, RxStorageInstance, RxStorageInstanceCreationParams, clone, createRevision, ensureNotFalsy, fillWithDefaultSettings, flatCloneDocWithMeta, getPseudoSchemaForVersion, newRxError, now, parseRevision, randomCouchString } from "rxdb";
import { describe, it, beforeEach, afterEach } from 'vitest';

declare type TestDocType = { key: string; value: string; };
declare type OptionalValueTestDoc = { key: string; value?: string; };

type TestSuite = {
    describe: typeof describe,
    it: typeof it,
    beforeEach: typeof beforeEach,
    afterEach: typeof afterEach
}

function getTestDataSchema(): RxJsonSchema<RxDocumentData<TestDocType>> {
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

export function runTestSuite(suite: TestSuite, testStorage: RxTestStorage) {
    const { describe, it, beforeEach } = suite
    describe('RxStorageInstance', () => {
        let storage: RxStorage<any, any>;
        let storageInstance: RxStorageInstance<any, any, any, any>;
        beforeEach(async () => {
            storage = await testStorage.getStorage()
        })

        afterEach(async () => {
            if (storageInstance) {
                await storageInstance.cleanup(Infinity);
                await storageInstance.close();
            }
        })

        describe('creation', () => {
            it('open and close', async ({ expect }) => {
                const collectionName = randomCouchString(12);
                const databaseName = randomCouchString(12);
                storageInstance = await storage.createStorageInstance<TestDocType>({
                    databaseInstanceToken: randomCouchString(10),
                    databaseName,
                    collectionName,
                    schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                    options: {},
                    multiInstance: false,
                    devMode: true,
                    password: randomCouchString(24)
                });
                expect(storageInstance.collectionName).toBe(collectionName)
                expect(storageInstance.databaseName).toBe(databaseName)
                await storageInstance.close();
            });
            it('open many instances on the same database name', async ({ expect }) => {
                const databaseName = randomCouchString(12);
                const amount = 20;
                const instances = await Promise.all(
                    new Array(amount).fill(0).map(() => storage.createStorageInstance<TestDocType>({
                        databaseInstanceToken: randomCouchString(10),
                        databaseName,
                        collectionName: randomCouchString(12),
                        schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                        options: {},
                        multiInstance: false,
                        devMode: true,
                        password: randomCouchString(24)
                    }))
                );
                await Promise.all(instances.map(instance => instance.cleanup(Infinity).then(() => instance.close())));
            });
            /**
             * This test ensures that people do not accidentally set
             * keyCompression: true in the schema but then forget to use
             * the key-compression RxStorage wrapper.
             */
            it('must throw if keyCompression is set but no key-compression plugin is used', async ({ expect }) => {
                const schema = getPseudoSchemaForVersion<TestDocType>(0, 'key');
                schema.keyCompression = true;

                const params: RxStorageInstanceCreationParams<TestDocType, any> = {
                    databaseInstanceToken: randomCouchString(10),
                    databaseName: randomCouchString(12),
                    collectionName: randomCouchString(12),
                    schema,
                    options: {},
                    multiInstance: false,
                    devMode: true,
                    password: randomCouchString(24)
                }
                await expect(() => storage.createStorageInstance<TestDocType>(params)).rejects.toThrowError(newRxError('UT5', { args: { databaseName: params.databaseName, collectionName: params.collectionName } }))

            });

        });

        describe('.bulkWrite()', () => {
            it('should write the document', async ({ expect }) => {
                storageInstance = await storage.createStorageInstance<TestDocType>({
                    databaseInstanceToken: randomCouchString(10),
                    databaseName: randomCouchString(12),
                    collectionName: randomCouchString(12),
                    schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                    options: {},
                    multiInstance: false,
                    devMode: true
                });
                const pkey = 'foobar';
                const docData: RxDocumentWriteData<TestDocType> = {
                    key: 'foobar',
                    value: 'barfoo1',
                    _deleted: false,
                    _meta: {
                        lwt: now()
                    },
                    _rev: EXAMPLE_REVISION_1,
                    _attachments: {}
                };
                const writeResponse = await storageInstance.bulkWrite(
                    [{
                        document: clone(docData)
                    }],
                    testContext
                );

                expect(writeResponse.error).toStrictEqual({})
                const first = writeResponse.success[pkey];
                expect(docData).toStrictEqual(first)
            });

            it('should error on conflict', async ({ expect }) => {
                storageInstance = await storage.createStorageInstance<TestDocType>({
                    databaseInstanceToken: randomCouchString(10),
                    databaseName: randomCouchString(12),
                    collectionName: randomCouchString(12),
                    schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                    options: {},
                    multiInstance: false,
                    devMode: true
                });
                const pkey = 'foobar'
                const writeData: RxDocumentWriteData<TestDocType> = {
                    key: pkey,
                    value: 'barfoo',
                    _deleted: false,
                    _attachments: {},
                    _rev: EXAMPLE_REVISION_1,
                    _meta: {
                        lwt: now()
                    }
                };


                await storageInstance.bulkWrite(
                    [{
                        document: writeData
                    }],
                    testContext
                );
                const writeResponse = await storageInstance.bulkWrite(
                    [{
                        document: writeData
                    }],
                    testContext
                );

                expect(writeResponse.success).toStrictEqual({})
                expect(writeResponse.error[pkey]).not.toBe(undefined)
                const first = writeResponse.error[pkey]!;

                expect(first.status).toBe(409)
                expect(first.documentId).toBe(pkey)

                /**
                 * The conflict error state must contain the
                 * document state in the database.
                 * This ensures that we can continue resolving the conflict
                 * without having to pull the document out of the db first.
                 */
                expect((first as any).documentInDb.value).toBe(writeData.value)

                /**
                 * The documentInDb must not have any additional attributes.
                 * Some RxStorage implementations store meta fields
                 * together with normal document data.
                 * These fields must never be leaked to 409 conflict errors
                 */
                expect(Object.keys((first as any).documentInDb).sort()).toStrictEqual(Object.keys(writeData).sort())

            });

            it('when inserting the same document at the same time, the first call must succeed while the second has a conflict', async ({ expect }) => {
                storageInstance = await storage.createStorageInstance<TestDocType>({
                    databaseInstanceToken: randomCouchString(10),
                    databaseName: randomCouchString(12),
                    collectionName: randomCouchString(12),
                    schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                    options: {},
                    multiInstance: false,
                    devMode: true
                });
                const pkey = 'foobar'
                const writeData: RxDocumentWriteData<TestDocType> = {
                    key: pkey,
                    value: 'barfoo',
                    _deleted: false,
                    _attachments: {},
                    _rev: EXAMPLE_REVISION_1,
                    _meta: {
                        lwt: now()
                    }
                };

                const first = await storageInstance.bulkWrite(
                    [{
                        document: Object.assign({}, writeData, {
                            value: 'first'
                        })
                    }],
                    testContext
                )

                const second = await storageInstance.bulkWrite(
                    [{
                        document: Object.assign({}, writeData, {
                            value: 'second'
                        })
                    }],
                    testContext
                )

                expect(first.error).toStrictEqual({})
                expect(first.success[pkey]!.value).toBe('first')


                expect(second.error[pkey]!.status).toBe(409)

            });

            it('should not find the deleted document when findDocumentsById(false)', async ({ expect }) => {
                storageInstance = await storage.createStorageInstance<TestDocType>({
                    databaseInstanceToken: randomCouchString(10),
                    databaseName: randomCouchString(12),
                    collectionName: randomCouchString(12),
                    schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                    options: {},
                    multiInstance: false,
                    devMode: true
                });

                const pkey = 'foobar'
                // make an insert
                const insertData = {
                    key: pkey,
                    value: 'barfoo1',
                    _deleted: false,
                    _rev: EXAMPLE_REVISION_1,
                    _attachments: {},
                    _meta: {
                        lwt: now()
                    }
                };
                const insertResponse = await storageInstance.bulkWrite(
                    [{
                        document: insertData
                    }],
                    testContext
                );

                expect(insertResponse.error).toStrictEqual({})
                const first = insertResponse.success[pkey];


                // make an update
                const updateData = Object.assign({}, insertData, {
                    value: 'barfoo2',
                    _rev: EXAMPLE_REVISION_2,
                    _meta: {
                        lwt: now()
                    }
                });
                const updateResponse = await storageInstance.bulkWrite(
                    [{
                        previous: insertData,
                        document: updateData
                    }],
                    testContext
                );
                expect(updateResponse.error).toStrictEqual({})

                // make the delete
                const toDelete = {
                    previous: updateData,
                    document: Object.assign({}, first, {
                        value: 'barfoo_deleted',
                        _deleted: true,
                        _rev: EXAMPLE_REVISION_3,
                        _meta: {
                            lwt: now()
                        }
                    })
                }
                const deleteResponse = await storageInstance.bulkWrite(
                    [toDelete],
                    testContext
                );
                expect(deleteResponse.error).toStrictEqual({})

                const foundDoc = await storageInstance.findDocumentsById([pkey], false);

                expect(foundDoc).toStrictEqual({})

            });

            it('should be able to unset a property', async ({ expect }) => {
                const schema = getTestDataSchema();
                schema.required = ['key'];

                storageInstance = await storage.createStorageInstance<OptionalValueTestDoc>({
                    databaseInstanceToken: randomCouchString(10),
                    databaseName: randomCouchString(12),
                    collectionName: randomCouchString(12),
                    schema: schema as any,
                    options: {},
                    multiInstance: false,
                    devMode: true
                });
                const docId = 'foobar';
                const insertData: RxDocumentWriteData<OptionalValueTestDoc> = {
                    key: docId,
                    value: 'barfoo1',
                    _attachments: {},
                    _deleted: false,
                    _rev: EXAMPLE_REVISION_1,
                    _meta: {
                        lwt: now()
                    }
                };
                const writeResponse = await storageInstance.bulkWrite(
                    [{
                        document: insertData
                    }],
                    testContext
                );

                expect(writeResponse.success[docId]).not.toBe(undefined)

                const insertResponse = writeResponse.success[docId]!;
                const insertDataAfterWrite: RxDocumentData<OptionalValueTestDoc> = Object.assign(
                    {},
                    insertResponse,
                    {
                        _rev: insertResponse._rev
                    }
                );

                const updateResponse = await storageInstance.bulkWrite(
                    [{
                        previous: insertDataAfterWrite,
                        document: {
                            key: docId,
                            _attachments: {},
                            _deleted: false,
                            _rev: EXAMPLE_REVISION_2,
                            _meta: {
                                lwt: now()
                            }
                        }
                    }],
                    testContext
                );

                expect(updateResponse.success[docId]).not.toBe(undefined)

                const updateResponseDoc = updateResponse.success[docId]!;

                delete (updateResponseDoc as any)._deleted;
                delete (updateResponseDoc as any)._rev;
                delete (updateResponseDoc as any)._meta;

                expect(updateResponseDoc).toStrictEqual({
                    key: docId,
                    _attachments: {}
                })

            });

            it('should be able to do a write where only _meta fields are changed', async ({ expect }) => {
                const databaseInstanceToken = randomCouchString(10);
                storageInstance = await storage.createStorageInstance<TestDocType>({
                    databaseInstanceToken,
                    databaseName: randomCouchString(12),
                    collectionName: randomCouchString(12),
                    schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                    options: {},
                    multiInstance: false,
                    devMode: true
                });

                const key = 'foobar';
                let docData: RxDocumentData<TestDocType> = {
                    key,
                    value: 'barfoo1',
                    _attachments: {},
                    _deleted: false,
                    _rev: EXAMPLE_REVISION_1,
                    _meta: {
                        lwt: now(),
                        foobar: 0
                    }
                };
                docData._rev = createRevision(databaseInstanceToken);

                const res1 = await storageInstance.bulkWrite(
                    [{
                        document: clone(docData)
                    }],
                    testContext
                );
                expect(res1.error).toStrictEqual({})

                // change once
                let newDocData: RxDocumentData<TestDocType> = clone(docData);
                newDocData._meta.foobar = 1;
                newDocData._meta.lwt = now();
                newDocData._rev = createRevision(databaseInstanceToken, docData);

                const res2 = await storageInstance.bulkWrite(
                    [{
                        previous: docData,
                        document: clone(newDocData)
                    }],
                    testContext
                );
                expect(res2.error).toStrictEqual({})
                docData = newDocData;

                // change again
                newDocData = clone(docData);
                newDocData._meta.foobar = 2;
                newDocData._meta.lwt = now();
                newDocData._rev = createRevision(databaseInstanceToken, docData);

                expect(parseRevision(newDocData._rev).height).toBe(3)

                const res3 = await storageInstance.bulkWrite(
                    [{
                        previous: docData,
                        document: clone(newDocData)
                    }],
                    testContext
                );
                expect(res3.error).toStrictEqual({})

                docData = newDocData;

                const viaStorage = await storageInstance.findDocumentsById([key], true);
                const viaStorageDoc = ensureNotFalsy(viaStorage[key]);
                expect(parseRevision(viaStorageDoc._rev).height).toBe(3)
            });
            it('should be able to create another instance after a write', async ({ expect }) => {
                const databaseName = randomCouchString(12);
                storageInstance = await storage.createStorageInstance<TestDocType>({
                    databaseInstanceToken: randomCouchString(10),
                    databaseName,
                    collectionName: randomCouchString(12),
                    schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                    options: {},
                    multiInstance: false,
                    devMode: true
                });
                const docData: RxDocumentWriteData<TestDocType> = {
                    key: 'foobar',
                    value: 'barfoo1',
                    _attachments: {},
                    _deleted: false,
                    _rev: EXAMPLE_REVISION_1,
                    _meta: {
                        lwt: now()
                    }
                };
                await storageInstance.bulkWrite(
                    [{
                        document: clone(docData)
                    }],
                    testContext
                );
                const storageInstance2 = await storage.createStorageInstance<TestDocType>({
                    databaseInstanceToken: randomCouchString(10),
                    databaseName,
                    collectionName: randomCouchString(12),
                    schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                    options: {},
                    multiInstance: false,
                    devMode: true
                });
                await storageInstance2.bulkWrite(
                    [{
                        document: Object.assign(
                            clone(docData),
                            {
                                _rev: EXAMPLE_REVISION_2,
                            }
                        )
                    }],
                    testContext
                );

                await Promise.all([
                    storageInstance2.cleanup(Infinity).then(() => storageInstance2.close())
                ]);
            });

            it('should be able to jump more then 1 revision height in a single write operation', async ({ expect }) => {
                storageInstance = await storage.createStorageInstance<TestDocType>({
                    databaseInstanceToken: randomCouchString(10),
                    databaseName: randomCouchString(12),
                    collectionName: randomCouchString(12),
                    schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                    options: {},
                    multiInstance: false,
                    devMode: true
                });
                const pkey = 'foobar';
                // insert
                const docData: RxDocumentData<TestDocType> = {
                    key: pkey,
                    value: 'barfoo1',
                    _deleted: false,
                    _meta: {
                        lwt: now()
                    },
                    _rev: EXAMPLE_REVISION_1,
                    _attachments: {}
                };
                const insertResponse = await storageInstance.bulkWrite(
                    [{
                        document: clone(docData)
                    }],
                    testContext
                );
                expect(insertResponse.error).toStrictEqual({})

                // update
                const updated = flatCloneDocWithMeta(docData);
                updated.value = 'barfoo2';
                updated._meta.lwt = now();
                updated._rev = EXAMPLE_REVISION_4;
                const updateResponse = await storageInstance.bulkWrite(
                    [{
                        previous: docData,
                        document: updated
                    }],
                    testContext
                );

                expect(updateResponse.error).toStrictEqual({})


                // find again
                const getDocFromDb = await storageInstance.findDocumentsById([docData.key], false);

                expect(getDocFromDb[pkey]).not.toBe(undefined)
                const docFromDb = getDocFromDb[pkey]!;

                expect(docFromDb._rev).toEqual(EXAMPLE_REVISION_4)

            });

            it('must be able create multiple storage instances on the same database and write documents', async ({ expect }) => {
                const collectionsAmount = 3;
                const docsAmount = 3;
                const databaseName = randomCouchString(10);
                const databaseInstanceToken = randomCouchString(10);

                const storageInstances = await Promise.all(
                    new Array(collectionsAmount)
                        .fill(0)
                        .map(async () => {
                            const storageInstance = await storage.createStorageInstance<TestDocType>({
                                databaseInstanceToken,
                                databaseName,
                                collectionName: randomCouchString(12),
                                schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                                options: {},
                                multiInstance: false,
                                devMode: true
                            });
                            await Promise.all(
                                new Array(docsAmount)
                                    .fill(0)
                                    .map(async (_v, docId) => {
                                        const writeData: RxDocumentWriteData<TestDocType> = {
                                            key: `${docId}`,
                                            value: randomCouchString(5),
                                            _rev: EXAMPLE_REVISION_1,
                                            _deleted: false,
                                            _meta: {
                                                lwt: now()
                                            },
                                            _attachments: {}
                                        };
                                        await storageInstance.bulkWrite([{ document: writeData }], testContext);
                                    })
                            );
                            return storageInstance;
                        })
                );
                await Promise.all(
                    storageInstances.map(i => i.cleanup(Infinity).then(() => i.close()))
                );
            });

            // Some storages had problems storing non-utf-8 chars like "é"
            it('write and read with umlauts', async ({ expect }) => {

                storageInstance = await storage.createStorageInstance<TestDocType>({
                    databaseInstanceToken: randomCouchString(10),
                    databaseName: randomCouchString(12),
                    collectionName: randomCouchString(12),
                    schema: getPseudoSchemaForVersion<TestDocType>(0, 'key'),
                    options: {},
                    multiInstance: false,
                    devMode: true
                });
                const umlauts = 'äöüßé';
                const pkey = 'foobar' + umlauts
                // insert
                const docData: RxDocumentData<TestDocType> = {
                    key: pkey,
                    value: 'value' + umlauts,
                    _deleted: false,
                    _meta: {
                        lwt: now()
                    },
                    _rev: EXAMPLE_REVISION_1,
                    _attachments: {}
                };
                const insertResponse = await storageInstance.bulkWrite(
                    [{
                        document: clone(docData)
                    }],
                    testContext
                );


                expect(insertResponse.error).toStrictEqual({})

                // find again
                const getDocFromDb = await storageInstance.findDocumentsById([docData.key], false);

                expect(getDocFromDb[pkey]).not.toBe(undefined)

                const docFromDb = getDocFromDb[pkey];

                expect(docFromDb.value).toBe('value' + umlauts)

                const pkey2 = 'foobar2' + umlauts
                // store another doc
                const docData2: RxDocumentData<TestDocType> = {
                    key: pkey2,
                    value: 'value2' + umlauts,
                    _deleted: false,
                    _meta: {
                        lwt: now()
                    },
                    _rev: EXAMPLE_REVISION_1,
                    _attachments: {}
                };
                await storageInstance.bulkWrite(
                    [{
                        document: clone(docData2)
                    }],
                    testContext
                );
                const getDocFromDb2 = await storageInstance.findDocumentsById([docData2.key], false);

                expect(getDocFromDb2[pkey2]).not.toBe(undefined)

            });
        });
    });
}