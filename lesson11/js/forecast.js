var city = document.querySelector("h1.mainHead").textContent;
const apiTest = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=5c05f660a88c4f2c5c6b9a3e63c19638";
if (city == "Preston, Idaho"){
 var apiURL = apiTest.replace("id=5604473","id=5604473");
}else if(city == "Soda Springs, Idaho"){
    var apiURL = apiTest.replace("id=5604473","id=5607916");
}else if(city == "Fish Haven, Idaho") {
    var apiURL = apiTest.replace("id=5604473","lat=42.0380399&lon=111.4048681");
}


fetch (apiURL)
    .then(response => response.json())
    .then(jsObject => {

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        // console.log(forecast);

        const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        
        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt_txt);
    
            const wDay = weekdays[d.getDay()];
            // console.log(wDay);
            
            const imagesrc = "https://openweathermap.org/img/wn/" + forecast[day].weather[0].icon + "@2x.png";

            var fTemp = parseFloat(forecast[day].main.temp);

            document.getElementById(`forecast${day+1}`).innerHTML = Math.round(fTemp) + `&#8457`;
            document.getElementById(`dayofweek${day+1}`).textContent = wDay;
            document.getElementById(`imgIcon${day+1}`).setAttribute("src", imagesrc);
            document.getElementById(`imgIcon${day+1}`).setAttribute("alt", forecast[day].weather[0].main);

        }

    });

