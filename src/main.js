import { Calculator } from './calc';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#calc").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#input1").val());
    let number2 = parseInt($("#input2").val());
    let newCalc = new Calculator(number1, number2);
    let operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = newCalc.add();
    } else if (operator === "subtract") {
      result = newCalc.subtract();
    } else if (operator === "multiply") {
      result = newCalc.multiply();
    } else if (operator === "divide") {
      result = newCalc.divide();
    }
    $("#output").text(result);
  });
});
