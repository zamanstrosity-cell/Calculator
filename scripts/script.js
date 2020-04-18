class Calculator {
    constructor(){
        this.firstOperand = parseFloat(firstValue);
        this.secondOperand = parseFloat(secondValue);
        this.clear();
    }
    clear(){
        text.innerHTML = "";
    }
    delete(){
        text.innerHTML = text.innerHTML.slice(0, -1);
    }
    operate(operator){
        let result, first, second;
        first = parseFloat(firstValue);
        second = parseFloat(secondValue);
        switch (operator){
            case "+":
                result = first + second;
                break;
            case "-":
                result = first - second;
                break;
            case "*":
                result = first * second;
                break;
            case "\u00f7":
                result = first / second;
                break;
            default:
                return;
        }
        text.innerHTML = result;
    }
    display(){

    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const text = document.querySelector(".textview");
let operator, firstValue, secondValue;
const calculator = new Calculator(operator, firstValue, secondValue);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        text.innerHTML += button.innerHTML;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.innerHTML;
        console.log(operator);
        firstValue = text.innerHTML;
        console.log(firstValue);
        text.innerHTML = "";
    })
})

equalsButton.addEventListener('click', () => {
    secondValue = text.innerHTML;
    console.log(secondValue);
    calculator.operate(operator);
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
})