let parent = document.querySelector('#list');
// console.log(parent);

// Create Child 
let child1 = document.createElement('li');
let content1 = document.createTextNode("Before End");
child1.appendChild(content1);

// As a Element we can send our element 
parent.insertAdjacentElement('beforeend',child1);


let child2 = document.createElement('li');
let content2 = document.createTextNode("Before Begin");
child2.appendChild(content2);

// As a HTML SEnd - using stirng 
parent.insertAdjacentHTML('beforebegin','<li>BEfore Begin</li>')