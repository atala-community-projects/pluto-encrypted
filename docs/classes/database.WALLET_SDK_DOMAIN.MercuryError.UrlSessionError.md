[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / [WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md) / [MercuryError](../modules/database.WALLET_SDK_DOMAIN.MercuryError.md) / UrlSessionError

# Class: UrlSessionError

[WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md).[MercuryError](../modules/database.WALLET_SDK_DOMAIN.MercuryError.md).UrlSessionError

## Hierarchy

- `Error`

  ↳ **`UrlSessionError`**

## Table of contents

### Constructors

- [constructor](database.WALLET_SDK_DOMAIN.MercuryError.UrlSessionError.md#constructor)

### Properties

- [cause](database.WALLET_SDK_DOMAIN.MercuryError.UrlSessionError.md#cause)
- [error](database.WALLET_SDK_DOMAIN.MercuryError.UrlSessionError.md#error)
- [message](database.WALLET_SDK_DOMAIN.MercuryError.UrlSessionError.md#message)
- [name](database.WALLET_SDK_DOMAIN.MercuryError.UrlSessionError.md#name)
- [stack](database.WALLET_SDK_DOMAIN.MercuryError.UrlSessionError.md#stack)
- [statusCode](database.WALLET_SDK_DOMAIN.MercuryError.UrlSessionError.md#statuscode)
- [prepareStackTrace](database.WALLET_SDK_DOMAIN.MercuryError.UrlSessionError.md#preparestacktrace)
- [stackTraceLimit](database.WALLET_SDK_DOMAIN.MercuryError.UrlSessionError.md#stacktracelimit)

### Methods

- [captureStackTrace](database.WALLET_SDK_DOMAIN.MercuryError.UrlSessionError.md#capturestacktrace)

## Constructors

### constructor

• **new UrlSessionError**(`message?`, `statusCode?`, `error?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `statusCode?` | `number` |
| `error?` | `Error` |

#### Overrides

Error.constructor

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/errors/Mercury.d.ts:40

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### error

• `Optional` **error**: `Error`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/errors/Mercury.d.ts:39

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

### statusCode

• **statusCode**: `number`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/errors/Mercury.d.ts:38

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
