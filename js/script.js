function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("input").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;
    let steps = [];

    if (fromUnit === toUnit) {
        result = inputTemperature;
        steps.push(`Tidak ada konversi yang diperlukan karena unit suhu sama.`);
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (inputTemperature * 9/5) + 32;
        steps.push(`(${inputTemperature} °C × 9/5) + 32 = ${result.toFixed(2)} °F`);
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = inputTemperature + 273.15;
        steps.push(`${inputTemperature} °C + 273.15 = ${result.toFixed(2)} K`);
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (inputTemperature - 32) * 5/9;
        steps.push(`(${inputTemperature} °F - 32) × 5/9 = ${result.toFixed(2)} °C`);
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = ((inputTemperature - 32) * 5/9) + 273.15;
        steps.push(`((${inputTemperature} °F - 32) × 5/9) + 273.15 = ${result.toFixed(2)} K`);
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = inputTemperature - 273.15;
        steps.push(`${inputTemperature} K - 273.15 = ${result.toFixed(2)} °C`);
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = ((inputTemperature - 273.15) * 9/5) + 32;
        steps.push(`((${inputTemperature} K - 273.15) × 9/5) + 32 = ${result.toFixed(2)} °F`);
    }

    document.getElementById("result").textContent = `Hasil: ${result.toFixed(2)} ${toUnit}`;
    
    const stepsList = document.createElement("ol");
    steps.forEach(step => {
        const stepItem = document.createElement("li");
        stepItem.textContent = step;
        stepsList.appendChild(stepItem);
    });

    document.getElementById("steps").replaceChild(stepsList, document.getElementById("steps").querySelector("ol"));
}
