// Get elements
const input = document.querySelector('input');
const btn = document.querySelector('button');
const img = document.querySelector('img');
const header = document.querySelector('h1');
const weatherSpan = document.querySelector('span');

let weather;
let city;
let country;

// Get weather from OpenWeatherMap API
async function getWeather() {
    try {
        const location = input.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3fc55169239302f84438f115da82abbd`);
        const weatherData = await response.json();
        city = weatherData.name;
        country = weatherData.sys.country;
        weatherDescription = weatherData.weather[0].description;
        weather = weatherData.weather[0].main;
    } catch(err) {
        throw new Error(err);
    }
};

// Get GIF from GIPHY API
async function getGiphy() {
    try {
        const response = await fetch(`https://api.giphy.com/v1/stickers/translate?api_key=2hJRrJYAt5CG8slJm3slfNDGRWvQ6aok&s=${weather} Sky Weather', {mode: 'cors'}`);
        const giphyData = await response.json();
        img.src = giphyData.data.images.original.url;
    } catch(err) {
        throw new Error(err);
    }
};

// Display data on screen
function displayData() {
    header.textContent = `${city}, ${country}`;
    weatherSpan.textContent = `${weatherDescription}`;
};

// Call functions in order when Get Weather button is clicked
btn.addEventListener('click', async () => {
    try {
        await getWeather();
        await getGiphy();
        displayData();
    } catch(err) {
        alert('Please enter a valid city!');
    }
});

btn.click();    