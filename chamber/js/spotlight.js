const requestURL =
'https://brandi-galvan.github.io/wdd230/chamber/data/data.json';
const mainSpotlight = document.querySelector('.spotlight');

fetch(requestURL)
.then(function (response) {
return response.json();
})
.then(function (jsonObject) {
const members = jsonObject['members'];

const spotArray = members.filter((member, index) => index < 3);

spotArray.forEach((spot, index) => {
let spotlight = document.createElement('div');
spotlight.classList.add('spotDiv');
spotlight.setAttribute('id', `spotDiv${index + 1}`);

//h2 heading for spotlight
let h2 = document.createElement('h2');
h2.textContent = spot.name;
spotlight.appendChild(h2);

//logo for spotlight
let image = document.createElement('img');
image.src = spot.logo;
image.setAttribute('src', spot.logo);
image.setAttribute('alt', spot.name);
spotlight.appendChild(image);

//p phone for spotlight
let p2 = document.createElement('p');
p2.textContent = spot.phone;
spotlight.appendChild(p2);

//p website for spotlight
let p3 = document.createElement('p');
p3.innerHTML = `<a href="https://www.${spot.website}">${spot.website}</a>`;
spotlight.appendChild(p3);

mainSpotlight.appendChild(spotlight);
});
});