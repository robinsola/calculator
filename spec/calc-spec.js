import { Calculator } from './../src/calc.js';

describe('Calculator', function() {

  it('should test if there are two numbers to calculate', function() {
    let calculator = new Calculator(4,5)
    expect(calculator.number1).toEqual(4)
    expect(calculator.number2).toEqual(5)
  })

})
