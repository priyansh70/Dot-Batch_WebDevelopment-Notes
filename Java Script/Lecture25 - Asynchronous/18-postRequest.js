const createTodo = async () => {
  let options = {
    method: "POST",
    body: JSON.stringify({
      title: "Priyansh",
      body: "This is Body",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
}

const mainFunc = async() => {
    let todo = await createTodo();
    console.log(todo);
}