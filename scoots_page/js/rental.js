const rentAPI = "data/rental.json"

fetch(rentAPI)
    .then((response) => response.json())
    .then((jsonObject) => {
        // console.log(jsonObject); //comment out before submit
   
        const rentals = jsonObject['rentals'];
        // console.log(rentals[0].type);

        for (let i = 0; i < rentals.length; i ++){
            // console.log(rentals.scooters[i].type);
            // create HTML element
            let table = document.createElement('tr');
            table.className = "vehiS";
            let vehicle = document.createElement('td');
            let resFD = document.createElement('td');
            let walkFD = document.createElement('td');

            // fill element with info
            vehicle.innerHTML = rentals[i].type;
            resFD.innerHTML = rentals[i].reserveFD;
            walkFD.innerHTML = rentals[i].walkinFD;

            //append to parent
            table.appendChild(vehicle);
            table.appendChild(resFD);
            table.appendChild(walkFD);

            // console.log(vehicle);

            //display in correct place
            document.querySelector("tbody.info").appendChild(table);

        }


    });