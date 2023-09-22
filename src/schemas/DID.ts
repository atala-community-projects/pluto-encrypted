import { DIDSchemaType, GenerateDBSchema } from "../types";

const DIDSchema: GenerateDBSchema<DIDSchemaType> = {
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
  encrypted: ["method", "methodId", "schema"],
  required: ["method", "methodId", "alias", "did", "schema"],
};

export default DIDSchema;
