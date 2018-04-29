class ButtonGenerator {
  constructor () {
    this.buttonStyle = {}
  }

  generateClassicButtonStyle () {
    this.buttonStyle = {
      border: `none`,
      backgroundColor: `${this._randomColor(50)}`,
      padding: `${this._randomInt(12, 19)}px ${this._randomInt(17, 45)}px`,
      borderRadius: `${this._randomInt(2, 20)}px`,
      color: `white`,
      textShadow: `0 0 ${this._randomInt(16, 22)}px rgba(0, 0, 0, .42)`
    }
  }

  generateGradientButtonStyle () {
    this.buttonStyle = {
      border: `none`,
      background: `linear-gradient(${this._randomColor(30)}, ${this._randomColor(60)})`,
      padding: `${this._randomInt(12, 19)}px ${this._randomInt(17, 45)}px`,
      borderRadius: `${this._randomInt(5, 35)}px`,
      color: `white`,
      textShadow: `0 0 ${this._randomInt(16, 22)}px rgba(0, 0, 0, .42)`
    }
  }

  generateRetroButtonStyle () {
    this.buttonStyle = {
      border: `1px solid black`,
      background: `linear-gradient(${this._randomColor(30)}, ${this._randomColor(0)})`,
      padding: `${this._randomInt(6, 9)}px ${this._randomInt(7, 23)}px`,
      borderRadius: `${this._randomInt(6, 12)}px`,
      color: `black`,
      textShadow: `0 0 ${this._randomInt(16, 22)}px rgba(0, 0, 0, .68)`,
      boxShadow: `0 0 ${this._randomInt(6, 12)}px rgba(0, 0, 0, .38)`
    }
  }

  generateClearButtonStyle () {
    let borderColor = `${this._randomColor(5)}`
    this.buttonStyle = {
      border: `2px solid ${borderColor}`,
      background: `transparent`,
      padding: `${this._randomInt(12, 19)}px ${this._randomInt(17, 45)}px`,
      borderRadius: `${this._randomInt(2, 20)}px`,
      color: borderColor,
      textShadow: `0 0 ${this._randomInt(18, 27)}px rgba(0, 0, 0, .32)`
    }
  }

  applyStyleOnButton (button) {
    Object.assign(button.style, this.buttonStyle)
  }

  _randomColor (brightnessPercentage) {
    let brightness = Math.round(brightnessPercentage * (255 / 100))
    let red = this._randomInt(brightness, 255)
    let green = this._randomInt(brightness, 255)
    let blue = this._randomInt(brightness, 255)

    return `rgb(${red}, ${green}, ${blue})`
  }

  _getTextColorBasedOnBackground (bgColor) {
    let red = bgColor.r * 255
    let green = bgColor.g * 255
    let blue = bgColor.b * 255
    var yiq = (red * 299 + green * 587 + blue * 114) / 1000
    return (yiq >= 128) ? 'black' : 'white'
  }

  _randomInt (from, to) {
    return Math.round(Math.random() * (to - from) + from)
  }

  _chances (percentage) {
    return (Math.round(Math.random() * 100) <= percentage)
  }
}
