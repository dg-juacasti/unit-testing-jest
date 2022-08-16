const calculator = (operator, number1, number2) => {


    if (operator === undefined) return
    if (isNaN(number1) || isNaN(number2)) {
      throw new Error("Values have to be numbers")
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

module.exports = { calculator } 
