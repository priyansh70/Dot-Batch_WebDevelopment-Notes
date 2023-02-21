// // Promise

// let myPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside Promise2");
//     },5000);
//     // resolve(1445);
//     reject(new Error("Errors"));
// });

// let myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside Promise");
//     },2000);
//     resolve(69);
//     // reject(new Error("Errors"));
// });

// myPromise.then((value) => console.log(value));
// myPromise2.catch((value) => console.log(value));

// -------------------------------

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Timeout1");
//     },2000)
//     resolve(true);
// });

// p1.then(() => {
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Timeout2");
//         },3000)
//         resolve("Promise2 Resolved Success");
//     });
//     return p2;
// }).then((value) => console.log(value));

// ---------------------------------------

// async function abcd(){
//     return 7;
// }
// console.log(abcd());

// ------------------------------------
// async function weather(){
//     let mpWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("MP Weather");
//         },3000);
//     });

//     let upWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("UP Weather");
//         },3000);
//     });

//     let mp = await mpWeather;
//     let up = await upWeather;

//     return [mp, up];
// }

// // weather();

// ------------------------

// let object = {
//     heading : "head"
// };

// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(content);
// }

// utility();

// -------------------------------

// async function helper(){
//     let options ={
//         method : "POST",
//         body : JSON.stringify({
//             title : "foo",
//             body : "bar",
//             userId : 1,
//         }),
//         header : {
//             "Content-Type": "application/json; charset=utf-8",
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response = content.json();
//     return response;
// }

// async function utility(){
//     let ans = await helper;
//     console.log(ans);
// }

// utility();

// --------------------

function outer() {
  const name = "John"; 
  function inner() {
    console.log(`Hello, ${name}!`);
  }
  return inner;
}

const greeting = outer();
greeting(); // logs "Hello, John!"
