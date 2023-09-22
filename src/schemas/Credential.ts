import { CredentialSchemaType, GenerateDBSchema } from "../types";

const CredentialSchema: GenerateDBSchema<CredentialSchemaType> = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    issuer: {
      type: "string",
    },
    subject: {
      type: "string",
    },
    credentialType: {
      type: "string",
    },
    context: {
      type: "string",
    },
    type: {
      type: "string",
    },
    credentialSchema: {
      type: "string",
    },
    credentialSubject: {
      type: "string",
    },
    credentialStatus: {
      type: "string",
    },
    refreshService: {
      type: "string",
    },
    evidence: {
      type: "string",
    },
    termsOfUse: {
      type: "string",
    },
    issuanceDate: {
      type: "string",
    },
    expirationDate: {
      type: "string",
    },
    validFrom: {
      type: "string",
    },
    validUntil: {
      type: "string",
    },
    proof: {
      type: "string",
    },
    aud: {
      type: "string",
    },
  },
  encrypted: [],
  required: [],
};

export default CredentialSchema;
