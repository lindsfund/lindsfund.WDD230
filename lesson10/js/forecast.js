

fetch (apiURL)
    .then(response => response.json())
    .then(jsObject => {

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast);

        const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        
        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt_txt);
    
            const wDay = weekdays[d.getDay()];
            console.log(wDay);

            let kelvin = forecast[day].main.temp;
            let celsius = kelvin - 273;
            let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
            
            document.getElementById(`forecast${day+1}`).textContent = fahrenheit;
            document.getElementById(`dayofweek${day+1}`).textContent = wDay;
            
        }

    });

