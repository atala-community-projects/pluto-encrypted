[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / [WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md) / [Anoncreds](../modules/database.WALLET_SDK_DOMAIN.Anoncreds.md) / Presentation

# Interface: Presentation

[WALLET\_SDK\_DOMAIN](../modules/database.WALLET_SDK_DOMAIN.md).[Anoncreds](../modules/database.WALLET_SDK_DOMAIN.Anoncreds.md).Presentation

## Table of contents

### Properties

- [identifiers](database.WALLET_SDK_DOMAIN.Anoncreds.Presentation.md#identifiers)
- [proof](database.WALLET_SDK_DOMAIN.Anoncreds.Presentation.md#proof)
- [requested\_proof](database.WALLET_SDK_DOMAIN.Anoncreds.Presentation.md#requested_proof)

## Properties

### identifiers

• **identifiers**: `Presentation_Identifier`[]

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Anoncreds.d.ts:105

___

### proof

• **proof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregated_proof` | \{ `c_hash`: `string` ; `c_list`: `number`[][]  } |
| `aggregated_proof.c_hash` | `string` |
| `aggregated_proof.c_list` | `number`[][] |
| `proofs` | `Presentation_Proof_Proofs`[] |

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Anoncreds.d.ts:92

___

### requested\_proof

• **requested\_proof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `predicates` | `Presentation_RequestedProof_Value` |
| `revealed_attrs` | `Presentation_RequestedProof_RevealedAttrs` |
| `self_attested_attrs` | `Presentation_RequestedProof_Value` |
| `unrevealed_attrs` | `Presentation_RequestedProof_Value` |

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Anoncreds.d.ts:99
