const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNumber;
let secondNumber;
let operator;

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

const numberBtn = document.querySelectorAll(".numbers");
const operatorBtn = document.querySelectorAll(".operators");
const evaluate = document.getElementById("eval");
const display = document.getElementById("display");
let value = "";


numberBtn.forEach(button => {
    button.addEventListener("click", (event) => {
        value += event.target.innerText;
        display.value = value;
    })
});

operatorBtn.forEach(button => {
    button.addEventListener("click", (event) => {
        firstNumber = value;
        value = "";
        operator = event.target.innerText;
    })
});

evaluate.addEventListener("click", (event) => {
    secondNumber = value;
    value = operate(operator, +firstNumber, +secondNumber);
    display.value = value;
});