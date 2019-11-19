const path = require('path')

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

        ]
    }
}