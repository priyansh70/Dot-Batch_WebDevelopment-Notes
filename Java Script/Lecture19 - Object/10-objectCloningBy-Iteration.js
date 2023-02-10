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

console.log("Rectangle");
console.log(rectangle);

const duplicate = {};
for(let key in rectangle)
{
    duplicate[key] = rectangle[key];
}

console.log("Duplicates");
console.log(duplicate);