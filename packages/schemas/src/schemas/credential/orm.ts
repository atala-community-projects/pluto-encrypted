
import SDK from '@atala/prism-wallet-sdk'
import { CredentialMethodTypes, CredentialSchemaType } from './types';

export const CredentialMethods: CredentialMethodTypes = {
    toDomainCredential: function toDomainCredential(this: CredentialSchemaType) {
        if (this.recoveryId === SDK.JWTVerifiableCredentialRecoveryId) {
            const jwtString = Buffer.from(this.credentialData).toString()
            const jwtObj = JSON.parse(jwtString)
            const fromJWT = SDK.JWTCredential.fromJWT(jwtObj, jwtObj.jti)
            return fromJWT
        } else if (this.recoveryId === SDK.AnonCredsRecoveryId) {
            const credentialData = Buffer.from(this.credentialData).toString()
            const credentialJson = JSON.parse(credentialData)
            return new SDK.AnonCredsCredential({
                schema_id: credentialJson[SDK.AnonCredsCredentialProperties.schemaId],
                cred_def_id: credentialJson[SDK.AnonCredsCredentialProperties.credentialDefinitionId],
                values: credentialJson[SDK.AnonCredsCredentialProperties.values],
                signature: credentialJson[SDK.AnonCredsCredentialProperties.signature],
                signature_correctness_proof:
                    credentialJson[
                    SDK.AnonCredsCredentialProperties.signatureCorrectnessProof
                    ]
            })
        } else {
            throw new Error('Unsupported key type from db storage')
        }
    }
}