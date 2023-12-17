[@pluto-encrypted](../README.md) / encryption

# Module: encryption

## Table of contents

### Functions

- [decryptString](encryption.md#decryptstring)
- [encryptString](encryption.md#encryptstring)
- [wrappedKeyEncryptionStorage](encryption.md#wrappedkeyencryptionstorage)

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

[encryption/src/index.ts:26](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/encryption/src/index.ts#L26)

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

[encryption/src/index.ts:17](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/encryption/src/index.ts#L17)

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

[encryption/src/index.ts:58](https://github.com/elribonazo/pluto-encrypted/blob/2d1bca5/packages/encryption/src/index.ts#L58)
