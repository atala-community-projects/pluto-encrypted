import { RxCollection, RxDocument } from "rxdb";
import type { Schema } from "../types";
import { Domain } from "@atala/prism-wallet-sdk";

export type MediatorSchemaType = {
  id: string;
  mediatorDID: string;
  hostDID: string;
  routingDID: string;
};
/**
 * MediatorSchema
 */
const MediatorSchema: Schema<MediatorSchemaType> = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 60,
    },
    mediatorDID: {
      type: "string",
    },
    hostDID: {
      type: "string",
    },
    routingDID: {
      type: "string",
    },
  },
  encrypted: [],
  required: ["id", "mediatorDID"],
};

export type MediatorDocument = RxDocument<MediatorSchemaType>;
export type MediatorMethodTypes = {
  toDomainMediator: (this: MediatorSchemaType) => Domain.Mediator;
};
export type MediatorCollection = RxCollection<
  MediatorSchemaType,
  MediatorMethodTypes
>;

export const MediatorMethods: MediatorMethodTypes = {
  toDomainMediator: function toDomainMediator(this: MediatorSchemaType) {
    return {
      hostDID: Domain.DID.fromString(this.hostDID),
      routingDID: Domain.DID.fromString(this.routingDID),
      mediatorDID: Domain.DID.fromString(this.mediatorDID),
    };
  },
};

export default MediatorSchema;
