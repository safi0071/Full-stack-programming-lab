function calculate() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let resultBox = document.getElementById("resultBox");

    // Validate empty input
    if (isNaN(num1) || isNaN(num2)) {
        resultBox.innerText = "Please enter valid numbers.";
        resultBox.style.backgroundColor = "#ffcccc";
        return;
    }

    // Prevent division by zero
    if (operation === "/" && num2 === 0) {
        resultBox.innerText = "Error: Division by zero is not allowed.";
        resultBox.style.backgroundColor = "#ffcccc";
        return;
    }

    let result;

    if (operation === "+") {
        result = num1 + num2;
    } 
    else if (operation === "-") {
        result = num1 - num2;
    } 
    else if (operation === "*") {
        result = num1 * num2;
    } 
    else if (operation === "/") {
        result = num1 / num2;
    }

    resultBox.innerText = "Result: " + result;

    // Bonus: Change background color based on result
    if (result > 0) {
        resultBox.style.backgroundColor = "#d4edda"; // Green
    } 
    else if (result < 0) {
        resultBox.style.backgroundColor = "#f8d7da"; // Red
    } 
    else {
        resultBox.style.backgroundColor = "#d1ecf1"; // Blue (zero)
    }
}

function resetCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultBox").innerText = "";
    document.getElementById("resultBox").style.backgroundColor = "#f0f0f0";
}
