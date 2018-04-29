class ButtonGenerator {
  constructor () {
    this.buttonStyle = {}
  }

  generateButtonStyle () {
    this.buttonStyle = {
      border: `${this._randomInt(0, 3)}px ${this._chances(80) ? 'solid' : 'dashed'} ${this._randomColor()}`
    }
  }

  applyStyleOnButton (button) {
    Object.assign(button.style, this.buttonStyle)
  }

  _randomColor () {
    let red = this._randomInt(0, 255)
    let green = this._randomInt(0, 255)
    let blue = this._randomInt(0, 255)

    return `rgb(${red}, ${green}, ${blue})`
  }

  _randomInt (from, to) {
    return Math.round(Math.random() * (to - from) + from)
  }

  _chances (percentage) {
    return (Math.round(Math.random() * 100) <= percentage)
  }
}
