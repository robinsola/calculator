// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// User interface (or front-end) logic:

$(document).ready(function() {
    $("form#calc").submit(function() {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
    event.preventDefault();
  });
});



  //   $("button#subtract").click(function(event) {
  //   var number1 = parseInt($("#input1").val());
  //   var number2 = parseInt($("#input2").val());
  //   var result = subtract(number1, number2);
  //   $("#output").text(result);
  //   event.preventDefault();
  // });
  //   $("button#multiply").click(function(event) {
  //   var number1 = parseInt($("#input1").val());
  //   var number2 = parseInt($("#input2").val());
  //   var result = multiply(number1, number2);
  //   $("#output").text(result);
  //   event.preventDefault();
  // });
  //   $("button#divide").click(function(event) {
  //   var number1 = parseInt($("#input1").val());
  //   var number2 = parseInt($("#input2").val());
  //   var result = divide(number1, number2);
  //   $("#output").text(result);
  //   event.preventDefault();
