var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'react-app': path.join(__dirname, '/src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less']
	},
	module: {
		rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}, 
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-object-rest-spread'],
							cacheDirectory: true
						}
					}
				},
				 {
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						use: ['css-loader'],
						fallback: 'style-loader'
					})
				},
				 {
					test: /\.less$/,
					use: ExtractTextPlugin.extract({
						use: ['css-loader', 'less.loader'],
						fallback: 'style-loader'
					})
				},
		]
	}, 
	plugins: [
		new ExtractTextPlugin('[name].css'),
		new CopyWebpackPlugin([{
			from: './src/html'
		}])
		// new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist/react-app.js'),
		compress: true,
		port: 8080,
		historyApiFallback: true
	}
}
