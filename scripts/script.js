class Calculator {
    constructor(firstOperand, secondOperand){
        this.firstOperand = firstValue;
        this.secondOperand = secondValue;
        this.reset = false;
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
                if(second == 0){
                    result = "DUMBASS";
                    break;
        }
                result = first / second;
                break;
            default:
                return;
        }
        text.innerHTML = result;
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
        if(button.innerHTML === "\u2213" && text.innerHTML.includes("\u2213")){
            return;
        }
        if(button.innerHTML === "." && text.innerHTML.includes(".")){
            return;
        }
        else if(button.innerHTML === "\u2213" && text.innerHTML.includes("\u2213") !== true) {
            text.innerHTML = "-" + text.innerHTML;
            return;
        }
        else {
            text.innerHTML += button.innerHTML;
        }

    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.innerHTML;
        firstValue = text.innerHTML;
        text.innerHTML = "";
    })
})

equalsButton.addEventListener('click', () => {
    secondValue = text.innerHTML;
    calculator.operate(operator);
    firstValue = secondValue;
    secondValue = text.innerHTML;
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
})