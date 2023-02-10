const rectangle = {
    length: 2,
    breadth: 4,

    draw : function(){
        console.log("Drawing rectangle");
    },

    area : function()
    {
        console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
    }
}

console.log(rectangle.length);
console.log(rectangle.breadth);
rectangle.draw();
rectangle.area();
