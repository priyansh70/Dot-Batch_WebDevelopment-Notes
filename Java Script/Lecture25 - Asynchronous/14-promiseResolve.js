// The promise.resolve() method in JS returns a
// Promise object that is resolved with a given value.
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1");
  }, 3000);
});

let resolve = Promise.resolve("Resolved Promise 1");
resolve.then((value) => {
  console.log(value);
});
