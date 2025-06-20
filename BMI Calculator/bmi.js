function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.textContent = "Please enter valid height and weight.";
    return;
  }

  const bmi = weight / (height * height);
  let status = "";

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    status = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} - ${status}`;
}
