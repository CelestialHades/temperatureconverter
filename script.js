// 1. Get DOM elements
const tempInput = document.getElementById('tempInput');
const unitSelect = document.getElementById('unit');
const result = document.getElementById('result');

// 2. Function to convert temperature
function convertTemp() {
  // 3. Get the input value and unit
  const temp = Number(tempInput.value);
  const unit = unitSelect.value;
  
  // 4. Validate input
  if (isNaN(temp)) {
    result.textContent = 'Please enter a valid number!';
    return;
  }
  
  // 5. Perform conversion
  let convertedTemp;
  if (unit === 'celsius') {
    convertedTemp = (temp * 9/5) + 32;
    result.textContent = `${temp}°C = ${convertedTemp.toFixed(2)}°F`;
  } else {
    convertedTemp = (temp - 32) * 5/9;
    result.textContent = `${temp}°F = ${convertedTemp.toFixed(2)}°C`;
  }
  
  // 6. Clear input
  tempInput.value = '';
}