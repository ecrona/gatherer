var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var package = require('./package.json');
var common = require('./webpack.common.config.js');
var outputPath = path.resolve(__dirname, 'public/js');

config = {
    context: process.cwd(),
    entry: {
        vendor: Object.keys(package.dependencies).filter(function(dependency) {
            // Excludes
            return [
                'ts-loader',
                'typescript',
                'webpack',
                'webpack-merge'
            ].indexOf(dependency) === -1;
        })
    },
    output: {
        path: outputPath,
        filename: 'vendor.js',
        library: '[name]'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(outputPath, '[name].json')
        })
    ]
};

module.exports = merge({}, common, config);