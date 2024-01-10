[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / CredentialRequestMetadataStaticMethodTypes

# Interface: CredentialRequestMetadataStaticMethodTypes

[database](../modules/database-1.md).CredentialRequestMetadataStaticMethodTypes

## Hierarchy

- `KeyFunctionMap`

  ↳ **`CredentialRequestMetadataStaticMethodTypes`**

## Table of contents

### Methods

- [fetchCredentialMetadata](database-1.CredentialRequestMetadataStaticMethodTypes.md#fetchcredentialmetadata)
- [storeCredentialMetadata](database-1.CredentialRequestMetadataStaticMethodTypes.md#storecredentialmetadata)

## Methods

### fetchCredentialMetadata

▸ **fetchCredentialMetadata**(`this`, `linkSecretName`): `Promise`\<``null`` \| [`CredentialRequestMeta`](database-1.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `credentialrequestmetadatas`: [`CredentialRequestMetadataCollection`](../modules/database-1.md#credentialrequestmetadatacollection)  }\> |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<``null`` \| [`CredentialRequestMeta`](database-1.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>

#### Defined in

[packages/schemas/src/schemas/credentialRequestMetadata/types.ts:35](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/credentialRequestMetadata/types.ts#L35)

___

### storeCredentialMetadata

▸ **storeCredentialMetadata**(`this`, `metadata`, `linkSecret`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `credentialrequestmetadatas`: [`CredentialRequestMetadataCollection`](../modules/database-1.md#credentialrequestmetadatacollection)  }\> |
| `metadata` | [`CredentialRequestMeta`](database-1.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md) |
| `linkSecret` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/credentialRequestMetadata/types.ts:39](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/credentialRequestMetadata/types.ts#L39)
