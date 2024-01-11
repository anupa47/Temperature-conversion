const inputNum = document.getElementById("inputNum");
const toFahrenhite = document.getElementById("toFahrenhite");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;
let answer;

console.log("hey")

function convert() {
    temp = Number(inputNum.value);
    if (toFahrenhite.checked) {
        answer = (temp * 9 / 5) + 32;
        console.log(answer);
        result.textContent = (`${answer} |F`);
    } else if (toCelcius.checked) {
        console.log(temp);
        answer = temp - 20;
        result.textContent = answer;
    } else {
        result.textContent = "0"
    }
}
