var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var common = require('./webpack.common.config.js');
var outputPath = path.resolve(__dirname, 'public/js');

var config = {
    entry: {
        app: './src/app.tsx'
    },
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DllReferencePlugin({
            context: process.cwd(),
            manifest: require(path.join(outputPath, 'vendor.json'))
        })
    ]
};

module.exports = merge({}, common, config);