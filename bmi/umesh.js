"use strict";

// Button aur result div ko select karo
const calcBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

// Button par click hone par function chalega
calcBtn.addEventListener("click", function () {
  // User se input value lo
  const height = parseFloat(document.getElementById("Height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  // Agar input galat hai to error show karo
  if (!height || height <= 0 || isNaN(height)) {
    resultDiv.innerText = "⚠️ Please enter a valid height (in cm).";
    return;
  }

  if (!weight || weight <= 0 || isNaN(weight)) {
    resultDiv.innerText = "⚠️ Please enter a valid weight (in kg).";
    return;
  }

  // BMI calculate karo
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  // BMI category nikaalo
  let category = "";

  if (bmi < 18.6) {
    category = "Underweight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = "Normal weight";
  } else {
    category = "Overweight";
  }

  // Final result display karo
  resultDiv.innerText = `✅ Your BMI is ${bmi} (${category})`;
});
