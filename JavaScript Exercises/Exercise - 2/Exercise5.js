// Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += !(number & 1) ? number : 0;
        // console.log(number)
    }
    return sum;
}

const array = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(sumEvenNumbers(array));