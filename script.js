// Get elements
const input = document.querySelector('input');
const btn = document.querySelector('button');

// Get weather from OpenWeatherMap API
async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=3fc55169239302f84438f115da82abbd');
    const weatherData = await response.json();
    console.log(weatherData.weather[0].main);
};

getWeather();