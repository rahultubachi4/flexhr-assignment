let display = document.getElementById("display");

function input(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    }
     else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculate() {
    let result = eval(display.innerText);
    display.innerText = result;
}

