const options = {day: `numeric`, month: `numeric`, year: `numeric`, hour: `numeric`, minute: `numeric`, second: `numeric`};
document.getElementById(`currentdate`).textContent = new Date().toLocaleDateString(`en-US`, options);

const year = {year: `numeric`};
document.querySelector('#currentyear').textContent = new Date().toLocaleDateString(`en-US`, year);


const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');
const exitbutton = document.querySelector('#xbutton');
const ham = document.querySelector('#ham');

menubutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
    exitbutton.classList.toggle('hidden');
    ham.classList.toggle('hidden');
}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760) {
        mainnav.classList.remove('responsive');
        exitbutton.classList.add("hidden");
        ham.classList.remove("hidden");
    }
};

