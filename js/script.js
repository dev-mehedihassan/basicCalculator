let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");


buttons.forEach((button) => {

    button.addEventListener("click", () => {

        let value = button.innerText;

        if (value === "AC") {
            display.value = "";
        }
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "=") {
            let result = display.value;

            result = result.replace(/\b0+(\d+)/g, "$1");

            display.value = eval(result);
        }
        else if (value === "+") {
            display.value += "+";
        }
        else if (value === "−") {
            display.value += "-";
        }
        else if (value === "×") {
            display.value += "*";
        }
        else if (value === "÷") {
            display.value += "/";
        }
        else if (value === "%") {
            display.value = display.value / 100;
        }
        else {
            display.value += value;
        }
    });
});