[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / [WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md) / Key

# Class: Key

[database](../modules/database-1.md).[WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md).Key

## Hierarchy

- **`Key`**

  ↳ [`PrivateKey`](database-1.WALLET_SDK_DOMAIN.PrivateKey.md)

  ↳ [`PublicKey`](database-1.WALLET_SDK_DOMAIN.PublicKey.md)

## Table of contents

### Constructors

- [constructor](database-1.WALLET_SDK_DOMAIN.Key.md#constructor)

### Properties

- [keySpecification](database-1.WALLET_SDK_DOMAIN.Key.md#keyspecification)
- [raw](database-1.WALLET_SDK_DOMAIN.Key.md#raw)
- [size](database-1.WALLET_SDK_DOMAIN.Key.md#size)
- [to](database-1.WALLET_SDK_DOMAIN.Key.md#to)
- [type](database-1.WALLET_SDK_DOMAIN.Key.md#type)

### Accessors

- [curve](database-1.WALLET_SDK_DOMAIN.Key.md#curve)

### Methods

- [canVerify](database-1.WALLET_SDK_DOMAIN.Key.md#canverify)
- [getEncoded](database-1.WALLET_SDK_DOMAIN.Key.md#getencoded)
- [getProperty](database-1.WALLET_SDK_DOMAIN.Key.md#getproperty)
- [isCurve](database-1.WALLET_SDK_DOMAIN.Key.md#iscurve)
- [isDerivable](database-1.WALLET_SDK_DOMAIN.Key.md#isderivable)
- [isExportable](database-1.WALLET_SDK_DOMAIN.Key.md#isexportable)
- [isSignable](database-1.WALLET_SDK_DOMAIN.Key.md#issignable)

## Constructors

### constructor

• **new Key**()

## Properties

### keySpecification

• `Abstract` **keySpecification**: `Map`\<`string`, `string`\>

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:12

___

### raw

• `Abstract` **raw**: `Uint8Array`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:14

___

### size

• `Abstract` **size**: `number`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:13

___

### to

• `Abstract` **to**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Buffer` | () => `Buffer` |
| `String` | (`encoding?`: `BufferEncoding`) => `string` |

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:15

___

### type

• `Abstract` **type**: [`KeyTypes`](../enums/database-1.WALLET_SDK_DOMAIN.KeyTypes.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:11

## Accessors

### curve

• `get` **curve**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:17

## Methods

### canVerify

▸ **canVerify**(): this is VerifiableKey

#### Returns

this is VerifiableKey

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:21

___

### getEncoded

▸ `Abstract` **getEncoded**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:16

___

### getProperty

▸ **getProperty**(`name`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:22

___

### isCurve

▸ **isCurve**\<`T`\>(`curve`): this is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve` | `string` |

#### Returns

this is T

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:23

___

### isDerivable

▸ **isDerivable**(): this is DerivableKey

#### Returns

this is DerivableKey

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:20

___

### isExportable

▸ **isExportable**(): this is StorableKey

#### Returns

this is StorableKey

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:18

___

### isSignable

▸ **isSignable**(): this is SignableKey

#### Returns

this is SignableKey

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:19
