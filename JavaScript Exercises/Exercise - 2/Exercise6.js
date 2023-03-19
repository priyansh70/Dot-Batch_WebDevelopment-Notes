// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

function sum(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

const array = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(sum(array));