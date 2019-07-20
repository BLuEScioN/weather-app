var path = require('path');
// var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

parentDir = path.join(__dirname, '../');
console.log('DERP:', __dirname);
console.log('path.join(__dirname, \'index.js\'):', path.join(__dirname, 'index.js'));
console.log('path.join(__dirname, \'dist\'):', path.join(__dirname, 'dist'));


module.exports = {
	entry: {
		// 'react-app-html': path.resolve(__dirname, 'src/index.html'),
		'react-app': path.join(__dirname, '/src/index.js')
	},
	module: {
		rules: [
				// {
				// 	test:/\.html$/,
				// 	use: 'file-loader?name=[name].[ext]'
				// }, 
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
				}, {
					test: /\.css$/,
					use: 'css-loader'
				}, {
					test: /\.less$/,
					use: 'less-loader'
				},
		]
	}, 
	resolve: {
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.less']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: './src/html'
		}])
		// new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist/react-app.bundle.js'),
		compress: true,
		port: 8080,
		historyApiFallback: true
	}
}
