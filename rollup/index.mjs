
import typescript from "rollup-plugin-typescript2";
import cleanup from "rollup-plugin-cleanup";
import ignore from "rollup-plugin-ignore";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

const externals = [
    "dexie",
    "rxjs",
    "dexie-encrypted",
    "rxdb/plugins/storage-dexie",
    "rxdb/plugins/encryption-crypto-js",
    "rxdb",
    "rxdb/plugins/migration",
    "rxdb/plugins/query-builder",
    "uuid",
    "rxdb/plugins/json-dump"
];

export default function CreateConfig(buildPath, plugins = [], extraInputs = []) {
    return [
        {
            input: [`src/index.ts`, ...extraInputs],
            output: {
                sourcemap: true,
                dir: buildPath ? `build/${buildPath}` : `build/cjs`,
                //file: `${buildPath ? `build/${buildPath}` : `build/cjs`}/index.cjs`,
                format: "cjs",
            },
            plugins: [
                nodeResolve({ resolveOnly: ['@atala/prism-wallet-sdk'], allowExportsFolderMapping: true }),
                ignore(externals),
                json(),
                typescript({
                    useTsconfigDeclarationDir: true,
                    tsconfigOverride: {
                        compilerOptions: {
                            emitDeclarationOnly: false,
                        },
                    },
                }),
                ...plugins,
                commonjs({ transformMixedEsModules: true }),
                cleanup(),
            ],
            external: externals,
        },
        {
            input: [`src/index.ts`, ...extraInputs],
            output: {
                sourcemap: true,
                dir: buildPath ? `build/${buildPath}` : `build/esm`,
                //file: `${buildPath ? `build/${buildPath}` : `build/esm`}/index.mjs`,
                format: "es",
            },
            plugins: [
                nodeResolve({ resolveOnly: ['@atala/prism-wallet-sdk'], allowExportsFolderMapping: true }),
                ignore(externals),
                json(),
                typescript({
                    useTsconfigDeclarationDir: true,
                    tsconfigOverride: {
                        compilerOptions: {
                            emitDeclarationOnly: false,
                        },
                    },
                }),
                ...plugins,
                commonjs({ transformMixedEsModules: true }),
                cleanup(),
            ],
            external: externals,
        }
    ];
}
