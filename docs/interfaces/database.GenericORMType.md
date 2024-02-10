[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [database](../modules/database.md) / GenericORMType

# Interface: GenericORMType\<RxDocType\>

[database](../modules/database.md).GenericORMType

## Type parameters

| Name |
| :------ |
| `RxDocType` |

## Hierarchy

- `RxCollection`\<`any`, `any`, `any`\>

  ↳ **`GenericORMType`**

## Table of contents

### Properties

- [count](database.GenericORMType.md#count)
- [find](database.GenericORMType.md#find)
- [findByIds](database.GenericORMType.md#findbyids)
- [findOne](database.GenericORMType.md#findone)
- [remove](database.GenericORMType.md#remove)

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

[packages/database/src/types.ts:11](https://github.com/atala-community-projects/pluto-encrypted/blob/eabdd0c/packages/database/src/types.ts#L11)

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

[packages/database/src/types.ts:13](https://github.com/atala-community-projects/pluto-encrypted/blob/eabdd0c/packages/database/src/types.ts#L13)

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

[packages/database/src/types.ts:12](https://github.com/atala-community-projects/pluto-encrypted/blob/eabdd0c/packages/database/src/types.ts#L12)

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

[packages/database/src/types.ts:14](https://github.com/atala-community-projects/pluto-encrypted/blob/eabdd0c/packages/database/src/types.ts#L14)

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

[packages/database/src/types.ts:15](https://github.com/atala-community-projects/pluto-encrypted/blob/eabdd0c/packages/database/src/types.ts#L15)
