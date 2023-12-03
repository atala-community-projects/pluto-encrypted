import { RxStorage } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { wrappedKeyEncryptionCryptoJsStorage } from "rxdb/plugins/encryption-crypto-js";

const storage: RxStorage<any, any> = wrappedKeyEncryptionCryptoJsStorage({
    storage: getRxStorageDexie(),
})

export default storage;