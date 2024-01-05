[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / [WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md) / Pollux

# Interface: Pollux

[database/src](../modules/database_src.md).[WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md).Pollux

## Table of contents

### Properties

- [parseCredential](database_src.WALLET_SDK_DOMAIN.Pollux.md#parsecredential)

### Methods

- [extractCredentialFormatFromMessage](database_src.WALLET_SDK_DOMAIN.Pollux.md#extractcredentialformatfrommessage)
- [processAnonCredsCredential](database_src.WALLET_SDK_DOMAIN.Pollux.md#processanoncredscredential)
- [processJWTCredential](database_src.WALLET_SDK_DOMAIN.Pollux.md#processjwtcredential)

## Properties

### parseCredential

• **parseCredential**: (`credentialBuffer`: `Uint8Array`, `options?`: \{ `[name: string]`: `any`; `type`: [`CredentialType`](../enums/database_src.WALLET_SDK_DOMAIN.CredentialType.md)  }) => `Promise`\<[`Credential`](../classes/database_src.WALLET_SDK_DOMAIN.Credential.md)\>

#### Type declaration

▸ (`credentialBuffer`, `options?`): `Promise`\<[`Credential`](../classes/database_src.WALLET_SDK_DOMAIN.Credential.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `credentialBuffer` | `Uint8Array` |
| `options?` | `Object` |
| `options.type` | [`CredentialType`](../enums/database_src.WALLET_SDK_DOMAIN.CredentialType.md) |

##### Returns

`Promise`\<[`Credential`](../classes/database_src.WALLET_SDK_DOMAIN.Credential.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:6

## Methods

### extractCredentialFormatFromMessage

▸ **extractCredentialFormatFromMessage**(`message`): [`CredentialType`](../enums/database_src.WALLET_SDK_DOMAIN.CredentialType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md) |

#### Returns

[`CredentialType`](../enums/database_src.WALLET_SDK_DOMAIN.CredentialType.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:12

___

### processAnonCredsCredential

▸ **processAnonCredsCredential**(`offer`, `options`): `Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md) |
| `options` | [`CredentialRequestOptions`](database_src.WALLET_SDK_DOMAIN.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:11

___

### processJWTCredential

▸ **processJWTCredential**(`offer`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/database_src.WALLET_SDK_DOMAIN.Message.md) |
| `options` | [`CredentialRequestOptions`](database_src.WALLET_SDK_DOMAIN.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:10
