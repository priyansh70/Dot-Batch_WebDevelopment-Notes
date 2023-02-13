// There are String Object can be created by new keyword and String Constructor 
let str = new String("My name is Priyansh");
console.log(str);
console.log(typeof str);

// Properties
// #1 - Length 
console.log(str.length);

// Methods 
// #1 - lowercase 
console.log(str.toLocaleLowerCase());

// #2 - uppercase 
console.log(str.toUpperCase()); 

// #3 - at 
console.log(str.charAt(4));

// #4 - charCodeAt 
console.log(str.charCodeAt(4));

// #5 - startwith 
console.log(str.startsWith("My"));

// #6 - endsWith 
console.log(str.endsWith("Priyansh"));

// #7 - replace 
console.log(str.replace("Priy","Riy"));

let a = "  Devil  ";
// #8 - trim 
console.log(a);
console.log(a.trim());