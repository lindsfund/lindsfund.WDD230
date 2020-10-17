function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");

}

const options = {weekday:'long',  day:'numeric',  month:"long", year: 'numeric'};
    document.getElementById('CurrentDate').textContent = new Date().toLocaleDateString('en-US', options);


let d = new Date();

d.getDay();

if (d.getDay() == 5) {
    document.querySelector('.condBanner').getElementsByClassName.display = "block";
} else {
    document.querySelector('.condBanner').getElementsByClassName.display = "none";
}