function convertTemp() {
    var tempValue = document.getElementById("tempInput").value;
    
    if (tempValue === "") {
        alert("Please enter a temperature!");
        return;
    }

    var C = Number(tempValue);
    var F = (C * 9/5) + 32;

    document.getElementById("result").innerHTML = "Result: " + F.toFixed(2) + " Fahrenheit";
}