/**
 * Created by 严俊东 on 2017/3/16.
 */

require('./a');

require.ensure(['./b'], function (require) {
  require('./c');
  console.log('done!');
});

/*
require.ensure(['./c'], function (require) {
  require('./c');
  console.log('done!');
});
webpackJsonp([0], {
  88: (function (module, exports) {
    console.log('***** I AM c *****');
  })
});
*/


