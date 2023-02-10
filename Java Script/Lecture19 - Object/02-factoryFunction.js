// Factory Function is a fucntion which produces objects when we called it
function createRectangle() {
  const rectangle = {
    length: 2,
    breadth: 4,

    draw: function () {
      console.log("Drawing rectangle");
    },

    area: function () {
      console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
    },
  };
  return rectangle;
}

let rectangle1 = createRectangle();
console.log(rectangle1.length);
