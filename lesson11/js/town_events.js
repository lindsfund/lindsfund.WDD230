const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// get which town page I'm on and make it a variable to use in filter
let cityEvent = document.querySelector("h1.mainHead").innerHTML;
let townName = "";

//fill townName var with city
if (cityEvent == "Preston, Idaho"){
    townName = "Preston";
} else if (cityEvent == "Fish Haven, Idaho"){
    townName = "Fish Haven";
} else if (cityEvent == "Soda Springs, Idaho") {
    townName = "Soda Springs";
}
// console.log(townName);
// console.log(cityEvent);

// fetch URL
fetch(requestURL)
.then((response) => response.json())
.then((jsonObject) => {
    let towns = jsonObject['towns'];
  
    //filter results of fetch by page/town name
    let currTown = towns.filter(i => (i.name == townName));
    // console.log(currTown);
   
//create elements ul/li
    let ul = document.createElement('ul'); //inside div

//array for li element
let townEvents = currTown[0].events;
townEvents.forEach(eventDetail => {
    let li = document.createElement("li");
    li.innerHTML = eventDetail;
    ul.appendChild(li);
});

//add content to page
document.querySelector("div.cityNameEvents").appendChild(ul);
});


