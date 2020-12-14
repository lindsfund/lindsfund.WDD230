function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

document.getElementById("LastModified").innerHTML = document.lastModified;

const options = {weekday:'long',  day:'numeric',  month:"long", year: 'numeric'};
    document.getElementById('CurrentDate').textContent = new Date().toLocaleDateString('en-US', options);