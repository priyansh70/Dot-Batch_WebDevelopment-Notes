// Write a program that takes a number and prints the multiplication table for that number. 
const multiplicationTable = (number) => {
    let i = 1;
    for (i; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

multiplicationTable(12);