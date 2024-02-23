[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / MediatorStaticMethodTypes

# Interface: MediatorStaticMethodTypes

[database](../modules/database-1.md).MediatorStaticMethodTypes

## Hierarchy

- `KeyFunctionMap`

  ↳ **`MediatorStaticMethodTypes`**

## Table of contents

### Methods

- [getAllMediators](database-1.MediatorStaticMethodTypes.md#getallmediators)
- [storeMediator](database-1.MediatorStaticMethodTypes.md#storemediator)

## Methods

### getAllMediators

▸ **getAllMediators**(`this`): `Promise`\<[`Mediator`](database-1.WALLET_SDK_DOMAIN.Mediator.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |

#### Returns

`Promise`\<[`Mediator`](database-1.WALLET_SDK_DOMAIN.Mediator.md)[]\>

#### Defined in

[packages/schemas/src/schemas/mediator/types.ts:20](https://github.com/atala-community-projects/pluto-encrypted/blob/a4d8dff/packages/schemas/src/schemas/mediator/types.ts#L20)

___

### storeMediator

▸ **storeMediator**(`this`, `mediator`, `host`, `routing`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `mediator` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |
| `host` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |
| `routing` | [`DID`](../classes/database-1.WALLET_SDK_DOMAIN.DID.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/mediator/types.ts:21](https://github.com/atala-community-projects/pluto-encrypted/blob/a4d8dff/packages/schemas/src/schemas/mediator/types.ts#L21)
