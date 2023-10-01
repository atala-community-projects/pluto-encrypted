import type { Schema } from "../types";


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
    },
    receiverDID: {
      type: "string",
    },
  },
  encrypted: [],
  required: ["name", "hostDID", "receiverDID"],
};

export default DIDPairSchema;
