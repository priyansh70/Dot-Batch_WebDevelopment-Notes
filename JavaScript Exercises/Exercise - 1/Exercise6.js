// Write a program that takes a number and checks whether it is positive, negative, or zero
function checkNumber(number) {
    return number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
}

console.log(checkNumber(10));
console.log(checkNumber(0));
console.log(checkNumber(-10));