// - - - - - - - - - - - -Tab Handling- - - - - - - - - - - -
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const userInfoContainer = document.querySelector(".userInfoContainer");
const grantAccessContainer = document.querySelector(
    ".grantLocationContainer"
);
const searchForm = document.querySelector("[data-searchForm ]");
const searchInput = document.querySelector("[data-searchInput]");
const apiErrorContainer = document.querySelector(".api-error-container");

// Initial Variables 
let oldTab = userTab;
const API_KEY = "168771779c71f3d64106d8a88376808a";
oldTab.classList.add("current-tab");


function switchTab(newTab) {
    if (newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if (!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            // currently on search tab now switch to your weather 
            searchForm.classList.remove("active");
            userInfoContainer.classList.add("active");

            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab(searchTab);
});

// check if cordinates are already present in session storage 
function getfromSessionStorage() {
    const localCordinates = sessionStorage.getItem("user-cordinates");

    if (!localCordinates) {
        // agr local coordinates nahi mile 
        grantAccessContainer.classList.add("active");

    }
    else {
        const coordinates = JSON.parse(localCordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const [lat, lon] = coordinates;

    // make grantContainer Invisible 
    grantAccessContainer.classList.remove("active");

    // make loader visible 
    loadingScreen.classList.add("active");

    // API CALL 
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}
        `);

        const data = await response.json();
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');

        renderWeatherInfo(data);
    }
    catch (err) {
        loadingScreen.classList.remove('active');
    }
}

function renderWeatherInfo() {
    // fistly , we have to fetch the elements 
    // console.log("Weather Info", weatherInfo);
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    //   Fetch Value from weatherInfo and put it UI Element 
    cityName.innerText = weatherIcon?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.main;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp.toFixed(2)} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed.toFixed(2)}m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {

    }
}

function showPosition() {
    const userCoordinate = {
        lat: showPosition.coords.latitude,
        lon: showPosition.coords.longitude,
    }

    sessionStorage.setItem['userCoordinate', JSON.stringify(userCoordinate)];
    fetchUserWeatherInfo(userCoordinate);
}

const grantAccessButton = document.querySelector('[data-grantAccess]');
grantAccessButton.addEventListener('click', getLocation);

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let cityName = 
});