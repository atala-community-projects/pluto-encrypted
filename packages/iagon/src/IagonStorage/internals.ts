import {
    RxDocumentData,
    RxDocumentDataById,
    RxJsonSchema
} from "rxdb";
import { IagonAPI } from "./api";
import { IagonFolder, IagonInternalParameters, IagonStorageInternals } from "./types";
import { getPrivateKeyValue, safeIndexList } from "@pluto-encrypted/shared";


export class IagonInternals<RxDocType> implements IagonStorageInternals<RxDocType> {
    public __databaseFolder!: IagonFolder;
    public __collectionFolder!: IagonFolder;
    public __indexFolder!: IagonFolder;
    public __dataFolder!: IagonFolder;
    public indexes: Map<string, IagonFolder> = new Map()

    public sdk: IagonAPI;


    constructor(parameters: IagonInternalParameters, public refCount: number = 0) {
        this.sdk = new IagonAPI(parameters)
    }

    async getDBDirectory(databaseName: string) {
        return this.sdk.getDirectories().then((directories) => {
            if (directories.length > 0) {
                const found = directories.find((directory) => directory.directory_name === databaseName)
                if (found) {
                    return found;
                }
            }
            return this.sdk.createDirectory({ dirName: databaseName });
        })
    }

    private async resetDatabase() {
        const rootDirectories = await this.sdk.getDirectories();
        for (let directory of rootDirectories) {
            await this.sdk.removeDirectory(directory, true)
        }
    }

    async initialiseDB(databaseName: string, collectionName: string) {
        try {
            if (!this.__databaseFolder) {
                const databaseDir = await this.getDBDirectory(databaseName);
                this.__databaseFolder = databaseDir;
            }

            if (!this.__collectionFolder) {
                const collections = await this.sdk.getDirectories(this.__databaseFolder._id);
                const __collectionFolder = collections.length > 0 ? collections.find((directory) => directory.directory_name === collectionName) : null;

                if (__collectionFolder) {
                    this.__collectionFolder = __collectionFolder;
                } else {
                    const newDirectory = await this.sdk.createDirectory({ parentDirectoryId: this.__databaseFolder._id, dirName: collectionName })
                    this.__collectionFolder = newDirectory
                }
            }

            const collectionFolders = await this.sdk.getDirectories(this.__collectionFolder._id);
            const indexesFound = collectionFolders.length > 0 ? collectionFolders.find((directory) => directory.directory_name === "indexes") : null;
            const dataFound = collectionFolders.length > 0 ? collectionFolders.find((directory) => directory.directory_name === "data") : null;

            if (!this.__indexFolder) {
                if (indexesFound) {
                    this.__indexFolder = indexesFound;
                } else {
                    this.__indexFolder = await this.sdk.createDirectory({
                        parentDirectoryId: this.__collectionFolder._id,
                        dirName: 'indexes'
                    })
                }
            }

            if (!this.__dataFolder) {
                if (dataFound) {
                    this.__dataFolder = dataFound;
                } else {
                    this.__dataFolder = await this.sdk.createDirectory({
                        parentDirectoryId: this.__collectionFolder._id,
                        dirName: 'data'
                    })
                }
            }


        } catch (err) {
            return Promise.reject(err)
        }
    }


    bulkGet(keys: string[]): Promise<RxDocumentDataById<RxDocType>> {
        throw new Error("Method not implemented.");
    }
    async addDoc(docId: string, document: RxDocumentData<RxDocType>): Promise<void> {
        const jsonDoc = JSON.stringify(document)
        await this.removeDoc(docId)
        await this.sdk.uploadFile(this.__dataFolder, docId, Buffer.from(jsonDoc))
    }
    async removeDoc(docId: string): Promise<void> {
        const allFiles = await this.sdk.getFiles(this.__dataFolder._id);
        const matchingFiles = allFiles.filter((file) => file.name === docId)
        for (let file of matchingFiles) {
            await this.sdk.removeFile(file._id)
        }
    }
    async removeFromIndex(indexName: string, docId: string): Promise<void> {
        const currentIndex = await this.getIndex(indexName)
        const cleanIndexPath = indexName.replace(/\[(.*)\]/g, "$1").split("+").join("/");
        const indexFilename = `${cleanIndexPath.split("/").join("_")}`;
        const jsonString = JSON.stringify([
            ...currentIndex.filter((index) => index !== docId),
        ])
        await this.sdk.uploadFile(this.__indexFolder, indexFilename, Buffer.from(jsonString))
    }
    async get(key: string): Promise<RxDocumentData<RxDocType> | null> {
        const files = await this.sdk.getFiles(this.__dataFolder._id);
        const fileFound = files.find((file) => {
            return file.name === key;
        })
        if (!fileFound) {
            return null;
        }
        const fileContents = await this.sdk.getFile({ file: fileFound })
        const jsonDocument: RxDocumentData<RxDocType> = JSON.parse(Buffer.from(fileContents).toString());
        return jsonDocument
    }
    async bulkPut(items: RxDocumentData<RxDocType>[], collectionName: string, schema: RxJsonSchema<RxDocumentData<RxDocType>>): Promise<void> {
        const primaryKeyKey = typeof schema.primaryKey === 'string' ? schema.primaryKey : schema.primaryKey.key
        const saferIndexList = safeIndexList(schema)
        for (const item of items) {
            const shouldDelete = item._deleted
            const id = getPrivateKeyValue(item, schema)
            if (shouldDelete) {
                for (const requiredIndexes of saferIndexList) {
                    const requiredIndex = `[${collectionName}+${requiredIndexes.join('+')}]`
                    await this.removeFromIndex(requiredIndex, id)
                }
                await this.removeFromIndex(`[${collectionName}+${primaryKeyKey}]`, id)
                await this.removeFromIndex('[all]', id)
                await this.removeDoc(id)
            } else {
                for (const requiredIndexes of saferIndexList) {
                    const requiredIndex = `[${collectionName}+${requiredIndexes.join('+')}]`
                    await this.updateIndex(requiredIndex, id)
                }
                await this.updateIndex(`[${collectionName}+${primaryKeyKey}]`, id)
                await this.updateIndex('[all]', id)
                await this.addDoc(id, item)
            }
        }
    }

    async getIndex(key: string): Promise<string[]> {
        const indexFiles = await this.sdk.getFiles(this.__indexFolder._id);
        const cleanIndexPath = key.replace(/\[(.*)\]/g, "$1").split("+").join("_");
        const indexFound = indexFiles.reverse().find((indexFile) => {
            return indexFile.name === cleanIndexPath
        });
        if (!indexFound) {
            return [];
        }
        const indexContents = await this.sdk.getFile({ file: indexFound })
        const jsonParsed: string[] = JSON.parse(Buffer.from(indexContents).toString())
        return jsonParsed
    }

    async updateIndex(indexName: string, docId: string) {
        const currentIndex = await this.getIndex(indexName)
        const cleanIndexPath = indexName.replace(/\[(.*)\]/g, "$1").split("+").join("/");
        const indexFilename = `${cleanIndexPath.split("/").join("_")}`;
        const jsonString = JSON.stringify(Array.from(new Set([
            ...currentIndex,
            docId
        ])))
        await this.sdk.uploadFile(this.__indexFolder, indexFilename, Buffer.from(jsonString))
    }

}
