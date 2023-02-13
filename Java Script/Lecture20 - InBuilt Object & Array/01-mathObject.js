// Math object 

// Properties 
// #1 - Euler Number 
console.log(Math.E);

// #2 - PI 
console.log(Math.PI);

// #3 - Log2E
console.log(Math.LOG2E);
    

// Methods 

// #1 - Round 
console.log(Math.round(12.79)); // 13
console.log(Math.round(12.49)); // 12

// #2 - Ceil 
console.log(Math.ceil(12.79)); //13

// #3 - Floor 
console.log(Math.floor(12.79)); //12

// #4 - Random 
console.log(Math.random()); //....................

// #5 - min 
console.log(Math.min(10,12)); //10

// #6 - Random 
console.log(Math.max(10,12)); //12

// #7 - pow 
console.log(Math.pow(2,10)); //1024


// Returning a random integer between two bounds
// LowerBound - 40 
// Upper Bound - 100
console.log(Math.round(Math.random() * (100 - 40)) + 40);