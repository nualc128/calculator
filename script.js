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
const backspaceBtn = document.getElementById("backspace");
const floatingPointBtn = document.getElementById("point");
const clearEntryBtn = document.getElementById("clear-entry");
const display = document.getElementById("display");
let value = "";
let result = 0;


numberBtn.forEach(button => {
    button.addEventListener("click", (event) => {
        if (resetDisplay) {
            value = "";
            resetDisplay = false;
        }
        if (value === "0" && event.target.innerText === "0") return;
        if (value === "0" && event.target.innerText !== "0") {
            value = event.target.innerText;
        } else {
            value += event.target.innerText;
        }
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
            operator = event.target.innerText;
        } else {
            secondNumber = value;
            result = operate(operator, +firstNumber, +secondNumber);
            value = roundResult(result);
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
        result = operate(operator, +firstNumber, +secondNumber);
        value = roundResult(result);
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

backspaceBtn.addEventListener("click", (event) => {
    value ? value = value.slice(0, -1) : value = 0;
    value ? display.value = value : display.value = 0;
});

floatingPointBtn.addEventListener("click", (event) => {
    if (resetDisplay) {
        value = "0.";
        resetDisplay = false;
    } else {
        if (!value.includes(".")) {
            value = value === "" ? "0." : value + "."
        }
    }
    display.value = value;
});

clearEntryBtn.addEventListener("click", (event) => {
    value = 0;
    display.value = value;
    resetDisplay = true;
})

const roundResult = (num) => {
    if (typeof num === "number") {
        return Math.round(num * 1e10) / 1e10;
    }
    return result;
};