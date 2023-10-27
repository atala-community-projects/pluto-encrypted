import { Domain } from "@input-output-hk/atala-prism-wallet-sdk";
import type { Schema } from "../types";
import { RxCollection, RxDocument } from "rxdb";

export type CredentialSubjectType = {
  type: string;
  name: string;
  value: string;
};

export type CredentialSchemaType = {
  id?: string;
  credentialType: Domain.CredentialType;
  context: string[];
  type: string[];
  credentialSchema?: Domain.VerifiableCredentialTypeContainer;
  credentialSubject: CredentialSubjectType[];
  credentialStatus?: Domain.VerifiableCredentialTypeContainer;
  refreshService: Domain.VerifiableCredentialTypeContainer;
  evidence: Domain.VerifiableCredentialTypeContainer;
  subject?: string;
  termsOfUse: Domain.VerifiableCredentialTypeContainer;
  issuer: string;
  issuanceDate: string;
  expirationDate?: string;
  validFrom?: Domain.VerifiableCredentialTypeContainer;
  validUntil?: Domain.VerifiableCredentialTypeContainer;
  proof?: string;
  aud: string[];
};

/**
 * CredentialSchema
 */
const CredentialSchema: Schema<CredentialSchemaType> = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 60,
    },
    credentialType: {
      type: "string",
    },
    context: {
      type: "array",
      items: {
        type: "string",
      },
    },
    type: {
      type: "array",
      items: {
        type: "string",
      },
    },
    credentialSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        type: {
          type: "string",
        },
      },
    },
    credentialSubject: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          value: {
            type: "string",
          },
          type: {
            type: "string",
          },
        },
      },
    },
    credentialStatus: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        type: {
          type: "string",
        },
      },
    },
    refreshService: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        type: {
          type: "string",
        },
      },
    },
    evidence: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        type: {
          type: "string",
        },
      },
    },
    subject: {
      type: "string",
    },

    termsOfUse: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        type: {
          type: "string",
        },
      },
    },
    issuer: {
      type: "string",
    },
    issuanceDate: {
      type: "string",
    },
    expirationDate: {
      type: "string",
    },
    validFrom: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        type: {
          type: "string",
        },
      },
    },
    validUntil: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        type: {
          type: "string",
        },
      },
    },
    proof: {
      type: "string",
    },
    aud: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
  encrypted: [],
  required: [
    "credentialType",
    "context",
    "type",
    "credentialSubject",
    "refreshService",
    "evidence",
    "termsOfUse",
    "issuer",
    "issuanceDate",
    "aud",
  ],
};

export type CredentialDocument = RxDocument<CredentialSchemaType>;
export type CredentialMethodTypes = {
  toDomainCredential: (
    this: CredentialSchemaType
  ) => Domain.VerifiableCredential;
};

export const CredentialMethods: CredentialMethodTypes = {
  toDomainCredential: function toDomainCredential(this: CredentialSchemaType) {
    return {
      ...this,
      subject: this.subject ? Domain.DID.fromString(this.subject) : undefined,
      issuer: Domain.DID.fromString(this.issuer),
      credentialSubject: this.credentialSubject.reduce((all, current) => {
        all[current.name] = current.value;
        return all;
      }, {}),
    };
  },
};

export type CredentialCollection = RxCollection<
  CredentialSchemaType,
  CredentialMethodTypes
>;

export default CredentialSchema;
