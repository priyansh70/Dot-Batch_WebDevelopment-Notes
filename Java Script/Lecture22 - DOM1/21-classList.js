let element = document.getElementById('thnku');
console.log(element.classList);
console.log(typeof element.classList);

element.classList.add('superHead'); // add
element.classList.remove('superHead'); //remove
// toggle - if already then remove else add 
element.classList.toggle('superHead'); 

console.log(element.classList.contains('superHead')); //true
element.classList.toggle('superHead'); 
console.log(element.classList.contains('superHead')); //false