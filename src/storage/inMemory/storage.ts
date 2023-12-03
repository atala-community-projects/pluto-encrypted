import { RxStorage, RxStorageDefaultStatics, RxStorageInstanceCreationParams, RxStorageInstance } from "rxdb";
import { InMemoryStorageInternals, InMemorySettings } from "./types";

export class RXStorageInMemory implements RxStorage<InMemoryStorageInternals, InMemorySettings> {
    public name: string = "InMemory"
    public statics = RxStorageDefaultStatics;
    constructor(private settings: InMemorySettings) { }

    async createStorageInstance<RxDocType>(params?: RxStorageInstanceCreationParams<RxDocType, InMemorySettings>): Promise<RxStorageInstance<RxDocType, InMemoryStorageInternals, InMemorySettings, any>> {
        throw new Error("Method not implemented.");
    }
}