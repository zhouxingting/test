/**
 * define 定义一个模块
 * require 加载依赖模块，并执行加载完后的回调函数
 * requirejs是为了模块化，他鼓励在使用脚本时使用module id代替url地址
 */
define(function(require) {
  let $ = require('jquery');
  let data = require('js/test1');
  console.log($('#spanInfo').text(), data);
  function fun1() {
    alert('it works ' + data.color);
  }
  fun1();
});
