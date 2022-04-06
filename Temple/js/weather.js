const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.4484&lon=-112.074&units=imperial&appid=157dea0b1a28c8415ca1013f1e78acd2'

const DaysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MonthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const t = Math.floor(jsObject.current.temp);
    document.querySelector('#currentTemp').textContent = t;
// Phoenix Weather Section
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    const desc = jsObject.current.weather[0].description;
    const humidity = jsObject.current.humidity;
    document.querySelector('#weaIcon').setAttribute('src', iconsrc);
    document.querySelector('#weaIcon').setAttribute('alt', desc);
    document.querySelector('#weaDesc').textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
    document.querySelector('#humidity').textContent = humidity;

    const alert = jsObject.alert;
// Banner Weather Alert, closeable
    if (alert) {
        const alertMessage = document.querySelector("#weatherAlert");
        alertMessage.style.display = "block";
        const message = alertMessage.querySelector("#alertMessage");
        message.textContent = alert.description;
        const closeBtn = alertMessage.querySelector("#closeable");
        closeBtn.addEventListener("click", () => {
            alertMessage.style.display = "none";
        });
    }
// 3-day forecast section
    document.querySelectorAll(".forecast3").forEach((value, index) => {
        const day = jsObject.daily[index];

        const date = new Date(day.dt * 1000);
        const image = value.querySelector("img");
        const desc = day.weather[0].description;
        image.setAttribute("alt", desc)
        image.src = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        value.querySelector(".currentTemp").textContent = Math.floor(day.temp.day);
        value.querySelector(".forecastDay").textContent = `${DaysOfWeek[date.getDay()]} ${MonthsOfYear[date.getMonth()]} ${date.getDate()}`;
    })
  });