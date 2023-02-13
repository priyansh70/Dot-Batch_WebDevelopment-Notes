// let simpleInterest = (P , T=2 , R) => {return(P*T*R)/100};
// After Default parameter all remaining parentheses must be empty 
let simpleInterest = (P , T , R=10) => {return(P*T*R)/100};

console.log(simpleInterest(1000,4,40)); // 1600
console.log(simpleInterest(1000,4)); // 400

