[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / [WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md) / Apollo

# Interface: Apollo

[database](../modules/database-1.md).[WALLET\_SDK\_DOMAIN](../modules/database-1.WALLET_SDK_DOMAIN.md).Apollo

## Table of contents

### Methods

- [createPrivateKey](database-1.WALLET_SDK_DOMAIN.Apollo.md#createprivatekey)
- [createRandomMnemonics](database-1.WALLET_SDK_DOMAIN.Apollo.md#createrandommnemonics)
- [createRandomSeed](database-1.WALLET_SDK_DOMAIN.Apollo.md#createrandomseed)
- [createSeed](database-1.WALLET_SDK_DOMAIN.Apollo.md#createseed)

## Methods

### createPrivateKey

▸ **createPrivateKey**(`parameters`): [`PrivateKey`](../classes/database-1.WALLET_SDK_DOMAIN.PrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `Object` |

#### Returns

[`PrivateKey`](../classes/database-1.WALLET_SDK_DOMAIN.PrivateKey.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Apollo.d.ts:8

___

### createRandomMnemonics

▸ **createRandomMnemonics**(): [`MnemonicWordList`](../modules/database-1.WALLET_SDK_DOMAIN.md#mnemonicwordlist)

#### Returns

[`MnemonicWordList`](../modules/database-1.WALLET_SDK_DOMAIN.md#mnemonicwordlist)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Apollo.d.ts:5

___

### createRandomSeed

▸ **createRandomSeed**(`passphrase?`): [`SeedWords`](database-1.WALLET_SDK_DOMAIN.SeedWords.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `passphrase?` | `string` |

#### Returns

[`SeedWords`](database-1.WALLET_SDK_DOMAIN.SeedWords.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Apollo.d.ts:7

___

### createSeed

▸ **createSeed**(`mnemonics`, `passphrase`): [`Seed`](database-1.WALLET_SDK_DOMAIN.Seed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonics` | [`MnemonicWordList`](../modules/database-1.WALLET_SDK_DOMAIN.md#mnemonicwordlist) |
| `passphrase` | `string` |

#### Returns

[`Seed`](database-1.WALLET_SDK_DOMAIN.Seed.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Apollo.d.ts:6
