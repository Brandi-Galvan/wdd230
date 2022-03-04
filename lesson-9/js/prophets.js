const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });
  
function displayProphets(prophet) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');
  let birthdate = document.createElement('div');
  let birthplace = document.createElement('div');

  card.setAttribute('class', 'cardclass');

  birthdate.setAttribute('class', 'birth');
  birthplace.setAttribute('class', 'birth');

  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - prophet number ${prophet.order} of Jesus Christ's Latter-Day Church.`);
  portrait.setAttribute('loading', 'lazy');

  birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
  birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

  card.appendChild(h2);
  card.appendChild(birthdate);
  card.appendChild(birthplace);
  card.appendChild(portrait);

  cards.appendChild(card);
}