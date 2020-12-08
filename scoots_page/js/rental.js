const rentAPI = "data/rental.json"

fetch(rentAPI)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject); //comment out before submit
   
        const rentals = jsonObject['rentals'];
        // console.log(rentals.scooters[0].type);

        for (let i = 0; i < rentals.scooters.length; i ++){
            // console.log(rentals.scooters[i].type);
            // create HTML element
            let table = document.createElement('tr');
            table.className = "vehi";
            let vehicle = document.createElement('td');
            // let riders = document.createElement('td');
            // let resHD = document.createElement('td');
            let resFD = document.createElement('td');
            // let walkHD = document.createElement('td');
            let walkFD = document.createElement('td');

            // fill element with info
            vehicle.innerHTML = rentals.scooters[i].type;
            // riders.innerHTML = rentals.scooters[i].maxperson;
            // resHD.innerHTML = rentals.scooters[i].reserveHD;
            resFD.innerHTML = rentals.scooters[i].reserveFD;
            // walkHD.innerHTML = rentals.scooters[i].walkinHD;
            walkFD.innerHTML = rentals.scooters[i].walkinFD;

            //append to parent
            table.appendChild(vehicle);
            // table.appendChild(riders);
            // table.appendChild(resHD);
            table.appendChild(resFD);
            // table.appendChild(walkHD);
            table.appendChild(walkFD);

            // console.log(vehicle);

            //display in correct place
            document.querySelector("tbody.info").appendChild(table);

        }

        for (let i = 0; i < rentals.sidebyside.length; i ++) {
            // console.log(rentals.sidebyside[i].type);
        }

        for (let i = 0; i < rentals.jeep.length; i ++) {
            // console.log(rentals.jeep[i].type);
        }





    });