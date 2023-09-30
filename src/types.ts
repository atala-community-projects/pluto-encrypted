import type { Domain } from "@input-output-hk/atala-prism-wallet-sdk";
import { RxJsonSchema, RxCollection, RxDatabase } from "rxdb";

export type ExcludeKeys<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

export type GenerateDBSchema<T> = RxJsonSchema<T> & {
  encrypted: (keyof T)[];
};

export type CredentialSchemaType = Domain.VerifiableCredential;
export type DIDSchemaType = ExcludeKeys<
  Domain.DID & { readonly alias: string; readonly did: string },
  "toString"
>;
export type DIDPairSchemaType = Domain.DIDPair & { readonly id: string };
export type KeySchemaType = ExcludeKeys<
  Domain.Key & { readonly id: string },
  | "isExportable"
  | "size"
  | "getProperty"
  | "isDerivable"
  | "isSignable"
  | "getEncoded"
  | "canVerify"
  | "isCurve"
>;

export type MediarorSchemaType = {
  id: string;
  mediatorDID: string;
  hostDID: string;
  routingDID: string;
};
export type MessageSchemaType = Domain.Message;

export type PlutoCollections = {
  messages: RxCollection<MessageSchemaType>;
  dids: RxCollection<DIDSchemaType>;
  verifiableCredentials: RxCollection<CredentialSchemaType>;
  didpairs: RxCollection<DIDPairSchemaType>;
  mediators: RxCollection<MediarorSchemaType>;
  privateKeys: RxCollection<KeySchemaType>;
};
export type PlutoDatabase = RxDatabase<PlutoCollections>;
