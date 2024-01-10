[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / CredentialStaticMethodTypes

# Interface: CredentialStaticMethodTypes

[database](../modules/database-1.md).CredentialStaticMethodTypes

## Hierarchy

- `KeyFunctionMap`

  ↳ **`CredentialStaticMethodTypes`**

## Table of contents

### Methods

- [getAllCredentials](database-1.CredentialStaticMethodTypes.md#getallcredentials)
- [storeCredential](database-1.CredentialStaticMethodTypes.md#storecredential)

## Methods

### getAllCredentials

▸ **getAllCredentials**(`this`): `Promise`\<[`Credential`](../classes/database-1.WALLET_SDK_DOMAIN.Credential.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `credentials`: [`CredentialCollection`](../modules/database-1.md#credentialcollection)  }\> |

#### Returns

`Promise`\<[`Credential`](../classes/database-1.WALLET_SDK_DOMAIN.Credential.md)[]\>

#### Defined in

[packages/schemas/src/schemas/credential/types.ts:31](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/credential/types.ts#L31)

___

### storeCredential

▸ **storeCredential**(`this`, `credential`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StaticRxCollectionContext`](../modules/database-1.md#staticrxcollectioncontext)\<\{ `credentials`: [`CredentialCollection`](../modules/database-1.md#credentialcollection)  }\> |
| `credential` | [`Credential`](../classes/database-1.WALLET_SDK_DOMAIN.Credential.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/credential/types.ts:32](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/schemas/src/schemas/credential/types.ts#L32)
