[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / [WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md) / [JWK](../modules/database_src.WALLET_SDK_DOMAIN.JWK.md) / EC

# Interface: EC

[WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md).[JWK](../modules/database_src.WALLET_SDK_DOMAIN.JWK.md).EC

## Hierarchy

- [`Base`](database_src.WALLET_SDK_DOMAIN.JWK.Base.md)

  ↳ **`EC`**

## Table of contents

### Properties

- [alg](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#alg)
- [crv](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#crv)
- [d](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#d)
- [ext](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#ext)
- [key\_ops](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#key_ops)
- [kid](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#kid)
- [kty](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#kty)
- [use](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#use)
- [x](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#x)
- [x5c](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#x5c)
- [x5t](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#x5t)
- [x5t#S256](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#x5t#s256)
- [x5u](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#x5u)
- [y](database_src.WALLET_SDK_DOMAIN.JWK.EC.md#y)

## Properties

### alg

• `Optional` **alg**: `string`

#### Inherited from

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[alg](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#alg)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:14

___

### crv

• **crv**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:27

___

### d

• **d**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:28

___

### ext

• `Optional` **ext**: `string`

#### Inherited from

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[ext](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#ext)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:15

___

### key\_ops

• `Optional` **key\_ops**: [`key_ops`](../modules/database_src.WALLET_SDK_DOMAIN.JWK.md#key_ops)[]

#### Inherited from

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[key_ops](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#key_ops)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:16

___

### kid

• `Optional` **kid**: `string`

#### Inherited from

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[kid](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#kid)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:17

___

### kty

• **kty**: ``"EC"``

#### Overrides

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[kty](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#kty)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:26

___

### use

• `Optional` **use**: ``"sig"`` \| ``"enc"``

#### Inherited from

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[use](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#use)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:19

___

### x

• **x**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:29

___

### x5c

• `Optional` **x5c**: `string`

#### Inherited from

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[x5c](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#x5c)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:20

___

### x5t

• `Optional` **x5t**: `string`

#### Inherited from

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[x5t](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#x5t)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:21

___

### x5t#S256

• `Optional` **x5t#S256**: `string`

#### Inherited from

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[x5t#S256](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#x5t#s256)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:22

___

### x5u

• `Optional` **x5u**: `string`

#### Inherited from

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[x5u](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#x5u)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:23

___

### y

• **y**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:30
