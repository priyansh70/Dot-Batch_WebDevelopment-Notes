// API of Weather
let p = fetch("https://goweather.herokuapp.com/weather/MDS");
p.then((response) => {
  console.log(response.status);
  console.log(response.ok);
  console.log(response.headers);
  return response.json();
}).then((result) => console.log(result));
