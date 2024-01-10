[@pluto-encrypted](../README.md) / [Exports](../modules.md) / database

# Module: database

## Table of contents

### Namespaces

- [WALLET\_SDK\_DOMAIN](database-1.WALLET_SDK_DOMAIN.md)

### Interfaces

- [CredentialMethodTypes](../interfaces/database-1.CredentialMethodTypes.md)
- [CredentialRequestMetadataMethodTypes](../interfaces/database-1.CredentialRequestMetadataMethodTypes.md)
- [CredentialRequestMetadataSchemaType](../interfaces/database-1.CredentialRequestMetadataSchemaType.md)
- [CredentialRequestMetadataStaticMethodTypes](../interfaces/database-1.CredentialRequestMetadataStaticMethodTypes.md)
- [CredentialSchemaType](../interfaces/database-1.CredentialSchemaType.md)
- [CredentialStaticMethodTypes](../interfaces/database-1.CredentialStaticMethodTypes.md)
- [CredentialSubjectType](../interfaces/database-1.CredentialSubjectType.md)
- [DIDPairSchemaType](../interfaces/database-1.DIDPairSchemaType.md)
- [DIDPairStaticMethodTypes](../interfaces/database-1.DIDPairStaticMethodTypes.md)
- [DIDSchemaType](../interfaces/database-1.DIDSchemaType.md)
- [DIDStaticMethodTypes](../interfaces/database-1.DIDStaticMethodTypes.md)
- [KeySchemaType](../interfaces/database-1.KeySchemaType.md)
- [KeySpec](../interfaces/database-1.KeySpec.md)
- [LinkSecretMethodTypes](../interfaces/database-1.LinkSecretMethodTypes.md)
- [LinkSecretSchemaType](../interfaces/database-1.LinkSecretSchemaType.md)
- [LinkSecretStaticMethodTypes](../interfaces/database-1.LinkSecretStaticMethodTypes.md)
- [MediatorMethodTypes](../interfaces/database-1.MediatorMethodTypes.md)
- [MediatorSchemaType](../interfaces/database-1.MediatorSchemaType.md)
- [MediatorStaticMethodTypes](../interfaces/database-1.MediatorStaticMethodTypes.md)
- [MessageMethodTypes](../interfaces/database-1.MessageMethodTypes.md)
- [MessageSchemaType](../interfaces/database-1.MessageSchemaType.md)
- [MessageStaticMethodTypes](../interfaces/database-1.MessageStaticMethodTypes.md)
- [PlutoCollections](../interfaces/database-1.PlutoCollections.md)
- [PlutoCollectionsCreator](../interfaces/database-1.PlutoCollectionsCreator.md)
- [PrivateKeyMethodTypes](../interfaces/database-1.PrivateKeyMethodTypes.md)
- [PrivateKeyStaticMethodTypes](../interfaces/database-1.PrivateKeyStaticMethodTypes.md)

### Type Aliases

