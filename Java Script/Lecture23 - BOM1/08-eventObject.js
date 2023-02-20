head = document.getElementById('head');
head.addEventListener('click', function(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.tagName);
});