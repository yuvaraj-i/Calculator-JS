function deleteLastValue(){
    let object = document.getElementsByClassName("display")[0];
    object.innerText = object.innerText.slice(0, -1);
}

function updateDisplay(object){
    let value = object.innerText;
    document.getElementsByClassName("display")[0].innerText += value;
}

function clearAll(){
    document.getElementsByClassName("display")[0].innerHTML = "";
}

function perform(){
    const values = document.getElementsByClassName("display")[0].innerText;
    let totalValue;

    for (let i = 0; i < values.length; i++){
        if(values[i] == "+"){
            totalValue = total("+", values);
            break;
        }

        else if(values[i] == "-"){
            totalValue = total("-", values);
            break;
        }

        else if(values[i] == "x"){
            totalValue = total("x", values);
            break;
        }

        else if(values[i] == "/"){
            totalValue = total("/", values);
            break;
        }

        else if(values[i] == "%"){
            totalValue = total("%", values);
            break;
        }

        else{
            totalValue = "";
        }
    }    
    
    document.getElementsByClassName("display")[0].innerHTML = totalValue;
}

function operators(object){
    operator = object.innerText;
    let currentValue = document.getElementsByClassName("display")[0].innerText;
    const allOperators = ["+", "-", "x", "/", "%"]
    
    let flag = true;

    allOperators.forEach((ele)=>{
        if(currentValue == "" || currentValue != "" && currentValue.includes(ele)){
            flag = false;
        }
        
    })

    if (flag){
        updateDisplay(object);
    }
}

function total(operator, values){
    const numbers = values.split(operator);
    let previousNumber = numbers[0];
    let nextNumber = numbers[1];
    let totalValue;

    if (previousNumber == "" || nextNumber == "" || operator == ""){
        return values;
    }

    switch(operator){
        case "+":
            totalValue = parseFloat(previousNumber) + parseFloat(nextNumber);
            break;

        case "-":
            totalValue = parseFloat(previousNumber) - parseFloat(nextNumber);
            break;

        case "x":
            totalValue = parseFloat(previousNumber) * parseFloat(nextNumber);
            break;
        
        case "/":
            totalValue = parseInt(previousNumber) / parseInt(nextNumber);
            break;
        
        case "%":
            totalValue = parseFloat(previousNumber) / 100;
            break;
        
        default:
            totalValue = "";
    }

    return totalValue;
}
