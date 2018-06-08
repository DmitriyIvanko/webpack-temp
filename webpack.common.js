const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        "polyfills": "./src/app/polyfills.ts",
        "vendor": "./src/app/vendor.ts",
        "app": './src/app/main.ts'
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
                test: /\.scss$/,
                exclude: /node_modules/,
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
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "src/app/index.html",
        }),
        new webpack.ContextReplacementPlugin(
            // if you have anymore problems tweet me at @gdi2290
            // The (\\|\/) piece accounts for path separators for Windows and MacOS
            /(.+)?angular(\\|\/)core(.+)?/,
            path.join(__dirname, 'app'), // location of your src
            {} // a map of your routes 
        ),
    ],
};
