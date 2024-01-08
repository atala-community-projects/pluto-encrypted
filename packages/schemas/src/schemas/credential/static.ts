import SDK from '@atala/prism-wallet-sdk'
import { v4 as uuidv4 } from 'uuid'

import { CredentialStaticMethodTypes } from './types'

export const CredentialStaticMethods: CredentialStaticMethodTypes = {
    async getAllCredentials(): Promise<SDK.Domain.Credential[]> {
        const credentials = await this.db.collections.credentials.find().exec()
        return credentials.map(
            (verifiableCredential) => verifiableCredential.toDomainCredential()
        )
    },
    async storeCredential(credential: SDK.Domain.Credential): Promise<void> {
        if (!credential.isStorable || !credential.isStorable()) {
            throw new Error('Credential is not storable')
        }
        const storable = credential.toStorable()
        /* istanbul ignore else -- @preserve */
        if (!storable.id) storable.id = uuidv4()

        await this.db.collections.credentials.insert(storable)
    }

}