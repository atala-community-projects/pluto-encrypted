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
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<``null`` \| [`CredentialRequestMeta`](database-1.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>

#### Defined in

[packages/schemas/src/schemas/credentialRequestMetadata/types.ts:36](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/schemas/src/schemas/credentialRequestMetadata/types.ts#L36)

___

### storeCredentialMetadata

▸ **storeCredentialMetadata**(`this`, `metadata`, `linkSecret`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `metadata` | [`CredentialRequestMeta`](database-1.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md) |
| `linkSecret` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/credentialRequestMetadata/types.ts:40](https://github.com/atala-community-projects/pluto-encrypted/blob/dd87575/packages/schemas/src/schemas/credentialRequestMetadata/types.ts#L40)
