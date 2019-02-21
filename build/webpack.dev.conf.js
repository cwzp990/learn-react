const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3000,
    open: true,
    hot: true
  },
  plugins: [
    // 开启热更新
    new webpack.HotModuleReplacementPlugin()
  ]
})
