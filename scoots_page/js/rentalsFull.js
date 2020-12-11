const rentAPI = "data/rental.json"

fetch(rentAPI)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject); //comment out before submit

        const rentals = jsonObject['rentals'];


        for (let i = 0; i < rentals.length; i++) {
           

            // create HTML element
            let table = document.createElement('table');
            table.className = 'scooters';

            let picture = document.createElement('tr');
            let imgTD = document.createElement('td');
            imgTD.colSpan = "4";
            let image = document.createElement('img');
            

            let card = document.createElement('tr');
            card.className = 'name';
            let vehicle = document.createElement('th');
            vehicle.colSpan = "4";
            
            let type = document.createElement('tr');
            type.className = 'type';
            let res = document.createElement('td');
            res.colSpan = "2";
            let walk = document.createElement('td');
            walk.colSpan = "2";

            let day = document.createElement('tr');
            day.className = "day";
            let fd1 = document.createElement('td');
            let hd1 = document.createElement('td');
            let fd2 = document.createElement('td');
            let hd2 = document.createElement('td');

            
            let booking = document.createElement('tr');
            let fdr = document.createElement('td');
            let hdr = document.createElement('td');
            let fdwi = document.createElement('td');
            let hdwi = document.createElement('td');

            let riders = document.createElement('tr');
            riders.className = 'riders';
            let maxride = document.createElement('td');
            maxride.colSpan = "4";

            // fill element with info
            image.setAttribute('src', 'images/' + rentals[i].photo);
            image.setAttribute('alt',rentals[i].type);
            vehicle.innerHTML = rentals[i].type;
            fdr.innerHTML = rentals[i].reserveFD;
            hdr.innerHTML = rentals[i].reserveHD;
            fdwi.innerHTML = rentals[i].walkinFD;
            hdwi.innerHTML = rentals[i].walkinHD;
            maxride.innerHTML = "Max Riders: " + rentals[i].maxperson;
            res.innerHTML = "Reserved";
            walk.innerHTML = "Walk-in";
            fd1.innerHTML = "Full Day";
            hd1.innerHTML = "Half Day";
            fd2.innerHTML = "Full Day";
            hd2.innerHTML = "Half Day";


            //append to parent
            table.appendChild(picture);
            table.appendChild(card);
            table.appendChild(type);
            table.appendChild(day);
            table.appendChild(booking);
            table.appendChild(riders);

            picture.appendChild(imgTD);
            imgTD.appendChild(image);
            card.appendChild(vehicle);
            booking.appendChild(fdr);
            booking.appendChild(hdr);
            booking.appendChild(fdwi);
            booking.appendChild(hdwi);
            type.appendChild(res);
            type.appendChild(walk);
            day.appendChild(fd1);
            day.appendChild(hd1);
            day.appendChild(fd2);
            day.appendChild(hd2);
            riders.appendChild(maxride);

            //display in correct place
            document.querySelector('#cards').appendChild(table);
 
        }


    });