const requestURL = "https://brandi-galvan.github.io/wdd230/chamber/data/data.json"
const spotDiv = document.querySelectorAll(".spotDiv")

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const members = jsonObject['members'];
        const filteredMembers = members.filter((member) => {
            return member.membership == "Bronze" || member.membership == "Silver" || member.membership == "Gold";
        });
        spotDiv.forEach((spot,index) => {
            const i = Math.floor(Math.random()*filteredMembers.length);
            const member = filteredMembers[i];

            //logo for spotlight
            let image = document.createElement('img');
            image.src = members.logo;
            image.setAttribute('alt', members.name);
            spot.appendChild(image);

            //p phone for spotlight
            let p2 = document.createElement('p');
            p2.textContent = members.phone;
            spot.appendChild(p2);

            //p website for spotlight
            let p3 = document.createElement('p');
            p3.textContent = members.website;
            spot.appendChild(p3);


            filteredMembers.splice(i,1);
        });
    });





