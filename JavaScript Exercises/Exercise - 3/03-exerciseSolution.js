// Write a function to remove a CSS class from an element on scroll event.

const scrollItem = document.getElementById('scrollItem');

window.addEventListener('scroll', () => {
    if (scrollItem.classList.contains('active')) {
        scrollItem.classList.remove('active')
    }
});