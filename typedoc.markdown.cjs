const base = require('./typedocBase.cjs')

module.exports = base([
    "typedoc-plugin-superstruct",
    "typedoc-plugin-rename-defaults",
    "typedoc-plugin-external-module-map",
    "typedoc-plugin-superstruct",
    "typedoc-plugin-markdown"
], {
    "out": "./docs"
})
