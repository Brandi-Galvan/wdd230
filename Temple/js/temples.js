const requestURL = 'https://brandi-galvan.github.io/wdd230/temple/data/data.json';

const cards = document.querySelector('.member-cards');
const lists = document.querySelector('.member-list');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const members = jsonObject['members'];
        members.forEach(displayBusiness);
    });

    function displayBusiness(local) {
        //variables 
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pic = document.createElement('img');
        let addr = document.createElement('p');
        let tel = document.createElement('p');
        let website = document.createElement('p')

        //text
        h2.textContent = `${local.name}`;
        addr.textContent = `Address: ${local.address}`;
        tel.textContent = `Phone: ${local.phone}`;
        website.innerHTML = `Website: <a href="${local.website}">${local.website}</a>`;

        //image
        pic.setAttribute('src', local.logo);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('alt', `${local.name} logo`);

        card.appendChild(h2);
        card.appendChild(tel);
        card.appendChild(addr);
        card.appendChild(website);
        card.appendChild(pic);

        cards.prepend(card);
    }


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const members = jsonObject['members'];
        members.forEach(displayList);
    });

    function displayList (locallist) {
        //member information displayed as list
        let row = document.createElement('tr');
        let name = document.createElement('td');
        let address = document.createElement('td');
        let tel = document.createElement('td');
        let website = document.createElement('td');

        name.textContent = `${locallist.name}`;
        address.textContent = `${locallist.address}`;
        tel.textContent = `${locallist.phone}`;
        website.textContent = `${locallist.website}`;

        row.appendChild(name);
        row.appendChild(address);
        row.appendChild(tel);
        row.appendChild(website);

        lists.appendChild(row)
    }

    //View Functions for list and grid
    function gridview() {
        var grid = document.querySelector(".member-cards");
        grid.style.display = "grid";

        var list = document.querySelector(".mem-listTable");
        list.style.display = "none";
    }

    function listview() {
        var grid = document.querySelector(".member-cards");
        grid.style.display = "none";

        var list = document.querySelector(".mem-listTable");
        list.style.display = "table";
    }