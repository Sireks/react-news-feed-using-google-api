'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const Path = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

const config = {
    entry:  Path.src + '/js/index.js',
    output: {
        path: Path.dist,
        filename: '[name].js',
        publicPath: Path.dist
    },
    watchOptions: {
        aggregateTimeout: 100
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require("autoprefixer")()
                            ],
                        }
                    },
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin(path.join(Path.dist, 'index.css')),
    ],
    devtool: 'inline-cheap-module-source-map',
}

module.exports = config;