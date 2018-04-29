'use strict';

var button = document.getElementById('button');
var generator = new ButtonGenerator();

button.onclick = function () {
  generator.generateButtonStyle();
  generator.applyStyleOnButton(button);
};