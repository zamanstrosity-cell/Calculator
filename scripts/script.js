let buttons = [...document.querySelectorAll(".button")];
let text = document.querySelector(".textview");
let para = document.createElement("p");
let operands = [];

function changeText(button) {
    para.textContent = para.textContent + button.value;
    text.appendChild(para);
}
buttons.forEach(button => {
    console.log(button.value);
});
buttons.forEach(button => {
    switch (true) {
    case (!button.classList.contains("operator")):
        button.addEventListener('click', () => {
        changeText(button);
        });
        break;
    case (button.value == "AC"):
        button.addEventListener('click', () => {
        para.textContent = "";
        });
        break;
    case (button.value == "x"):
        button.addEventListener('click', () => {
            para.textContent = "";
            if (operands.length == 2){
                para.textContent = operate(operands);
            };
        });
        break;
    case (button.value == "+"):
        button.addEventListener('click', () => {
            para.textContent = "";
        })
    default:
}
});


function add([x, y]){
    return x + y;
}

function substract([x, y]){
    return x - y;
}

function multiply([x, y]){
    return x * y;
}

function divide([x, y]){
    return y == 0 ? 'THE WORLD JUST ENDED': x / y;
}

function operate([x, y]){
    switch(operator){
        case "x":
            return multiply([x, y]);
        case "+":
            return add([x, y]);
        case "-":
            return substract([x, y]);
        case "/":
            return divide([x, y]);
        default:

    }
}