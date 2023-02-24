let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => console.log("From Promise 1"), 5000);
  resolve(69);
});


let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => console.log("From Promise 2"), 5000);
  reject(new Error("Error while trying to resolve"));
});


promise1.then((value) => console.log(value));
// promise1.then((value) => console.log(value),(error) => console.log(error));

promise2.catch((error) => console.log(error));
