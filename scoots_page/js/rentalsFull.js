const rentAPI = "data/rental.json"

fetch(rentAPI)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject); //comment out before submit
   
        const rentals = jsonObject['rentals'];

        function generateTable(table,data) {
            for(let element of data) {
                let row = table.insertRow();
                for (key in element) {
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key]);
                    cell.appendChild(text);
                }
            }
        }
        let table = document.querySelector('.scooters');
        let data = rentals.scooters;
        generateTable(table,data);
 
        // for (let i = 0; i < rentals.scooters.length; i ++){
        //     console.log(rentals.scooters[i].type);


        //     // document.querySelectorAll('.name').innerHTML  = rentals.scooters[i].type;
        //     // document.querySelectorAll('.rhd').innerHTML  = rentals.scooters[i].reserveHD;
        //     // document.querySelectorAll('.rfd').innerHTML  = rentals.scooters[i].reserveFD;
        //     // document.querySelectorAll('.wihd').innerHTML  = rentals.scooters[i].walkinHD;
        //     // document.querySelectorAll('.wifd').innerHTML  = rentals.scooters[i].walkinFD;
        //     // document.querySelectorAll('.maxRide').innerHTML  = "Max Riders: " + rentals.scooters[i].maxperson;
        // }

        
    });