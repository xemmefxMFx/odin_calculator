class Calculator {
    // initializing object within the class
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        // clearing the calculator upon creation
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        // Convert number to string so JS does not make calculations immediately instead of displaying the correct output
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }

}




const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


// Assign calculator variable with the calculator class and pass in the constructor
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Add event listener to working buttons within the calculator 
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // appened the value of the (number) text inside the button
        calculator.appendNumber(button.innerText)
        // update the display with each click
        calculator.updateDisplay()
    })
})