const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5c05f660a88c4f2c5c6b9a3e63c19638";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject); //comment out before submit

        let kelvin = jsObject.list[0].main.temp;
        let celsius = kelvin - 273;
        let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

        document.getElementById("current").textContent = jsObject.list[0].weather[0].description;
        document.getElementById("temp").textContent = fahrenheit;
        document.getElementById("windSpeed").textContent = jsObject.list[0].wind.speed;
        document.getElementById("humidity").textContent = jsObject.list[0].main.humidity;

        //Loop through forcast array look for next five days and IF dt_txt has "18:00:00" in it THEN 
        // place temperature in the span for that day. 

        const list = jsObject["list"];

        for (let i = 0; i < list.length; i++) {
            if (list[i].dt_txt.includes("18:00:00")) {
                console.table(list[i].dt_txt); //comment out before submit
               
                
            }


        }
    });