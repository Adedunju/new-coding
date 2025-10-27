document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsius');
    const convertBtn = document.getElementById('convert-btn');
    const resultParagraph = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        // Get the value from the input field
        const celsiusValue = parseFloat(celsiusInput.value);

        // Check if the input is a valid number
        if (isNaN(celsiusValue)) {
            resultParagraph.textContent = "Please enter a valid number.";
            resultParagraph.style.color = "red";
            return;
        }
        
        // Perform the conversion: F = (C * 9/5) + 32
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;

        // Display the result, rounded to two decimal places
        resultParagraph.textContent = `${celsiusValue}°C is ${fahrenheitValue.toFixed(2)}°F.`;
        resultParagraph.style.color = "#333";
    });
});

