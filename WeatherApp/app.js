var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");
var body = document.querySelector("body");

async function changeWeatherUI(capitalSearch) {
  let apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=2a12320e9c02e52b30338f259009f53d`;

  let data = await fetch(apiKey).then((res) => res.json());
  console.log(data);
  if (data.cod === 200) {
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "(m)";
    wind.innerText = data.wind.speed + "m/s";
    sun.innerText = data.main.humidity + "%";
    value.innerText = Math.round(data.main.temp - 273.15);
    let temp = Math.round(data.main.temp - 273.15);
    shortDesc.innerText = data.weather[0].main;
    time.innerText = new Date().toLocaleString("vi");

    body.setAttribute("class", "hot");
    if (temp <= 25 && temp > 22) {
      body.setAttribute("class", "cool");
    } else if (temp <= 22 && temp > 19) {
      body.setAttribute("class", "warm");
    } else if (temp < 19) {
      body.setAttribute("class", "cold");
    }
  } else {
    content.classList.add("hide");
  }
}

search.addEventListener("keypress", function (event) {
  if (event.code === "Enter") {
    let capitalSearch = search.value.trim();
    changeWeatherUI(capitalSearch);
  }
});

changeWeatherUI("Ha Noi");
