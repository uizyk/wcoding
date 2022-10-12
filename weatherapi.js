/**
 * Function calling the API weather
 *
 * @param {String} inCity The city searched by the user
 * @param {String} APP_ID the weather API KEY
 */
function gettingInfo(inCity, APP_ID) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "http://api.openweathermap.org/data/2.5/forecast/?units=metric&q=" +
      inCity +
      "&APPID=" +
      APP_ID
  );
  xhr.addEventListener("load", function (e) {
    if (e.target.status === 200) {
      displayHTML(JSON.parse(e.target.responseText));
    } else {
      displayNotFound(e.target);
      e.target.abort();
    }
  });
  xhr.send(null);
}

/**
 * Create a div html element containing the weather of the day
 *
 * @param {JSON} data object containing infos on th eday weather
 * @param {String} cityName the city name from where you want the weather
 * @param {Boolean} extendedInfos enable to true if you want detailled infos
 * @returns {HTMLDivElement} the constructed div element
 */
function createDivForecast(data, cityName, extendedInfos = false) {
  let div = document.createElement("div");
  div.classList.add("forecast");
  if (extendedInfos) {
    let city = document.createElement("div");
    city.id = "cityNameText";
    city.appendChild(document.createTextNode(cityName));
    div.appendChild(city);
  }
  // icon
  let icon = document.createElement("img");
  let containerIcon = document.createElement("div");
  iconCode = data.weather[0].icon;
  icon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  containerIcon.appendChild(icon);
  div.appendChild(containerIcon);

  // temperature
  let containerTemp = document.createElement("div");
  containerTemp.id = "temp";
  containerTemp.appendChild(document.createTextNode(data.main.temp + "°"));
  div.appendChild(containerTemp);

  // description
  let containerDesc = document.createElement("div");
  containerDesc.textContent = data.weather[0].description;
  div.appendChild(containerDesc);

  if (extendedInfos) {
    let containerWindPressure = document.createElement("div");
    let containerHumiCloud = document.createElement("div");
    // windspeed
    let wind = document.createElement("span");
    wind.textContent = "wind: " + data.wind.speed + " m/s";
    containerWindPressure.appendChild(wind);
    // pressure
    let pressure = document.createElement("span");
    pressure.textContent = "Pressure: " + data.main.pressure + " hPa";
    containerWindPressure.appendChild(pressure);
    // humidity
    let humidity = document.createElement("span");
    humidity.textContent = "humidity: " + data.main.humidity + "%";
    containerHumiCloud.appendChild(humidity);
    //cloudiness
    let cloudiness = document.createElement("span");
    cloudiness.textContent = "Cloudiness: " + data.clouds.all + "%";
    containerHumiCloud.appendChild(cloudiness);

    div.appendChild(containerWindPressure);
    div.appendChild(containerHumiCloud);
  }
  return div;
}
/**
 *
 * @param {JSON} jsonObj The JsonObj from the request to the API
 */
function displayHTML(jsonObj) {
  var weather = document.querySelector("#weather");
  weather.innerHTML = "";
  let container = document.createElement("div");
  container.id = "otherDays";
  for (let i = 0; i < jsonObj.list.length; i += 8) {
    let div;
    if (i == 0) {
      div = createDivForecast(jsonObj.list[i], jsonObj.city.name, true);
      let maincontainer = document.createElement("div");
      maincontainer.id = "mainDay";
      maincontainer.appendChild(div);
      weather.appendChild(maincontainer);
    } else {
      div = createDivForecast(jsonObj.list[i], jsonObj.city.name);
      container.appendChild(div);
      weather.appendChild(container);
    }

    div.id = "forecast" + i;
  }

  // if you don't use the dt from the api this is a way to find the day by yourself.
  let daydiv = document.querySelectorAll("#mainDay>div, #otherDays>div");
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let counterDay = new Date().getDay();

  for (let j = 0; j < daydiv.length; j++) {
    let imgContainer = daydiv[j].querySelector("img").parentElement;
    if (counterDay > 6) {
      counterDay = 0;
    }
    daydiv[j].insertBefore(
      document.createTextNode(weekday[counterDay++]),
      imgContainer
    );
  }
}
/**
 *
 * @param {XMLHttpRequest} xhr The xhr Object from the API request
 */
function displayNotFound(xhr) {
  var weather = document.querySelector("#weather");
  weather.innerHTML = "";

  let notFound = document.createElement("div");
  let notFoundContainer = document.createElement("div");
  notFoundContainer.id = "notFoundContainer";
  notFound.title = `${xhr.status} - ${xhr.statusText}`;
  notFound.id = "notFound";
  notFound.textContent = `${xhr.status} - ${xhr.statusText}`;
  notFoundContainer.appendChild(notFound);
  weather.appendChild(notFoundContainer);
}

//////////////////////////////////////////////////////////////////////////
////////////////////////////EXECUTION////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const APP_ID = "2dd1280c0b5d4af2d4dfb888d32ec409"; // my api key
function init() {
  document.querySelector("#cityName").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      // enter key
      gettingInfo(e.target.value, APP_ID);
    }
  });
}
init();
