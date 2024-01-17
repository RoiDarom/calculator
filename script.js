let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    display.value = currentInput;
}
