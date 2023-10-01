import type { Domain } from "@input-output-hk/atala-prism-wallet-sdk";
import { RxJsonSchema, RxCollection, RxDatabase } from "rxdb";

export type NoKeys<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

export type Schema<T> = RxJsonSchema<T> & {
  encrypted: (keyof T)[];
};

export type CredentialSchemaType = Domain.VerifiableCredential;

export type DIDSchemaType = NoKeys<Domain.DID, "toString"> & {
  alias?: string;
  did: string;
};
export type DIDPairSchemaType = {
  readonly hostDID: string;
  readonly receiverDID: string;
  readonly name: string;
};
export type KeySpec = {
  name: string;
  type: string;
  value: string;
};
export type KeySchemaType = {
  id: string;
  type: string;
  did: string;
  keySpecification: KeySpec[];
};

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
