document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");

    const buttons = {
        clear: document.getElementById("clear"),
        delete: document.getElementById("delete"),
        decimal: document.getElementById("decimal"),
        divide: document.getElementById("divide"),
        seven: document.getElementById("seven"),
        eight: document.getElementById("eight"),
        nine: document.getElementById("nine"),
        multiply: document.getElementById("multiply"),
        four: document.getElementById("four"),
        five: document.getElementById("five"),
        six: document.getElementById("six"),
        subtract: document.getElementById("subtract"),
        one: document.getElementById("one"),
        two: document.getElementById("two"),
        three: document.getElementById("three"),
        add: document.getElementById("add"),
        zero: document.getElementById("zero"),
        equals: document.getElementById("equals"),
    };

    let currentValue = "";


    const appendValue = (value) => {
        currentValue += value;
        display.value = currentValue;
    };

 
    Object.keys(buttons).forEach((key) => {
        buttons[key].addEventListener("click", () => {
            const value = buttons[key].value;
            if (value === "AC") {
                currentValue = "";
                display.value = "";
            } else if (value === "DE") {
                currentValue = currentValue.slice(0, -1);
                display.value = currentValue;
            } else if (value === "=") {
                try {
                    currentValue = eval(currentValue).toString();
                    display.value = currentValue;
                } catch (error) {
                    display.value = "Error";
                }
            } else {
                appendValue(value);
            }
        });
    });
});
