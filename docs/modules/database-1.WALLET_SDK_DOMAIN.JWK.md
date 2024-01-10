[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](database-1.md) / [WALLET\_SDK\_DOMAIN](database-1.WALLET_SDK_DOMAIN.md) / JWK

# Namespace: JWK

[database](database-1.md).[WALLET\_SDK\_DOMAIN](database-1.WALLET_SDK_DOMAIN.md).JWK

JWK definitions
based on https://www.iana.org/assignments/jose/jose.xhtml

## Table of contents

### Interfaces

- [Base](../interfaces/database-1.WALLET_SDK_DOMAIN.JWK.Base.md)
- [EC](../interfaces/database-1.WALLET_SDK_DOMAIN.JWK.EC.md)
- [OCT](../interfaces/database-1.WALLET_SDK_DOMAIN.JWK.OCT.md)
- [OKP](../interfaces/database-1.WALLET_SDK_DOMAIN.JWK.OKP.md)
- [RSA](../interfaces/database-1.WALLET_SDK_DOMAIN.JWK.RSA.md)

### Type Aliases

- [key\_ops](database-1.WALLET_SDK_DOMAIN.JWK.md#key_ops)

### Functions

- [fromKey](database-1.WALLET_SDK_DOMAIN.JWK.md#fromkey)

## Type Aliases

### key\_ops

Ƭ **key\_ops**: ``"sign"`` \| ``"verify"`` \| ``"encrypt"`` \| ``"decrypt"`` \| ``"wrapKey"`` \| ``"unwrapKey"`` \| ``"deriveKey"`` \| ``"deriveBits"``

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:12

## Functions

### fromKey

▸ **fromKey**(`key`, `base?`): [`JWK`](database-1.WALLET_SDK_DOMAIN.md#jwk)

create a JWK from a given Key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`PrivateKey`](../classes/database-1.WALLET_SDK_DOMAIN.PrivateKey.md) \| [`PublicKey`](../classes/database-1.WALLET_SDK_DOMAIN.PublicKey.md) |  |
| `base?` | [`Base`](../interfaces/database-1.WALLET_SDK_DOMAIN.JWK.Base.md) | set of JWK properties to be added |

#### Returns

[`JWK`](database-1.WALLET_SDK_DOMAIN.md#jwk)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/keyManagement/exportable/JWK.d.ts:61
