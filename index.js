const displayPreviousValue = document.getElementById('previous-value');
const displayActualValue = document.getElementById('actual-value');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayActualValue);

numbers.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

operators.forEach(button => {
    button.addEventListener('click', () => display.operate(button.value))
});

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});