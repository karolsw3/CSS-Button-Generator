'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ButtonGenerator = function () {
  function ButtonGenerator() {
    _classCallCheck(this, ButtonGenerator);

    this.buttonStyle = {};
  }

  _createClass(ButtonGenerator, [{
    key: 'generateButtonStyle',
    value: function generateButtonStyle() {
      this.buttonStyle = {
        border: this._randomInt(0, 3) + 'px ' + (this._chances(80) ? 'solid' : 'dashed') + ' ' + this._randomColor()
      };
    }
  }, {
    key: 'applyStyleOnButton',
    value: function applyStyleOnButton(button) {
      Object.assign(button.style, this.buttonStyle);
    }
  }, {
    key: '_randomColor',
    value: function _randomColor() {
      var red = this._randomInt(0, 255);
      var green = this._randomInt(0, 255);
      var blue = this._randomInt(0, 255);

      return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }
  }, {
    key: '_randomInt',
    value: function _randomInt(from, to) {
      return Math.round(Math.random() * (to - from) + from);
    }
  }, {
    key: '_chances',
    value: function _chances(percentage) {
      return Math.round(Math.random() * 100) <= percentage;
    }
  }]);

  return ButtonGenerator;
}();