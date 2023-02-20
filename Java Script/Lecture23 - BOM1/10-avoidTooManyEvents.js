// create 100 paragraphs and apply on it events
// for(let  i = 1; i <= 100; i++)
// {
//     let paragraph = document.createElement('p');

//     let content = document.createTextNode(`This is ${i} paragraph`);

//     paragraph.appendChild(content);

//     paragraph.addEventListener('click', function(){
//         alert(`This is ${i} paragraph Clicked`);
//     })
//     document.body.appendChild(paragraph);
// }

let parentDiv = document.createElement("div");
parentDiv.addEventListener("click", function (event) {
  if(event.target.nodeName === 'P')
  {
    alert(event.target.textContent);
  }
});
for (let i = 1; i <= 100; i++) {
  let paragraph = document.createElement("p");

  let content = document.createTextNode(`This is ${i} paragraph`);

  paragraph.appendChild(content);
  parentDiv.appendChild(paragraph);
}

document.body.appendChild(parentDiv);
