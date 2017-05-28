var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var rules = require('./rules');

module.exports = {
  entry: {
    app: path.join(__dirname, '..', 'src', 'index.js'),
    lib: ['jquery']
  },
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'app.js'
  },
  module: {
    rules: rules
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib',
      filename: 'lib.js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    })
  ]
};
