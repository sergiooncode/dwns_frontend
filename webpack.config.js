const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
		{
			test: /\.css$/,
			loader: 'style-loader'
		},
		{
			test: /\.css$/,
			loader: 'css-loader',
			query: {
				modules: true,
				localIdentName: '[name]__[local]___[hash:base64:5]'
			}
		},
		{
			loader: 'babel-loader',
			test: /\.(js|jsx)$/,
			exclude: /node_modules/
		}]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new webpack.optimize.AggressiveMergingPlugin() //Merge chunks
	]
};
