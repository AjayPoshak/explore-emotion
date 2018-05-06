const path = require("path"),
	webpack = require("webpack"),
	nodeExternals = require("webpack-node-externals")

module.exports = {
	entry: {
		app: "./src/server/index.js",
	},
	target: "node", // Tells webpack not to touch any built-in modules like fs or path
	externals: [nodeExternals()], // Not to bundle node_modules at backend, should be included runtime
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "build/server"),
	},
	module: {
		rules: [{ test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ }],
	},
	devtool: "source-map",
}
