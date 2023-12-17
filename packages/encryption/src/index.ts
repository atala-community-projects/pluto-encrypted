/**
 * @packageDocumentation
 * @module encryption
 */
import {
    InternalStoreDocType,
    RxAttachmentWriteData,
    RxDocumentData,
    RxDocumentWriteData,
    RxJsonSchema,
    RxStorage,
    RxStorageInstanceCreationParams,
    b64DecodeUnicode,
    b64EncodeUnicode,
    clone,
    ensureNotFalsy,
    flatClone,
    getProperty,
    hasEncryption,
    newRxError,
    newRxTypeError,
    setProperty,
    wrapRxStorageInstance
} from "rxdb";

import { sha256 } from '@noble/hashes/sha256';
import { chacha20poly1305 } from '@noble/ciphers/chacha';
import { CipherWithOutput } from "@noble/ciphers/utils";

export type { RxStorage } from "rxdb";
export type { CipherWithOutput } from "@noble/ciphers/utils"
export const MINIMUM_PASSWORD_LENGTH: 8 = 8;

//We must keep nonce static to be able to restore the database later, user only has the password
const nonce = Buffer.from('b47e1d4e5f7377c2e80a19b8', 'hex')

export function encryptString(chacha: CipherWithOutput, value: string, password: string): string {
    try {
        const encrypted = chacha.encrypt(Buffer.from(value));
        return Buffer.from(encrypted).toString('hex');
    } catch (err) {
        throw new Error("Invalid Authentication")
    }
}

export function decryptString(chacha: CipherWithOutput, cipherText: string, password: any): string {
    try {
        /**
         * Trying to decrypt non-strings
         * will cause no errors and will be hard to debug.
         * So instead we do this check here.
         */
        if (typeof cipherText !== 'string') {
            throw newRxError('SNH', {
                args: {
                    cipherText
                }
            });
        }
        const decrypted = chacha.decrypt(Buffer.from(cipherText, 'hex'));
        const ret = Buffer.from(decrypted).toString();
        return ret;
    } catch (err) {
        throw new Error("Invalid Authentication")
    }
}

export type InternalStorePasswordDocType = InternalStoreDocType<{
    hash: string;
}>;


/**
 * Create encrypted storage for pluto-encrypted
 * @param args {  storage: RxStorage<Internals, InstanceCreationOptions>;  }
 * @returns RxStorage<Internals, InstanceCreationOptions>
 */
export function wrappedKeyEncryptionStorage<Internals, InstanceCreationOptions>(
    args: {
        storage: RxStorage<Internals, InstanceCreationOptions>;
    }
): RxStorage<Internals, InstanceCreationOptions> {
    return Object.assign(
        {},
        args.storage,
        {
            async createStorageInstance<RxDocType>(
                params: RxStorageInstanceCreationParams<RxDocType, any>
            ) {
                try {
                    if (typeof params.password !== 'undefined') {
                        validatePassword(params.password as any);
                    }

                    if (!hasEncryption(params.schema)) {
                        const retInstance = await args.storage.createStorageInstance(params);
                        return retInstance;
                    }

                    if (!params.password) {
                        throw newRxError('EN3', {
                            database: params.databaseName,
                            collection: params.collectionName,
                            schema: params.schema
                        });
                    }
                    const password = params.password;

                    const hashedPassword = sha256(password)
                    const chacha = chacha20poly1305(hashedPassword, nonce);

                    const schemaWithoutEncrypted: RxJsonSchema<RxDocumentData<RxDocType>> = clone(params.schema);
                    delete schemaWithoutEncrypted.encrypted;
                    if (schemaWithoutEncrypted.attachments) {
                        schemaWithoutEncrypted.attachments.encrypted = false;
                    }

                    const instance = await args.storage.createStorageInstance(
                        Object.assign(
                            {},
                            params,
                            {
                                schema: schemaWithoutEncrypted
                            }
                        )
                    );

                    function modifyToStorage(docData: RxDocumentWriteData<RxDocType>) {
                        try {
                            docData = cloneWithoutAttachments(docData);
                            ensureNotFalsy(params.schema.encrypted)
                                .forEach(path => {
                                    const value = getProperty(docData, path);
                                    if (typeof value === 'undefined') {
                                        return;
                                    }

                                    const stringValue = JSON.stringify(value);
                                    const encrypted = encryptString(chacha, stringValue, password);
                                    setProperty(docData, path, encrypted);
                                });

                            // handle attachments
                            if (
                                params.schema.attachments &&
                                params.schema.attachments.encrypted
                            ) {
                                const newAttachments: typeof docData._attachments = {};
                                Object.entries(docData._attachments).forEach(([id, attachment]) => {
                                    const useAttachment: RxAttachmentWriteData = flatClone(attachment) as any;
                                    if (useAttachment.data) {
                                        const dataString = useAttachment.data;
                                        useAttachment.data = b64EncodeUnicode(encryptString(chacha, dataString, password));
                                    }
                                    newAttachments[id] = useAttachment;
                                });
                                docData._attachments = newAttachments;
                            }
                            return docData;
                        } catch (err) {
                            throw new Error("Invalid Authentication")
                        }
                    }
                    function modifyFromStorage(docData: RxDocumentData<any>): Promise<RxDocumentData<RxDocType>> {
                        try {
                            docData = cloneWithoutAttachments(docData);
                            ensureNotFalsy(params.schema.encrypted)
                                .forEach(path => {
                                    const value = getProperty(docData, path);
                                    if (typeof value === 'undefined') {
                                        return;
                                    }
                                    const decrypted = decryptString(chacha, value, password);
                                    const decryptedParsed = JSON.parse(decrypted);
                                    setProperty(docData, path, decryptedParsed);
                                });
                            return docData;
                        } catch (err) {
                            throw new Error("Invalid Authentication")
                        }
                    }

                    function modifyAttachmentFromStorage(attachmentData: string): string {
                        try {
                            if (
                                params.schema.attachments &&
                                params.schema.attachments.encrypted
                            ) {
                                const decrypted = decryptString(chacha, b64DecodeUnicode(attachmentData), password);
                                return decrypted;
                            } else {
                                return attachmentData;
                            }
                        } catch (err) {
                            throw new Error("Invalid Authentication")
                        }
                    }


                    return wrapRxStorageInstance(
                        instance,
                        modifyToStorage,
                        modifyFromStorage,
                        modifyAttachmentFromStorage
                    );
                } catch (err) {
                    throw new Error("Invalid Authentication")
                }
            }
        }
    );
}

function cloneWithoutAttachments<T>(data: RxDocumentWriteData<T>): RxDocumentData<T> {
    const attachments = data._attachments;
    data = flatClone(data);
    delete (data as any)._attachments;
    data = clone(data);
    data._attachments = attachments;
    return data as any;
}

function validatePassword(password: string) {
    if (typeof password !== 'string') {
        throw newRxTypeError('EN1', {
            password
        });
    }
    if (password.length < MINIMUM_PASSWORD_LENGTH) {
        throw newRxError('EN2', {
            minPassLength: MINIMUM_PASSWORD_LENGTH,
            password
        });
    }
}
