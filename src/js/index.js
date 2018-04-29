let classicButton = document.getElementById('classicButton')
let gradientButton = document.getElementById('gradientButton')
let generator = new ButtonGenerator()

classicButton.onclick = () => {
  generator.generateClassicButtonStyle()
  generator.applyStyleOnButton(classicButton)
}

gradientButton.onclick = () => {
  generator.generateGradientButtonStyle()
  generator.applyStyleOnButton(gradientButton)
}

