[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / [WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md) / [MercuryError](../modules/database-1.WALLET_SDK_DOMAIN.MercuryError.md) / FromFieldNotSetError

# Class: FromFieldNotSetError

[WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md).[MercuryError](../modules/database-1.WALLET_SDK_DOMAIN.MercuryError.md).FromFieldNotSetError

## Hierarchy

- `Error`

  ↳ **`FromFieldNotSetError`**

## Table of contents

### Constructors

- [constructor](database-1.WALLET_SDK_DOMAIN.MercuryError.FromFieldNotSetError.md#constructor)

### Properties

- [cause](database-1.WALLET_SDK_DOMAIN.MercuryError.FromFieldNotSetError.md#cause)
- [message](database-1.WALLET_SDK_DOMAIN.MercuryError.FromFieldNotSetError.md#message)
- [name](database-1.WALLET_SDK_DOMAIN.MercuryError.FromFieldNotSetError.md#name)
- [stack](database-1.WALLET_SDK_DOMAIN.MercuryError.FromFieldNotSetError.md#stack)
- [prepareStackTrace](database-1.WALLET_SDK_DOMAIN.MercuryError.FromFieldNotSetError.md#preparestacktrace)
- [stackTraceLimit](database-1.WALLET_SDK_DOMAIN.MercuryError.FromFieldNotSetError.md#stacktracelimit)

### Methods

- [captureStackTrace](database-1.WALLET_SDK_DOMAIN.MercuryError.FromFieldNotSetError.md#capturestacktrace)

## Constructors

### constructor

• **new FromFieldNotSetError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Overrides

Error.constructor

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/errors/Mercury.d.ts:17

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
