// Write a function to toggle the display of a div element on click event. 
const get = (element) => document.getElementById(`${element}`);

const pcBtn = get('pcBtn');
const pcText = get('pcText');
const mobiBtn = get('mobiBtn');
const mobiText = get('mobiText');

pcBtn.addEventListener('click', () => {
    pcText.style.display = "block";
    mobiText.style.display = "none";
});

mobiBtn.addEventListener('click', () => {
    pcText.style.display = "none";
    mobiText.style.display = "block";
});