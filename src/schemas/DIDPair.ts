import type { DIDPairSchemaType, Schema } from "../types";

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
