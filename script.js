const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNumber;
let secondNumber;
let operator;

let resetDisplay = false;

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return secondNumber === 0 ? "Don't you ever do that!" : divide(firstNumber, secondNumber);
            
    }
}

const numberBtn = document.querySelectorAll(".numbers");
const operatorBtn = document.querySelectorAll(".operators");
const evalBtn = document.getElementById("eval");
const clearBtn = document.getElementById("clear");
const display = document.getElementById("display");
let value = "";


numberBtn.forEach(button => {
    button.addEventListener("click", (event) => {
        if (resetDisplay) {
            value = "";
            resetDisplay = false;
        }
        value += event.target.innerText;
        display.value = value;
    })
});

operatorBtn.forEach(button => {
    button.addEventListener("click", (event) => {
        if (firstNumber === undefined) {
            firstNumber = value;
            resetDisplay = true;
            operator = event.target.innerText;
        } else if (resetDisplay) {
            operator =event.target.innerText;
        } else {
            secondNumber = value;
            value = operate(operator, +firstNumber, +secondNumber);
            display.value = value;
            firstNumber = value;
            operator = event.target.innerText;
            resetDisplay = true;
        }
    })
});
 evalBtn.addEventListener("click", (event) => {
    if (firstNumber === undefined) {
        display.value = value;
    } else {
        secondNumber = value;
        value = operate(operator, +firstNumber, +secondNumber);
        display.value = value;
        firstNumber = undefined;
        secondNumber = undefined;
        resetDisplay = true; 
    }
});

clearBtn.addEventListener("click", (event) => {
    display.value = 0;
    firstNumber = undefined;
    secondNumber = undefined;
    value = "";
});