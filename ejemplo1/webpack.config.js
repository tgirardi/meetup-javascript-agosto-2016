const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'inline-source-map',
}
