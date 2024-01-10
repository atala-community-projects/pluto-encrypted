[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [shared](../modules/shared.md) / DatabaseBase

# Class: DatabaseBase\<Collections\>

[shared](../modules/shared.md).DatabaseBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `Collections` | `CollectionsOfDatabase` |

## Table of contents

### Constructors

- [constructor](shared.DatabaseBase.md#constructor)

### Properties

- [\_db](shared.DatabaseBase.md#_db)
- [dbOptions](shared.DatabaseBase.md#dboptions)

### Accessors

- [db](shared.DatabaseBase.md#db)

### Methods

- [backup](shared.DatabaseBase.md#backup)
- [clear](shared.DatabaseBase.md#clear)
- [getCollection](shared.DatabaseBase.md#getcollection)
- [start](shared.DatabaseBase.md#start)

## Constructors

### constructor

• **new DatabaseBase**\<`Collections`\>(`dbOptions`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Collections` | `CollectionsOfDatabase` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbOptions` | [`DBOptions`](../modules/shared.md#dboptions) |

#### Defined in

[packages/shared/src/index.ts:261](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/shared/src/index.ts#L261)

## Properties

### \_db

• `Private` **\_db**: `RxDatabase`\<`Collections`, `any`, `any`\>

#### Defined in

[packages/shared/src/index.ts:245](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/shared/src/index.ts#L245)

___

### dbOptions

• `Private` `Readonly` **dbOptions**: [`DBOptions`](../modules/shared.md#dboptions)

#### Defined in

[packages/shared/src/index.ts:262](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/shared/src/index.ts#L262)

## Accessors

### db

• `get` **db**(): `RxDatabase`\<`Collections`, `any`, `any`\>

#### Returns

`RxDatabase`\<`Collections`, `any`, `any`\>

#### Defined in

[packages/shared/src/index.ts:247](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/shared/src/index.ts#L247)

## Methods

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<`Collections`\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<`Collections`\>\>

#### Defined in

[packages/shared/src/index.ts:269](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/shared/src/index.ts#L269)

___

### clear

▸ **clear**(): `Promise`\<`void`\>

Use with caution, this will remove all entries from database
and then destroy the database itself.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/shared/src/index.ts:277](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/shared/src/index.ts#L277)

___

### getCollection

▸ **getCollection**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

[packages/shared/src/index.ts:254](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/shared/src/index.ts#L254)

___

### start

▸ **start**(`collections?`): `Promise`\<`void`\>

Start the database and build collections

#### Parameters

| Name | Type |
| :------ | :------ |
| `collections?` | `Object` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/shared/src/index.ts:288](https://github.com/atala-community-projects/pluto-encrypted/blob/879549ef/packages/shared/src/index.ts#L288)
