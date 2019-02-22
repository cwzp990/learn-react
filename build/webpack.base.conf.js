const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const AutoDllPlugin = require('autodll-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[hash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      minify: {
        minimize: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new CleanWebpackPlugin(['dist']),
    // 第三方库单独打包
    new AutoDllPlugin({
      inject: true,
      debug: true,
      filename: '[name]_[hash:8].js',
      path: './dll',
      entry: {
        vendor: ['react', 'react-dom']
      }
    }),
    // 提取公共代码
    new webpack.optimize.SplitChunksPlugin()
  ]
}
