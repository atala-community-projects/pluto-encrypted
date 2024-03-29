module.exports = (plugins, extraConfig = {}) => ({
    "$schema": "https://typedoc.org/schema.json",
    "entryPoints": [
        "packages/*/src/index.ts",
    ],
    "externalPattern": [
        "node_modules/rxdb/src/**/*.ts",
    ],
    "excludeExternals": false,
    "entryPointStrategy": "packages",

    "tsconfig": "tsconfig.typedoc.json",
    "name": "@pluto-encrypted",
    "useTsLinkResolution": true,
    "hideGenerator": true,
    "entryPointStrategy": "expand",
    "excludePrivate": false,
    "excludeReferences": false,
    "excludeProtected": false,
    "excludeInternal": false,
    "excludeNotDocumented": true,
    "excludeNotDocumentedKinds": [
        "Variable"
    ],
    "theme": "default",
    "plugin": plugins,
    "navigationLinks": {
        "Docs": "https://elribonazo.github.io/pluto-encrypted/",
        "GitHub": "https://github.com/elribonazo/pluto-encrypted"
    },
    ...extraConfig
})