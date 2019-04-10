'use strict';


const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const Path = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
    entry: ['@babel/polyfill', Path.src + '/js/index.js'],
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
        rules: [{
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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    devtool: (NODE_ENV == 'development') ? 'inline-cheap-module-source-map' : false,
    devServer: {
        contentBase: Path.dist,
        compress: true,
        port: 9000,
    }
}

module.exports = config;