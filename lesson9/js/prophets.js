const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL) // get the json file from the defined page
    .then(function (response) {
        return response.json(); //return promise and extract json
    })
    .then(function (jsonObject) { //grabs the converted json => js information
        console.table(jsonObject); // temporary checking for valid response and data parsing

        // store results of JSON => JS in an array
        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');

            h2.textContent = prophets[i].name + " " + prophets[i].lastname;

            card.appendChild(h2);

            document.querySelector("div.cards").appendChild(card);

            let p = document.createElement("p");

            p.textContent = "Date of Birth: " + prophets[i].birthdate  +  "Place of Birth: " + prophets[i].birthplace;

            card.appendChild(p);

            let image = document.createElement("img");

            image.setAttribute("src", prophets[i].imageurl);

            card.appendChild(image);
        }
    });