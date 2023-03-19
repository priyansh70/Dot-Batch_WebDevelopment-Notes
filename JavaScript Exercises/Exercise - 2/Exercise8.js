// Write a function that takes an object and returns an array of all the keys in the object.

function keyOfObject(obj) {
    let keys = Object.keys(obj);
    return keys;
}

const obj = {
    Name: "Priyansh",
    Age: 20,
    City: "Goa",
    Gender: "Male"
}

console.log(keyOfObject(obj));