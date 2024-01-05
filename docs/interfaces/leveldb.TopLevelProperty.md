[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [leveldb](../modules/leveldb.md) / TopLevelProperty

# Interface: TopLevelProperty

[leveldb](../modules/leveldb.md).TopLevelProperty

## Hierarchy

- `JsonSchema`

  ↳ **`TopLevelProperty`**

## Table of contents

### Properties

- [additionalItems](leveldb.TopLevelProperty.md#additionalitems)
- [additionalProperties](leveldb.TopLevelProperty.md#additionalproperties)
- [allOf](leveldb.TopLevelProperty.md#allof)
- [anyOf](leveldb.TopLevelProperty.md#anyof)
- [default](leveldb.TopLevelProperty.md#default)
- [definitions](leveldb.TopLevelProperty.md#definitions)
- [dependencies](leveldb.TopLevelProperty.md#dependencies)
- [description](leveldb.TopLevelProperty.md#description)
- [enum](leveldb.TopLevelProperty.md#enum)
- [example](leveldb.TopLevelProperty.md#example)
- [exclusiveMaximum](leveldb.TopLevelProperty.md#exclusivemaximum)
- [exclusiveMinimum](leveldb.TopLevelProperty.md#exclusiveminimum)
- [final](leveldb.TopLevelProperty.md#final)
- [format](leveldb.TopLevelProperty.md#format)
- [items](leveldb.TopLevelProperty.md#items)
- [maxItems](leveldb.TopLevelProperty.md#maxitems)
- [maxLength](leveldb.TopLevelProperty.md#maxlength)
- [maxProperties](leveldb.TopLevelProperty.md#maxproperties)
- [maximum](leveldb.TopLevelProperty.md#maximum)
- [minItems](leveldb.TopLevelProperty.md#minitems)
- [minLength](leveldb.TopLevelProperty.md#minlength)
- [minProperties](leveldb.TopLevelProperty.md#minproperties)
- [minimum](leveldb.TopLevelProperty.md#minimum)
- [multipleOf](leveldb.TopLevelProperty.md#multipleof)
- [not](leveldb.TopLevelProperty.md#not)
- [oneOf](leveldb.TopLevelProperty.md#oneof)
- [pattern](leveldb.TopLevelProperty.md#pattern)
- [patternProperties](leveldb.TopLevelProperty.md#patternproperties)
- [properties](leveldb.TopLevelProperty.md#properties)
- [ref](leveldb.TopLevelProperty.md#ref)
- [required](leveldb.TopLevelProperty.md#required)
- [type](leveldb.TopLevelProperty.md#type)
- [uniqueItems](leveldb.TopLevelProperty.md#uniqueitems)

## Properties

### additionalItems

• `Optional` **additionalItems**: `boolean` \| `JsonSchema`\<`any`\>

#### Inherited from

JsonSchema.additionalItems

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:39

___

### additionalProperties

• `Optional` **additionalProperties**: `boolean` \| `JsonSchema`\<`any`\>

#### Inherited from

JsonSchema.additionalProperties

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:40

___

### allOf

• `Optional` **allOf**: `JsonSchema`\<`any`\>[] \| readonly `JsonSchema`\<`any`\>[]

#### Inherited from

JsonSchema.allOf

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:36

___

### anyOf

• `Optional` **anyOf**: `JsonSchema`\<`any`\>[] \| readonly `JsonSchema`\<`any`\>[]

#### Inherited from

JsonSchema.anyOf

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:37

___

### default

• `Optional` **default**: `any`

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:81

___

### definitions

• `Optional` **definitions**: `Object`

#### Index signature

▪ [key: `string`]: `JsonSchema`

#### Inherited from

JsonSchema.definitions

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:69

___

### dependencies

• `Optional` **dependencies**: `Object`

#### Index signature

▪ [key: `string`]: `JsonSchema` \| `string`[] \| readonly `string`[]

#### Inherited from

JsonSchema.dependencies

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:43

___

### description

• `Optional` **description**: `string`

#### Inherited from

JsonSchema.description

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:42

___

### enum

• `Optional` **enum**: `any`[] \| readonly `any`[]

#### Inherited from

JsonSchema.enum

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:67

___

### example

• `Optional` **example**: `any`

#### Inherited from

JsonSchema.example

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:73

___

### exclusiveMaximum

• `Optional` **exclusiveMaximum**: `boolean`

#### Inherited from

JsonSchema.exclusiveMaximum

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:47

___

### exclusiveMinimum

• `Optional` **exclusiveMinimum**: `boolean`

#### Inherited from

JsonSchema.exclusiveMinimum

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:46

___

### final

• `Optional` **final**: `boolean`

#### Inherited from

JsonSchema.final

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:77

___

### format

• `Optional` **format**: `string`

#### Inherited from

JsonSchema.format

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:72

___

### items

• `Optional` **items**: `JsonSchema`\<`any`\> \| `JsonSchema`\<`any`\>[] \| readonly `JsonSchema`\<`any`\>[]

#### Inherited from

JsonSchema.items

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:48

___

### maxItems

• `Optional` **maxItems**: `number`

#### Inherited from

JsonSchema.maxItems

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:55

___

### maxLength

• `Optional` **maxLength**: `number`

#### Inherited from

JsonSchema.maxLength

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:53

___

### maxProperties

• `Optional` **maxProperties**: `number`

#### Inherited from

JsonSchema.maxProperties

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:50

___

### maximum

• `Optional` **maximum**: `number`

#### Inherited from

JsonSchema.maximum

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:51

___

### minItems

• `Optional` **minItems**: `number`

#### Inherited from

JsonSchema.minItems

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:56

___

### minLength

• `Optional` **minLength**: `number`

#### Inherited from

JsonSchema.minLength

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:54

___

### minProperties

• `Optional` **minProperties**: `number`

#### Inherited from

JsonSchema.minProperties

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:57

___

### minimum

• `Optional` **minimum**: `number`

#### Inherited from

JsonSchema.minimum

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:52

___

### multipleOf

• `Optional` **multipleOf**: `number`

#### Inherited from

JsonSchema.multipleOf

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:49

___

### not

• `Optional` **not**: `JsonSchema`\<`any`\>

#### Inherited from

JsonSchema.not

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:68

___

### oneOf

• `Optional` **oneOf**: `JsonSchema`\<`any`\>[] \| readonly `JsonSchema`\<`any`\>[]

#### Inherited from

JsonSchema.oneOf

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:38

___

### pattern

• `Optional` **pattern**: `string`

#### Inherited from

JsonSchema.pattern

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:58

___

### patternProperties

• `Optional` **patternProperties**: `Object`

#### Index signature

▪ [key: `string`]: `JsonSchema`

#### Inherited from

JsonSchema.patternProperties

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:59

___

### properties

• `Optional` **properties**: `Object`

#### Inherited from

JsonSchema.properties

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:62

___

### ref

• `Optional` **ref**: `string`

#### Inherited from

JsonSchema.ref

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:76

___

### required

• `Optional` **required**: `string`[] \| readonly `string`[]

#### Inherited from

JsonSchema.required

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:65

___

### type

• `Optional` **type**: `JsonSchemaTypes` \| `JsonSchemaTypes`[] \| readonly `JsonSchemaTypes`[]

#### Inherited from

JsonSchema.type

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:41

___

### uniqueItems

• `Optional` **uniqueItems**: `boolean`

#### Inherited from

JsonSchema.uniqueItems

#### Defined in

node_modules/rxdb/dist/types/types/rx-schema.d.ts:66
