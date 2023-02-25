// async function returns a promise

// #1
// async function temp(){
//     return 5;
// }

// temp().then((value) => console.log(value));

// #2
// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = await promise;

//   console.log(result); // "done!"
// }

// f();

// #3

async function fun1() {
  let delhiWeather = new Promise((resolve, reject) => {
    resolve("27 Deg");
  });

  let mumbaiWeather = new Promise((resolve, reject) => {
    resolve("25 Deg");
  });

  // delhiWeather.then(alert);
  // mumbaiWeather.then(alert);

  console.log("Fetching Weather of Delhi");
  let delhiW = await delhiWeather;
  console.log("Delhi Weather: " + delhiW);

  console.log("Fetching Weather of Mumbai");
  let mumbaiW = await mumbaiWeather;
  console.log("Mumbai Weather: " + mumbaiW);

  return [delhiW, mumbaiW];
}

fun1();
