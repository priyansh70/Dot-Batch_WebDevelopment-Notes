let promise = new Promise(function(resolve, reject){
    resolve(69);
});

console.log("Hello1");

setTimeout(()=>{
    console.log("Hello2");
},1000)

console.log("Hello3")


console.log(promise);
console.log(typeof promise);