function outer() {
    const name = "John"; 
    function inner() {
      console.log(`Hello, ${name}!`);
    }
    return inner;
  }
  
  const greeting = outer();
  greeting(); // logs "Hello, John!"
  