// Date Object 
let date = Date(); //DAte in a string formate
console.log(date);

date = new Date();
console.log(date);

date = new Date(10);
console.log(date);

date = new Date(2003,3,16);
console.log(date);

date = new Date("2003-04-16");
console.log(date);

date = new Date("2003-04-16T11:55:21Z");
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toUTCString());
console.log(date.toJSON());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());


// Get MEthods 
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());


// Set Value 
let birthday = new Date();
console.log(birthday);

birthday.setYear(2003)
console.log(birthday);

birthday.setMonth(03);
console.log(birthday);

birthday.setDate(16);
console.log(birthday);



date = new Date(2003,3,16);
console.log(date);
