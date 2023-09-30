import { DIDPairSchemaType, GenerateDBSchema } from "../types";

const DIDPairSchema: GenerateDBSchema<DIDPairSchemaType> = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 60,
    },
    host: {
      type: "string",
    },
    name: {
      type: "string",
    },
    receiver: {
      type: "string",
    },
  },
  encrypted: [],
  required: ["id", "host", "receiver"],
};

export default DIDPairSchema;