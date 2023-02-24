let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("I am inside Promise");
  }, 2000);

  resolve("My Promise Execute Successful");
});

p.then((value) => {
    console.log(value);
})

p.then(() => {
    console.log('Congratulations');
})

p.then(() => {
    alert("Promise resolved");
})