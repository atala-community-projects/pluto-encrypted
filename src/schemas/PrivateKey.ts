import { GenerateDBSchema, KeySchemaType } from "../types";

const PrivateKeySchema: GenerateDBSchema<KeySchemaType> = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 60,
    },
    type: {
      type: "string",
    },
    raw: {
      type: "string",
    },
    keySpecification: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          type: {
            type: "string",
          },
          value: {
            type: "string",
          },
        },
      },
    },
  },
  encrypted: ["keySpecification", "raw"],
  required: ["id", "keySpecification", "type", "raw"],
};

export default PrivateKeySchema;
