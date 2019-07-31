var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
	const isDevelopment = env.NODE_ENV === 'development';

	return {
		mode: 'development',
		entry: {
			'react-app': path.join(__dirname, '/src/index.js')
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js'
		},
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss']
		},
		module: {
			rules: [
					{
						test: /\.(ts|tsx)?$/,
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
						loader: [
							isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
							'css-loader',
						]
					},
					{
						test: /\.s(a|c)ss$/,
						// exclude: /\.module.(s(a|c)ss)$/,
						loader: [
							isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
							'css-loader',
							{
								loader: 'sass-loader',
								options: {
								sourceMap: isDevelopment
								}
							}
						]
					}
			]
		}, 
		plugins: [
			new MiniCssExtractPlugin({
				filename: isDevelopment ? '[name].css' : '[name].[hash].css',
				chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
			}),
			new CopyWebpackPlugin([{
				from: './src/html'
			}]),
		],
		devServer: {
			contentBase: path.join(__dirname, 'dist/react-app.js'),
			compress: true,
			port: 8080,
			historyApiFallback: true
		}
	}
}
