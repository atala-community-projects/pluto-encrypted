[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database/src](../modules/database_src.md) / GenericORMType

# Interface: GenericORMType\<RxDocType\>

[database/src](../modules/database_src.md).GenericORMType

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Hierarchy

- `RxCollection`\<`any`, `any`, `any`\>

  ↳ **`GenericORMType`**

## Table of contents

### Properties

- [count](database_src.GenericORMType.md#count)
- [find](database_src.GenericORMType.md#find)
- [findByIds](database_src.GenericORMType.md#findbyids)
- [findOne](database_src.GenericORMType.md#findone)
- [remove](database_src.GenericORMType.md#remove)

## Properties

### count

• **count**: (`this`: `any`, `query`: `undefined` \| [`MangoQuery`](../modules/leveldb.md#mangoquery)\<`any`\>) => `Promise`\<`number`\>

#### Type declaration

▸ (`this`, `query`): `Promise`\<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `query` | `undefined` \| [`MangoQuery`](../modules/leveldb.md#mangoquery)\<`any`\> |

##### Returns

`Promise`\<`number`\>

#### Defined in

[packages/database/src/types.ts:21](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/types.ts#L21)

___

### find

• **find**: (`queryObj?`: `string` \| [`MangoQueryNoLimit`](../modules/leveldb.md#mangoquerynolimit)\<`any`\>) => `any`[]

#### Type declaration

▸ (`queryObj?`): `any`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `queryObj?` | `string` \| [`MangoQueryNoLimit`](../modules/leveldb.md#mangoquerynolimit)\<`any`\> |

##### Returns

`any`[]

#### Defined in

[packages/database/src/types.ts:23](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/types.ts#L23)

___

### findByIds

• **findByIds**: (`this`: `any`, `ids`: `string`[]) => `Map`\<`string`, `RxDocumentBase`\<{}, {}\>\>

#### Type declaration

▸ (`this`, `ids`): `Map`\<`string`, `RxDocumentBase`\<{}, {}\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `ids` | `string`[] |

##### Returns

`Map`\<`string`, `RxDocumentBase`\<{}, {}\>\>

#### Defined in

[packages/database/src/types.ts:22](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/types.ts#L22)

___

### findOne

• **findOne**: (`queryObj?`: `string` \| [`MangoQueryNoLimit`](../modules/leveldb.md#mangoquerynolimit)\<`any`\>) => `any`

#### Type declaration

▸ (`queryObj?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `queryObj?` | `string` \| [`MangoQueryNoLimit`](../modules/leveldb.md#mangoquerynolimit)\<`any`\> |

##### Returns

`any`

#### Defined in

[packages/database/src/types.ts:24](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/types.ts#L24)

___

### remove

• **remove**: (`queryObj?`: `string` \| [`MangoQueryNoLimit`](../modules/leveldb.md#mangoquerynolimit)\<`any`\>) => `any`[]

#### Type declaration

▸ (`queryObj?`): `any`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `queryObj?` | `string` \| [`MangoQueryNoLimit`](../modules/leveldb.md#mangoquerynolimit)\<`any`\> |

##### Returns

`any`[]

#### Defined in

[packages/database/src/types.ts:25](https://github.com/atala-community-projects/pluto-encrypted/blob/f75084b/packages/database/src/types.ts#L25)
