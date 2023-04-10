const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const port = 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/html/index.html'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: false,
        open: true
    }
};
