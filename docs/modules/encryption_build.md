[@pluto-encrypted/database](../README.md) / encryption/build

# Module: encryption/build

## Table of contents

### Functions

- [decryptString](encryption_build.md#decryptstring)
- [encryptString](encryption_build.md#encryptstring)
- [wrappedKeyEncryptionStorage](encryption_build.md#wrappedkeyencryptionstorage)

## Functions

### decryptString

▸ **decryptString**(`chacha`, `cipherText`, `password`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chacha` | `CipherWithOutput` |
| `cipherText` | `string` |
| `password` | `any` |

#### Returns

`string`

#### Defined in

packages/encryption/build/index.d.ts:5

___

### encryptString

▸ **encryptString**(`chacha`, `value`, `password`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chacha` | `CipherWithOutput` |
| `value` | `string` |
| `password` | `string` |

#### Returns

`string`

#### Defined in

packages/encryption/build/index.d.ts:4

___

### wrappedKeyEncryptionStorage

▸ **wrappedKeyEncryptionStorage**\<`Internals`, `InstanceCreationOptions`\>(`args`): `RxStorage`\<`Internals`, `InstanceCreationOptions`\>

#### Type parameters

| Name |
| :------ |
| `Internals` |
| `InstanceCreationOptions` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.storage` | `RxStorage`\<`Internals`, `InstanceCreationOptions`\> |

#### Returns

`RxStorage`\<`Internals`, `InstanceCreationOptions`\>

#### Defined in

packages/encryption/build/index.d.ts:9
