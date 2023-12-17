/**
 * @packageDocumentation
 * @module indexdb
 */
import { wrappedKeyEncryptionStorage } from "@pluto-encrypted/encryption";
import { RxStorage } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";

const storage: RxStorage<any, any> = wrappedKeyEncryptionStorage({
    storage: getRxStorageDexie(),
})

export default storage;