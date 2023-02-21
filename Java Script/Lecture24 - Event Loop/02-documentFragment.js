// using document fragment is increase speed and optimise code
let fruits = ["Mangoes","Oranges","Bananas","Strawberry","Apple"];

let list = document.querySelector('ul');
console.log(list);

let t1 = performance.now();
for(let key of fruits)
{
    let item = document.createElement('li');
    item.textContent = key;

    list.appendChild(item);
}
let t2 = performance.now();
console.log(`Adding one by one takes time ${t2-t1}ms`);

let listOL = document.querySelector('ol');
console.log(list);

t1 = performance.now();
let fragment = document.createDocumentFragment();
for(let key of fruits)
{
    let item = document.createElement('li');
    item.textContent = key;

    fragment.appendChild(item);
}
listOL.appendChild(fragment);
t2 = performance.now();
console.log(`Fragment takes time ${t2-t1}ms`);