const maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};

const sortable = Object.fromEntries(
    Object.entries(maxSpeed).sort(([,a],[,b]) => a-b)
);

console.log(sortable);