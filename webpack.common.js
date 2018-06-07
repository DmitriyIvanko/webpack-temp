const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        "polyfills": "./src/polyfills.ts",
        "vendor": "./src/vendor.ts",
        "app": './src/main.ts'
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                }]
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: "style-loader",
                }, {
                    loader: "css-loader",
                }, {
                    loader: "postcss-loader",
                    options: {
                        plugins: function () {
                            return [
                                require("precss"),
                                require("autoprefixer"),
                            ];
                        },
                    },
                },
                {
                    loader: "sass-loader",
                }],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, './src')
        ),
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
    ],
};