- [CredentialCollection](database-1.md#credentialcollection)
- [CredentialDocument](database-1.md#credentialdocument)
- [CredentialRequestMetadataCollection](database-1.md#credentialrequestmetadatacollection)
- [CredentialRequestMetadataDocument](database-1.md#credentialrequestmetadatadocument)
- [DBOptions](database-1.md#dboptions)
- [DIDCollection](database-1.md#didcollection)
- [DIDDocument](database-1.md#diddocument)
- [DIDPairCollection](database-1.md#didpaircollection)
- [DIDPairDocument](database-1.md#didpairdocument)
- [LinkSecretColletion](database-1.md#linksecretcolletion)
- [LinkSecretDocument](database-1.md#linksecretdocument)
- [MediatorCollection](database-1.md#mediatorcollection)
- [MediatorDocument](database-1.md#mediatordocument)
- [MessageColletion](database-1.md#messagecolletion)
- [MessageDocument](database-1.md#messagedocument)
- [PlutoInstance](database-1.md#plutoinstance)
- [PrivateKeyColletion](database-1.md#privatekeycolletion)
- [PrivateKeyDocument](database-1.md#privatekeydocument)
- [Schema](database-1.md#schema)
- [StaticRxCollectionContext](database-1.md#staticrxcollectioncontext)
- [ValuesOf](database-1.md#valuesof)

### Functions

- [getDefaultCollections](database-1.md#getdefaultcollections)

## Type Aliases

### CredentialCollection

Ƭ **CredentialCollection**: `RxCollection`\<[`CredentialSchemaType`](../interfaces/database-1.CredentialSchemaType.md), [`CredentialMethodTypes`](../interfaces/database-1.CredentialMethodTypes.md), [`CredentialDocument`](database-1.md#credentialdocument)\>

#### Defined in

[packages/schemas/src/schemas/credential/types.ts:35](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/credential/types.ts#L35)

___

### CredentialDocument

Ƭ **CredentialDocument**: `RxDocument`\<[`CredentialSchemaType`](../interfaces/database-1.CredentialSchemaType.md)\>

#### Defined in

[packages/schemas/src/schemas/credential/types.ts:25](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/credential/types.ts#L25)

___

### CredentialRequestMetadataCollection

Ƭ **CredentialRequestMetadataCollection**: `RxCollection`\<[`CredentialRequestMetadataSchemaType`](../interfaces/database-1.CredentialRequestMetadataSchemaType.md), [`CredentialRequestMetadataMethodTypes`](../interfaces/database-1.CredentialRequestMetadataMethodTypes.md), [`CredentialRequestMetadataStaticMethodTypes`](../interfaces/database-1.CredentialRequestMetadataStaticMethodTypes.md)\>

#### Defined in

[packages/schemas/src/schemas/credentialRequestMetadata/types.ts:8](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/credentialRequestMetadata/types.ts#L8)

___

### CredentialRequestMetadataDocument

Ƭ **CredentialRequestMetadataDocument**: `RxDocument`\<[`CredentialRequestMetadataSchemaType`](../interfaces/database-1.CredentialRequestMetadataSchemaType.md)\>

#### Defined in

[packages/schemas/src/schemas/credentialRequestMetadata/types.ts:25](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/credentialRequestMetadata/types.ts#L25)

___

### DBOptions

Ƭ **DBOptions**: `RxDatabaseCreator`

#### Defined in

[packages/schemas/src/types.ts:56](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/types.ts#L56)

___

### DIDCollection

Ƭ **DIDCollection**: `RxCollection`\<[`DIDSchemaType`](../interfaces/database-1.DIDSchemaType.md), `any`, [`DIDStaticMethodTypes`](../interfaces/database-1.DIDStaticMethodTypes.md)\>

#### Defined in

[packages/schemas/src/schemas/did/types.ts:41](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/did/types.ts#L41)

___

### DIDDocument

Ƭ **DIDDocument**: `RxDocument`\<[`DIDSchemaType`](../interfaces/database-1.DIDSchemaType.md)\>

#### Defined in

[packages/schemas/src/schemas/did/types.ts:15](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/did/types.ts#L15)

___

### DIDPairCollection

Ƭ **DIDPairCollection**: `RxCollection`\<[`DIDPairSchemaType`](../interfaces/database-1.DIDPairSchemaType.md), `any`, [`DIDPairStaticMethodTypes`](../interfaces/database-1.DIDPairStaticMethodTypes.md)\>

#### Defined in

[packages/schemas/src/schemas/didpair/types.ts:25](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/didpair/types.ts#L25)

___

### DIDPairDocument

Ƭ **DIDPairDocument**: `RxDocument`\<[`DIDPairSchemaType`](../interfaces/database-1.DIDPairSchemaType.md)\>

#### Defined in

[packages/schemas/src/schemas/didpair/types.ts:12](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/didpair/types.ts#L12)

___

### LinkSecretColletion

Ƭ **LinkSecretColletion**: `RxCollection`\<[`LinkSecretSchemaType`](../interfaces/database-1.LinkSecretSchemaType.md), [`LinkSecretMethodTypes`](../interfaces/database-1.LinkSecretMethodTypes.md), [`LinkSecretStaticMethodTypes`](../interfaces/database-1.LinkSecretStaticMethodTypes.md)\>

#### Defined in

[packages/schemas/src/schemas/linksecret/types.ts:37](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/linksecret/types.ts#L37)

___

### LinkSecretDocument

Ƭ **LinkSecretDocument**: `RxDocument`\<[`LinkSecretSchemaType`](../interfaces/database-1.LinkSecretSchemaType.md), [`LinkSecretMethodTypes`](../interfaces/database-1.LinkSecretMethodTypes.md)\>

#### Defined in

[packages/schemas/src/schemas/linksecret/types.ts:16](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/linksecret/types.ts#L16)

___

### MediatorCollection

Ƭ **MediatorCollection**: `RxCollection`\<[`MediatorSchemaType`](../interfaces/database-1.MediatorSchemaType.md), [`MediatorMethodTypes`](../interfaces/database-1.MediatorMethodTypes.md), [`MediatorStaticMethodTypes`](../interfaces/database-1.MediatorStaticMethodTypes.md)\>

#### Defined in

[packages/schemas/src/schemas/mediator/types.ts:28](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/mediator/types.ts#L28)

___

### MediatorDocument

Ƭ **MediatorDocument**: `RxDocument`\<[`MediatorSchemaType`](../interfaces/database-1.MediatorSchemaType.md)\>

#### Defined in

[packages/schemas/src/schemas/mediator/types.ts:14](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/mediator/types.ts#L14)

___

### MessageColletion

Ƭ **MessageColletion**: `RxCollection`\<[`MessageSchemaType`](../interfaces/database-1.MessageSchemaType.md), [`MessageMethodTypes`](../interfaces/database-1.MessageMethodTypes.md), [`MessageStaticMethodTypes`](../interfaces/database-1.MessageStaticMethodTypes.md)\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:99](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L99)

___

### MessageDocument

Ƭ **MessageDocument**: `RxDocument`\<[`MessageSchemaType`](../interfaces/database-1.MessageSchemaType.md), [`MessageMethodTypes`](../interfaces/database-1.MessageMethodTypes.md)\>

#### Defined in

[packages/schemas/src/schemas/message/types.ts:23](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/message/types.ts#L23)

___

### PlutoInstance

Ƭ **PlutoInstance**\<`Collections`\>: `DatabaseBase`\<`Collections` & [`PlutoCollections`](../interfaces/database-1.PlutoCollections.md)\> & [`Pluto`](../interfaces/database-1.WALLET_SDK_DOMAIN.Pluto.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Collections` | `CollectionsOfDatabase` |

#### Defined in

[packages/schemas/src/types.ts:53](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/types.ts#L53)

___

### PrivateKeyColletion

Ƭ **PrivateKeyColletion**: `RxCollection`\<[`KeySchemaType`](../interfaces/database-1.KeySchemaType.md), [`PrivateKeyMethodTypes`](../interfaces/database-1.PrivateKeyMethodTypes.md), [`PrivateKeyStaticMethodTypes`](../interfaces/database-1.PrivateKeyStaticMethodTypes.md)\>

#### Defined in

[packages/schemas/src/schemas/privatekey/types.ts:43](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/privatekey/types.ts#L43)

___

### PrivateKeyDocument

Ƭ **PrivateKeyDocument**: `RxDocument`\<[`KeySchemaType`](../interfaces/database-1.KeySchemaType.md), [`PrivateKeyMethodTypes`](../interfaces/database-1.PrivateKeyMethodTypes.md)\>

#### Defined in

[packages/schemas/src/schemas/privatekey/types.ts:48](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/privatekey/types.ts#L48)

___

### Schema

Ƭ **Schema**\<`T`\>: [`RxJsonSchema`](leveldb.md#rxjsonschema)\<`T`\> & \{ `encrypted`: keyof `T`[]  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/schemas/src/types.ts:28](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/types.ts#L28)

___

### StaticRxCollectionContext

Ƭ **StaticRxCollectionContext**\<`Collections`\>: [`PlutoInstance`](database-1.md#plutoinstance)\<`Collections`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Collections` | \{ `[name: string]`: `RxCollection`;  } |

#### Defined in

[packages/schemas/src/types.ts:57](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/types.ts#L57)

___

### ValuesOf

Ƭ **ValuesOf**\<`T`\>: `T`[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/schemas/src/types.ts:27](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/types.ts#L27)

## Functions

### getDefaultCollections

▸ **getDefaultCollections**(`extendedCollections?`): \{ `[name: string]`: `RxCollectionCreator`;  } & [`PlutoCollectionsCreator`](../interfaces/database-1.PlutoCollectionsCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extendedCollections` | `Object` |

#### Returns

\{ `[name: string]`: `RxCollectionCreator`;  } & [`PlutoCollectionsCreator`](../interfaces/database-1.PlutoCollectionsCreator.md)

#### Defined in

[packages/schemas/src/index.ts:16](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/index.ts#L16)
