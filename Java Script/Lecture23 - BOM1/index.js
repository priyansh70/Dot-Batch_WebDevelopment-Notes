// monitorEvents(document);

// element.addEventListener('click',function(){element.style.color = 'red'})

// document.addEventListener('click',function(){
//     console.log("I have clicked");
// })

// document.addEventListener('click',function(e){
//     console.log(e);
// })

// let links = document.querySelectorAll('a');
// links[2].addEventListener('click',function(e){
//     e.preventDefault();
// });


// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('Para ' + event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus);

// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log('span pr click kia hai' + event.target.textContent);
    }
});