// window object
console.log(document);
window.console.log(document.body);


// DOM 
// #1 - id 
window.console.log(document.getElementById("navbarSupportedContent"));

// #2 - class 
console.log(document.getElementsByClassName('nav-link'));
console.log(document.getElementsByClassName('nav-link')[0]);

// #3 - TAg 
console.log(document.getElementsByTagName('p'));


// #4 - $0 
// let element = $0;
// console.log(element);

// #5 - query selector 
console.log(document.querySelector('h1')); //tagname
console.log(document.querySelector('.btn')); //class
console.log(document.querySelector('#navbarSupportedContent')); //id


// #6 - query selector All
console.log(document.querySelectorAll('li')); //tagname
console.log(document.querySelectorAll('.btn')); //class
console.log(document.querySelectorAll('#navbarSupportedContent')); //id


// Update Existing Content 
// #1 - innerHtml 
console.log(document.querySelector('h1').innerHTML); 

// #2 - outerHTML - HW 

// #3 - textContent 
console.log(document.querySelector('h1').textContent);  //Print  Hidden Element

// #4 - innerText 
console.log(document.querySelector('h1').innerText); // Not Print  Hidden Element

// Adding New Element / Content 
let newElement = document.createElement('h1');
console.log(newElement);
newElement.innerHTML = "This is Para";
console.log(newElement.innerHTML);


let parent = document.querySelector('.parentDiv');
parent.appendChild(newElement);
console.log(parent.innerHTML);

// InsertAdjacentHTML
parent.insertAdjacentHTML('beforeend', "<h3>Before End  </h3>");
parent.insertAdjacentHTML('beforebegin', "Before Begin");
parent.insertAdjacentHTML('afterend', "After End");
parent.insertAdjacentHTML('afterbegin', "After Begin");

// Remove Element 
// #1 - removeChild() 
let parentOfRemove = document.querySelector('.head');
let childElement = document.querySelector('.badge');
parentOfRemove.removeChild(childElement);

// Changing Style 
let headerGroup = document.querySelector('.headerGroup');
headerGroup.style.backgroundColor = 'gray';

headerGroup.style.cssText = 'color:red; background:yellow; font-size:20px; padding:10px;';