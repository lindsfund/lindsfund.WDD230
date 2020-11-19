/*---API code = 5c05f660a88c4f2c5c6b9a3e63c19638
     preston town = 5604473 ---*/

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5c05f660a88c4f2c5c6b9a3e63c19638";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let kelvin = jsObject.list[0].main.temp;
        let celsius = kelvin - 273;
        let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

        document.getElementById("current").textContent = jsObject.list[0].weather[0].description;
        document.getElementById("temp").textContent = fahrenheit;
        document.getElementById("windSpeed").textContent = jsObject.list[0].wind.speed;
        document.getElementById("humidity").textContent = jsObject.list[0].main.humidity;
        
        // const imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[0].weather[0].icon + ".png";
        // document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
        // document.getElementById("icon").setAttribute("alt", desc);

//    capitalize the first letter in the description

//     function toTitleCase(str) {
//         return str.replace(
//             /\w\S*/g,
//             function(txt) {
//                 return txt.charAt(0).toUppcerCase() + txt.substr(1).toLowerCase();

//             }
//         );
//     }
        
    });