import typescript from "rollup-plugin-typescript2";
import nodePolyfills from "rollup-plugin-polyfill-node";

import cleanup from "rollup-plugin-cleanup";
import ignore from "rollup-plugin-ignore";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";

const externals = ["@atala/prism-wallet-sdk", "dexie", "dexie-encrypted"];

function CreateConfig(buildPath, plugins = [], extraInputs = []) {
  return {
    input: [`src/index.ts`, ...extraInputs],
    output: {
      sourcemap: true,
      dir: buildPath ? `build/${buildPath}` : `build`,
      format: "es",
    },
    plugins: [
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
      commonjs(),
      cleanup(),
    ],
    external: externals,
  };
}

export default CreateConfig(undefined, [nodePolyfills()]);
