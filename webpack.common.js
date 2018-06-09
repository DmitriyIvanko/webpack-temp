const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        "polyfills": "./src/app/polyfills.ts",
        "vendor": "./src/app/vendor.ts",
        "app": "./src/app/main.ts"
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
                test: /\.(ts|js)$/,
                loaders: [
                    'angular-router-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                }]
            },
            {
                test: /\.(scss)$/,
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
            {
                test: /\.(config)$/,
                loader: "file-loader?name=[name].[ext]",
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: "src/app/index.html",
        }),
        // solution for 2 of 4 warnings for angular from: 
        // https://github.com/angular/angular/issues/11580#issuecomment-327338189
        new webpack.ContextReplacementPlugin(/(.+)?angular(\\|\/)core(.+)?/, path.join(__dirname, "app"), {}),
    ],
};
