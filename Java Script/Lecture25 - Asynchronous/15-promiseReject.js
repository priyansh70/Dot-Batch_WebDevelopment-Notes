// The Promise.reject() method is used to return a 
// rejected Promise object with a given reason for rejection. 

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Error in Promise1"));
    }, 3000);
  });
  
  let reject = Promise.reject(new Error("Rejected Promise 1"));
  reject.catch((value) => {
    console.log(value);
  });
  