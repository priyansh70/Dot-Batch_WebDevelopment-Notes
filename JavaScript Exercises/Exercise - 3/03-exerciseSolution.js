// Write a function to remove a CSS class from an element on scroll event.

const scrollItem = document.getElementById('scrollItem');
// mouseoverItem = document.getElementById('mouseoverItem');

window.addEventListener('scroll', () => {
    if (scrollItem.classList.contains('active')) {
        scrollItem.classList.remove('active')
    }
    if (mouseoverItem.classList.contains('active')) {
        mouseoverItem.classList.remove('active')
    }
    
});