(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('Slider', ['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Slider = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var index = function () {
    function index(slider) {
      _classCallCheck(this, index);

      console.log(slider[0].children[0]);
      this.ul = slider[0].children[0];
      this.li = this.ul.children;
      this.ul.style.width = this.li[0].clientWidth * this.li.length + 'px';
      this.currentIndex = 0;
      this.goToPrev();
    }

    _createClass(index, [{
      key: 'goTo',
      value: function goTo(index) {
        if (index < 0 || index > this.li.length - 1) return;
        this.ul.style.left = '-' + 100 * index + '%';
        this.currentIndex = index;
      }
    }, {
      key: 'goToPrev',
      value: function goToPrev() {
        this.goTo(this.currentIndex - 1);
      }
    }, {
      key: 'goToNext',
      value: function goToNext() {
        this.goTo(this.currentIndex + 1);
      }
    }]);

    return index;
  }();

  module.exports = index;
});