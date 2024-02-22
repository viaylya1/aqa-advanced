function fetchToDo() {
  return fetch(`https://jsonplaceholder.typicode.com/todos/1`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`'todos' is not found (${response.status})`);
      }
      return response.json();
    }
  );
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => {
      if (!response.ok) {
        throw new Error(`'user' is not found (${response.status})`);
      }
      return response.json();
    }
  );
}

Promise.all([fetchToDo(), fetchUser()])
  .then((values) => console.log(values))
  .catch((error) => console.error("ERROR:", error.message));

Promise.race([fetchToDo(), fetchUser()])
  .then((values) => console.log(values))
  .catch((error) => console.error("ERROR:", error.message));
