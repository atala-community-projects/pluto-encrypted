[@pluto-encrypted/database](../README.md) / encryption/src

# Module: encryption/src

## Table of contents

### Functions

- [decryptString](encryption_src.md#decryptstring)
- [encryptString](encryption_src.md#encryptstring)
- [wrappedKeyEncryptionStorage](encryption_src.md#wrappedkeyencryptionstorage)

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

[packages/encryption/src/index.ts:22](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/encryption/src/index.ts#L22)

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

[packages/encryption/src/index.ts:13](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/encryption/src/index.ts#L13)

___

### wrappedKeyEncryptionStorage

▸ **wrappedKeyEncryptionStorage**\<`Internals`, `InstanceCreationOptions`\>(`args`): `RxStorage`\<`Internals`, `InstanceCreationOptions`\>

Create encrypted storage for pluto-encrypted

#### Type parameters

| Name |
| :------ |
| `Internals` |
| `InstanceCreationOptions` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | { storage: RxStorage<Internals, InstanceCreationOptions>; } |
| `args.storage` | `RxStorage`\<`Internals`, `InstanceCreationOptions`\> | - |

#### Returns

`RxStorage`\<`Internals`, `InstanceCreationOptions`\>

RxStorage<Internals, InstanceCreationOptions>

#### Defined in

[packages/encryption/src/index.ts:54](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/encryption/src/index.ts#L54)
