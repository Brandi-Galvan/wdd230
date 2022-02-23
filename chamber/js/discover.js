let lastvisit = Number(window.localStorage.getItem('lastvisit'));
let thisvisit = Date.now();

if (lastvisit != 0) {
  let FACTOR = 86400000;
  let daysBetween = (thisvisit - lastvisit) / FACTOR;
  document.querySelector('.lastVisited').textContent = 'It has been ' + daysBetween.toFixed(0) + ' day(s) since your last visit. Welcome back!';
} 

else {  
  window.localStorage.setItem('lastvisit', Date.now());
  document.querySelector('.lastVisited').textContent = 'Welcome - this is your first visit!';
}

  window.localStorage.setItem('lastvisit', thisvisit);