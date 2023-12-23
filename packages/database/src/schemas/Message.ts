import { Domain } from "@atala/prism-wallet-sdk";
import type { GenericORMType, Schema } from "../types";
import { RxCollection, RxCollectionCreator, RxDocument } from "rxdb";

export type MessageSchemaType = {
  readonly body: string;
  readonly id: string;
  readonly piuri: string;
  readonly from?: string | undefined;
  readonly to?: string | undefined;
  readonly attachments: Domain.AttachmentDescriptor[];
  readonly thid?: string;
  readonly extraHeaders: string[];
  readonly createdTime: string;
  readonly expiresTimePlus: string;
  readonly ack: string[];
  readonly direction: Domain.MessageDirection;
  readonly fromPrior?: string | undefined;
  readonly pthid?: string | undefined;
};


const MessageSchema: Schema<MessageSchemaType> = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 60,
    },
    body: {
      type: "string",
    },
    piuri: {
      type: "string",
    },
    attachments: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "id",
            maxLength: 60,
          },
          description: {
            type: "string",
          },
          byteCount: {
            type: "number",
          },
          lastModTime: {
            type: "string",
          },
          format: {
            type: "string",
          },
          filename: {
            type: "array",
            items: {
              type: "string",
            },
          },
          mediaType: {
            type: "string",
          },
          data: {
            type: "object",
          },
        },
      },
    },
    extraHeaders: {
      type: "array",
    },
    createdTime: {
      type: "string",
    },
    expiresTimePlus: {
      type: "string",
    },
    ack: {
      type: "array",
    },
    direction: {
      type: "number",
    },
    from: {
      type: "string",
    },
    to: {
      type: "string",
    },
    thid: {
      type: "string",
    },
    fromPrior: {
      type: "string",
    },
    pthid: {
      type: "string",
    },
  },
  encrypted: ["thid", "attachments", "body"],
  required: ["id"],
};
export type MessageDocument = RxDocument<MessageSchemaType, MessageMethodTypes>;

export type MessageMethodTypes = {
  toDomainMessage: (this: MessageDocument) => Domain.Message;
};

export type MessageColletion = RxCollection<
  MessageSchemaType,
  MessageMethodTypes,
  MessageDocument
>;



export const MessageMethods: MessageMethodTypes = {
  toDomainMessage: function toDomainMessage(this: MessageDocument) {
    return Domain.Message.fromJson(JSON.stringify(this));
  },
};

export default MessageSchema;
