document.addEventListener('DOMContentLoaded', () => {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const convertBtn = document.getElementById('convert-btn');
    const resultParagraph = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        // Get the value from the input field
        const fahrenheitValue = parseFloat(fahrenheitInput.value);

        // Check if the input is a valid number
        if (isNaN(fahrenheitValue)) {
            resultParagraph.textContent = "Please enter a valid number.";
            resultParagraph.style.color = "red";
            return;
        }
        
        // Perform the conversion: C = (F - 32) * 5/9
        const celsiusValue = (fahrenheitValue - 32) * 5 / 9;

        // Display the result, rounded to two decimal places
        resultParagraph.textContent = `${fahrenheitValue}°F is ${celsiusValue.toFixed(2)}°C.`;
        resultParagraph.style.color = "#333";
    });
});
