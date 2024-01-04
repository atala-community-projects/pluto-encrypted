[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / [WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md) / Pollux

# Interface: Pollux

[database](../modules/database.md).[WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md).Pollux

## Table of contents

### Properties

- [parseCredential](database.WALLET_SDK_DOMAIN.Pollux.md#parsecredential)

### Methods

- [extractCredentialFormatFromMessage](database.WALLET_SDK_DOMAIN.Pollux.md#extractcredentialformatfrommessage)
- [processAnonCredsCredential](database.WALLET_SDK_DOMAIN.Pollux.md#processanoncredscredential)
- [processJWTCredential](database.WALLET_SDK_DOMAIN.Pollux.md#processjwtcredential)

## Properties

### parseCredential

• **parseCredential**: (`credentialBuffer`: `Uint8Array`, `options?`: \{ `[name: string]`: `any`; `type`: [`CredentialType`](../enums/database.WALLET_SDK_DOMAIN.CredentialType.md)  }) => `Promise`\<[`Credential`](../classes/database.WALLET_SDK_DOMAIN.Credential.md)\>

#### Type declaration

▸ (`credentialBuffer`, `options?`): `Promise`\<[`Credential`](../classes/database.WALLET_SDK_DOMAIN.Credential.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `credentialBuffer` | `Uint8Array` |
| `options?` | `Object` |
| `options.type` | [`CredentialType`](../enums/database.WALLET_SDK_DOMAIN.CredentialType.md) |

##### Returns

`Promise`\<[`Credential`](../classes/database.WALLET_SDK_DOMAIN.Credential.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:6

## Methods

### extractCredentialFormatFromMessage

▸ **extractCredentialFormatFromMessage**(`message`): [`CredentialType`](../enums/database.WALLET_SDK_DOMAIN.CredentialType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/database.WALLET_SDK_DOMAIN.Message.md) |

#### Returns

[`CredentialType`](../enums/database.WALLET_SDK_DOMAIN.CredentialType.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:12

___

### processAnonCredsCredential

▸ **processAnonCredsCredential**(`offer`, `options`): `Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](database.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](database.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/database.WALLET_SDK_DOMAIN.Message.md) |
| `options` | [`CredentialRequestOptions`](database.WALLET_SDK_DOMAIN.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](database.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](database.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:11

___

### processJWTCredential

▸ **processJWTCredential**(`offer`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/database.WALLET_SDK_DOMAIN.Message.md) |
| `options` | [`CredentialRequestOptions`](database.WALLET_SDK_DOMAIN.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:10
