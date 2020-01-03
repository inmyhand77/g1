// calculator-advanced.js

const Calculator = require('./c.js')

class AdvancedCalculator extends Calculator {
  multiply(a, b) {
    return a * b
  }
  devide(a, b) {
    return a / b
  }
}

module.exports = new AdvancedCalculator()
