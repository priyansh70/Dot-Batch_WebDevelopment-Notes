// Hoisting 
"use strict";
// Not declared but it gives output 
console.log(sum(10,45)); // 55

function sum(a,b)
{
    return a+b;
}

// In Variables it is happens with only var varible 
// let and const type variable also have hoisting but not declare by undefined just like var

console.log(x) //undefined
var x;
x = 10;

// Now Try Let 
console.log(y) //access b4 intialization that mean it top the declaration but not intialize it with undefined

let y;
y = 10;


// Another Method = "use strict"
//For Avoid this we use -  "use strict" at the top of file;
i = 10;
console.log(i); //10 not error


// Now comes error 