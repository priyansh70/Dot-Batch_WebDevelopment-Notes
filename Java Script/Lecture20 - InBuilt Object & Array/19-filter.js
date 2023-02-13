let arr = [1,23,53,5,6,53,5,4,43,45,7,48,67,8,7,4,6,7,8,5];
console.log(arr);

// Filter which values are greater than 4 and divde by 4
let ans = arr.filter(value => value > 4 && value % 4 === 0);
console.log(ans);