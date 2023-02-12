// MAth
console.log(Math.random());
console.log(Math.round(1.6));
console.log(Math.abs(3 - 7));
console.log(Math.max(1, 6));
console.log(Math.min(1, 6));

// String
console.log("String Object");
let lastName = "Patel";
console.log(typeof lastName);

let firstName = new String("Priyansh");
console.log(typeof firstName);

let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);

console.log(firstName.length);
console.log(firstName.includes("Pri"));
console.log(firstName.startsWith("Pri"));
console.log(firstName.endsWith("Pri"));
console.log(firstName[0]);
let anotherName = firstName.replace("Priyan", "khu") + "i";
console.log(anotherName);

let string = "    this is   a  string  ";
console.log(string);
string = string.trim();
console.log(string);

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

let wordsInString = string.split(" ");
console.log(wordsInString);

// Template Literals

let message = `This is a 
message for 
template literals`;

console.log(message);

// Date Objects
let date = new Date();
console.log(date);

let date2 = new Date("apr 16 2003 11   :15:00").toString();
console.log(date2);

date.setFullYear(2000);
console.log(date);

console.log(date.getFullYear());

// Array
let arr = [1, 4, 5, 7, 5, 6, 4];
console.log(arr);
console.log(arr[3]); //7

// Insertion
arr.push(10);
arr.unshift(0);
arr.splice(4, 0, "Priyansh"); //index numberOfDeletedElements ValueInserted

console.log(arr);

// Searching
console.log(arr.indexOf(4));
console.log(arr.indexOf(14));

arr.includes(4) ? console.log("Present") : console.log("Absent");

arr.includes(14) ? console.log("Present") : console.log("Absent");

// Array of Object
let courses = [
  {
    No: 1,
    NAme: "Priyansh",
  },
  {
    No: 2,
    NAme: "Harshit",
  },
];
console.log(courses);

// Includes and indexOf not works with references 
// console.log(
//   courses.includes({
//     No: 1,
//     NAme: "Priyansh",
//   })
// );

// console.log(
//   courses.indexOf({
//     No: 1,
//     NAme: "Priyansh",
//   })
// );


let course = courses.find(function(course) {
    return course.NAme === "Priyansh";
});

console.log(course);

course = courses.find(function(course) {
    return course.NAme === "Bhosu";
});

console.log(course);

course = courses.find(course => course.NAme === "Priyansh");
console.log(course);

let num = [10,20,30,40,50,60,70,80];
console.log(num);
num.pop(); // remove 80
num.shift();// remove 10
num.splice(3,2); //remove 50,60
console.log(num);


// Emptying 
console.log(num);

// #1 - Bad Practce
arr = num;
// num = [];
// console.log(num);
// console.log(arr);

// #2 - 
// num.length = 0;
// console.log(num);
// console.log(arr);

// #3 - 
num.splice(0, num.length);
console.log(num);
console.log(arr);


// Combining
let first = [2,4,6];
let second = [1,3,5];

let combined = first.concat(second);
console.log(combined);

// Slicing 
let sliced = combined.slice();
console.log(sliced);

sliced = combined.slice(2,5); //include exclude
console.log(sliced);

sliced = combined.slice(2);
console.log(sliced);

// Spread operator for combined operations 
combined = [...first,...second,"abc"];
console.log(combined);

// Iteration of Array 
for(let value of combined)
{
    console.log(value);
}

// combined.forEach(function(number) {
//     console.log(number);
// });

combined.forEach(number => console.log(number));


// Joined ARRAy 
let joined = combined.join("__");
console.log(joined);


let spilted = joined.split("__");
console.log(spilted);

// Sort 
combined.sort();
console.log(combined);

combined.reverse();
console.log(combined);


// Filtering in Array 
let numbers = [1,2,3,4,5,6,7,8,9,-5,-7,-4,-5];
console.log(numbers);

let positive = numbers.filter(value => value >= 0);
console.log(positive);

// Mapping Arrays 
let item = [4,5,6,7,8,9,10,11,12,13,14];
let itemSquare = item.map(value => value * value);
console.log(itemSquare);

let mapWithObject = item.map(value => {return{Number : value}});
console.log(mapWithObject);

// Chaining 

let chaining = item.filter(value => value&1).map(num => num*num);
console.log(chaining);

