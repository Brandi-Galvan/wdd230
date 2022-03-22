const requestURL = "https://brandi-galvan.github.io/wdd230/chamber/data/data.json"
const spotDiv = document.querySelectorAll(".spotDiv")

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['members'];
        const filteredBusinesses = businesses.filter((business) => {
            return business.membership == "Bronze" || business.membership == "Silver" || business.memerbship == "Gold";
        });
        spotlightItems.forEach((spotlight,index) => {
            const i = Math.floor(Math.random()*filteredBusinesses.length);
            const business = filteredBusinesses[i];

            //img
            let image = document.createElement('img');
            image.src = business.logo;
            image.setAttribute('alt', business.name);
            spotlight.appendChild(image);

            //p phone
            let p2 = document.createElement('p');
            p2.textContent = business.phone;
            spotlight.appendChild(p2);

            //p website
            let p3 = document.createElement('p');
            p3.textContent = business.website;
            spotlight.appendChild(p3);


            filteredBusinesses.splice(i,1);
        });
    });





