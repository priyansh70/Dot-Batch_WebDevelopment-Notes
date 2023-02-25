const func = () => {
  const x = () => {
    let a = 10;
    console.log(a);
    const y = () => {
    //   let a = 20;
      console.log(a);
      const z = () => {
        // let a = 30;
        console.log(a);
      };
      z();
    };
    a = 69;
    y();
  };
  return x;
};

let x = func();
x(); // 10 69 69
