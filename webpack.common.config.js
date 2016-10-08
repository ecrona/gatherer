var path = require('path');
var webpack = require('webpack');
var outputPath = path.resolve(__dirname, 'public/js');

var config = {
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }],
        noParse: /validate\.js/
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
};

module.exports = config;