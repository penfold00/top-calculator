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

//initialize Display
display = document.querySelector(".display");
let displayContent = 0;

function populateDisplay(newDisplayContent) {
  display.textContent = newDisplayContent;
  displayContent = newDisplayContent.toString();
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
  if (numA == undefined) {
    numA = Number(input);
    populateDisplay(numA);
    return;
  }
  if (numA != undefined && operator == undefined) {
    newDisplayContent = displayContent.concat(input);
    console.log("new: " + newDisplayContent);
    populateDisplay(newDisplayContent);
    numA = Number(newDisplayContent);
    return;
  }
  if (numA != undefined && operator != undefined) {
    if (numB == undefined) {
      numB = Number(input);
      populateDisplay(numB);
      return;
    }
    if (numB != undefined) {
      newDisplayContent = displayContent.concat(input);
      console.log(newDisplayContent);
      populateDisplay(newDisplayContent);
      numB = Number(newDisplayContent);
      return;
    }
  }
}

function processOpInput(input) {
  //if operator is set, calc with old operator
  //afterwards use new operator
  if (operator) operatorBefore = operator;
  operatorNew = input;

  if (numA == undefined) return;
  if (numA != undefined && numB == undefined) {
    operator = operatorNew;
  }
  if (numA != undefined && numB != undefined) {
    result = operate(operatorBefore, numA, numB);
    populateDisplay(result);

    //update values for further calculations
    numA = Number(result);
    numB = undefined;
  }

  operator = operatorNew;
}

dotBtn = document.querySelector(".btn-dot");
dotBtn.addEventListener("click", () => {
  processDotInput();
});

function processDotInput() {
  if (displayContent.toString().includes(".")) return;
  if (numA == undefined) {
    numA = 0;
  }

  if (numA != undefined && numB == undefined) {
    console.log("concat dot numA");
    newDisplayContent = numA.toString().concat(".");
    populateDisplay(newDisplayContent);
  }
  console.log("check numA" + typeof numA + "state:" + typeof numA != undefined);

  if (numA != undefined && numB != undefined) {
    console.log("concat dot numB");

    newDisplayContent = numB.toString().concat(".");
    populateDisplay(newDisplayContent);
  }
}

//clear Button
clearBtn = document.querySelector(".btn-clear");
clearBtn.addEventListener("click", () => {
  clearCalc();
});

function clearCalc() {
  populateDisplay("0");
  numA = undefined;
  numB = undefined;
  operator = undefined;
}

//equal Button
equalBtn = document.querySelector(".btn-equal");
equalBtn.addEventListener("click", () => {
  processEqualBtn();
  console.log("click equal");
});

function processEqualBtn() {
  console.log("equalbtn");
  if (numA != undefined && numB != undefined && operator != undefined) {
    result = operate(operator, numA, numB);
    populateDisplay(result);
    operator = undefined;
    numB = undefined;
    numA = result;
  }
}
