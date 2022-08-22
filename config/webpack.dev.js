const path = require('path')

const common = require('./webpack.common')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.join(__dirname, '../src', 'index.js'),
  module: common.module,
  resolve: common.resolve,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    host: '127.0.0.1',
    port: 9000,
  },
  plugins: [...common.plugins],
}
