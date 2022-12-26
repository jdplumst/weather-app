// Get elements
const input = document.querySelector('input');
const btn = document.querySelector('button');
const img = document.querySelector('img');

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
        console.log(weatherData.weather[0].main);
        weather = weatherData.weather[0].main;
    } catch(err) {
        throw new Error(err);
    }
};

// Get GIF from GIPHY API
async function getGiphy() {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=2hJRrJYAt5CG8slJm3slfNDGRWvQ6aok&s=${weather} weather', {mode: 'cors'}`);
        const giphyData = await response.json();
        console.log(giphyData.data);
        img.src = giphyData.data.images.original.url;
    } catch(err) {
        throw new Error(err);
    }
};

// Call functions in order when Get Weather button is clicked
btn.addEventListener('click', async () => {
    try {
        await getWeather();
        await getGiphy();
    } catch(err) {
        alert('Please enter a valid city!');
    }
});