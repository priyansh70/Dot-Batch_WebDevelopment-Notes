let arr = [1,23,53,5,6,53,5,4,43,45,7,48,67,8,7,4,6,7,8,5];
console.log(arr);

// Mapping Each Number to its corresponding Square
let arrSquare = arr.map(val => val * val);
console.log(arrSquare);

let objArray = arr.map(val => {return{Element : val}});
console.log(objArray);