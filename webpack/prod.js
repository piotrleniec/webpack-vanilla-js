var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var rules = require('./rules');

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.js'),
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: rules
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
