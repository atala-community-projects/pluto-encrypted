[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / [WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md) / PrivateKey

# Class: PrivateKey

[database](../modules/database.md).[WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md).PrivateKey

## Hierarchy

- [`Key`](database.WALLET_SDK_DOMAIN.Key.md)

  ↳ **`PrivateKey`**

## Table of contents

### Constructors

- [constructor](database.WALLET_SDK_DOMAIN.PrivateKey.md#constructor)

### Properties

- [keySpecification](database.WALLET_SDK_DOMAIN.PrivateKey.md#keyspecification)
- [raw](database.WALLET_SDK_DOMAIN.PrivateKey.md#raw)
- [size](database.WALLET_SDK_DOMAIN.PrivateKey.md#size)
- [to](database.WALLET_SDK_DOMAIN.PrivateKey.md#to)
- [type](database.WALLET_SDK_DOMAIN.PrivateKey.md#type)

### Accessors

- [curve](database.WALLET_SDK_DOMAIN.PrivateKey.md#curve)
- [index](database.WALLET_SDK_DOMAIN.PrivateKey.md#index)
- [value](database.WALLET_SDK_DOMAIN.PrivateKey.md#value)

### Methods

- [canVerify](database.WALLET_SDK_DOMAIN.PrivateKey.md#canverify)
- [getEncoded](database.WALLET_SDK_DOMAIN.PrivateKey.md#getencoded)
- [getProperty](database.WALLET_SDK_DOMAIN.PrivateKey.md#getproperty)
- [isCurve](database.WALLET_SDK_DOMAIN.PrivateKey.md#iscurve)
- [isDerivable](database.WALLET_SDK_DOMAIN.PrivateKey.md#isderivable)
- [isExportable](database.WALLET_SDK_DOMAIN.PrivateKey.md#isexportable)
- [isSignable](database.WALLET_SDK_DOMAIN.PrivateKey.md#issignable)
- [publicKey](database.WALLET_SDK_DOMAIN.PrivateKey.md#publickey)

## Constructors

### constructor

• **new PrivateKey**()

#### Inherited from

[Key](database.WALLET_SDK_DOMAIN.Key.md).[constructor](database.WALLET_SDK_DOMAIN.Key.md#constructor)

## Properties

### keySpecification

• `Abstract` **keySpecification**: `Map`\<`string`, `string`\>

#### Inherited from

[Key](database.WALLET_SDK_DOMAIN.Key.md).[keySpecification](database.WALLET_SDK_DOMAIN.Key.md#keyspecification)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:12

___

### raw

• `Abstract` **raw**: `Uint8Array`

#### Inherited from

[Key](database.WALLET_SDK_DOMAIN.Key.md).[raw](database.WALLET_SDK_DOMAIN.Key.md#raw)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:14

___

### size

• `Abstract` **size**: `number`

#### Inherited from

[Key](database.WALLET_SDK_DOMAIN.Key.md).[size](database.WALLET_SDK_DOMAIN.Key.md#size)

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

[Key](database.WALLET_SDK_DOMAIN.Key.md).[to](database.WALLET_SDK_DOMAIN.Key.md#to)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:15

___

### type

• `Abstract` **type**: [`KeyTypes`](../enums/database.WALLET_SDK_DOMAIN.KeyTypes.md)

#### Inherited from

[Key](database.WALLET_SDK_DOMAIN.Key.md).[type](database.WALLET_SDK_DOMAIN.Key.md#type)

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

### index

• `get` **index**(): `undefined` \| `number`

Derivation index.
The index of the key in the derivation path.
Only applicable for HD keys

#### Returns

`undefined` \| `number`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/PrivateKey.d.ts:12

___

### value

• `get` **value**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/PrivateKey.d.ts:13

## Methods

### canVerify

▸ **canVerify**(): this is VerifiableKey

#### Returns

this is VerifiableKey

#### Inherited from

[Key](database.WALLET_SDK_DOMAIN.Key.md).[canVerify](database.WALLET_SDK_DOMAIN.Key.md#canverify)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:21

___

### getEncoded

▸ `Abstract` **getEncoded**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Inherited from

[Key](database.WALLET_SDK_DOMAIN.Key.md).[getEncoded](database.WALLET_SDK_DOMAIN.Key.md#getencoded)

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

[Key](database.WALLET_SDK_DOMAIN.Key.md).[getProperty](database.WALLET_SDK_DOMAIN.Key.md#getproperty)

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

[Key](database.WALLET_SDK_DOMAIN.Key.md).[isCurve](database.WALLET_SDK_DOMAIN.Key.md#iscurve)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:23

___

### isDerivable

▸ **isDerivable**(): this is DerivableKey

#### Returns

this is DerivableKey

#### Inherited from

[Key](database.WALLET_SDK_DOMAIN.Key.md).[isDerivable](database.WALLET_SDK_DOMAIN.Key.md#isderivable)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:20

___

### isExportable

▸ **isExportable**(): this is StorableKey

#### Returns

this is StorableKey

#### Inherited from

[Key](database.WALLET_SDK_DOMAIN.Key.md).[isExportable](database.WALLET_SDK_DOMAIN.Key.md#isexportable)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:18

___

### isSignable

▸ **isSignable**(): this is SignableKey

#### Returns

this is SignableKey

#### Inherited from

[Key](database.WALLET_SDK_DOMAIN.Key.md).[isSignable](database.WALLET_SDK_DOMAIN.Key.md#issignable)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/Key.d.ts:19

___

### publicKey

▸ `Abstract` **publicKey**(): [`PublicKey`](database.WALLET_SDK_DOMAIN.PublicKey.md)

#### Returns

[`PublicKey`](database.WALLET_SDK_DOMAIN.PublicKey.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/PrivateKey.d.ts:4
