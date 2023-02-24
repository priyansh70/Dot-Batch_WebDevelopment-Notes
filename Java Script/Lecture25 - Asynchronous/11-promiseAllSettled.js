// The Promise.allSettled() method in JavaScript is used to get a promise when all inputs are settled that is either fulfilled or rejected.
let p1 = new Promise((resolve,reject) => {
    setTimeout(() => { resolve("Promise1") }, 3000)
}); 

let p2 = new Promise((resolve,reject) => {
    setTimeout(() => { reject(new Error("OO MM GG Error Comes")) }, 2000)
}); 

let p3 = new Promise((resolve,reject) => {
    setTimeout(() => { resolve("Promise3") }, 1000)
}); 


let promiseSettled = Promise.allSettled([p1,p2,p3]);
promiseSettled.then((value) => {
    console.log(value);
});


