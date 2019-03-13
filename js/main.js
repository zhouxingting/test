/**
 * require.config 是用来配置模块加载位置的,意思是给模块标记一个更好记的名字
 * path还有一个重要的功能，就是可以配置多个路径，如果第一个加载失败，会自动加载第二个
 * data-main属性，当script标签指定data-main属性的时候，页面就可以直接使用require来加载所有的短模块名
 * 第三方模块：shim
 */
require.config({
    paths: {
        "jquery": ["https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js", "js/jquery"],
        'lodash': ['https://cdn.bootcss.com/lodash.js/4.17.11/lodash.min.js', 'js/lodash'],
    
    },
    shim: {
        'lodash': {
            exports: '_',
        },
        "jquery.form": ["jquery"]
    }
})
// 引入内部模块，并在页面上运行脚本文件
require([
    'jquery',
    'lodash',
   
], ($, _) => {
    $(function () {
        _.each([1, 2, 3], console.log);
        alert("load finish");
    });
})