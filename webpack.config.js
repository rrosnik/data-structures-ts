const path = require("path")


/** @type {import("webpack").Configuration} */
module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/
        }]
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            type: "umd",
            name: {
                amd: "data-structures-ts",
                commonjs: "data-structures-ts",
                root: "data-structures-ts"
            }
        },
        globalObject: "globalThis"
    }
}