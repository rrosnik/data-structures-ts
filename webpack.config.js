const path = require("path")


/** @type {import("webpack").Configuration} */
module.export = {
    entry: "./src/index.ts",
    devtool: "resource-map",
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: "ts-loader"
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
        }
    }
}