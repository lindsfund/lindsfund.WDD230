const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5c05f660a88c4f2c5c6b9a3e63c19638";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
       
        
        let kelvin = jsObject.list[0].main.temp;
        let celsius = kelvin - 273;
        let fahrenheit = Math.floor(celsius * (9/5) + 32);

        // get location to place and place cerrent temp (main.temp) there
        document.getElementById('current-temp').textContent = fahrenheit;

        const imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[0].weather[0].icon + ".png"
        const desc = jsObject.list[0].weather[0].description; //note how we referance weather array

        document.getElementById("imagesrc").innerHTML = imagesrc; // informational specification only
        document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
        document.getElementById("icon").setAttribute("alt", desc);
    });