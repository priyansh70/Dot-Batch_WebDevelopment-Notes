// API Key
const API_KEY = "168771779c71f3d64106d8a88376808a";

// Tab Switching 
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
let currentTab = userTab;
const searchForm = document.querySelector("[data-searchForm]");
const userInfoContainer = document.querySelector(".showWeatherContainer");
const grantAccessContainer = document.querySelector(
  ".grantLocationContainer"
);

// console.log(userTab);
// console.log(searchTab);

function switchTab(newTab){
    // check if newTab is already selected or not 
    if(currentTab !== newTab)
    {
        currentTab.classList.remove("currentTab");
        currentTab = newTab;
        currentTab.classList.add("currentTab");

        // Check which TAb is Selected - search / your

        if(!searchForm.classList.contains("active")){
            searchForm.classList.add("active");
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
        }
        else{
            searchForm.classList.remove("active"); 
            userInfoContainer.classList.remove("active");
            
        }
    }
}

userTab.addEventListener('click', () => {
    switchTab(userTab);
});

searchTab.addEventListener('click', () => {
    switchTab(searchTab);
});