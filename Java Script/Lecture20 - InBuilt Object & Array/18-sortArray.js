let arr = [10,45,30,46,5,14,67,46];
console.log(arr);

arr.sort();
console.log(arr); // This sort function sort as a string 

// so we have to sort by callback function 
let sortedArray = arr.sort((a,b) => a-b);
console.log(sortedArray);   