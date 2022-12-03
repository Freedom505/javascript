const API_KEY = "a5dbd249a26b76ff9dcad6b2c2f3475c";

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0].main;
      const city = data.name;
      const temp = data.main.temp;

      const spanCity = document.querySelector("#weather span:first-child");
      const spanWeather = document.querySelector("#weather span:nth-child(2)");
      const spanTemp = document.querySelector("#weather span:last-child");

      spanCity.innerText = `@${city}`;
      spanWeather.innerText = weather;
      spanTemp.innerText = temp;
    });
}

function geoError() {
  alert("Can't find your location!");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
