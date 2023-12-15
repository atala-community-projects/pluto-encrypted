import { KeyFunctionMap, RxCollectionBase, RxJsonSchema, RxQuery, RxStorageInstanceCreationParams } from "rxdb";
import { MangoQuery, MangoQueryNoLimit, MangoQuerySelectorAndIndex, RxCollection, RxDocument } from "rxdb/dist/types/types";


export type NoKeys<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};

export type Schema<T> = RxJsonSchema<T> & {
    encrypted: (keyof T)[];
};

export interface GenericORMType<RxDocType> extends RxCollection<any, any, any> {
    count: (this: RxCollection<any, any, any>, query: MangoQuery<any> | undefined) => Promise<number>,
    findByIds(this: RxCollection<any, any, any>, ids: string[]): Map<string, RxDocument>;
    find(queryObj?: MangoQueryNoLimit<any> | string): RxDocument<RxDocType, any>[];
    findOne(queryObj?: MangoQueryNoLimit<any> | string): RxDocument<RxDocType, any> | null;
    remove(queryObj?: MangoQueryNoLimit<any> | string): RxDocument<RxDocType, any>[]
}

