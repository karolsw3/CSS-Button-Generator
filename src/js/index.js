let button = document.getElementById('button')
let generator = new ButtonGenerator()

button.onclick = () => {
  generator.generateButtonStyle()
  generator.applyStyleOnButton(button)
}
