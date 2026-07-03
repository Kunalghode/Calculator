let display = document.getElementById("display");

/* Add value */
function appendValue(value) {
    display.value += value;
}

/* Clear display */
function clearDisplay() {
    display.value = "";
}

/* Delete last */
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

/* Square number */
function squareNumber() {
    display.value = display.value * display.value;
}

/* Calculate */
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* Keyboard support */
document.addEventListener("keydown", function(event) {
    let key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        appendValue(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});