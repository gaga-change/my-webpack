/**
 * Created by 严俊东 on 2017/3/16.
 */
var path = require('path');

module.exports = function(env) {
  return {
    entry: './js/entry.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'https://cdn.example.com/assets/',
      // tell webpack where to load the on-demand bundles.
      publicPath: '/dist/',

      pathinfo: true,
      // show comments in bundles, just to beautify the output of this example.
      // should not be used for production.
    }
  }
}