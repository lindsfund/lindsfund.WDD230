const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=20.4230&lon=-86.9223&exclude=hourly,minutely&units=imperial&appid=5c05f660a88c4f2c5c6b9a3e63c19638`;

fetch(apiURL)
.then((response) => response.json())
.then((jsonObject) => {
    console.log(jsonObject); //comment out before submit

    var t = parseFloat(jsonObject.current.temp);
    console.log(t);//comment out before submit

    const imgsrc = "https://openweathermap.org/img/wn/" + jsonObject.current.weather[0].icon + "@2x.png";

    document.getElementById("currTemp").innerHTML = Math.round(t) + `&#8457`;
    document.getElementById("condition").setAttribute("src",imgsrc);
    document.getElementById("condition").setAttribute("alt",jsonObject.current.weather[0].main);
    document.getElementById("humidity").innerHTML = jsonObject.current.humidity + "%";
    
})