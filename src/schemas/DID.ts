import type { DIDSchemaType, Schema } from "../types";

const DIDSchema: Schema<DIDSchemaType> = {
  version: 0,
  primaryKey: "did",
  type: "object",
  properties: {
    method: {
      type: "string",
      maxLength: 60,
    },
    methodId: {
      type: "string",
      maxLength: 60,
    },
    schema: {
      type: "string",
      maxLength: 60,
    },
    alias: {
      type: "string",
      maxLength: 60,
    },
    did: {
      type: "string",
      maxLength: 60,
    },
  },
  encrypted: [],
  required: ["method", "methodId", "did", "schema"],
};

export default DIDSchema;
