// Write a program that takes a number and calculates the sum of all numbers from 1 to that number. 
function sumOfNumbers(number) {
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum += i;
    }
    return sum;
}


console.log(sumOfNumbers(10));