// console.log("Lecture2 Start of JS");

// const rectangle = {
//     "length" : 1, //property
//     "breadth" : 2, //Property

//     draw : function(){
//         console.log("Rectangle Drawing");
//     }
// }

// // Access - 
// console.log(rectangle.length); // 1
// rectangle.draw(); //Rectangle Drawing

// //Factory Function
// // function createRectangle()
// // {
// //     const rectangle = {
// //         "length" : 1, //property
// //         "breadth" : 2, //Property
    
// //         draw : function(){
// //             console.log("Rectangle Drawing");
// //         }
// //     }
// //     return rectangle;
// // }

// // let newRectangle = createRectangle();
// // newRectangle.draw();

// // #Custom Value 
// function createRectangle(length,breadth)
// {
//     const rectangle = {
        
//         length,
//         breadth,
    
//         draw : function(){
//             console.log(`Rectangle Of Breadth : ${breadth} Length : ${length}`);
//         }
//     }
//     return rectangle;
// }

// let rect1 = createRectangle(5,10);
// rect1.draw();

// let rect2 = createRectangle(2,1);
// rect2.draw();

// // Constructor Function 
// function Car(color,weight)
// {
//     this.color = color;
//     this.weight = weight;
// }

// const bmw = new Car("red",400);

// console.log(bmw.color);

// bmw.model = "BMW3";
// console.log(bmw);

// delete bmw.model;
// console.log(bmw);

// // Primitive types

// let a = 10;
// let b = a;
// a++;
// console.log(a, b);

// // Referene Types 

// let aa = {value : 10};
// let bb = aa;
// aa.value++;
// console.log(aa, bb);


let Rectangle = {
    length : 10,
    breadth : 20
}

// for-in loop 
for(let key in Rectangle)
{
    console.log(key, Rectangle[key]);
}

// for-of loop 
for(let i of Object.keys(Rectangle))
{
    console.log(i, Rectangle[i]);
}

let arr = [10,20,30,40]
for(let i in arr)
{
    console.log(arr[i]);
}

if('length' in Rectangle)
{
    console.log("Present")
}
else{
    console.log("Absent");
}