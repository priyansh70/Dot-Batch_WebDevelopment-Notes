// Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

function createCounter()
{
    let counter = 0;
    return function()
    {
        counter++;
        return counter;
    }
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());