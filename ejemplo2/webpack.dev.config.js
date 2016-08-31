const webpackCommonConfig = require('./webpack.config')

module.exports = Object.assign({}, webpackCommonConfig, {
  devtool: 'inline-source-map',
})
