let classicButton = document.getElementById('classicButton')
let gradientButton = document.getElementById('gradientButton')
let retroButton = document.getElementById('retroButton')
let generator = new ButtonGenerator()

classicButton.onclick = () => {
  generator.generateClassicButtonStyle()
  generator.applyStyleOnButton(classicButton)
}

gradientButton.onclick = () => {
  generator.generateGradientButtonStyle()
  generator.applyStyleOnButton(gradientButton)
}

retroButton.onclick = () => {
  generator.generateRetroButtonStyle()
  generator.applyStyleOnButton(retroButton)
}
