

module.exports = {
    "$schema": "https://typedoc.org/schema.json",
    "entryPoints": [
        "packages/*/src/index.ts",
    ],
    "entryPointStrategy": "packages",
    "out": "./docs",
    "tsconfig": "tsconfig.json",
    "name": "@pluto-encrypted",
    "useTsLinkResolution": true,
    "hideGenerator": true,
    "entryPointStrategy": "expand",
    "excludePrivate": true,
    "excludeReferences": true,
    "excludeProtected": true,
    "excludeInternal": true,
    "excludeNotDocumented": true,
    "readme": "none",
    "excludeNotDocumentedKinds": [
        "TypeAlias",
        "Variable"
    ],
    "includeVersion": false,

    "theme": "default",
    "plugin": [
        "typedoc-plugin-superstruct",
        "typedoc-plugin-rename-defaults",
        "typedoc-plugin-markdown"
    ],
    "navigationLinks": {
        "Docs": "https://elribonazo.github.io/pluto-encrypted/",
        "GitHub": "https://github.com/elribonazo/pluto-encrypted"
    }
}