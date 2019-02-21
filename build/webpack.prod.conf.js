const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: []
  },
  plugins: [
    
  ]
})