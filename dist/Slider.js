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

  var helpers = {
    trim: function trim(string) {
      return string.replace(/^\s+|\s+$/gm, '');
    },
    extend: function extend(target) {
      for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
      }

      if (!Object.assign) {
        return Object.assign.apply(Object, [target].concat(sources));
      } else {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var source = _step.value;

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return target;
      }
    }
  };

  var index = function () {
    function index(slider, options) {
      _classCallCheck(this, index);

      this.init(slider);
      this.opts = {};
      if (options) {
        helpers.extend(options, this.opts);
      }
    }

    _createClass(index, [{
      key: 'init',
      value: function init(slider) {
        this.ul = slider.children[0];
        this.li = this.ul.children;
        this.ul.style.width = this.li[0].clientWidth * this.li.length + 'px';
        this.this.currentIndex = 0;
      }
    }, {
      key: 'goToSlide',
      value: function goToSlide(index) {
        if (index < 0 || index > this.li.length - 1) return;
        this.ul.style.left = '-' + 100 * index + '%';
        this.currentIndex = index;
      }
    }, {
      key: 'prevSlide',
      value: function prevSlide() {
        this.goTo(this.currentIndex - 1);
      }
    }, {
      key: 'nextSlide',
      value: function nextSlide() {
        this.goTo(this.currentIndex + 1);
      }
    }]);

    return index;
  }();

  module.exports = index;
});