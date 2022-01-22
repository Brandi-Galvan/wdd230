const options = {day: `numeric`, month: `numeric`, year: `numeric`, hour: `numeric`, minute: `numeric`, second: `numeric`};
document.getElementById(`currentdate`).textContent = new Date().toLocaleDateString(`en-US`, options);

const year = {year: `numeric`};
document.querySelector('#currentyear').textContent = new Date().toLocaleDateString(`en-US`, year);