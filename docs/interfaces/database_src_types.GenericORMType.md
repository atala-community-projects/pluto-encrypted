[@pluto-encrypted/database](../README.md) / [database/src/types](../modules/database_src_types.md) / GenericORMType

# Interface: GenericORMType\<RxDocType\>

[database/src/types](../modules/database_src_types.md).GenericORMType

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Hierarchy

- `RxCollection`\<`any`, `any`, `any`\>

  ↳ **`GenericORMType`**

## Table of contents

### Properties

- [count](database_src_types.GenericORMType.md#count)

### Methods

- [find](database_src_types.GenericORMType.md#find)
- [findByIds](database_src_types.GenericORMType.md#findbyids)
- [findOne](database_src_types.GenericORMType.md#findone)
- [remove](database_src_types.GenericORMType.md#remove)

## Properties

### count

• **count**: (`this`: `any`, `query`: `undefined` \| `MangoQuery`\<`any`\>) => `Promise`\<`number`\>

#### Type declaration

▸ (`this`, `query`): `Promise`\<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `query` | `undefined` \| `MangoQuery`\<`any`\> |

##### Returns

`Promise`\<`number`\>

#### Defined in

[packages/database/src/types.ts:22](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/types.ts#L22)

## Methods

### find

▸ **find**(`queryObj?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryObj?` | `string` \| `MangoQueryNoLimit`\<`any`\> |

#### Returns

`any`[]

#### Defined in

[packages/database/src/types.ts:24](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/types.ts#L24)

___

### findByIds

▸ **findByIds**(`this`, `ids`): `Map`\<`string`, `RxDocumentBase`\<{}, {}\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `ids` | `string`[] |

#### Returns

`Map`\<`string`, `RxDocumentBase`\<{}, {}\>\>

#### Defined in

[packages/database/src/types.ts:23](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/types.ts#L23)

___

### findOne

▸ **findOne**(`queryObj?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryObj?` | `string` \| `MangoQueryNoLimit`\<`any`\> |

#### Returns

`any`

#### Defined in

[packages/database/src/types.ts:25](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/types.ts#L25)

___

### remove

▸ **remove**(`queryObj?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryObj?` | `string` \| `MangoQueryNoLimit`\<`any`\> |

#### Returns

`any`[]

#### Defined in

[packages/database/src/types.ts:26](https://github.com/elribonazo/pluto-encrypted/blob/1443488/packages/database/src/types.ts#L26)
