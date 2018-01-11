const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//唯一入口文件
	//["babel-polyfill", "./app/js"]
	entry: ["babel-polyfill", __dirname + "/app/index.js"],

	output: {
		publicPath: "/",
		//打包后文件存放的地方
		path: __dirname + "/build",
		//打包后输出文件的文件名
		filename: "bundle.js"
	},

	//生成source maps的方式，开发时才使用此方式
	devtool: "eval-source-map",

	//本地服务器配置信息，基于node.js构建
	devServer: {
		//所有的跳转都指向index.html
    historyApiFallback: true,
		//本地服务器加载页面所在目录
		contentBase: __dirname + "/build",
		//端口号
		port: 7070,
    //实时刷新
    inline: true,
    //热加载
    hot: true
	},

	module: {
		rules: [

		  {
		  	test: /(\.jsx|\.js)$/,
		  	use: {
		  		loader: "babel-loader",
		  		options: {
		  			presets: [
		  				"env", "react", "es2017"
		  			],

		  			env: {
		  				development: {
		  					plugins: [
		  					  [
		  					    "react-transform",
		  					    {
		  					    	transforms: [
		  					    	  {
		  					    	  	transform: "react-transform-hmr",
		  					    	  	imports: ["react"],
		  					    	  	locals: ["module"]
		  					    	  }
		  					    	]
		  					    }
		  					  ],
		  					  ["syntax-object-rest-spread"]
		  					]
		  				}
		  			}
		  		}
		  	},
		  	exclude: /node_modules/
		  },

		  {
		  	test: /\.css$/,
		  	use: [
		  	  {
		  	  	loader: "style-loader"
		  	  },
		  	  {
		  	  	loader: "css-loader",
		  	  	options: {
		  	  		modules: true,
		  	  		//css的模块化
		  	  		localIdentName: '[name]__[local]--[hash:base64:5]'
		  	  	}
		  	  },
		  	  {
		  	  	loader: "postcss-loader"
		  	  }
		  	]
		  }
		]
	},

	//插件配置
	plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
    	template: __dirname + '/app/index.tmpl.html'
    }),
    //热加载插件
    new webpack.HotModuleReplacementPlugin()
	],

}