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
p3.textContent = spot.website;
spotlight.appendChild(p3);

mainSpotlight.appendChild(spotlight);
});
});