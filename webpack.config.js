const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
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
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /[\/\\](material-semantic-merge|semantic-ui-)/,
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'inline-source-map',
}
