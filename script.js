//init variables
let numA;
let numB;
let operator;

// calc functions
function add(numA, numB) {
  console.log("add" + numA + " & " + numB);
  return numA + numB;
}
function subtract(numA, numB) {
  console.log("sub" + numA + " & " + numB);
  return numA - numB;
}
function multiply(numA, numB) {
  console.log("mul" + numA + " & " + numB);
  return numA * numB;
}
function divide(numA, numB) {
  console.log("div" + numA + " & " + numB);
  return numA / numB;
}

function operate(operator, numA, numB) {
  console.log("OPERATOR: " + operator);
  if (operator == "+") result = add(numA, numB);
  else if (operator == "-") result = subtract(numA, numB);
  else if (operator == "*") result = multiply(numA, numB);
  else if (operator == "/") result = divide(numA, numB);

  return result;
}

//initialize Display
display = document.querySelector(".display");
let displayValue;

function populateDisplay(displayContent) {
  display.textContent = displayContent;
}

//initialize Number Buttons
numBtns = document.querySelectorAll(".btn-number");
numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    numBtnClick(numBtn.value);
  });
});

function numBtnClick(value) {
  processNumInput(value);
}

//initialize Operator Buttons
opBtns = document.querySelectorAll(".btn-operator");
opBtns.forEach((opBtn) => {
  opBtn.addEventListener("click", () => {
    opBtnClick(opBtn.value);
  });
});

function opBtnClick(value) {
  processOpInput(value);
}

//when Number Button is pressed
function processNumInput(input) {
  if (!numA) {
    numA = parseInt(input);
    populateDisplay(numA);
    return;
  }
  if (numA && !operator) {
    displayContent = numA.toString().concat(input);
    console.log(displayContent);
    populateDisplay(displayContent);
    numA = parseInt(displayContent);
    return;
  }
  if (numA && operator) {
    if (!numB) {
      numB = parseInt(input);
      populateDisplay(numB);
      return;
    }
    if (numB) {
      displayContent = numB.toString().concat(input);
      console.log(displayContent);
      populateDisplay(displayContent);
      numB = parseInt(displayContent);
      return;
    }
  }
}

function processOpInput(input) {
  //if operator is set, calc with old operator
  //afterwards use new operator
  if (operator) operatorBefore = operator;
  operatorNew = input;

  if (!numA) return;
  if (numA && !numB) {
    operator = operatorNew;
  }
  if (numA && numB) {
    result = operate(operatorBefore, numA, numB);
    populateDisplay(result);

    //update values for further calculations
    numA = parseInt(result);
    numB = undefined;
  }

  operator = operatorNew;
}
