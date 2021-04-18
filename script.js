function measureBMI () {
    let unit = document.getElementById("bmi-metric"),
        weight = document.getElementById("bmi-weight"),
        height = document.getElementById("bmi-height");
    
    if (unit) {
      weight.min = 1;
      weight.max = 635;
      height.min = 54;
      height.max = 272;
    } 
   
  }
  
  function calculateBMI () {
    // (A) Get elements
    let bmi = null,
        unit = document.getElementById("bmi-metric"), 
        weight = parseInt(document.getElementById("bmi-weight").value),
        height = parseInt(document.getElementById("bmi-height").value),
        results = document.getElementById("bmi-results");
  
    // (B) Calculate BMI
    // Metric BMI = Mass (kg) / Height (m) square 
    if (unit) {
      height = height / 100;
      bmi = weight / (height * height);
    }
    
    // Round off
    bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places
  
    // (C) Show Results
    if (bmi < 18.5) {
      results.innerHTML = bmi + "- You are" + " Underweight";
    } else if (bmi < 25) {
      results.innerHTML = bmi + "- You are" + " Normal weight";
    } else if (bmi < 30) {
      results.innerHTML = bmi + "- You are" + " Pre-obesity";
    } else if (bmi < 35) {
      results.innerHTML = bmi + "- You are" + " Obesity class I";
    } else if (bmi < 40) {
      results.innerHTML = bmi + "- You are" + " Obesity class II";
    } else {
      results.innerHTML = bmi +  "- You are" + " Obesity class III";
    }
    return false;
  }