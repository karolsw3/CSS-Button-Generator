'use strict';

var classicButton = document.getElementById('classicButton');
var gradientButton = document.getElementById('gradientButton');
var retroButton = document.getElementById('retroButton');
var generator = new ButtonGenerator();

classicButton.onclick = function () {
  generator.generateClassicButtonStyle();
  generator.applyStyleOnButton(classicButton);
};

gradientButton.onclick = function () {
  generator.generateGradientButtonStyle();
  generator.applyStyleOnButton(gradientButton);
};

retroButton.onclick = function () {
  generator.generateRetroButtonStyle();
  generator.applyStyleOnButton(retroButton);
};