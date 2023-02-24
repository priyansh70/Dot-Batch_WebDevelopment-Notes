// // The Promise.race() method returns a promise 
// that fulfills or rejects as soon as one of the 
// promises in an iterable fulfills or rejects, with 
// the value or reason from that promise.

let p1 = new Promise((resolve,reject) => {
    setTimeout(() => { resolve("Promise1") }, 3000)
}); 

let p2 = new Promise((resolve,reject) => {
    setTimeout(() => { reject(new Error("OO MM GG Error Comes")) }, 2000)
}); 

let p3 = new Promise((resolve,reject) => {
    setTimeout(() => { resolve("Promise3") }, 1000)
}); 


let race = Promise.race([p1,p2,p3]);
race.then((value) => {
    console.log(value);
}).catch((err) => {console.log(err);});
