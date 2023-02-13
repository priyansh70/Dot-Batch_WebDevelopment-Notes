// Three wAys 
// #1 - arr - []
let arr = [1,2,5,4,7];
console.log(arr);

let arr1 = arr;

arr = []
console.log(arr); //Empty
console.log(arr1);


// #2 - length = 0 
let arr2 = arr1;
arr1.length = 0;
console.log(arr1);
console.log(arr2);

// #3 - splice 
let array = [1,5,6,7,8,9];
console.log(array);

array.splice(0,array.length);
console.log(array);