[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / [WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md) / [Anoncreds](../modules/database_src.WALLET_SDK_DOMAIN.Anoncreds.md) / CredentialIssued

# Interface: CredentialIssued

[WALLET\_SDK\_DOMAIN](../modules/database_src.WALLET_SDK_DOMAIN.md).[Anoncreds](../modules/database_src.WALLET_SDK_DOMAIN.Anoncreds.md).CredentialIssued

## Hierarchy

- `Omit`\<[`Credential`](database_src.WALLET_SDK_DOMAIN.Anoncreds.Credential.md), ``"values"``\>

  ↳ **`CredentialIssued`**

## Table of contents

### Properties

- [cred\_def\_id](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialIssued.md#cred_def_id)
- [schema\_id](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialIssued.md#schema_id)
- [signature](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialIssued.md#signature)
- [signature\_correctness\_proof](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialIssued.md#signature_correctness_proof)
- [values](database_src.WALLET_SDK_DOMAIN.Anoncreds.CredentialIssued.md#values)

## Properties

### cred\_def\_id

• **cred\_def\_id**: `string`

#### Inherited from

Omit.cred\_def\_id

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Anoncreds.d.ts:51

___

### schema\_id

• **schema\_id**: `string`

#### Inherited from

Omit.schema\_id

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Anoncreds.d.ts:50

___

### signature

• **signature**: `Credential_Signature`

#### Inherited from

Omit.signature

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Anoncreds.d.ts:52

___

### signature\_correctness\_proof

• **signature\_correctness\_proof**: `Credential_SignatureCorrectnessProof`

#### Inherited from

Omit.signature\_correctness\_proof

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Anoncreds.d.ts:53

___

### values

• **values**: `Tuple`\<`string`, `Credential_Value`\>[]

#### Defined in

node_modules/@atala/prism-wallet-sdk/build/typings/domain/models/Anoncreds.d.ts:57
