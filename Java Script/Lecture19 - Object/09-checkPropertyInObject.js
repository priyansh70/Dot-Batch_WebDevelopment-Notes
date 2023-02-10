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

if ("length" in rectangle) {
  console.log("Length Property Exists in Rectangle");
} else {
  console.log("Absent");
}
