import { Calculator } from './../src/calc.js';

describe('Calculator', function() {

  it('should test if there are two numbers to calculate', function() {
    let calculator = new Calculator(4,5)
    expect(calculator.number1).toEqual(4)
    expect(calculator.number2).toEqual(5)
  })

  it('should test two numbers to calculate addition', function() {
    let calculator = new Calculator(4,5)
    expect(calculator.add()).toEqual(9)
  })

  it('should test two numbers to calculate subtraction', function() {
    let calculator = new Calculator(6,2)
    expect(calculator.subtract()).toEqual(4)
  })

})
