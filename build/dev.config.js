const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    plugins: [
        new webpack.BannerPlugin(`最终版权归 cemcoe 所有\n由 webpack.BannerPlugin 生成`),
    ]
}) 
