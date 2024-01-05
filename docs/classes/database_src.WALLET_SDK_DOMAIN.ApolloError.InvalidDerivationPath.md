[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / [WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md) / [ApolloError](../modules/database_src.WALLET_SDK_DOMAIN.ApolloError.md) / InvalidDerivationPath

# Class: InvalidDerivationPath

[WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md).[ApolloError](../modules/database_src.WALLET_SDK_DOMAIN.ApolloError.md).InvalidDerivationPath

## Hierarchy

- `Error`

  ↳ **`InvalidDerivationPath`**

## Table of contents

### Constructors

- [constructor](database_src.WALLET_SDK_DOMAIN.ApolloError.InvalidDerivationPath.md#constructor)

### Properties

- [cause](database_src.WALLET_SDK_DOMAIN.ApolloError.InvalidDerivationPath.md#cause)
- [message](database_src.WALLET_SDK_DOMAIN.ApolloError.InvalidDerivationPath.md#message)
- [name](database_src.WALLET_SDK_DOMAIN.ApolloError.InvalidDerivationPath.md#name)
- [stack](database_src.WALLET_SDK_DOMAIN.ApolloError.InvalidDerivationPath.md#stack)
- [prepareStackTrace](database_src.WALLET_SDK_DOMAIN.ApolloError.InvalidDerivationPath.md#preparestacktrace)
- [stackTraceLimit](database_src.WALLET_SDK_DOMAIN.ApolloError.InvalidDerivationPath.md#stacktracelimit)

### Methods

- [captureStackTrace](database_src.WALLET_SDK_DOMAIN.ApolloError.InvalidDerivationPath.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidDerivationPath**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Overrides

Error.constructor

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/errors/Apollo.d.ts:14

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
