// Weather API pull
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=gilbert&units=imperial&appid=157dea0b1a28c8415ca1013f1e78acd2'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const t = jsObject.main.temp.toFixed(1);
    document.querySelector('#currentTemp').textContent = t;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const windsp = jsObject.wind.speed;
    document.querySelector('#weaIcon').setAttribute('src', iconsrc);
    document.querySelector('#weaIcon').setAttribute('alt', desc);
    document.querySelector('#desc').textContent = desc;
    document.querySelector('#speed').textContent = windsp;


    if(t <= 50 && windsp > 3) {
      const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(windsp,0.16) + 0.4275 * t * Math.pow(windsp,0.16)
      document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
    }
    else {
        document.querySelector("#windchill").innerHTML = "N/A"
    }
  });