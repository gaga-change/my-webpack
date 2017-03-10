/**
 * Created by 严俊东 on 2017/3/10.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = function (env) {
    return {
        entry: {
            main: './src/main.js',
            vendor: 'moment'
        },
        output: {
            // filename: '[chunkhash].[name].js',
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'] // Specify the common bundle's name.
            })
        ]
    }
};