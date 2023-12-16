import nodePolyfills from "rollup-plugin-polyfill-node";

import CreateConfig from "../../../rollup/index.mjs";

export default CreateConfig(undefined, [nodePolyfills()]);
