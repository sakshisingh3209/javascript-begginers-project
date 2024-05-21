let btn = document.querySelector(".btn")
btn.addEventListener('click', BMI);

function BMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    let result = "Your BMI is: " + bmi;

    if (bmi < 18.5) {
        result += "(Underweight)";
    } else if (bmi >= 18.5 && bmi < 25) {
        result += "(Normal Weight)";
    } else if (bmi > 25 && bmi <= 30) {
        result += "(OverWeight)";
    } else if (bmi >= 30 && bmi < 40) {
        result += "(obese)";
    }

    document.getElementById("result").innerText = result;
}