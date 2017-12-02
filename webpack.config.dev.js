var webpackMerge = require("webpack-merge")
var commonConfig = require("./webpack.config.common.js")

module.exports = webpackMerge(commonConfig, {
    // here we'll specify the things we want to overwrite:
    devTool: "cheap-module-eval-source-map",
    // the output to tell where to store the bundle file
    output:{
        path: "./src/app",
        filename: "bundle.js",
        publicPath: "./src/app",
        chunkFilename: "[id].chunk.js"     
    }
})

