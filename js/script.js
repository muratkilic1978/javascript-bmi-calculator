

let weight, height, measure, bmi, error;

function calculate() {
	weight = document.querySelector("#weight").value;
	height = document.querySelector("#height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Your BMI is <span id='bmiUnderweight'>" + bmi + "</span> which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is <span id='bmiNormal'>" + bmi + "</span>  which means " + "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is <span id='bmiOverweight'>" + bmi + "</span>  which means " + "You are Overweight";
	} else if (bmi >= 30) {
		measure = "Your BMI is <span id='bmiObese'>" + bmi + "</span>  which means " + "You are Obese";
	}

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}
