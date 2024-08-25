let displayValue = '0';
let first = null;
let operator = null;
let Second = false;


function calculate(first, second, operator) {
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        case '%':
            return first % second;
        default:
            return null;
    }
}


function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    first = null;
    operator = null;
    Second = false;
    updateDisplay();
}

function inputDigit(value) {
    if (Second) {
        displayValue = value;
        Second = false;
    } else {
        displayValue = displayValue === '0' ? value : displayValue + value;
    }
    updateDisplay();
}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function inputOperator(nextOperator) {
    if (first === null) {
        first = parseFloat(displayValue);
    } else if (operator) {
        first = calculate(first, parseFloat(displayValue), operator);
        displayValue = String(first);
        updateDisplay();
    }
    Second = true;
    operator = nextOperator;
}

function calculateResult() {
    if (operator && first !== null) {
        displayValue = String(calculate(first, parseFloat(displayValue), operator));
        first = null;
        operator = null;
        Second = false;
        updateDisplay();
    }
}

function toggleSign() {
    displayValue = displayValue.startsWith('-') ? displayValue.slice(1) : '-' + displayValue;
    updateDisplay();
}


