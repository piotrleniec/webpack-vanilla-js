var path = require('path');
var rules = require('./rules');

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.js'),
  output: {
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    rules: rules
  }
};
