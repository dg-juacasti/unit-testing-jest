const calculator = (operator, number1, number2) => {
  if (isNaN(number1) || isNaN(number2)) {
    return "Values have to be numbers"
  }
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return "Operator not found"
  }
};

exports.calculator = calculator;
