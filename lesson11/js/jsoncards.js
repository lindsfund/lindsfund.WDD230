const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                // create HTML elenents
                let card = document.createElement('section');
                let tname = document.createElement('h2');
                let tphoto = document.createElement('img');
                let tmotto = document.createElement('h3');
                let tfounded = document.createElement('p');
                let tpop = document.createElement('p');
                let train = document.createElement('p');
                // add details and attributes
                tname.textContent = towns[i].name;
                tphoto.setAttribute('src',"images/" + towns[i].photo);
                tphoto.setAttribute("alt",towns[i].name);
                tmotto.textContent = towns[i].motto;
                tfounded.textContent = "Year Founded: " + towns[i].yearFounded;
                tpop.textContent = "Current Population: " + towns[i].currentPopulation;
                train.textContent = "Average Precipitation: " + towns[i].averageRainfall;

                // add content to the container
                card.appendChild(tname);
                card.appendChild(tphoto);
                card.appendChild(tmotto);
                card.appendChild(tfounded);
                card.appendChild(tpop);
                card.appendChild(train);

                document.querySelector("div.cards").appendChild(card);
            }
        }
    });