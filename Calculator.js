class Calculator {
    addition(num1, num2) {
        return num1 + num2;
    }

    subtraction(num1, num2) {
        return num1 - num2;
    }

    division(num1, num2) {
        if(num2 === 0) alert("Can't divide by 0");
        return num1 / num2;
    }

    multiplication(num1, num2) {
        return num1 * num2;
    }
} 