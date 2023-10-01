import { RxJsonSchema } from "rxdb";


export type NoKeys<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};

export type Schema<T> = RxJsonSchema<T> & {
    encrypted: (keyof T)[];
};
