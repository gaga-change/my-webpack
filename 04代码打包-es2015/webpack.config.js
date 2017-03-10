/**
 * Created by 严俊东 on 2017/3/10.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = function (env) {
    return {
        entry: {
            main: './index-es2015.js',
            vendor: 'vue'
        },
        output: {
            // filename: '[chunkhash].[name].js',
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [['es2015', {modules: false}]]
                        }
                    }]
                }
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'] // Specify the common bundle's name.
            })
        ]
    }
};