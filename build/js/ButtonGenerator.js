'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ButtonGenerator = function () {
  function ButtonGenerator() {
    _classCallCheck(this, ButtonGenerator);

    this.buttonStyle = {};
  }

  _createClass(ButtonGenerator, [{
    key: 'generateClassicButtonStyle',
    value: function generateClassicButtonStyle() {
      this.buttonStyle = {
        border: 'none',
        backgroundColor: '' + this._randomColor(50),
        padding: this._randomInt(12, 19) + 'px ' + this._randomInt(17, 45) + 'px',
        borderRadius: this._randomInt(2, 20) + 'px',
        color: 'white',
        textShadow: '0 0 ' + this._randomInt(16, 22) + 'px rgba(0, 0, 0, .42)'
      };
    }
  }, {
    key: 'generateGradientButtonStyle',
    value: function generateGradientButtonStyle() {
      this.buttonStyle = {
        border: 'none',
        background: 'linear-gradient(' + this._randomColor(30) + ', ' + this._randomColor(60) + ')',
        padding: this._randomInt(12, 19) + 'px ' + this._randomInt(17, 45) + 'px',
        borderRadius: this._randomInt(5, 35) + 'px',
        color: 'white',
        textShadow: '0 0 ' + this._randomInt(16, 22) + 'px rgba(0, 0, 0, .42)'
      };
    }
  }, {
    key: 'generateRetroButtonStyle',
    value: function generateRetroButtonStyle() {
      this.buttonStyle = {
        border: '1px solid black',
        background: 'linear-gradient(' + this._randomColor(30) + ', ' + this._randomColor(0) + ')',
        padding: this._randomInt(6, 9) + 'px ' + this._randomInt(7, 23) + 'px',
        borderRadius: this._randomInt(6, 12) + 'px',
        color: 'black',
        textShadow: '0 0 ' + this._randomInt(16, 22) + 'px rgba(0, 0, 0, .68)',
        boxShadow: '0 0 ' + this._randomInt(6, 12) + 'px rgba(0, 0, 0, .38)'
      };
    }
  }, {
    key: 'applyStyleOnButton',
    value: function applyStyleOnButton(button) {
      Object.assign(button.style, this.buttonStyle);
    }
  }, {
    key: '_randomColor',
    value: function _randomColor(brightnessPercentage) {
      var brightness = Math.round(brightnessPercentage * (255 / 100));
      var red = this._randomInt(brightness, 255);
      var green = this._randomInt(brightness, 255);
      var blue = this._randomInt(brightness, 255);

      return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }
  }, {
    key: '_getTextColorBasedOnBackground',
    value: function _getTextColorBasedOnBackground(bgColor) {
      var red = bgColor.r * 255;
      var green = bgColor.g * 255;
      var blue = bgColor.b * 255;
      var yiq = (red * 299 + green * 587 + blue * 114) / 1000;
      return yiq >= 128 ? 'black' : 'white';
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