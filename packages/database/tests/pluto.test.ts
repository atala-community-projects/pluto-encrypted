import "./setup";

import { describe, it, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { randomUUID } from "crypto";
import SDK, { JWTCredential } from "@atala/prism-wallet-sdk";
import * as sinon from "sinon";
import { RxCollection, RxStorage } from "rxdb";
import InMemory from "../../inmemory/src";
import IndexDb from "../../indexdb/src";
import { createLevelDBStorage } from '../../leveldb/src'

import * as Fixtures from "./fixtures";
import { Database } from "../src";
import { PrivateKeyMethods, LinkSecretSchemaType, LinkSecretStaticMethodTypes, LinkSecretMethodTypes, LinkSecretMethods, LinkSecretSchema, LinkSecretStaticMethods, getDefaultCollections, PlutoCollections, CredentialCollection, CredentialRequestMetadataCollection, DIDCollection, DIDPairCollection, LinkSecretColletion, MediatorCollection, MessageColletion, PrivateKeyColletion, MessageSchemaType, MessageMethodTypes, MessageStaticMethodTypes } from "@pluto-encrypted/schemas";
import { DatabaseBase, ExtractStaticMethods, UnionToIntersection } from "@pluto-encrypted/shared";

const {
    AnonCredsCredential,
    Apollo,
    Castor,
    Pollux,
} = SDK;

const pollux = new Pollux(new Castor(new Apollo()));
const keyData = new Uint8Array(32);
const jwtParts = [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6Imp3dCJ9",
    "18bn-r7uRWAG4FCFBjxemKvFYPCAoJTOHaHthuXh5nM",
];
const messageType = "https://didcomm.org/basicmessage/2.0/message";
const createMessage = (
    from?: SDK.Domain.DID,
    to?: SDK.Domain.DID,
    direction: SDK.Domain.MessageDirection = SDK.Domain.MessageDirection.SENT
) => {
    const message = new SDK.Domain.Message(
        "{}",
        randomUUID(),
        messageType,
        from,
        to,
        [],
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        direction
    );
    return message;
};
const defaultPassword = Buffer.from(keyData);

let sandbox: sinon.SinonSandbox;

const databaseName = "prism-db";
const databasePath = path.resolve(process.cwd(), databaseName);

const storages: RxStorage<any, any>[] = [
    createLevelDBStorage({
        dbPath: databasePath
    }),
    InMemory,
    IndexDb,
]

function getStorageDBName(storage: RxStorage<any, any>) {
    if (storage.name === "leveldb") {
        return `${databaseName}${randomUUID()}`
    }
    if (storage.name === "in-memory") {
        return databaseName
    }
    return `${databaseName}${randomUUID()}`
}

type DefaultCollections = {
    dids: DIDCollection;
    didpairs: DIDPairCollection;
    mediators: MediatorCollection;
    privatekeys: PrivateKeyColletion;
    credentials: CredentialCollection;
    credentialrequestmetadatas: CredentialRequestMetadataCollection;
    linksecrets: LinkSecretColletion;
    messages: MessageColletion;
}

describe("Pluto encrypted testing with different storages", () => {
    let db: DatabaseBase<DefaultCollections> & UnionToIntersection<ExtractStaticMethods<
        DefaultCollections[keyof DefaultCollections]
    >>;

    let currentDBName: string;

    afterEach(async () => {
        // jest.useRealTimers();
        sandbox.restore();
    });

    beforeEach(async () => {
        // jest.useFakeTimers();
        sandbox = sinon.createSandbox();
    });

    storages.forEach((storage, i) => {

        const storageName = `[${storage.name}]`;

        it(storageName + "Should throw an error if pluto has is startede with a wrong database password", async ({ expect }) => {
            const forceDatabaseName = getStorageDBName(storage)
            const createDatabase = async (password: Uint8Array) => {
                const db = await Database.createEncrypted<DefaultCollections>(
                    {
                        name: forceDatabaseName,
                        encryptionKey: password,
                        storage: storage,
                        collections: getDefaultCollections()
                    }
                );

                await db.getAllPrismDIDs()
                const did = SDK.Domain.DID.fromString(
                    "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
                );
                const privateKey = Fixtures.secp256K1.privateKey;
                await db.storePrismDID(did, 0, privateKey, null);
            }

            await createDatabase(defaultPassword);

            const keyData2 = keyData;
            keyData2[0] = 1;
            keyData2[1] = 2;

            await expect(() => createDatabase(keyData2)).rejects.toThrowError(new Error("Invalid Authentication"));

        });


        describe(storageName, () => {

            beforeEach(async () => {
                currentDBName = getStorageDBName(storage);
                db = await Database.createEncrypted<DefaultCollections>(
                    {
                        name: currentDBName,
                        encryptionKey: defaultPassword,
                        storage: storage,
                        collections: getDefaultCollections()
                    }
                );
            });

            afterEach(async () => {
                if (db && (storage.name === "in-memory" || storage.name === "leveldb")) {
                    await db.clear()
                }
            })

            it(storageName + "Should throw an error if pluto has not been started", async ({ expect }) => {
                const createDatabase = async () => {
                    const restored = await Database.createEncrypted<DefaultCollections>(
                        {
                            name: currentDBName,
                            encryptionKey: defaultPassword,
                            storage: storage,
                            autoStart: false,
                            collections: getDefaultCollections()
                        }
                    );

                    await restored.getAllMediators()
                }

                await expect(() => createDatabase()).rejects.toThrowError(new Error("Start Pluto first."));
            })

            it(storageName + "Should throw an error if pluto has been initialised with no storage.", async ({ expect }) => {
                const createDatabase = async () => {
                    await Database.createEncrypted<{
                        dids: DIDCollection;
                        didpairs: DIDPairCollection;
                        mediators: MediatorCollection;
                        privatekeys: PrivateKeyColletion;
                        credentials: CredentialCollection;
                        credentialrequestmetadatas: CredentialRequestMetadataCollection;
                        linksecrets: LinkSecretColletion;
                        messages: MessageColletion;
                    }>(
                        {
                            name: currentDBName,
                            encryptionKey: defaultPassword,
                            storage: undefined as any,
                            autoStart: false,
                            collections: getDefaultCollections()
                        }
                    );
                }

                await expect(() => createDatabase()).rejects.toThrowError(new Error("Please provide a valid storage."));
            })

            it(storageName + "Should store a new Prism DID and its privateKeys", async ({ expect }) => {
                expect(await db.getPrismLastKeyPathIndex()).toBe(0);
                const did = SDK.Domain.DID.fromString(
                    "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
                );
                const did2 = SDK.Domain.DID.fromString(
                    "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw1"
                );
                const did3 = SDK.Domain.DID.fromString(
                    "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw2"
                );
                const privateKey = Fixtures.secp256K1.privateKey;
                expect(await db.getPrismLastKeyPathIndex()).toBe(0);

                await db.storePrismDID(did, 0, privateKey, null);
                expect((await db.getAllPrismDIDs()).length).toBe(1);
                expect(await db.getDIDInfoByDID(did)).not.toBe(null);
                expect(await db.getPrismDIDKeyPathIndex(did)).toBe(1);
                expect(await db.getPrismLastKeyPathIndex()).toBe(1);
                await db.storePrismDID(did2, 1, privateKey, null);
                expect(await db.getPrismDIDKeyPathIndex(did2)).toBe(2);
                expect(await db.getPrismLastKeyPathIndex()).toBe(2);
                expect(await db.getPrismDIDKeyPathIndex(did3)).toBe(0);
            });

            it(storageName + "Should throw an exception if a wrong key object from Database is loaded", async ({ expect }) => {
                const wrongKey: any = {
                    keySpecification: [],
                    toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
                };
                expect(() => {
                    wrongKey.toDomainPrivateKey();
                }).toThrowError(new Error(`Invalid KeyType undefined`));

                const wrongKey2: any = {
                    type: "sds",
                    keySpecification: [],
                    toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
                };
                expect(() => {
                    wrongKey2.toDomainPrivateKey();
                }).toThrowError(new Error(`Invalid KeyType sds`));

                const wrongKey3: any = {
                    type: SDK.Domain.KeyTypes.Curve25519,
                    keySpecification: [],
                    toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
                };
                expect(() => {
                    wrongKey3.toDomainPrivateKey();
                }).toThrowError(new Error("Undefined key curve"));

                const wrongKey4: any = {
                    type: SDK.Domain.KeyTypes.Curve25519,
                    keySpecification: [
                        {
                            name: SDK.Domain.KeyProperties.curve,
                            type: "string",
                            value: "asd",
                        },
                    ],
                    toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
                };
                expect(() => {
                    wrongKey4.toDomainPrivateKey();
                }).toThrowError(new Error("Invalid key curve asd"));

                const wrongKey5: any = {
                    type: SDK.Domain.KeyTypes.Curve25519,
                    keySpecification: [
                        {
                            name: SDK.Domain.KeyProperties.curve,
                            type: "string",
                            value: SDK.Domain.Curve.ED25519,
                        },
                    ],
                    toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
                };
                expect(() => {
                    wrongKey5.toDomainPrivateKey();
                }).toThrowError(new Error("Undefined key raw"));

                const correctKey: any = {
                    type: SDK.Domain.KeyTypes.EC,
                    keySpecification: [
                        {
                            name: SDK.Domain.KeyProperties.curve,
                            type: "string",
                            value: SDK.Domain.Curve.SECP256K1,
                        },
                        {
                            name: SDK.Domain.KeyProperties.rawKey,
                            type: "string",
                            value: Buffer.from(Fixtures.secp256K1.privateKey.raw).toString(
                                "hex"
                            ),
                        },
                    ],
                    toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
                };

                correctKey.toDomainPrivateKey();

                const correctKeyWithIndex: any = {
                    type: SDK.Domain.KeyTypes.EC,
                    keySpecification: [
                        {
                            name: SDK.Domain.KeyProperties.curve,
                            type: "string",
                            value: SDK.Domain.Curve.SECP256K1,
                        },
                        {
                            name: SDK.Domain.KeyProperties.rawKey,
                            type: "string",
                            value: Buffer.from(Fixtures.secp256K1.privateKey.raw).toString(
                                "hex"
                            ),
                        },
                        {
                            name: SDK.Domain.KeyProperties.index,
                            type: "string",
                            value: Fixtures.secp256K1.privateKey.index,
                        },
                        {
                            name: SDK.Domain.KeyProperties.seed,
                            type: "string",
                            value: "A12456",
                        },
                    ],
                    toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
                };

                correctKeyWithIndex.toDomainPrivateKey();

                const correctEd25519Key: any = {
                    type: SDK.Domain.KeyTypes.EC,
                    keySpecification: [
                        {
                            name: SDK.Domain.KeyProperties.curve,
                            type: "string",
                            value: SDK.Domain.Curve.ED25519,
                        },
                        {
                            name: SDK.Domain.KeyProperties.rawKey,
                            type: "string",
                            value: Buffer.from(Fixtures.ed25519.privateKey.raw).toString("hex"),
                        },
                    ],
                    toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
                };

                correctEd25519Key.toDomainPrivateKey();

                const correctX25519Key: any = {
                    type: SDK.Domain.KeyTypes.Curve25519,
                    keySpecification: [
                        {
                            name: SDK.Domain.KeyProperties.curve,
                            type: "string",
                            value: SDK.Domain.Curve.X25519,
                        },
                        {
                            name: SDK.Domain.KeyProperties.rawKey,
                            type: "string",
                            value: Buffer.from(Fixtures.x25519.privateKey.raw).toString("hex"),
                        },
                    ],
                    toDomainPrivateKey: PrivateKeyMethods.toDomainPrivateKey,
                };

                correctX25519Key.toDomainPrivateKey();
            });

            it(storageName + "Should return null when no privateKey is found by its id", async ({ expect }) => {
                const did = SDK.Domain.DID.fromString(
                    "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
                );
                expect(await db.getDIDInfoByDID(did)).toBe(null);
            });

            it(storageName + "Should return null when no privateKey is found by its id", async ({ expect }) => {
                expect(await db.getDIDPrivateKeyByID("not fund")).toBe(null);
            });

            it(storageName + "Should return null when no privateKey is found by its did", async ({ expect }) => {
                const did = SDK.Domain.DID.fromString(
                    "did:prism::t8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
                );
                expect((await db.getDIDPrivateKeysByDID(did)).length).toBe(0);
            });

            it(storageName + "Should store a new Prism DID and its privateKeys with privateKeyMetadataId", async ({ expect }) => {
                const did = SDK.Domain.DID.fromString(
                    "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
                );
                const privateKey = Fixtures.secp256K1.privateKey;
                await db.storePrismDID(did, 0, privateKey, did.toString());
                expect((await db.getAllPrismDIDs()).length).toBe(1);
            });

            it(storageName + "Should store a new Prism DID and its privateKeys with privateKeyMetadataId and alias", async ({ expect }) => {
                const did = SDK.Domain.DID.fromString(
                    "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
                );
                const privateKey = Fixtures.secp256K1.privateKey;
                await db.storePrismDID(
                    did,
                    0,
                    privateKey,
                    did.toString(),
                    "defaultalias"
                );
                expect((await db.getAllPrismDIDs()).length).toBe(1);
            });

            it(storageName + "Should store a new Prism DID and its privateKeys and fetch it by its alias", async ({ expect }) => {
                const did = SDK.Domain.DID.fromString(
                    "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw"
                );
                const alias = "default";
                const privateKey = Fixtures.secp256K1.privateKey;
                await db.storePrismDID(did, 0, privateKey, null, alias);
                expect((await db.getDIDInfoByAlias(alias)).length).toBe(1);
            });

            it(storageName + "Should store a Message duplicate message", async ({ expect }) => {
                const message = createMessage();
                await db.storeMessage(message);
                await db.storeMessage(message);
            });

            it(storageName + "Should store a Message and fetch it", async ({ expect }) => {
                const message = createMessage();
                await db.storeMessage(message);
                const dbMesaage = await db.getMessage(message.id);
                expect(dbMesaage).not.toBe(null);
                expect(dbMesaage!.id).toBe(message.id);
            });

            it(storageName + "Should store a Message and update it", async ({ expect }) => {
                const message = createMessage();
                await db.storeMessage(message);
                await db.storeMessage(message);
                const dbMesaage = await db.getMessage(message.id);
                expect(dbMesaage).not.toBe(null);
                expect(dbMesaage!.id).toBe(message.id);
            });

            it(storageName + "Should get all the messages", async ({ expect }) => {
                const allMessages = await db.getAllMessages();
                expect(allMessages.length).toBe(0);
            });

            it(storageName + "Should fetch stored messages either by type or by did", async ({ expect }) => {
                const from = SDK.Domain.DID.fromString("did:prism:123456");
                const to = SDK.Domain.DID.fromString("did:prism:654321");
                const from2 = SDK.Domain.DID.fromString("did:prism:12345644");
                const to2 = SDK.Domain.DID.fromString("did:prism:65432133");

                await db.storeMessages([
                    createMessage(from, to, SDK.Domain.MessageDirection.RECEIVED),
                    createMessage(from2, to2, SDK.Domain.MessageDirection.SENT),
                ]);

                const byType = await db.getAllMessagesOfType(messageType);
                expect(byType.length).toBe(2);

                const byType2 = await db.getAllMessagesOfType(messageType, from);
                expect(byType2.length).toBe(1);

                const byType4 = await db.getAllMessagesSent();
                expect(byType4.length).toBe(1);

                const byType5 = await db.getAllMessagesReceived();
                expect(byType5.length).toBe(1);

                const byType6 = await db.getAllMessagesSentTo(to2);
                expect(byType6.length).toBe(1);

                const byType7 = await db.getAllMessagesReceivedFrom(from);
                expect(byType7.length).toBe(1);

                const byType8 = await db.getAllMessagesByFromToDID(from, to);
                expect(byType8.length).toBe(1);

                const byType9 = await db.getAllMessagesByDID(from);
                expect(byType9.length).toBe(1);

                const byType10 = await db.getAllMessages();
                expect(byType10.length).toBe(2);
            });

            it(storageName + "Should return null if message is not found by id ", async ({ expect }) => {
                const dbMesaage = await db.getMessage("notfound");
                expect(dbMesaage).toBe(null);
            });

            it(storageName + "Should store multiple messages", async ({ expect }) => {
                await db.storeMessages([createMessage(), createMessage()]);
            });

            it(storageName + "Should store a peerDID", async ({ expect }) => {
                const did = new SDK.Domain.DID(
                    "did",
                    "peer",
                    "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
                );
                expect((await db.getAllPeerDIDs()).length).toBe(0);
                await db.storePeerDID(did, [
                    Fixtures.ed25519.privateKey,
                    Fixtures.x25519.privateKey,
                ]);
                expect((await db.getAllPeerDIDs()).length).toBe(1);
                await db.getDIDInfoByDID(did);
            });

            it(storageName + "Should store a didPair", async ({ expect }) => {
                const host = SDK.Domain.DID.fromString("did:prism:123456");
                const receiver = SDK.Domain.DID.fromString("did:prism:654321");
                const name = "example";
                await db.storeDIDPair(host, receiver, name);
            });

            it(storageName + "Should get all the didPairs", async ({ expect }) => {
                const host = SDK.Domain.DID.fromString("did:prism:123456");
                const receiver = SDK.Domain.DID.fromString("did:prism:654321");
                const name = "example";
                expect((await db.getAllDidPairs()).length).toBe(0);
                await db.storeDIDPair(host, receiver, name);
                expect((await db.getAllDidPairs()).length).toBe(1);
            });

            it(storageName + "Should get a did pair by its did", async ({ expect }) => {
                const host = SDK.Domain.DID.fromString("did:prism:123456");
                const receiver = SDK.Domain.DID.fromString("did:prism:654321");
                const name = "example";
                await db.storeDIDPair(host, receiver, name);
                expect(await db.getPairByDID(host)).not.toBe(null);
            });

            it(storageName + "Should return null when a pair is fetched by a non existing did", async ({ expect }) => {
                const notfound = SDK.Domain.DID.fromString("did:prism:65432155555");
                expect(await db.getPairByDID(notfound)).toBe(null);
            });

            it(storageName + "Should get a did pair by its name", async ({ expect }) => {
                const host = SDK.Domain.DID.fromString("did:prism:123456");
                const receiver = SDK.Domain.DID.fromString("did:prism:654321");
                const name = "example";
                await db.storeDIDPair(host, receiver, name);
                expect(await db.getPairByName(name)).not.toBe(null);
            });

            it(storageName + "Should return null when a pair by name is not found", async ({ expect }) => {
                expect(await db.getPairByName("not found")).toBe(null);
            });

            it(storageName + "Should store a mediator", async ({ expect }) => {
                const host = SDK.Domain.DID.fromString("did:prism:333333");
                const mediator = SDK.Domain.DID.fromString("did:prism:444444");
                const routing = SDK.Domain.DID.fromString("did:prism:555555");
                expect((await db.getAllMediators()).length).toBe(0);
                await db.storeMediator(mediator, host, routing);

                expect((await db.getAllMediators()).length).toBe(1);
            });

            it(storageName + "Should go a backup of all the database and restore it", async ({ expect }) => {
                const host = SDK.Domain.DID.fromString("did:prism:333333");
                const mediator = SDK.Domain.DID.fromString("did:prism:444444");
                const routing = SDK.Domain.DID.fromString("did:prism:555555");
                expect((await db.getAllMediators()).length).toBe(0);
                await db.storeMediator(mediator, host, routing);
                expect((await db.getAllMediators()).length).toBe(1);
                const backup = await db.backup();

                if (db && (storage.name === "in-memory" || storage.name === "leveldb")) {
                    await db.clear();
                }

                if (storage.name === "leveldb") {
                    if (fs.existsSync(databasePath)) {
                        fs.rmdirSync(databasePath, { recursive: true })
                    }
                }

                const restored = await Database.createEncrypted<DefaultCollections>(
                    {
                        name: currentDBName,
                        encryptionKey: defaultPassword,
                        importData: backup,
                        storage: storage,
                        collections: getDefaultCollections()
                    }
                );

                expect((await restored.getAllMediators()).length).toBe(1);
            });

            it(storageName + "Should throw an error when an incomplete did is loaded from db", async ({ expect }) => {
                const did = SDK.Domain.DID.fromString("did:prism:65432133");

                await (db as any).db.dids.insert({
                    did: did.toString(),
                    method: did.method,
                    methodId: did.methodId,
                    schema: did.schema,
                });
                expect(db.getDIDInfoByDID(did)).rejects.toThrowError(
                    "Imposible to recover PrismDIDInfo without its privateKey data."
                );
            });

            it(storageName + "Should get a privateKey by its ID", async ({ expect }) => {
                const did = SDK.Domain.DID.fromString("did:prism:65432133");

                await (db as any).db.privatekeys.insert({
                    id: "123",
                    did: did.toString(),
                    type: SDK.Domain.KeyTypes.EC,
                    keySpecification: [
                        {
                            name: "curve",
                            value: SDK.Domain.Curve.ED25519,
                            type: "string",
                        },
                        {
                            name: "curve",
                            value: SDK.Domain.Curve.ED25519,
                            type: "string",
                        },
                        {
                            name: "raw",
                            value: new Array(32),
                            type: "string",
                        },
                    ],
                });
                expect(await db.getDIDPrivateKeyByID("123")).toHaveProperty("type");
            });

            const encodeJWTCredential = (cred: object): string => {
                const json = JSON.stringify(cred);
                const encoded = Buffer.from(json).toString("base64");
                return `${jwtParts[0]}.${encoded}.${jwtParts[2]}`;
            };

            it(storageName + "Should store and fetch a JWT Credential", async ({ expect }) => {
                expect((await db.getAllCredentials()).length).toBe(0);
                const jwtPayload = Fixtures.createJWTPayload(
                    "jwtid",
                    "proof",
                    SDK.Domain.CredentialType.JWT
                );
                const encoded = encodeJWTCredential(jwtPayload);

                const result = await pollux.parseCredential(Buffer.from(encoded), {
                    type: SDK.Domain.CredentialType.JWT,
                });
                await db.storeCredential(result);
                const results = await db.getAllCredentials()
                expect(results.length).toBe(1);
            });

            it(storageName + "Should store and fetch a JWT Credential and then generate  a proof", async ({ expect }) => {
                class PresentationRequest<T = unknown> {
                    /**
                     * @constructor
                     * @param type - CredentialType the json is related to
                     * @param json - the raw value
                     */
                    constructor(type: SDK.Domain.CredentialType.AnonCreds, json: SDK.Domain.Anoncreds.PresentationRequest);
                    constructor(type: SDK.Domain.CredentialType.JWT, json: any);
                    constructor(
                        private readonly type: SDK.Domain.CredentialType,
                        private readonly json: T
                    ) { }

                    /**
                     * Type guard that the instance is for the given CredentialType
                     * 
                     * @param type 
                     * @returns {boolean}
                     */
                    isType(type: SDK.Domain.CredentialType.AnonCreds): this is PresentationRequest<SDK.Domain.Anoncreds.PresentationRequest>;
                    isType(type: SDK.Domain.CredentialType.JWT): this is PresentationRequest<any>;
                    isType(target: SDK.Domain.CredentialType) {
                        return this.type === target;
                    }

                    /**
                     * Get the raw PresentationRequest JSON
                     * 
                     * @returns JSON
                     */
                    toJSON(): T {
                        return this.json;
                    }
                }

                expect((await db.getAllCredentials()).length).toBe(0);
                const jwtPayload = Fixtures.createJWTPayload(
                    "jwtid",
                    "proof",
                    SDK.Domain.CredentialType.JWT
                );
                const encoded = encodeJWTCredential(jwtPayload);

                const parsedCredential = await pollux.parseCredential(Buffer.from(encoded), {
                    type: SDK.Domain.CredentialType.JWT,
                });
                await db.storeCredential(parsedCredential);


                const credentials = await db.getAllCredentials()
                expect(credentials.length).toBe(1);

                const credential = credentials[0];
                const apollo = new Apollo();

                const pr = new PresentationRequest(SDK.Domain.CredentialType.JWT, {
                    "options": {
                        "challenge": "11c91493-01b3-4c4d-ac36-b336bab5bddf",
                        "domain": "http://localhost:8000/prism-agent"
                    },
                    "presentation_definition": {
                        "format": null,
                        "id": "b2a49475-f8ba-4952-a719-a28e909858fa",
                        "input_descriptors": [],
                        "name": null,
                        "purpose": null
                    }
                });
                const key = apollo.createPrivateKey({
                    type: SDK.Domain.KeyTypes.EC,
                    curve: SDK.Domain.Curve.SECP256K1,
                    seed: Buffer.from(apollo.createRandomSeed().seed.value).toString('hex')
                });
                const did = SDK.Domain.DID.fromString("did:prism:333333");
                const result = await pollux.createPresentationProof(pr as any, credential as any, {
                    did,
                    privateKey: key
                });

                expect(result).not.to.be.null;
            })





            it(storageName + "Should store and fetch a Anoncreds Credential", async ({ expect }) => {
                expect((await db.getAllCredentials()).length).toBe(0);
                const payload = Fixtures.createAnonCredsPayload();
                const result = new AnonCredsCredential({
                    ...payload,
                    values: {
                        ...(payload.values.map(([varname, val]) => ({
                            [varname]: val,
                        })) as any),
                    },
                });
                await db.storeCredential(result);
                expect((await db.getAllCredentials()).length).toBe(1);
            });

            it(storageName + "Should store and fetch a link secret by its name", async ({ expect }) => {
                const name = "test";
                const secret = "12345";
                await db.storeLinkSecret(secret, name);
                expect(await db.getLinkSecret(name)).toBe(secret);
            });

            it(storageName + "Should store and fetch a link secret without params", async ({ expect }) => {
                const name = "test";
                const secret = "12345";
                await db.storeLinkSecret(secret, name);
                expect(await db.getLinkSecret()).toBe(secret);
            });

            it(storageName + "Should return null when no link secret is found", async ({ expect }) => {
                expect(await db.getLinkSecret("notfound")).toBe(null);
            });

            it(storageName + "Should store and fetch credential metadata by link secret name", async ({ expect }) => {
                const linkSecretName = "test";
                await db.storeCredentialMetadata(
                    Fixtures.credRequestMeta,
                    linkSecretName
                );
                expect(
                    (await db.fetchCredentialMetadata(linkSecretName))?.link_secret_name
                ).toBe(linkSecretName);
            });

            it(storageName + "should return null when no credentialMetadata is found by the linkSecretName", async ({ expect }) => {
                expect(await db.fetchCredentialMetadata("notfound")).toBe(null);
            });

            it(storageName + "Should throw an error if a non storable credential is stored", async ({ expect }) => {
                expect(db.storeCredential({ fail: true } as any)).rejects.toThrowError(
                    new Error("Credential is not storable")
                );
            });

            it(storageName + "Should throw an error if an unrecoverable key is loaded from DB", async ({ expect }) => {
                const payload = Fixtures.createAnonCredsPayload();
                const result = new AnonCredsCredential({
                    ...payload,
                    values: {
                        ...(payload.values.map(([varname, val]) => ({
                            [varname]: val,
                        })) as any),
                    },
                });
                result.recoveryId = "demo";
                await db.storeCredential(result);
                expect(db.getAllCredentials()).rejects.toThrowError(
                    new Error("Unsupported key type from db storage")
                );
            });

            it(storageName + "Should be able to request models from database", async ({ expect }) => {
                const collectionNames = Object.keys(db.db.collections);
                for (let collectionName of collectionNames) {
                    const collection = db.db.collections[collectionName];
                    expect(collection).not.undefined
                }

            })

            it(storageName + "Should be able to request count orm method on all models", async ({ expect }) => {
                const collectionNames = Object.keys(db.db.collections);
                for (let collectionName of collectionNames) {
                    const collection = db.db.collections[collectionName];
                    const count = await collection.count().exec();
                    expect(count).toBe(0)
                }
            })

            it(storageName + "Should be able to request findByIds orm method on all models", async ({ expect }) => {
                const collectionNames = Object.keys(db.db.collections);
                for (let collectionName of collectionNames) {
                    const collection = db.db.collections[collectionName];
                    const count = await collection.findByIds([]).exec();
                    expect(count.size).toBe(0)
                }
            })

            it(storageName + "Should be able to request find orm method on all models", async ({ expect }) => {
                const collectionNames = Object.keys(db.db.collections);
                for (let collectionName of collectionNames) {
                    const collection = db.db.collections[collectionName];
                    const results = await collection.find().exec();
                    expect(results.length).toBe(0)
                }
            })

            it(storageName + "Should be able to request remove orm method on credential model", async ({ expect }) => {
                const payload = Fixtures.createAnonCredsPayload();
                const result = new AnonCredsCredential({
                    ...payload,
                    values: {
                        ...(payload.values.map(([varname, val]) => ({
                            [varname]: val,
                        })) as any),
                    },
                });
                result.recoveryId = "demo";
                await db.storeCredential(result);

                const storedCredential = await db.db.collections.credentials.findOne({
                    selector: {
                        recoveryId: {
                            $eq: result.recoveryId
                        }
                    }
                }).exec();

                const removed = await storedCredential?.remove()
                expect(removed?.deleted).toBe(true)
            });

            it(storageName + "Should run migration once the schema version has changed and user had existing data", async ({ expect }) => {

                const forceDatabaseName = `${databaseName}${randomUUID()}`
                const db = await Database.createEncrypted<{
                    linksecrets: RxCollection<
                        LinkSecretSchemaType,
                        LinkSecretMethodTypes,
                        LinkSecretStaticMethodTypes
                    >
                }>(
                    {
                        name: forceDatabaseName,
                        encryptionKey: defaultPassword,
                        storage,
                        collections: {
                            linksecrets: getDefaultCollections().linksecrets
                        }
                    }
                );

                await db.storeLinkSecret("demo123", "demo321");

                const migrationDB = await Database.createEncrypted<{
                    linksecrets: RxCollection<
                        LinkSecretSchemaType,
                        LinkSecretMethodTypes,
                        LinkSecretStaticMethodTypes
                    >
                }>(
                    {
                        name: forceDatabaseName,
                        encryptionKey: defaultPassword,
                        storage,
                        collections: {
                            linksecrets: {
                                methods: {
                                    toDomainLinkSecret: function toDomainLinkSecret(this: any) {
                                        return this.secreto;
                                    },
                                },
                                schema: {
                                    version: 1,
                                    primaryKey: "name",
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string",
                                            maxLength: 60,
                                        },
                                        secreto: {
                                            type: "string",
                                        }
                                    },
                                    encrypted: ["secreto"],
                                    required: ["name", "secreto"],
                                },
                                migrationStrategies: {
                                    // 1 means, this transforms data from version 0 to version 1
                                    1: async function (oldDoc) {
                                        oldDoc.secreto = oldDoc.secret;
                                        delete oldDoc.secret
                                        return oldDoc;
                                    }
                                },
                                statics: LinkSecretStaticMethods
                            }
                        }
                    }
                );

                const linkSecret = await migrationDB.getLinkSecret()
                expect(linkSecret).toBe("demo123")

            });

            it(storageName + "Should run migration once the schema version has changed its primaryKey and user had existing data", async ({ expect }) => {

                const forceDatabaseName = `${databaseName}${randomUUID()}`
                const db = await Database.createEncrypted<{
                    linksecrets: RxCollection<
                        LinkSecretSchemaType,
                        LinkSecretMethodTypes,
                        LinkSecretStaticMethodTypes
                    >
                }>(
                    {
                        name: forceDatabaseName,
                        encryptionKey: defaultPassword,
                        storage,
                        collections: getDefaultCollections()
                    }
                );

                await db.storeLinkSecret("demo123", "demo321");

                const migrationDB = await Database.createEncrypted<{
                    linksecrets: RxCollection<
                        LinkSecretSchemaType,
                        LinkSecretMethodTypes,
                        LinkSecretStaticMethodTypes
                    >
                }>(
                    {
                        name: forceDatabaseName,
                        encryptionKey: defaultPassword,
                        storage,
                        collections: {
                            linksecrets: {
                                methods: {
                                    toDomainLinkSecret: function toDomainLinkSecret(this: any) {
                                        return this.secreto;
                                    },
                                },
                                statics: LinkSecretStaticMethods,
                                schema: {
                                    version: 1,
                                    primaryKey: "name2",
                                    type: "object",
                                    properties: {
                                        name2: {
                                            type: "string",
                                            maxLength: 60,
                                        },
                                        secreto: {
                                            type: "string",
                                        }
                                    },
                                    encrypted: ["secreto"],
                                    required: ["name2", "secreto"],
                                },
                                migrationStrategies: {
                                    // 1 means, this transforms data from version 0 to version 1
                                    1: async function (oldDoc) {
                                        oldDoc.secreto = oldDoc.secret;
                                        oldDoc.name2 = oldDoc.name;
                                        delete oldDoc.secret
                                        delete oldDoc.name
                                        return oldDoc;
                                    }
                                }
                            }
                        }
                    }
                );

                const linkSecret = await migrationDB.getLinkSecret()
                expect(linkSecret).toBe("demo123")

            });

            it(storageName + "Should run migration once the schema version has changed and user had existing data over time, with multiple versions", async ({ expect }) => {

                const forceDatabaseName = `${databaseName}${randomUUID()}`
                const db = await Database.createEncrypted<DefaultCollections>(
                    {
                        name: forceDatabaseName,
                        encryptionKey: defaultPassword,
                        storage,
                        collections: getDefaultCollections()
                    }
                );

                await db.storeLinkSecret("demo123", "demo321");

                const migrationDB = await Database.createEncrypted<DefaultCollections>(
                    {
                        name: forceDatabaseName,
                        encryptionKey: defaultPassword,
                        storage,
                        collections: {
                            ...(getDefaultCollections()),
                            linksecrets: {
                                methods: {
                                    toDomainLinkSecret: function toDomainLinkSecret(this: any) {
                                        return this.secreto;
                                    },
                                },
                                statics: LinkSecretStaticMethods,
                                schema: {
                                    version: 2,
                                    primaryKey: "test",
                                    type: "object",
                                    properties: {
                                        test: {
                                            type: "string",
                                            maxLength: 60,
                                        },
                                        secreto: {
                                            type: "string",
                                        }
                                    },
                                    encrypted: ["secreto"],
                                    required: ["test", "secreto"],
                                },
                                migrationStrategies: {
                                    // 1 means, this transforms data from version 0 to version 1
                                    1: async function (oldDoc) {
                                        oldDoc.secreto = oldDoc.secret;
                                        delete oldDoc.secret
                                        return oldDoc;
                                    },
                                    2: async function (oldDoc) {
                                        if (!oldDoc.test) {
                                            oldDoc.test = oldDoc.name;
                                            delete oldDoc.name
                                        }
                                        return oldDoc;
                                    }
                                }
                            }
                        }
                    }
                );

                const linkSecret = await migrationDB.getLinkSecret()
                expect(linkSecret).toBe("demo123")

            });

            it(storageName + "Should allow anyone to add new models to the database", async ({ expect }) => {
                const forceDatabaseName = `${databaseName}${randomUUID()}`

                const db = await Database.createEncrypted<DefaultCollections & {
                    demo: RxCollection<
                        LinkSecretSchemaType,
                        LinkSecretMethodTypes,
                        { hola: (demo: boolean, demo2: boolean) => void }
                    >
                }>(
                    {
                        name: forceDatabaseName,
                        encryptionKey: defaultPassword,
                        storage,
                        collections: {
                            ...getDefaultCollections(),
                            demo: {
                                methods: LinkSecretMethods,
                                schema: LinkSecretSchema,
                                statics: {
                                    hola: function (demo: boolean, demo2: boolean): void {
                                        throw new Error('Function not implemented.')
                                    }
                                }
                            }
                        }
                    }
                );

                expect(db.db.collections.credentials).to.not.toBeUndefined();
                expect(db.db.collections.demo).to.not.toBeUndefined();
                expect(db.db.collections.demo.hola).to.not.toBeUndefined();

            })

            it(storageName + "Should allow anyone to add new models to the database without using the same models", async ({ expect }) => {
                const forceDatabaseName = `${databaseName}${randomUUID()}`

                const db = await Database.createEncrypted<DefaultCollections & {
                    demo: RxCollection<
                        LinkSecretSchemaType,
                        LinkSecretMethodTypes,
                        { hola: (demo: boolean, demo2: boolean) => void }
                    >
                }>(
                    {
                        name: forceDatabaseName,
                        encryptionKey: defaultPassword,
                        storage,
                        collections: {
                            ...getDefaultCollections(),
                            demo: {
                                methods: LinkSecretMethods,
                                schema: LinkSecretSchema,
                                statics: {
                                    hola: function (demo: boolean, demo2: boolean): void {
                                        throw new Error('Function not implemented.')
                                    }
                                }
                            }
                        }
                    }
                );

                expect((db.db.collections as any).privateKeys).toBeUndefined();
                expect(db.db.collections.demo).to.not.toBeUndefined();
                expect(db.db.collections.demo.hola).to.not.toBeUndefined();


            })

            it(storageName + "Should allow anyone to add new models to the database without using the same models", async ({ expect }) => {
                const forceDatabaseName = `${databaseName}${randomUUID()}`


                await expect(() => Database.createEncrypted<DefaultCollections & {
                    demo: RxCollection<
                        LinkSecretSchemaType,
                        LinkSecretMethodTypes,
                        { hola: (demo: boolean, demo2: boolean) => void }
                    >;
                    demo2: RxCollection<
                        LinkSecretSchemaType,
                        LinkSecretMethodTypes,
                        { hola: (demo: boolean, demo2: boolean) => void }
                    >;
                }>(
                    {
                        name: forceDatabaseName,
                        encryptionKey: defaultPassword,
                        storage,
                        collections: {
                            ...getDefaultCollections(),
                            demo: {
                                methods: LinkSecretMethods,
                                schema: LinkSecretSchema,
                                statics: {
                                    hola: function (demo: boolean, demo2: boolean): void {
                                        throw new Error('Function not implemented.')
                                    }
                                }
                            },
                            demo2: {
                                methods: LinkSecretMethods,
                                schema: LinkSecretSchema,
                                statics: {
                                    hola: function (demo: boolean, demo2: boolean): void {
                                        throw new Error('Function not implemented.')
                                    }
                                }
                            }
                        }
                    }
                )).rejects.toThrowError(new Error("Static function in model demo2.hola is duplicated, statics must be unique across al collections."));


            })

            it(storageName + "Should allow anyone to add new models to the database without using the same models and the defaultModels won't be available", async ({ expect }) => {
                const forceDatabaseName = `${databaseName}${randomUUID()}`

                const db = await Database.createEncrypted<{
                    demo: RxCollection<
                        LinkSecretSchemaType,
                        LinkSecretMethodTypes,
                        { hola: (demo: boolean, demo2: boolean) => void }
                    >;
                }>(
                    {
                        name: forceDatabaseName,
                        encryptionKey: defaultPassword,
                        storage,
                        collections: {
                            demo: {
                                methods: LinkSecretMethods,
                                schema: LinkSecretSchema,
                                statics: {
                                    hola: function (demo: boolean, demo2: boolean): void {
                                        throw new Error('Function not implemented.')
                                    }
                                }
                            }
                        }
                    }
                );


                expect((db.db.collections as any).credentials).toBeUndefined()
                expect(db.db.collections.demo).to.not.toBeUndefined();
                expect(db.db.collections.demo.hola).to.not.toBeUndefined();
                expect(db.hola).to.not.toBeUndefined();
            })

        });
    })
})