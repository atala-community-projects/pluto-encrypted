[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / [WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md) / [ApolloError](../modules/database.WALLET_SDK_DOMAIN.ApolloError.md) / InvalidMnemonicWord

# Class: InvalidMnemonicWord

[WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md).[ApolloError](../modules/database.WALLET_SDK_DOMAIN.ApolloError.md).InvalidMnemonicWord

## Hierarchy

- `Error`

  ↳ **`InvalidMnemonicWord`**

## Table of contents

### Constructors

- [constructor](database.WALLET_SDK_DOMAIN.ApolloError.InvalidMnemonicWord.md#constructor)

### Properties

- [cause](database.WALLET_SDK_DOMAIN.ApolloError.InvalidMnemonicWord.md#cause)
- [message](database.WALLET_SDK_DOMAIN.ApolloError.InvalidMnemonicWord.md#message)
- [name](database.WALLET_SDK_DOMAIN.ApolloError.InvalidMnemonicWord.md#name)
- [stack](database.WALLET_SDK_DOMAIN.ApolloError.InvalidMnemonicWord.md#stack)
- [prepareStackTrace](database.WALLET_SDK_DOMAIN.ApolloError.InvalidMnemonicWord.md#preparestacktrace)
- [stackTraceLimit](database.WALLET_SDK_DOMAIN.ApolloError.InvalidMnemonicWord.md#stacktracelimit)

### Methods

- [captureStackTrace](database.WALLET_SDK_DOMAIN.ApolloError.InvalidMnemonicWord.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidMnemonicWord**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Overrides

Error.constructor

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/errors/Apollo.d.ts:2

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
