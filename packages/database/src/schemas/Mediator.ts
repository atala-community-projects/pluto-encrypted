import { RxCollection, RxDocument, RxDocumentBase } from "rxdb";
import type { GenericORMType, Schema } from "../types";
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
  toDomainMediator: (this: RxDocument<MediatorSchemaType, MediatorMethodTypes>) => Domain.Mediator;
};
export type MediatorCollection = RxCollection<
  MediatorSchemaType,
  MediatorMethodTypes,
  GenericORMType<MediatorDocument>
>;

export const MediatorMethods: MediatorMethodTypes = {
  toDomainMediator: function toDomainMediator(this: RxDocument<MediatorSchemaType, MediatorMethodTypes>) {
    const mediator = this.toJSON()
    return {
      hostDID: Domain.DID.fromString(mediator.hostDID),
      routingDID: Domain.DID.fromString(mediator.routingDID),
      mediatorDID: Domain.DID.fromString(mediator.mediatorDID),
    };
  },
};

export default MediatorSchema;
