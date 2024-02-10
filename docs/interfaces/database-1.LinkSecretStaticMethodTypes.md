[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database-1.md) / LinkSecretStaticMethodTypes

# Interface: LinkSecretStaticMethodTypes

[database](../modules/database-1.md).LinkSecretStaticMethodTypes

## Hierarchy

- `KeyFunctionMap`

  ↳ **`LinkSecretStaticMethodTypes`**

## Table of contents

### Methods

- [getLinkSecret](database-1.LinkSecretStaticMethodTypes.md#getlinksecret)
- [storeLinkSecret](database-1.LinkSecretStaticMethodTypes.md#storelinksecret)

## Methods

### getLinkSecret

▸ **getLinkSecret**(`this`, `linkSecretName?`): `Promise`\<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `linkSecretName?` | `string` |

#### Returns

`Promise`\<``null`` \| `string`\>

#### Defined in

[packages/schemas/src/schemas/linksecret/types.ts:31](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/schemas/src/schemas/linksecret/types.ts#L31)

___

### storeLinkSecret

▸ **storeLinkSecret**(`this`, `linkSecret`, `linkSecretName`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PlutoDBontext`](../modules/database-1.md#plutodbontext) |
| `linkSecret` | `string` |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/schemas/src/schemas/linksecret/types.ts:26](https://github.com/atala-community-projects/pluto-encrypted/blob/771b3b2/packages/schemas/src/schemas/linksecret/types.ts#L26)
