const dts = require("dts-bundle")
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
            exclude: /node_modules/,
        }]
    },
    plugins: [
        function () {
            this.hooks.done.tap({
                name: "dts-bundler"
            }, stats => {
                var dts = require('dts-bundle');
                dts.bundle({
                    name: "data-structures-ts",
                    main: './dist/typings/index.d.ts',
                    out: '../index.d.ts',
                    removeSource: true,
                    outputAsModuleFolder: true // to use npm in-package typings
                });
            })
        }
    ],
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