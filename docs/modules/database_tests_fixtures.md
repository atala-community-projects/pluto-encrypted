[@pluto-encrypted/database](../README.md) / database/tests/fixtures

# Module: database/tests/fixtures

## Table of contents

### Functions

- [createAnonCredsPayload](database_tests_fixtures.md#createanoncredspayload)
- [createJWTPayload](database_tests_fixtures.md#createjwtpayload)
- [encodeAnonCredsCredential](database_tests_fixtures.md#encodeanoncredscredential)

## Functions

### createAnonCredsPayload

▸ **createAnonCredsPayload**(): `CredentialIssued`

#### Returns

`CredentialIssued`

#### Defined in

[packages/database/tests/fixtures.ts:208](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/tests/fixtures.ts#L208)

___

### createJWTPayload

▸ **createJWTPayload**(`id`, `proof`, `credentialType`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `proof` | `string` |
| `credentialType` | `CredentialType` |

#### Returns

`any`

#### Defined in

[packages/database/tests/fixtures.ts:109](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/tests/fixtures.ts#L109)

___

### encodeAnonCredsCredential

▸ **encodeAnonCredsCredential**(`cred`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cred` | `object` |

#### Returns

`Buffer`

#### Defined in

[packages/database/tests/fixtures.ts:212](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/tests/fixtures.ts#L212)
