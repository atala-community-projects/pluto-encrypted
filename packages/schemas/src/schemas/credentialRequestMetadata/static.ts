import SDK from '@atala/prism-wallet-sdk'
import { v4 as uuidv4 } from 'uuid'
import { CredentialRequestMetadataStaticMethodTypes } from './types'

export const CredentialRequestMetadataStaticMethods: CredentialRequestMetadataStaticMethodTypes =
{
    async storeCredentialMetadata(
        metadata: SDK.Domain.Anoncreds.CredentialRequestMeta,
        linkSecret: string
    ): Promise<void> {
        await this.db.collections.credentialrequestmetadatas.insert({
            ...metadata,
            id: uuidv4(),
            link_secret_name: linkSecret
        })
    },
    async fetchCredentialMetadata(
        linkSecretName: string
    ): Promise<SDK.Domain.Anoncreds.CredentialRequestMeta | null> {
        const credentialRequestMetadata = await this.db.collections.credentialrequestmetadatas.findOne({
            selector: {
                link_secret_name: {
                    $eq: linkSecretName
                }
            }
        }).exec()

        if (credentialRequestMetadata) {
            return credentialRequestMetadata.toDomainCredentialRequestMetadata()
        }
        return null
    }
}
