const requestURL = 'https://brandi-galvan.github.io/wdd230/Temple/data/data.json';

const cards = document.querySelector('.temple-cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });

    function displayTemples(lds) {
        //variables 
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pic = document.createElement('img');
        let addr = document.createElement('p');
        let tel = document.createElement('p');
        let email = document.createElement('p');
        let serv = document.createElement('p');
        let hist = document.createElement('p');
        let bap = document.createElement('p');
        let endow = document.createElement('p');
        let init = document.createElement('p');
        let clos = document.createElement('p');
        let heartbtn = document.createElement('button');
        const heartImg = document.createElement('img');
        heartImg.setAttribute('alt', 'heart button');

        //text
        h2.textContent = `${lds.name}`;
        addr.textContent = `Address: ${lds.address}`;
        tel.textContent = `Phone: ${lds.phone}`;
        email.textContent = `Email: ${lds.email}`;
        serv.textContent = `Services: ${lds.services}`;
        hist.textContent = `History: ${lds.history}`;
        bap.textContent = `Baptisms Schedule: ${lds.bapSched}`;
        endow.textContent = `Endowment Schedule: ${lds.endowSched}`;
        init.textContent = `Initiatory Schedule: ${lds.initiatorySched}`;
        clos.textContent = `Temple Closures: ${lds.templeClosure}`;

        //images
        pic.setAttribute('src', `${lds.picture}`);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('alt', `${lds.name} picture`);

        //heart like
        heartbtn.appendChild(heartImg);
        if(localStorage.getItem(lds.name) == "true") {
          heartImg.src = "../images/heart-filled.png";
          }
          else {
              heartImg.src = "../images/heart-empty.png";
          }
      
        heartbtn.setAttribute('id', 'heart');
        heartbtn.setAttribute('value', "like-btn");
        heartbtn.addEventListener("click", () => {
              if(localStorage.getItem(lds.name) == "true") {
                localStorage.setItem(lds.name, "false");
                heartImg.src = "../images/heart-empty.png";
            }
            else {
                localStorage.setItem(lds.name, "true");
                heartImg.src = "../images/heart-filled.png";
            }
        })

        card.appendChild(pic);
        card.append(heartbtn);
        card.appendChild(h2);
        card.appendChild(addr);
        card.appendChild(tel);
        card.appendChild(email);
        card.appendChild(serv);
        card.appendChild(hist);
        card.appendChild(bap);
        card.appendChild(endow);
        card.appendChild(init);
        card.appendChild(clos);

        cards.prepend(card);
    }