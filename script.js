document.getElementById('hexForm').addEventListener('submit', (e) => {
    e.preventDefault();

    let hexCode = document.getElementById('hexCode').value.trim();
    const percentage = parseFloat(document.getElementById('percentage').value);

    const output = document.getElementById('output');

    // Auto-add '#' if missing
    if (!hexCode.startsWith('#')) {
        hexCode = `#${hexCode}`;
    }

    // Validate Hex Code
    if (!/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hexCode)) {
        output.className = 'output error';
        output.textContent = 'Invalid hex code. Please use a format like #232323.';
        return;
    }

    // Validate Percentage
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
        output.className = 'output error';
        output.textContent = 'Invalid percentage. Please enter a value between 0 and 100.';
        return;
    }

    // Convert Percentage to Hex
    const alphaValue = Math.round((percentage / 100) * 255)
        .toString(16)
        .padStart(2, '0');

    const result = `${hexCode}${alphaValue.toUpperCase()}`;

    // Display the result
    output.className = 'output success';
    output.innerHTML = `
      <p>Converted Hex Code:</p>
      <p><strong>${result}</strong></p>
    `;
});

// Disable Arrow Keys for Number Input
function disableArrowKeys(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
    }
}
