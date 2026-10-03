function convertTemperature() {

    const temperature =
        parseFloat(document.getElementById("temperature").value);

    const unit =
        document.getElementById("unit").value;

    const celsiusResult =
        document.getElementById("celsiusResult");

    const fahrenheitResult =
        document.getElementById("fahrenheitResult");

    const kelvinResult =
        document.getElementById("kelvinResult");

    if (isNaN(temperature)) {

        celsiusResult.textContent = "-- °C";

        fahrenheitResult.textContent = "-- °F";

        kelvinResult.textContent = "-- K";

        return;
    }
// Kelvin cannot be below absolute zero
if (unit === "kelvin" && temperature < 0) {

    celsiusResult.textContent = "Invalid";

    fahrenheitResult.textContent = "Invalid";

    kelvinResult.textContent = "0 K or above";

    return;
}

    let celsius;
    let fahrenheit;
    let kelvin;


    // ================= CELSIUS =================

    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit =
            (temperature * 9 / 5) + 32;

        kelvin =
            temperature + 273.15;

    }


    // ================= FAHRENHEIT =================

    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius =
            (temperature - 32) * 5 / 9;

        kelvin =
            celsius + 273.15;

    }


    // ================= KELVIN =================

    else if (unit === "kelvin") {

        kelvin = temperature;

        celsius =
            temperature - 273.15;

        fahrenheit =
            (celsius * 9 / 5) + 32;

    }


    // ================= RESULT DISPLAY =================

    celsiusResult.textContent =
        `${celsius.toFixed(2)} °C`;

    fahrenheitResult.textContent =
        `${fahrenheit.toFixed(2)} °F`;

    kelvinResult.textContent =
        `${kelvin.toFixed(2)} K`;
}