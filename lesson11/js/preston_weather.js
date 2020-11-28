/*---API code = 5c05f660a88c4f2c5c6b9a3e63c19638
     preston town = 5604473 
     soda springs = 5607916
     fish haven = 5585010---*/
var city = document.querySelector("h1.mainHead").textContent;
const apiTestCurrent = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5c05f660a88c4f2c5c6b9a3e63c19638";
if (city == "Preston, Idaho"){
 var apiURL = apiTestCurrent.replace("id=5604473","id=5604473");
}else if(city == "Soda Springs, Idaho"){
    var apiURL = apiTestCurrent.replace("id=5604473","id=5607916");
}else if(city == "Fish Haven, Idaho") {
    var apiURL = apiTestCurrent.replace("id=5604473","lat=42.0380399&lon=111.4048681");
}


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        var t = parseFloat(jsObject.main.temp);
        var s = parseFloat(jsObject.wind.speed);
        

        document.getElementById("current").textContent = jsObject.weather[0].main;
        document.getElementById("temp").innerHTML = Math.round(t) + `&#8457`;
        document.getElementById("windSpeed").textContent = Math.round(s);
        document.getElementById("humidity").textContent = jsObject.main.humidity;

        
        
        function windChill(t,s) {
            if((t<=50) && (s>=3)){
              var output = Math.round((35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s,0.16))) + (0.4275 * (t*(Math.pow(s,0.16))))) + `&#8457`;
            } else {
              var output = "N/A";
            }
            return output;
            
          }
    
          document.getElementById("windChill").innerHTML = windChill(t,s);


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