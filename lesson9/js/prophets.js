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
            
            //Create HTML elements
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let bdate= document.createElement("p");
            let bplace = document.createElement("p");
            let image = document.createElement("img");
            
            // Add details and attributes
            h2.textContent = prophets[i].name + " " + prophets[i].lastname;
            bdate.textContent = "Date of Birth: " + prophets[i].birthdate;
            bplace.textContent = "Place of Birth: " + prophets[i].birthplace;

            image.setAttribute("src", prophets[i].imageurl);
            image.setAttribute("alt", prophets[i].name + " " + prophets[i].lastname + " - " + prophets[i].order);

            // Add content to the container
            card.appendChild(h2);
            card.appendChild(bdate);
            card.appendChild(bplace);
            card.appendChild(image);

            document.querySelector("div.cards").appendChild(card);
            
        }
    });