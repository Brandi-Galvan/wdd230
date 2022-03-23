//JS for spotlight section on home page
const requestURL = 'https://brandi-galvan.github.io/wdd230/chamber/data/data.json';

let spotlight1 = document.querySelector('.spotDiv1');
let spotlight2 = document.querySelector('.spotDiv2');
let spotlight3 = document.querySelector('.spotDiv3');
let section = document.querySelector('.spotlight')
let spaceFilled = 0;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    //filtering and randomizing the silver and gold memberships
    .then(function (jsonObject) {
        console.table(jsonObject);
        const members = jsonObject['members'];
        const spotlightBusiness = members.filter( x => (x.membership === 'gold' || x.membership === 'silver'));
        const shuffledList = spotlightBusiness.sort((a, b) => 0.5 - Math.random());
        shuffledList.forEach(spaces)
    });

    // creating the elements to put in
    function spaces(business) { 
        if (spaceFilled == 3)
            return;
        else {
            if (spaceFilled == 0) {
                let biz = document.querySelector('.spotDiv1');
                buildSpotlight(business, biz);
            }
            if (spaceFilled == 1) {
                let biz = document.querySelector('.spotDiv2');
                buildSpotlight(business, biz);
            }
            if (spaceFilled == 2) {
                let biz = document.querySelector('.spotDiv3');
                buildSpotlight(business, biz);
            }
            spaceFilled++;
        }
    } 
    //building the sections for html
    function buildSpotlight(company, index) {
        let bizCard = document.createElement('section')
        let h4 = document.createElement('h3');
        let img = document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let site = document.createElement('p');

        bizCard.setAttribute('class', `spot${index}`);

        //building the text 
        h4.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        site.innerHTML = `<a href="${company.website}">${company.website}</a>`;

        //building the logo information
        img.setAttribute('src', company.logo);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('alt', `${company.name} logo`);
        img.setAttribute('class', 'logo');

        bizCard.appendChild(h4);
        bizCard.appendChild(img);
        bizCard.appendChild(phone);
        bizCard.appendChild(address);
        bizCard.appendChild(site);
        
        section.appendChild(bizCard);
    }