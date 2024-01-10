
import SDK from '@atala/prism-wallet-sdk'
import { MessageDocument, MessageMethodTypes } from './types'


export const MessageMethods: MessageMethodTypes = {
    toDomainMessage: function toDomainMessage(this: MessageDocument) {
        return SDK.Domain.Message.fromJson(JSON.stringify(this))
    }
}