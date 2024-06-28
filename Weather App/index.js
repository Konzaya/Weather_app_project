const apiKey = "22b281f184fcdfcd68f3ab6e111aef96";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "cloudy.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "clear.jpg";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rainy.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "snow.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "drizzle.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
