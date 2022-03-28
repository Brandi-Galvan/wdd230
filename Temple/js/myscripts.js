// last updated
let text = document.lastModified;
document.getElementById("footerDate").innerHTML = text;

//Hamburger menu
const nav = document.querySelector(".navigation");
const hamButton = document.querySelector(".hamburger");

hamButton.addEventListener('click', () => {
    nav.classList.toggle('responsive')
}, false);

// Solving resizing issue
window.onresize = () => {
    if (window.innerWidth > 760) {
        mainnav.classList.remove('responsive');
        exitbutton.classList.add("hidden");
        ham.classList.remove("hidden");
    }
};