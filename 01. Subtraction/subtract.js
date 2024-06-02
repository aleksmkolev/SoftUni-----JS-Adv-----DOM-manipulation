function subtract() {
    let firstInputRef = document.getElementById('firstNumber');
    let secondInputRef = document.getElementById('secondNumber');
    let result = document.getElementById('result');
    let firstInput = Number(firstInputRef.value);
    let secondInput = Number(secondInputRef.value);
    let difference = firstInput - secondInput;
    result.textContent = difference;
}