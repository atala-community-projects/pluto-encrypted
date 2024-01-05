[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / [WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md) / VerificationMethod

# Class: VerificationMethod

[database](../modules/database.md).[WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md).VerificationMethod

## Table of contents

### Constructors

- [constructor](database.WALLET_SDK_DOMAIN.VerificationMethod.md#constructor)

### Properties

- [controller](database.WALLET_SDK_DOMAIN.VerificationMethod.md#controller)
- [id](database.WALLET_SDK_DOMAIN.VerificationMethod.md#id)
- [publicKeyJwk](database.WALLET_SDK_DOMAIN.VerificationMethod.md#publickeyjwk)
- [publicKeyMultibase](database.WALLET_SDK_DOMAIN.VerificationMethod.md#publickeymultibase)
- [type](database.WALLET_SDK_DOMAIN.VerificationMethod.md#type)

### Methods

- [getCurveByType](database.WALLET_SDK_DOMAIN.VerificationMethod.md#getcurvebytype)

## Constructors

### constructor

• **new VerificationMethod**(`id`, `controller`, `type`, `publicKeyJwk?`, `publicKeyMultibase?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `controller` | `string` |
| `type` | `string` |
| `publicKeyJwk?` | [`PublicKeyJWK`](../interfaces/database.WALLET_SDK_DOMAIN.PublicKeyJWK.md) |
| `publicKeyMultibase?` | `string` |

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDDocument.d.ts:15

## Properties

### controller

• **controller**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDDocument.d.ts:11

___

### id

• **id**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDDocument.d.ts:10

___

### publicKeyJwk

• `Optional` **publicKeyJwk**: [`PublicKeyJWK`](../interfaces/database.WALLET_SDK_DOMAIN.PublicKeyJWK.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDDocument.d.ts:13

___

### publicKeyMultibase

• `Optional` **publicKeyMultibase**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDDocument.d.ts:14

___

### type

• **type**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDDocument.d.ts:12

## Methods

### getCurveByType

▸ `Static` **getCurveByType**(`type`): `Curve`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`Curve`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/DIDDocument.d.ts:16
