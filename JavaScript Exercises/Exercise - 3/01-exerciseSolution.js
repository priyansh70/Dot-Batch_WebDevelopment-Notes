const btn = document.getElementById('btn');
function changeColor() {
    btn.style.backgroundColor = 'red';
    console.log("Button Clicked")
}
btn.onclick = changeColor;