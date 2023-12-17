[@pluto-encrypted/database](../README.md) / [database/build/types](../modules/database_build_types.md) / GenericORMType

# Interface: GenericORMType\<RxDocType\>

[database/build/types](../modules/database_build_types.md).GenericORMType

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Hierarchy

- `RxCollection`\<`any`, `any`, `any`\>

  ↳ **`GenericORMType`**

## Table of contents

### Properties

- [count](database_build_types.GenericORMType.md#count)

### Methods

- [find](database_build_types.GenericORMType.md#find)
- [findByIds](database_build_types.GenericORMType.md#findbyids)
- [findOne](database_build_types.GenericORMType.md#findone)
- [remove](database_build_types.GenericORMType.md#remove)

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

packages/database/build/types.d.ts:18

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

packages/database/build/types.d.ts:20

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

packages/database/build/types.d.ts:19

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

packages/database/build/types.d.ts:21

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

packages/database/build/types.d.ts:22
