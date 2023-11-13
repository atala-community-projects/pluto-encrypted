import {
  AnonCredsCredential,
  AnonCredsCredentialProperties,
  AnonCredsRecoveryId,
  Domain,
  JWTCredential,
  JWTVerifiableCredentialRecoveryId,
} from "@atala/prism-wallet-sdk";
import type { Schema } from "../types";
import { RxCollection, RxDocument } from "rxdb";

export type CredentialSubjectType = {
  type: string;
  name: string;
  value: string;
};

export type CredentialSchemaType = {
  id: string;
  recoveryId: string;
  credentialData: string;
  issuer?: string;
  subject?: string;
  credentialCreated?: string;
  credentialUpdated?: string;
  credentialSchema?: string;
  validUntil?: string;
  revoked?: boolean;
  availableClaims?: string[];
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
    recoveryId: {
      type: "string",
    },
    credentialData: {
      type: "string",
    },
    issuer: {
      type: "string",
    },
    subject: {
      type: "string",
    },
    credentialCreated: {
      type: "string",
    },
    credentialUpdated: {
      type: "string",
    },
    credentialSchema: {
      type: "string",
    },
    validUntil: {
      type: "string",
    },
    revoked: {
      type: "boolean",
    },
    availableClaims: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
  encrypted: ["credentialData"],
  required: ["id", "recoveryId", "credentialData"],
};

export type CredentialDocument = RxDocument<CredentialSchemaType>;
export type CredentialMethodTypes = {
  toDomainCredential: (this: CredentialSchemaType) => Domain.Credential;
};

export const CredentialMethods: CredentialMethodTypes = {
  toDomainCredential: function toDomainCredential(this: CredentialSchemaType) {
    if (this.recoveryId === JWTVerifiableCredentialRecoveryId) {
      const jwtString = Buffer.from(this.credentialData).toString();
      const jwtObj = JSON.parse(jwtString);
      return JWTCredential.fromJWT(jwtObj, jwtString);
    } else if (this.recoveryId === AnonCredsRecoveryId) {
      const credentialData = Buffer.from(this.credentialData).toString();
      const credentialJson = JSON.parse(credentialData);
      return new AnonCredsCredential({
        schema_id: credentialJson[AnonCredsCredentialProperties.schemaId],
        cred_def_id:
          credentialJson[AnonCredsCredentialProperties.credentialDefinitionId],
        values: credentialJson[AnonCredsCredentialProperties.values],
        signature: credentialJson[AnonCredsCredentialProperties.signasture],
        signature_correctness_proof:
          credentialJson[
            AnonCredsCredentialProperties.signatureCorrectnessProof
          ],
      });
    } else {
      throw new Error("Unsupported key type from db storage");
    }
  },
};

export type CredentialCollection = RxCollection<
  CredentialSchemaType,
  CredentialMethodTypes
>;

export default CredentialSchema;
