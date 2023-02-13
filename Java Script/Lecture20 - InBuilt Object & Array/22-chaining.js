let arr = [1,2,3,4,5,6];
let chain = arr.filter(val => val > 2).map(num => num*num).filter(val => val&1);
console.log(chain);