function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "dea073209150dae36ee6bf53e41aae85";
    // console.log(position);
    //console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    fetch(url).then(response => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerHTML = data.name;
        weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoErrer() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErrer);