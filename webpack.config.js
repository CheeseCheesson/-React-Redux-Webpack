const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: ["@babel/polyfill", './src/index.jsx'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
		publicPath: '/'
	},
	  devServer: {
	  	contentBase: path.join(__dirname, 'dist'),
	  	compress: true,
	  	port: 9000,
	  },
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.mjs'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [{
				test: /\.(css|less)$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [{
					loader: 'file-loader',
				}, ],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react", '@babel/preset-env']
					}
				}
			},
		]
	}
}