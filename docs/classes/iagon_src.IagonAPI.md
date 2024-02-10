[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [iagon/src](../modules/iagon_src.md) / IagonAPI

# Class: IagonAPI

[iagon/src](../modules/iagon_src.md).IagonAPI

## Table of contents

### Constructors

- [constructor](iagon_src.IagonAPI.md#constructor)

### Properties

- [baseUrl](iagon_src.IagonAPI.md#baseurl)
- [parameters](iagon_src.IagonAPI.md#parameters)

### Accessors

- [iagonPassword](iagon_src.IagonAPI.md#iagonpassword)

### Methods

- [createDirectory](iagon_src.IagonAPI.md#createdirectory)
- [getDirectories](iagon_src.IagonAPI.md#getdirectories)
- [getFile](iagon_src.IagonAPI.md#getfile)
- [getFiles](iagon_src.IagonAPI.md#getfiles)
- [getFormDataSize](iagon_src.IagonAPI.md#getformdatasize)
- [objectToFormData](iagon_src.IagonAPI.md#objecttoformdata)
- [removeDirectory](iagon_src.IagonAPI.md#removedirectory)
- [removeFile](iagon_src.IagonAPI.md#removefile)
- [runRequest](iagon_src.IagonAPI.md#runrequest)
- [uploadFile](iagon_src.IagonAPI.md#uploadfile)

## Constructors

### constructor

• **new IagonAPI**(`parameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IagonInternalParameters`](../modules/iagon_src.md#iagoninternalparameters) |

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:8](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L8)

## Properties

### baseUrl

• `Private` **baseUrl**: `string` = `"https://gw.iagon.com/"`

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:7](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L7)

___

### parameters

• `Private` **parameters**: [`IagonInternalParameters`](../modules/iagon_src.md#iagoninternalparameters)

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:8](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L8)

## Accessors

### iagonPassword

• `get` **iagonPassword**(): `string`

#### Returns

`string`

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:10](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L10)

## Methods

### createDirectory

▸ **createDirectory**(`queryOptions`): `Promise`\<[`IagonFolder`](../modules/iagon_src.md#iagonfolder)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryOptions` | `Object` |
| `queryOptions.dirName` | `string` |
| `queryOptions.parentDirectoryId?` | `string` |

#### Returns

`Promise`\<[`IagonFolder`](../modules/iagon_src.md#iagonfolder)\>

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:107](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L107)

___

### getDirectories

▸ **getDirectories**(`parentDirectoryId?`): `Promise`\<[`IagonFolder`](../modules/iagon_src.md#iagonfolder)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentDirectoryId?` | `string` |

#### Returns

`Promise`\<[`IagonFolder`](../modules/iagon_src.md#iagonfolder)[]\>

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:41](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L41)

___

### getFile

▸ **getFile**(`options`): `Promise`\<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.file` | [`IagonFile`](../modules/iagon_src.md#iagonfile) |
| `options.parentDirectoryId?` | `string` |

#### Returns

`Promise`\<`Buffer`\>

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:65](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L65)

___

### getFiles

▸ **getFiles**(`parentDirectoryId?`): `Promise`\<[`IagonFile`](../modules/iagon_src.md#iagonfile)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentDirectoryId?` | `string` |

#### Returns

`Promise`\<[`IagonFile`](../modules/iagon_src.md#iagonfile)[]\>

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:81](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L81)

___

### getFormDataSize

▸ `Private` **getFormDataSize**(`formData`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `formData` | `any` |

#### Returns

`number`

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:161](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L161)

___

### objectToFormData

▸ `Private` **objectToFormData**(`obj`): `FormData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`FormData`

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:151](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L151)

___

### removeDirectory

▸ **removeDirectory**(`dirname`, `recursive`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirname` | [`IagonFolder`](../modules/iagon_src.md#iagonfolder) |
| `recursive` | ``true`` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:139](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L139)

___

### removeFile

▸ **removeFile**(`fileId`): `Promise`\<`AxiosResponse`\<`unknown`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

`Promise`\<`AxiosResponse`\<`unknown`, `any`\>\>

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:28](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L28)

___

### runRequest

▸ `Private` **runRequest**\<`Response`\>(`options`): `Promise`\<`AxiosResponse`\<`Response`, `any`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Response` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `AxiosRequestConfig`\<`any`\> |

#### Returns

`Promise`\<`AxiosResponse`\<`Response`, `any`\>\>

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:14](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L14)

___

### uploadFile

▸ **uploadFile**(`dirname`, `file`, `contents`): `Promise`\<[`IagonFile`](../modules/iagon_src.md#iagonfile)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirname` | [`IagonFolder`](../modules/iagon_src.md#iagonfolder) |
| `file` | `string` |
| `contents` | `Uint8Array` |

#### Returns

`Promise`\<[`IagonFile`](../modules/iagon_src.md#iagonfile)\>

#### Defined in

[packages/iagon/src/IagonStorage/api.ts:172](https://github.com/atala-community-projects/pluto-encrypted/blob/8d4a2cf/packages/iagon/src/IagonStorage/api.ts#L172)
