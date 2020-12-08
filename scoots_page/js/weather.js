const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=20.4230&lon=-86.9223&exclude=hourly,minutely&units=imperial&appid=5c05f660a88c4f2c5c6b9a3e63c19638`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        // console.log(jsonObject); //comment out before submit

        var t = parseFloat(jsonObject.current.temp);
        // console.log(t); //comment out before submit

        const imgsrc = "https://openweathermap.org/img/wn/" + jsonObject.current.weather[0].icon + "@2x.png";

        document.getElementById("currTemp").innerHTML = Math.round(t) + `&#8457`;
        document.getElementById("condition").innerHTML = jsonObject.current.weather[0].main;
        document.getElementById("humidity").innerHTML = jsonObject.current.humidity + "%";

        // 3 day forecast
        const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

        for (let i = 1; i < 4; i++) {
            //get day of the week
            var unix = parseFloat(jsonObject.daily[i].dt);
            var convrtD = unix * 1000;
            const d = new Date(convrtD);
            const wDay = weekdays[d.getDay()];

            // get temp for same day
            var temp = parseFloat(jsonObject.daily[i].temp.day);
            var roundTemp = Math.round(temp);
            
            // console.log(wDay);
            // console.log(roundTemp);
            //display in HTML
            document.getElementById(`day${i}`).innerHTML = wDay;
            document.getElementById(`temp${i}`).innerHTML = roundTemp + `&#8457`;

        }

    });