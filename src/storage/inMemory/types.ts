




export type InMemoryStorageInternals = {
    /**
     * InMemoryStorageVariables
     */
    data: any;
    deletedData: any;

    bulkPut(a: any[], fromDeleted?: boolean): any;
    bulkDelete(a: any[], fromDeleted?: boolean): any;
}

export type InMemorySettings = {
    /**
     * Concrete options for this storage
     */
}
