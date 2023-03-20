// Write a function to add a CSS class to an element on the mouseover event.

const mouseoverItem = document.getElementById('mouseoverItem');

mouseoverItem.addEventListener('mouseover',()=>{
    mouseoverItem.classList.add('active');
});