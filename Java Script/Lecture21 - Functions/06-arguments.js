let add = function addTwoNumbers(a,b)
{
    // console.log(arguments);
    let sum = 0;
    for(let key of arguments)
        sum += key;
    return sum; 
}

let num1 = Math.round(Math.random() * 100);
let num2 = Math.round(Math.random() * 100);
let num3 = Math.round(Math.random() * 100);
let num4 = Math.round(Math.random() * 100);
let num5 = Math.round(Math.random() * 100);
let num6 = Math.round(Math.random() * 100);
let num7 = Math.round(Math.random() * 100);
let num8 = Math.round(Math.random() * 100);

console.log(add(num1,num2,num3,num4,num5,num6,num7,num8));   