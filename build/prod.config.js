const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    plugins: [
        new UglifyJsPlugin()
    ],

    // 默认是false ，不开启状态
    watch: true,
    // 只有开启监听模式watchOptions才有意义
    watchOptions: {
        // 不监听的文件或者文件夹，默认为空，支持正则匹配。
        ignored: /node_modules/,
        // 监听到变化发生后，会等300ms再去执行更新，默认是300ms 
        aggregateTimeout: 300,
        // 判断文件是否发生变化，是通过不停的询问系统指定文件有没有发生变化实现的，默认每秒问1000次。
        poll: 1000
    }
})