// This method returns a promise that fulfills or
// rejects as soon as resolve of the promises, which we
// have passed inside the iterable object-like array,
// gets successfully fulfilled or resolved.

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1");
  }, 3000);
});

let resolve = Promise.resolve("Resolved Promise 1");
resolve
  .then((value) => {
    console.log(value);
  });
