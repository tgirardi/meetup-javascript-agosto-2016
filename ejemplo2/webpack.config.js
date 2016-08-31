const path = require('path')

module.exports = {
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'flowtype',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
