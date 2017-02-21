/**
 * Created by 严俊东 on 2017/2/20.
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        gaga: "./entry.js"
    },
    output: {
        path: __dirname + "/dist/",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
};