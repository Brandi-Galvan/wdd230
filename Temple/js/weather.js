// Weather API pull
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=33.4484&lon=-112.074&units=imperial&appid=157dea0b1a28c8415ca1013f1e78acd2'


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const t = jsObject.main.temp.toFixed(1);
    document.querySelector('#currentTemp').textContent = t;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const humidity = jsObject.main.humidity;

    document.querySelector('#weaIcon').setAttribute('src', iconsrc);
    document.querySelector('#weaIcon').setAttribute('alt', desc);
    document.querySelector('#weaDesc').textContent = desc;
    document.querySelector('#humidity').textContent = humidity;

  });