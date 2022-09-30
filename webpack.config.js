var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    "entry": "./src/index.js",
    "output": {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Scatter Memo',
            // Load a custom template (lodash by default)
            template: './src/index.html',
            organization: 'masaya.genshin@gmail.com'
        })
    ],
    devServer: {
        static: "dist",
        open: true
    }
}