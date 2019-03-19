// define([
//     'require',
//     'module',
// ], function(require, exports, module) {
//     'use strict';
//     // var a = {
//     //     color: "black",
//     //     size: "unisize"
//     // };
//     // console.log(require,module);
//     // module.exports = a;
//     exports.a = {
//         color: "black",
//         size: "unisize"
//     };
// });
define(function(require, exports, module) {
  var a = {
    color: 'black',
    size: 'unisize',
  };
  console.log(require, module);
  module.exports = a;
});
