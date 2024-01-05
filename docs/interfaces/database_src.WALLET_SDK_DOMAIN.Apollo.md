[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / [WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md) / Apollo

# Interface: Apollo

[database/src](../modules/database_src.md).[WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md).Apollo

## Table of contents

### Methods

- [createPrivateKey](database_src.WALLET_SDK_DOMAIN.Apollo.md#createprivatekey)
- [createRandomMnemonics](database_src.WALLET_SDK_DOMAIN.Apollo.md#createrandommnemonics)
- [createRandomSeed](database_src.WALLET_SDK_DOMAIN.Apollo.md#createrandomseed)
- [createSeed](database_src.WALLET_SDK_DOMAIN.Apollo.md#createseed)

## Methods

### createPrivateKey

▸ **createPrivateKey**(`parameters`): [`PrivateKey`](../classes/database_src.WALLET_SDK_DOMAIN.PrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `Object` |

#### Returns

[`PrivateKey`](../classes/database_src.WALLET_SDK_DOMAIN.PrivateKey.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Apollo.d.ts:8

___

### createRandomMnemonics

▸ **createRandomMnemonics**(): [`MnemonicWordList`](../modules/database_src.WALLET_SDK_DOMAIN.md#mnemonicwordlist)

#### Returns

[`MnemonicWordList`](../modules/database_src.WALLET_SDK_DOMAIN.md#mnemonicwordlist)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Apollo.d.ts:5

___

### createRandomSeed

▸ **createRandomSeed**(`passphrase?`): [`SeedWords`](database_src.WALLET_SDK_DOMAIN.SeedWords.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `passphrase?` | `string` |

#### Returns

[`SeedWords`](database_src.WALLET_SDK_DOMAIN.SeedWords.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Apollo.d.ts:7

___

### createSeed

▸ **createSeed**(`mnemonics`, `passphrase`): [`Seed`](database_src.WALLET_SDK_DOMAIN.Seed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonics` | [`MnemonicWordList`](../modules/database_src.WALLET_SDK_DOMAIN.md#mnemonicwordlist) |
| `passphrase` | `string` |

#### Returns

[`Seed`](database_src.WALLET_SDK_DOMAIN.Seed.md)

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/buildingBlocks/Apollo.d.ts:6
