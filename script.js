//init variables
let numA;
let numB;
let operator;

// calc functions
function add(numA, numB) {
  return numA + numB;
}
function subtract(numA, numB) {
  return numA - numB;
}
function multiply(numA, numB) {
  return numA * numB;
}
function divide(numA, numB) {
  return numA / numB;
}

function operate(operator, numA, numB) {
  if (operator == "+") result = add(numA, numB);
  else if (operator == "-") result = subtract(numA, numB);
  else if (operator == "*") result = multiply(numA, numB);
  else if (operator == "/") result = divide(numA, numB);

  return result;
}
