import axios, { AxiosRequestConfig } from 'axios';


import { IagonFile, IagonFolder, IagonInternalParameters, IagonResponse } from "./types";

export class IagonAPI {
    private baseUrl = "https://gw.iagon.com/";
    constructor(private parameters: IagonInternalParameters) { }

    get iagonPassword() {
        return Buffer.from(this.parameters.password).toString()
    }

    private async runRequest<Response extends IagonResponse<any> | any>(options: AxiosRequestConfig) {
        try {
            const startTime = Date.now();
            const response = await axios.request<Response>(options);
            const endTime = Date.now();
            const elapsedMilliseconds = endTime - startTime;
            console.log(`Request "${options.method}":"${options.url}" took ${elapsedMilliseconds} ms.`);
            return Promise.resolve(response)
        } catch (err) {
            console.error(`Request "${options.method}":"${options.url}" failed: ${err}`);
            return Promise.reject(err)
        }
    }

    async removeFile(fileId: string) {
        const baseUrl = `${this.baseUrl}api/v2/storage/file/${fileId}`;
        const url = `${baseUrl}`
        const options = {
            'method': 'DELETE',
            'url': url,
            'headers': {
                'x-api-key': this.parameters.apiKey
            }
        };
        const file = await this.runRequest(options)
        return file
    }
    async getDirectories(parentDirectoryId?: string) {
        const baseUrl = `${this.baseUrl}api/v2/storage/directory?visibility=private&listingType=index`
        const url = parentDirectoryId ? `${baseUrl}&parent_directory_id=${parentDirectoryId}` : `${baseUrl}`
        const options = {
            'method': 'GET',
            'url': url,
            'headers': {
                'x-api-key': this.parameters.apiKey
            }
        };

        const response = await this.runRequest<IagonResponse<{
            directories: IagonFolder[],
            files: IagonFile[]
        }>>(options)

        const jsonResponse = response.data;
        if (!jsonResponse.success) {
            throw new Error(jsonResponse.message)
        }

        const directories = jsonResponse.data && jsonResponse.data.directories ? jsonResponse.data.directories : [];
        return directories
    }
    async getFile(options: { parentDirectoryId?: string | undefined; file: IagonFile; }) {
        const baseUrl = `${this.baseUrl}api/v2/storage/parameterized/download`
        var requestOptions = {
            'method': 'POST',
            'url': baseUrl,
            'headers': {
                'x-api-key': this.parameters.apiKey
            },
            'data': {
                "id": options.file._id,
                "password": this.iagonPassword
            }
        };
        const response = await this.runRequest<Uint8Array>(requestOptions)
        return Buffer.from(typeof response.data === "string" ? response.data : JSON.stringify(response.data));
    }
    async getFiles(parentDirectoryId?: string) {
        const baseUrl = `${this.baseUrl}api/v2/storage/directory?visibility=private&listingType=index`
        const url = parentDirectoryId ? `${baseUrl}&parent_directory_id=${parentDirectoryId}` : `${baseUrl}`
        const options = {
            'method': 'GET',
            'url': url,
            'headers': {
                'x-api-key': this.parameters.apiKey
            }
        };
        const response = await this.runRequest<IagonResponse<{
            directories: IagonFolder[],
            files: IagonFile[]
        }>>(options);

        const jsonResponse: IagonResponse<{
            directories: IagonFolder[],
            files: IagonFile[]
        }> = response.data;

        if (!jsonResponse.success) {
            throw new Error(jsonResponse.message)
        }
        const files = jsonResponse.data && jsonResponse.data.files ? jsonResponse.data.files : [];
        return files
    }
    async createDirectory(queryOptions: { parentDirectoryId?: string, dirName: string }) {
        const { dirName, parentDirectoryId } = queryOptions
        const body: any = {
            "directory_name": dirName,
            "visibility": "private",
            "index_listing": true
        }

        if (parentDirectoryId) {
            body.parent_directory_id = parentDirectoryId;
        }

        const baseUrl = `${this.baseUrl}api/v2/storage/directory`
        const options = {
            'method': 'POST',
            'url': baseUrl,
            'headers': {
                'Content-Type': 'application/json',
                'x-api-key': this.parameters.apiKey
            },
            data: JSON.stringify(body)
        };

        const response = await this.runRequest<IagonResponse<IagonFolder>>(options)
        const jsonResponse: IagonResponse<IagonFolder> = response.data;
        if (!jsonResponse.success) {
            throw new Error(jsonResponse.message)
        }

        const directory = jsonResponse.data
        return directory
    }
    async removeDirectory(dirname: IagonFolder, recursive: true) {
        const baseUrl = `${this.baseUrl}api/v2/storage/directory/${dirname._id}`
        var options = {
            'method': 'DELETE',
            'url': baseUrl,
            'headers': {
                'x-api-key': this.parameters.apiKey
            }
        };
        const response = await this.runRequest(options);
        return response.data
    }
    private objectToFormData(obj) {
        const formData = new FormData();
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                formData.append(key, value);
            }
        }
        return formData;
    }
    private getFormDataSize(formData) {
        let totalSize = 0;
        for (const [key, value] of formData.entries()) {
            if (value instanceof Blob) {
                totalSize += value.size;
            } else {
                totalSize += new TextEncoder().encode(value.toString()).length;
            }
        }
        return totalSize / 1024;
    }
    async uploadFile(dirname: IagonFolder, file: string, contents: Uint8Array) {
        const baseUrl = `${this.baseUrl}api/v2/storage/upload`;
        const body = this.objectToFormData({
            "visibility": "private",
            "password": this.iagonPassword,
            'directoryId': dirname._id
        });
        body.append("file", new Blob([contents], { type: "platin/text" }), file)
        var options = {
            'method': 'POST',
            'url': baseUrl,
            'headers': {
                'x-api-key': this.parameters.apiKey
            },
            data: body
        };
        console.log(`Uploading aproximately ${this.getFormDataSize(body)} kb`)
        const response = await this.runRequest<IagonResponse<IagonFile>>(options);
        const jsonResponse: IagonResponse<IagonFile> = response.data;
        if (!jsonResponse.success) {
            throw new Error(jsonResponse.message)
        }
        return jsonResponse.data
    }
}