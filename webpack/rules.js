var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }
    ]
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('autoprefixer'),
              require('postcss-nested')
            ]
          }
        }
      ]
    })
  }
];
