import { Domain } from "@atala/prism-wallet-sdk";
import type { GenericORMType, Schema } from "../types";
import { RxCollection, RxDocument } from "rxdb";

export type LinkSecretSchemaType = {
  readonly name: string;
  readonly secret: string;
};


const LinkSecretSchema: Schema<LinkSecretSchemaType> = {
  version: 0,
  primaryKey: "name",
  type: "object",
  properties: {
    name: {
      type: "string",
      maxLength: 60,
    },
    secret: {
      type: "string",
    },
  },
  encrypted: ["secret"],
  required: ["name", "secret"],
};

export type LinkSecretDocument = RxDocument<
  LinkSecretSchemaType,
  LinkSecretMethodTypes
>;

export type LinkSecretMethodTypes = {
  toDomainLinkSecret: (this: LinkSecretDocument) => Domain.Anoncreds.LinkSecret;
};

export type LinkSecretColletion = RxCollection<
  LinkSecretSchemaType,
  LinkSecretMethodTypes,
  GenericORMType<LinkSecretDocument>
>;

export const LinkSecretMethods: LinkSecretMethodTypes = {
  toDomainLinkSecret: function toDomainLinkSecret(this: LinkSecretDocument) {
    return this.secret;
  },
};
export default LinkSecretSchema;
