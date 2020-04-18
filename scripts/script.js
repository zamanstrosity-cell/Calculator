class Calculator {
    constructor(firstValue, secondValue){
        this.firstValue = firstValue;
        this.secondValue = secondValue;
        this.reset = false;
    }
    clear(){
        text.innerHTML = "";
        operator = "";
        firstValue = "";
        secondValue = "";
    }
    delete(){
        text.innerHTML = text.innerHTML.slice(0, -1);
    }
    operate(operator){
        secondValue = text.innerHTML;
        let result, first, second;
        first = parseFloat(firstValue);
        second = parseFloat(secondValue);
        if(isNaN(first) || isNaN(second)){return;}
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
        firstValue = result;
        secondValue = "";
    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const text = document.querySelector(".textview");
let operator, firstValue, secondValue = "";
const calculator = new Calculator(text, operator, firstValue, secondValue);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(calculator.firstValue === "" && calculator.secondValue !== "" && calculator.reset){
            text.innerHTML = "";
            calculator.reset = false;
        }
        if(button.innerHTML === "." && text.innerHTML.includes(".")){
            return;
        }
        if(button.innerHTML === "\u2213" && !text.innerHTML.includes("-")) {
            text.innerHTML = "-" + text.innerHTML;
            return;
        }
        if(button.innerHTML === "\u2213" && text.innerHTML.includes("-")) {
            return;
        }
        else {
            text.innerHTML += button.innerHTML;
        }

    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(firstValue !== ""){
            operator = button.innerHTML;
            calculator.operate(operator)
        }
        operator = button.innerHTML;
        firstValue = text.innerHTML;
        text.innerHTML = "";
    })
})

equalsButton.addEventListener('click', () => {
    calculator.reset = true;
    secondValue = text.innerHTML;
    calculator.operate(operator);
    firstValue = "";
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
})

