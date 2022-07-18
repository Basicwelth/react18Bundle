const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {loader} = require("mini-css-extract-plugin");
// const webpack = require("webpack");
// const autoprefixer = require("autoprefixer");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
            linkType: "text/css",
        }),
    ],
    // entry: ["./src/index.js", "./src/output.css"],
    entry: {
        branding:  ["./src/index.js", "./src/output.css"],
    },
    output: {
        path: path.join(__dirname, "../../dist/br"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: "babel-loader" },
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
                ],
            },
            {
                test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: false,
                        }
                    }
                ]
            },
        ]
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new CssMinimizerPlugin({
    //             minify: CssMinimizerPlugin.cleanCssMinify,
    //             parallel: true,
    //         }),
    //     ],
    // },
};