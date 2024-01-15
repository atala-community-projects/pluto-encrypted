[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / [WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md) / [PlutoError](../modules/database-1.WALLET_SDK_DOMAIN.PlutoError.md) / DatabaseConnectionError

# Class: DatabaseConnectionError

[WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md).[PlutoError](../modules/database-1.WALLET_SDK_DOMAIN.PlutoError.md).DatabaseConnectionError

## Hierarchy

- `Error`

  ↳ **`DatabaseConnectionError`**

## Table of contents

### Constructors

- [constructor](database-1.WALLET_SDK_DOMAIN.PlutoError.DatabaseConnectionError.md#constructor)

### Properties

- [cause](database-1.WALLET_SDK_DOMAIN.PlutoError.DatabaseConnectionError.md#cause)
- [message](database-1.WALLET_SDK_DOMAIN.PlutoError.DatabaseConnectionError.md#message)
- [name](database-1.WALLET_SDK_DOMAIN.PlutoError.DatabaseConnectionError.md#name)
- [stack](database-1.WALLET_SDK_DOMAIN.PlutoError.DatabaseConnectionError.md#stack)
- [prepareStackTrace](database-1.WALLET_SDK_DOMAIN.PlutoError.DatabaseConnectionError.md#preparestacktrace)
- [stackTraceLimit](database-1.WALLET_SDK_DOMAIN.PlutoError.DatabaseConnectionError.md#stacktracelimit)

### Methods

- [captureStackTrace](database-1.WALLET_SDK_DOMAIN.PlutoError.DatabaseConnectionError.md#capturestacktrace)

## Constructors

### constructor

• **new DatabaseConnectionError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1073

• **new DatabaseConnectionError**(`message?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:28

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