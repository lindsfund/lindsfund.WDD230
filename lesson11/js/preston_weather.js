/*---API code = 5c05f660a88c4f2c5c6b9a3e63c19638
     preston town = 5604473 
     soda springs = 5607916
     fish haven = 5585010---*/
var city = document.querySelector("h1.mainHead").textContent;
const apiTest = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5c05f660a88c4f2c5c6b9a3e63c19638";
if (city == "Preston, Idaho"){
 var apiURL = apiTest.replace("5604473","5604473");
}else if(city == "Soda Springs, Idaho"){
    var apiURL = apiTest.replace("5604473","5607916");
}else if(city == "Fish Haven, Idaho") {
    var apiURL = apiTest.replace("5604473","5585010");
}


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let kelvin = jsObject.list[0].main.temp;
        let celsius = kelvin - 273;
        let fahrenheit = Math.floor(celsius * (9 / 5) + 32) + `&#8457`;

        document.getElementById("current").textContent = jsObject.list[0].weather[0].main;
        document.getElementById("temp").innerHTML = fahrenheit;
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