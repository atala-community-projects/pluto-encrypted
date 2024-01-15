import SDK from '@atala/prism-wallet-sdk'
import { RxDocument, KeyFunctionMap, RxCollection } from 'rxdb'
import { StaticRxCollectionContext } from '../../types'


export interface MessageSchemaType {
    readonly body: string
    readonly id: string
    readonly piuri: string
    readonly from?: string | undefined
    readonly to?: string | undefined
    readonly attachments: SDK.Domain.AttachmentDescriptor[]
    readonly thid?: string
    readonly extraHeaders: string[]
    readonly createdTime: string
    readonly expiresTimePlus: string
    readonly ack: string[]
    readonly direction: SDK.Domain.MessageDirection
    readonly fromPrior?: string | undefined
    readonly pthid?: string | undefined
}

export type MessageDocument = RxDocument<MessageSchemaType, MessageMethodTypes>

export interface MessageMethodTypes extends KeyFunctionMap {
    toDomainMessage: (
        this: MessageDocument
    ) => SDK.Domain.Message
}

export interface MessageStaticMethodTypes extends KeyFunctionMap {
    getMessage(

        id: string
    ): Promise<SDK.Domain.Message | null>
    storeMessage(

        message: SDK.Domain.Message
    ): Promise<void>
    storeMessages(

        messages: SDK.Domain.Message[]
    ): Promise<void>
    getAllMessages(

    ): Promise<SDK.Domain.Message[]>
    getAllMessagesByFromToDID(

        from: SDK.Domain.DID,
        to: SDK.Domain.DID
    ): Promise<SDK.Domain.Message[]>
    getAllMessagesOfType(

        type: string,
        relatedWithDID?: SDK.Domain.DID | undefined
    ): Promise<SDK.Domain.Message[]>
    getAllMessagesReceivedFrom(

        did: SDK.Domain.DID
    ): Promise<SDK.Domain.Message[]>
    getAllMessagesSentTo(

        did: SDK.Domain.DID
    ): Promise<SDK.Domain.Message[]>
    getAllMessagesReceived(

    ): Promise<SDK.Domain.Message[]>
    getAllMessagesSent(

    ): Promise<SDK.Domain.Message[]>
    getAllMessagesByDID(

        did: SDK.Domain.DID
    ): Promise<SDK.Domain.Message[]>
}

export type MessageColletion = RxCollection<
    MessageSchemaType,
    MessageMethodTypes,
    MessageStaticMethodTypes
>