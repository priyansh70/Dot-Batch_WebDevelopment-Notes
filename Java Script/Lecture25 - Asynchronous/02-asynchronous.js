// Functions running in parallel with other
// functions are called asynchronous

// A good example is JavaScript setTimeout()

let num1 = 10;
let num2 = 20;

setTimeout(() => {
  console.log(num1, num2);
}, 5000);

setTimeout(() => {
  console.log("Sum: ", num1 + num2);
}, 5000);

console.log("Hellow World: ");
