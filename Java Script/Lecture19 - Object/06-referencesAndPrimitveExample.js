// Primitive Make Copy 
let a = 10;
let b = a;

a++;
console.log(a); //11
console.log(b); //10

// Reference Points Memory Location 
let c = {value:10};
let d = c;

c.value++;
console.log(c.value) //11
console.log(d.value) //11

