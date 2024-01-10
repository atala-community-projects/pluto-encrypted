[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / [WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md) / PublicKey

# Class: PublicKey

[database](../modules/database-1.md).[WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md).PublicKey

## Hierarchy

- [`Key`](database-1.WALLET_SDK_DOMAIN.Key.md)

  ↳ **`PublicKey`**

## Table of contents

### Constructors

- [constructor](database-1.WALLET_SDK_DOMAIN.PublicKey.md#constructor)

### Properties

- [keySpecification](database-1.WALLET_SDK_DOMAIN.PublicKey.md#keyspecification)
- [raw](database-1.WALLET_SDK_DOMAIN.PublicKey.md#raw)
- [size](database-1.WALLET_SDK_DOMAIN.PublicKey.md#size)
- [to](database-1.WALLET_SDK_DOMAIN.PublicKey.md#to)
- [type](database-1.WALLET_SDK_DOMAIN.PublicKey.md#type)

### Accessors

- [curve](database-1.WALLET_SDK_DOMAIN.PublicKey.md#curve)
- [value](database-1.WALLET_SDK_DOMAIN.PublicKey.md#value)

### Methods

- [canVerify](database-1.WALLET_SDK_DOMAIN.PublicKey.md#canverify)
- [getEncoded](database-1.WALLET_SDK_DOMAIN.PublicKey.md#getencoded)
- [getProperty](database-1.WALLET_SDK_DOMAIN.PublicKey.md#getproperty)
- [isCurve](database-1.WALLET_SDK_DOMAIN.PublicKey.md#iscurve)
- [isDerivable](database-1.WALLET_SDK_DOMAIN.PublicKey.md#isderivable)
- [isExportable](database-1.WALLET_SDK_DOMAIN.PublicKey.md#isexportable)
- [isSignable](database-1.WALLET_SDK_DOMAIN.PublicKey.md#issignable)

## Constructors

### constructor

• **new PublicKey**()

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[constructor](database-1.WALLET_SDK_DOMAIN.Key.md#constructor)

## Properties

### keySpecification

• `Abstract` **keySpecification**: `Map`\<`string`, `string`\>

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[keySpecification](database-1.WALLET_SDK_DOMAIN.Key.md#keyspecification)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:12

___

### raw

• `Abstract` **raw**: `Uint8Array`

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[raw](database-1.WALLET_SDK_DOMAIN.Key.md#raw)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:14

___

### size

• `Abstract` **size**: `number`

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[size](database-1.WALLET_SDK_DOMAIN.Key.md#size)

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

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[to](database-1.WALLET_SDK_DOMAIN.Key.md#to)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:15

___

### type

• `Abstract` **type**: [`KeyTypes`](../enums/database-1.WALLET_SDK_DOMAIN.KeyTypes.md)

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[type](database-1.WALLET_SDK_DOMAIN.Key.md#type)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:11

## Accessors

### curve

• `get` **curve**(): `string`

#### Returns

`string`

#### Inherited from

Key.curve

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:17

___

### value

• `get` **value**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/PublicKey.d.ts:3

## Methods

### canVerify

▸ **canVerify**(): this is VerifiableKey

#### Returns

this is VerifiableKey

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[canVerify](database-1.WALLET_SDK_DOMAIN.Key.md#canverify)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:21

___

### getEncoded

▸ `Abstract` **getEncoded**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[getEncoded](database-1.WALLET_SDK_DOMAIN.Key.md#getencoded)

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

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[getProperty](database-1.WALLET_SDK_DOMAIN.Key.md#getproperty)

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

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[isCurve](database-1.WALLET_SDK_DOMAIN.Key.md#iscurve)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:23

___

### isDerivable

▸ **isDerivable**(): this is DerivableKey

#### Returns

this is DerivableKey

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[isDerivable](database-1.WALLET_SDK_DOMAIN.Key.md#isderivable)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:20

___

### isExportable

▸ **isExportable**(): this is StorableKey

#### Returns

this is StorableKey

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[isExportable](database-1.WALLET_SDK_DOMAIN.Key.md#isexportable)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:18

___

### isSignable

▸ **isSignable**(): this is SignableKey

#### Returns

this is SignableKey

#### Inherited from

[Key](database-1.WALLET_SDK_DOMAIN.Key.md).[isSignable](database-1.WALLET_SDK_DOMAIN.Key.md#issignable)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:19
