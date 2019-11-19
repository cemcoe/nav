const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 正则匹配css文件
                use: ['style-loader', 'css-loader']
                // css-loader 只负责加载
                // style-loader 将css加载到DOM
                // webpack 从右侧开始加载loader即使
            },
            // less
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            },
            // ES6->ES5
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                // 排除
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        // 当加载的图片小于limit时，将图片编译成base64
                        // 当加载图片过大时，file-loader
                        options: {
                            // limit: 8192,
                            // name: 'img/[name].[hash:8].[ext]'
                            // 对输出的图片进行命名
                            // 保存在img文件夹下，原来的名字+hash取8位+原来的扩展名
                        },
                    },
                ],
            },

        ]
    },
    plugins: [
        new webpack.BannerPlugin(`最终版权归 cemcoe 所有\n由 webpack.BannerPlugin 生成`),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        // new UglifyJsPlugin()
    ]
}