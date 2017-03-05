var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: {
		'react': path.join(__dirname, 'src/react/index'),
		'vuejs': path.join(__dirname, 'src/vuejs/index')
	},
	output: {
		path: path.join(__dirname, 'docs/assets'),
    publicPath: '/assets/',
		filename: '[name].js'
	},
	plugins: process.env.NODE_ENV !== "production" ? [] : [
		new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      }
    }),
		new webpack.DefinePlugin({
		  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
		})
	],
	externals: {
    "jsdom": {}
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			}
		]
	},
  resolve: {
  	extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}
