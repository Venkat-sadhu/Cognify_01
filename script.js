document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const convertBtn = document.getElementById('convertBtn');
    const tempInput = document.getElementById('tempValue');
    const unitSelect = document.getElementById('unit');
    const resultBox = document.getElementById('result');

    // Add click event listener to the button
    convertBtn.addEventListener('click', () => {
        // Get the input value and parse it as a float
        const value = parseFloat(tempInput.value);
        const unit = unitSelect.value;

        // Validate input
        if (isNaN(value)) {
            resultBox.textContent = "Please enter a valid number.";
            // Bright red for error, visible on dark background
            resultBox.style.color = "#ff4c4c"; 
            resultBox.style.borderColor = "#ff4c4c";
            resultBox.style.boxShadow = "0 0 15px rgba(255, 76, 76, 0.6)";
            return;
        }

        let convertedValue;
        let resultText;

        // Perform arithmetic operations based on the unit
        if (unit === 'C') {
            convertedValue = (value * 9/5) + 32;
            resultText = `${value.toFixed(2)} &deg;C = ${convertedValue.toFixed(2)} &deg;F`;
        } else if (unit === 'F') {
            convertedValue = (value - 32) * 5/9;
            resultText = `${value.toFixed(2)} &deg;F = ${convertedValue.toFixed(2)} &deg;C`;
        }

        // Display the converted temperature (Gold color)
        resultBox.innerHTML = resultText;
        resultBox.style.color = "#ffd700"; 
        // Reset border/shadow to original glowing orange in case of prior error
        resultBox.style.borderColor = "#ff5722";
        resultBox.style.boxShadow = "0 0 15px rgba(255, 87, 34, 0.6), inset 0 0 10px rgba(255, 87, 34, 0.2)";
    });

    // Allow pressing 'Enter' to trigger conversion
    tempInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            convertBtn.click();
        }
    });
});