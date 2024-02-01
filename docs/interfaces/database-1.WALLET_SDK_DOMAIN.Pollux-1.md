[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / [WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md) / Pollux

# Interface: Pollux

[database](../modules/database-1.md).[WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md).Pollux

Pollux
handle Credential related tasks

## Table of contents

### Properties

- [parseCredential](database-1.WALLET_SDK_DOMAIN.Pollux-1.md#parsecredential)

### Methods

- [createPresentationProof](database-1.WALLET_SDK_DOMAIN.Pollux-1.md#createpresentationproof)
- [extractCredentialFormatFromMessage](database-1.WALLET_SDK_DOMAIN.Pollux-1.md#extractcredentialformatfrommessage)
- [processAnonCredsCredential](database-1.WALLET_SDK_DOMAIN.Pollux-1.md#processanoncredscredential)
- [processJWTCredential](database-1.WALLET_SDK_DOMAIN.Pollux-1.md#processjwtcredential)

## Properties

### parseCredential

• **parseCredential**: (`credentialBuffer`: `Uint8Array`, `options?`: \{ `[name: string]`: `any`; `type`: [`CredentialType`](../enums/database-1.WALLET_SDK_DOMAIN.CredentialType.md)  }) => `Promise`\<[`Credential`](../classes/database-1.WALLET_SDK_DOMAIN.Credential.md)\>

#### Type declaration

▸ (`credentialBuffer`, `options?`): `Promise`\<[`Credential`](../classes/database-1.WALLET_SDK_DOMAIN.Credential.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `credentialBuffer` | `Uint8Array` |
| `options?` | `Object` |
| `options.type` | [`CredentialType`](../enums/database-1.WALLET_SDK_DOMAIN.CredentialType.md) |

##### Returns

`Promise`\<[`Credential`](../classes/database-1.WALLET_SDK_DOMAIN.Credential.md)\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:13

## Methods

### createPresentationProof

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<[`Presentation`](database-1.WALLET_SDK_DOMAIN.Anoncreds.Presentation.md)\>

Process a PresentationRequest with Credential to create a Presentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |  |
| `credential` | `AnonCredsCredential` |  |
| `options` | [`Anoncreds`](database-1.WALLET_SDK_DOMAIN.Pollux.createPresentationProof.options.Anoncreds.md) | object containing necessary metadata |

#### Returns

`Promise`\<[`Presentation`](database-1.WALLET_SDK_DOMAIN.Anoncreds.Presentation.md)\>

dependent on the CredentialType

**`Throws`**

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:29

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |
| `credential` | `JWTCredential` |
| `options` | [`JWT`](database-1.WALLET_SDK_DOMAIN.Pollux.createPresentationProof.options.JWT.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:30

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |
| `credential` | [`Credential`](../classes/database-1.WALLET_SDK_DOMAIN.Credential.md) |
| `options?` | `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<`any`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:31

___

### extractCredentialFormatFromMessage

▸ **extractCredentialFormatFromMessage**(`message`): [`CredentialType`](../enums/database-1.WALLET_SDK_DOMAIN.CredentialType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md) |

#### Returns

[`CredentialType`](../enums/database-1.WALLET_SDK_DOMAIN.CredentialType.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:19

___

### processAnonCredsCredential

▸ **processAnonCredsCredential**(`offer`, `options`): `Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](database-1.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](database-1.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md) |
| `options` | [`CredentialRequestOptions`](database-1.WALLET_SDK_DOMAIN.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](database-1.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](database-1.WALLET_SDK_DOMAIN.Anoncreds.CredentialRequestMeta.md)\>\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:18

___

### processJWTCredential

▸ **processJWTCredential**(`offer`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/database-1.WALLET_SDK_DOMAIN.Message-1.md) |
| `options` | [`CredentialRequestOptions`](database-1.WALLET_SDK_DOMAIN.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Pollux.d.ts:17
