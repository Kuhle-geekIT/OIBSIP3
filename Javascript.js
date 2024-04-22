function convertToFahrenheit(celsius){
    return parseFloat(celsius *9/5) + 32;
}

function convertToKelvin(celsius){
    return parseFloat(celsius) + 273.15;
}

function convertToCelsius(fahrenheit){
    return parseFloat(fahrenheit -32) *5/9;
}

const celsiusInput=
document.querySelector("#celsius");
const kelvinInput=
document.querySelector("#kelvin");
const fahrenheitInput=
document.querySelector("#fahrenheit");

celsiusInput.addEventListener("input", () => {
    const celsius= celsiusInput.Value;
    kelvinInput.value=
    convertToKelvin(celsius);
    fahrenheitInput.value=
    convertToFahrenheit(celsius)
});

kelvinInput.addEventListener("input", () => {
    const kelvin= kelvinInput.value;
    celsiusInput.value= parseFloat(kelvin) -273.15;
    fahrenheitInput.value=
    convertToFahrenheit(parseFloat(kelvin) -273.15);
});

fahrenheitInput.addEventListener("input", () => {
    const fahrenheit= fahrenheitInput.value;
    celsiusInput.value=
    convertToCelsius(fahrenheit);
    kelvinInput.value=
    convertToKelvin(convertToCelsius(fahrenheit));
});

document.querySelector("#calculate-btn").
addEventListener("click", () =>{
    alert("Khanzi is converting!");
});