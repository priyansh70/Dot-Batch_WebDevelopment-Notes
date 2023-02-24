let p1 = new Promise((resolve,reject) => {
    setTimeout(() => { resolve("Promise1") }, 3000)
}); 

let p2 = new Promise((resolve,reject) => {
    setTimeout(() => { reject(new Error("OO MM GG Error Comes")) }, 2000)
}); 

let p3 = new Promise((resolve,reject) => {
    setTimeout(() => { resolve("Promise3") }, 1000)
}); 


// Promise All Method 
// Promise all waits for all promise to resolve and returns the array of their result
let promiseAll = Promise.all([p1,p2,p3]);
promiseAll.then((value) => {
    console.log(value);
}).catch((err) => {console.log(err);});
