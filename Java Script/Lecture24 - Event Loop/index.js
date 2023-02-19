// Adding 100Para
// let t1 = performance.now();
// for(let i =1;i <= 100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is Para ${i}`;
    
//     document.body.appendChild(newElement);
// }
// let t2 = performance.now();

// console.log(`1st way take time : ${t2-t1}ms`);

// Optimize it 

// t1 = performance.now();
// let myDiv = document.createElement('div');
// for(let i =1;i <= 100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is Para ${i}`;
    
//     myDiv.appendChild(newElement);
// }
// t2 = performance.now();
// document.body.appendChild(myDiv);
// console.log(`2nd way take time : ${t2-t1}ms`);

// using document DocumentFragment 

// t1 = performance.now();
// let myDiv = document.createDocumentFragment('div');
// for(let i =1;i <= 100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is Para ${i}`;
    
//     myDiv.appendChild(newElement);
// }
// t2 = performance.now();
// document.body.appendChild(myDiv);
// console.log(`3rd way take time : ${t2-t1}ms`);

console.log("Hi");
setTimeout(function() {
    console.log("Hey");
},5000);
console.log("Hello");
