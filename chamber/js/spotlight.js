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
       function filteredMembers(member) {
            let spot = document.createElement('section');
            
            //h2 name
            let name = document.createElement('h2');
            name.textContent = `${member.name}`;
            spot.appendChild(name);
            
            //p address
            let address = document.createElement('p');
            address.textContent = `${member.address}`;
            spot.appendChild(address);
            
            //p phone
            let phone = document.createElement('p');
            phone.textContent = `${member.phone}`;
            spot.appendChild(phone);
            
            //website
            let website = document.createElement("p");
            website.innerHTML = `<a href="https://www.${member.website}">${member.website}</a>`;
            spot.appendChild(website);
        
            // img
            let logo = document.createElement('img');
            logo.setAttribute("src", member.logo);
            logo.setAttribute("alt", `${member.name} Logo`);
            logo.setAttribute("loading", "lazy");
            spot.appendChild(logo);
            
            spotDiv.appendChild(spot);
        }
        });





