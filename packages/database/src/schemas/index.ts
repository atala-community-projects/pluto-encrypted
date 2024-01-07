import { RxCollectionCreator } from "rxdb";
import CredentialSchema, { CredentialMethods } from "./Credential";
import CredentialRequestMetadataSchema, { CredentialRequestMetadataMethods } from "./CredentialRequestMetadata";
import DIDSchema from "./DID";
import DIDPairSchema from "./DIDPair";
import LinkSecretSchema, { LinkSecretMethods } from "./LinkSecret";
import MediatorSchema, { MediatorMethods } from "./Mediator";
import MessageSchema, { MessageMethods } from "./Message";
import PrivateKeySchema, { PrivateKeyMethods } from "./PrivateKey";

export function getDefaultCollections(extendedCollections: { [name: string]: RxCollectionCreator } = {}): { [name: string]: RxCollectionCreator } {
    return {
        messages: {
            schema: MessageSchema,
            methods: MessageMethods
        },
        dids: {
            schema: DIDSchema
        },
        didpairs: {
            schema: DIDPairSchema
        },
        mediators: {
            schema: MediatorSchema,
            methods: MediatorMethods
        },
        privatekeys: {
            schema: PrivateKeySchema,
            methods: PrivateKeyMethods
        },
        credentials: {
            schema: CredentialSchema,
            methods: CredentialMethods
        },
        credentialrequestmetadatas: {
            schema: CredentialRequestMetadataSchema,
            methods: CredentialRequestMetadataMethods
        },
        linksecrets: {
            schema: LinkSecretSchema,
            methods: LinkSecretMethods
        },
        ...extendedCollections,
    }
}