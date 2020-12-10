const rentAPI = "data/rental.json"

fetch(rentAPI)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject); //comment out before submit
   
        const rentals = jsonObject['rentals'];
        console.log(rentals.scooters[0].type);

        for (i=0; i<rentals.scooters[i].length; i++) {
            document.querySelector('name').innerHTML  = rentals.scooters[i].type;
        }

        
    });