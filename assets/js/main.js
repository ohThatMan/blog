// Generated by CoffeeScript 1.6.3
(function() {
  define(function(require, exports, module) {
    var $, blog, prettify;
    prettify = require('prettify');
    $ = require('jquery');
    blog = {};
    blog.editPage = function() {
      return console.log('editing');
    };
    return window.onload = function() {
      return $('#edit-page').click(blog.editPage);
    };
  });

}).call(this);

/*
//@ sourceMappingURL=main.map
*/
