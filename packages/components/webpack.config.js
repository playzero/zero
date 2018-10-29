const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	// context: path.resolve(__dirname, 'src'),
	entry: {
		Button: "./src/atoms/Button/index.js",
		atoms: "./src/atoms/index.js",
		molecules: "./src/molecules/index.js",
		organisms: "./src/organisms/index.js",
		pages: "./src/pages/index.js",
		templates: "./src/templates/index.js"
	},
	output: {
		path: path.resolve(__dirname, "lib"),
		filename: "[name].js",
		libraryTarget: "commonjs2"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins: [new UglifyJsPlugin()],
	externals: ["react", "react-dom"]
};
