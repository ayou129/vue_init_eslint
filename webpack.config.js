var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	mode:"development",
	entry: path.resolve(__dirname, "src/main.js"),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js'
	},
	devServer:{
		hot: true,
		port: 8080
	},
	module:{
		rules:[
			  {
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				//排除node_modules
				exclude: file => (
				    /node_modules/.test(file) &&
				    !/\.vue\.js/.test(file)
				  )
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
		})
	],
	resolve: {
		alias: {
			vue$: "vue/dist/vue.esm.js",
		},
		// extensions: [".mjs", ".js", ".vue", ".json"]
	}
};
