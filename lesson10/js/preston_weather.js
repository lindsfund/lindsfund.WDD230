/*---API code = 5c05f660a88c4f2c5c6b9a3e63c19638
     preston town = 5604473 ---*/

const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5c05f660a88c4f2c5c6b9a3e63c19638";

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

        //Loop through forcast array and IF dt_txt has "18:00:00" in it THEN 
        // place temperature in the span for that day. 
        let list2 = [];
        var list1 = jsObject["list"];
        var dIday = ["d1Day", "d2Day", "d3Day", "d4Day", "d5Day"];
        var dITemp = ["d1Temp", "d2Temp", "d3Temp", "d4Temp", "d5Temp"];

        for (let i = 0; i < list1.length; i++) {
            //IF to filter by 18:00
            if (list1[i].dt_txt.includes("18:00:00")) {
                
                list2[i] = list1[i];
                console.log(list2[i]);//comment out before submit

                for (x =0; x < dITemp.length; i++) {
            
                }
                
            }
             // store dt_tx in dIday that coordinated with it's new array location (ie..first loop answer need to go in d1Day, second in d2Day...)
            
            // store temp in dITemp that coordinates with it's new array location
            
            

        }
    });