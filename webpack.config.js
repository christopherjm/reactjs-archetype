var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
  entry: APP_DIR + '/Application.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
           presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
      {
        test: /\.(png|gif)$/,
        loader: "url-loader?limit=100000"
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
      new ExtractTextPlugin("main.css")
  ],
  devtools: 'source-map'
};

module.exports = config;
