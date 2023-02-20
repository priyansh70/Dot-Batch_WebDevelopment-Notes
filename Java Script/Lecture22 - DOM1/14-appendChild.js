let parent = document.querySelector('#list');

let newElement = document.createElement('h1') //create h1 
// add content in h1 
let content = document.createTextNode("This is Heading");
newElement.appendChild(content);

parent.appendChild(newElement);