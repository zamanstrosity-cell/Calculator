



function add(x, y){
    return x + y;
}

function substract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(x, y){
    switch(operator){
        case "x":
            return multiply(x, y);
        case "+":
            return add(x, y);
        case "-":
            return substract(x, y);
        case "/":
            return divide(x, y);
        default:

    }
}