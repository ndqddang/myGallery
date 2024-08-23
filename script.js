const display = document.getElementById("display");

function append(input) {
    display.value += input
}
function calculator() {
    try {
        display.value = eval(display.value);
    } catch (err) {
        display.value = `${err} rồi nè.`
    }
}
const privateColor = document.querySelector(".cc");
privateColor.addEventListener("click", function () {
    display.value = "";
})