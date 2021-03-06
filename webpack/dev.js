var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var rules = require('./rules');

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.js'),
  output: {
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    rules: rules
  },
  plugins: [
    new ExtractTextPlugin({ disable: true })
  ]
};
