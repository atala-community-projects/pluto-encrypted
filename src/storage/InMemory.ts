
import { InMemorySettings } from "./inMemory/types";
import { RXStorageInMemory } from "./inMemory/storage";

export function getRxStorageInMemory(settings: InMemorySettings = {}): RXStorageInMemory {
    const storage = new RXStorageInMemory(settings);
    return storage;
}