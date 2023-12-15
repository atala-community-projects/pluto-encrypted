import { RxCollection, RxDocument } from "rxdb";
import type { GenericORMType, Schema } from "../types";

export type DIDPairSchemaType = {
  hostDID: string;
  receiverDID: string;
  name: string;
};
/**
 * DIDPairSchema
 */
const DIDPairSchema: Schema<DIDPairSchemaType> = {
  version: 0,
  primaryKey: "name",
  type: "object",
  properties: {
    hostDID: {
      type: "string",
    },
    name: {
      type: "string",
      maxLength: 60,
    },
    receiverDID: {
      type: "string",
    },
  },
  encrypted: [],
  required: ["name", "hostDID", "receiverDID"],
};

export type DIDPairDocument = RxDocument<DIDPairSchemaType>;
export type DIDPairCollection = RxCollection<DIDPairSchemaType, any, GenericORMType<DIDPairDocument>>

export default DIDPairSchema;
