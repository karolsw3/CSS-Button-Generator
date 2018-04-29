let classicButton = document.getElementById('classicButton')
let gradientButton = document.getElementById('gradientButton')
let retroButton = document.getElementById('retroButton')
let clearButton = document.getElementById('clearButton')
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

clearButton.onclick = () => {
  generator.generateClearButtonStyle()
  generator.applyStyleOnButton(clearButton)
}

generator.generateClassicButtonStyle()
generator.applyStyleOnButton(classicButton)

generator.generateGradientButtonStyle()
generator.applyStyleOnButton(gradientButton)

generator.generateRetroButtonStyle()
generator.applyStyleOnButton(retroButton)

generator.generateClearButtonStyle()
generator.applyStyleOnButton(clearButton)

