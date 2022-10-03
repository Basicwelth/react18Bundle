const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].min.css',
			linkType: "text/css",
		}),
	],
	entry: {
		branding: ["./src/index.js", "./scss/input.scss"],
	},
	output: {
		path: path.join(__dirname, "../../dist/br"),
		filename: "[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-env",
								["@babel/preset-react", {"runtime": "automatic"}]
							]
						},
					},
				],
			},
			{
				test: /\.(scss|css)$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader",
					},
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								outputStyle: "compressed",
							},
						},
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									require('autoprefixer')
								],
							},
						},
					},
				],
			},
			{
				test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: false,
						}
					},
				],
			},
		]
	},
};