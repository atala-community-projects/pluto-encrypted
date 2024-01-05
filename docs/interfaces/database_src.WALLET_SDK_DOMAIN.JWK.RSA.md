[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / [WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md) / [JWK](../modules/database_src.WALLET_SDK_DOMAIN.JWK.md) / RSA

# Interface: RSA

[WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md).[JWK](../modules/database_src.WALLET_SDK_DOMAIN.JWK.md).RSA

## Hierarchy

- [`Base`](database_src.WALLET_SDK_DOMAIN.JWK.Base.md)

  ↳ **`RSA`**

## Table of contents

### Properties

- [alg](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#alg)
- [d](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#d)
- [dp](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#dp)
- [dq](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#dq)
- [e](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#e)
- [ext](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#ext)
- [key\_ops](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#key_ops)
- [kid](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#kid)
- [kty](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#kty)
- [n](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#n)
- [oth](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#oth)
- [p](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#p)
- [q](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#q)
- [qi](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#qi)
- [use](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#use)
- [x5c](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#x5c)
- [x5t](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#x5t)
- [x5t#S256](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#x5t#s256)
- [x5u](database_src.WALLET_SDK_DOMAIN.JWK.RSA.md#x5u)

## Properties

### alg

• `Optional` **alg**: `string`

#### Inherited from

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[alg](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#alg)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:14

___

### d

• **d**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:44

___

### dp

• **dp**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:45

___

### dq

• **dq**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:46

___

### e

• **e**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:47

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

• **kty**: ``"RSA"``

#### Overrides

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[kty](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#kty)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:43

___

### n

• **n**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:48

___

### oth

• **oth**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:49

___

### p

• **p**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:50

___

### q

• **q**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:51

___

### qi

• **qi**: `string`

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:52

___

### use

• `Optional` **use**: ``"sig"`` \| ``"enc"``

#### Inherited from

[Base](database_src.WALLET_SDK_DOMAIN.JWK.Base.md).[use](database_src.WALLET_SDK_DOMAIN.JWK.Base.md#use)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:19

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
