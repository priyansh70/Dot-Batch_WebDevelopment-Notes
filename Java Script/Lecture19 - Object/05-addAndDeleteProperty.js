function Rectangle(length,breadth)
{
    const rectangle = {
        length,
        breadth,
    
        draw : function(){
            console.log("Drawing rectangle");
        },
    }
    return rectangle;
}

let rectangle1 = Rectangle(10,20);

// Add Property in Object 
rectangle1.area = rectangle1.length * rectangle1.breadth;

console.log(rectangle1.length);
console.log(rectangle1.breadth);
console.log(rectangle1.area);
console.log(rectangle1);

// Now remove properties from Objec
delete rectangle1.area;
console.log(rectangle1);