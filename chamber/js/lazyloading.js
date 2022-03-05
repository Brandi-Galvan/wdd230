const allImages = document.querySelectorAll("img[data-src]")

const lazyLoad = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"))
    img.onload = () => {
        img.removeAttribute("data-src")
        img.className = "in"
    };
};


const options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
}

if ('IntersectionObserver' in window) {
    const obsrvr = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                lazyLoad(item.target)
                observer.unobserve(item.target)
            }
        })
    }, options)
    allImages.forEach((img) => {
        obsrvr.observe(img)
    })
}
else {
    allImages.forEach((img) => {
        lazyLoad(img)
    })
}

// Days since last visit
const visitDisplay = window.localStorage.getItem('last-visit');
if(visitDisplay === undefined) {
    visitDisplay = new Date(Data.now());
}
const lastVisit = Date.parse(visitDisplay);
const FACTOR = 1000 * 60 * 60 * 24;


let daysbetween = Date.now() - lastVisit;
let numberOfDays = daysbetween / FACTOR;

window.localStorage.setItem('last-visit', new Date(Date.now()));

const dayLastVisit = Math.floor(numberOfDays);
document.getElementById('last-visit').textContent = dayLastVisit;
