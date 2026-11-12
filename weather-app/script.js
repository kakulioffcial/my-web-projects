const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

searchBtn.addEventListener('click', function() {
    let cityName = cityInput.value;

    if (cityName === "") {
        alert("Please enter a city name!");
    } else {
        weatherResult.innerHTML = "Weather info for: " + cityName;
    }
});