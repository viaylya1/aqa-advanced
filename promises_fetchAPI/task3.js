const fetchToDo = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error(`'todos' is not found(${response.status})`);
    }
    return await response.json();
  } catch (error) {
    console.error("ERROR:", error.message);
    throw error;
  }
};

const fetchUser = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error(`'user' is not found (${response.status})`);
    }
    return await response.json();
  } catch (error) {
    console.error("ERROR:", error.message);
    throw error;
  }
};

Promise.all([fetchToDo(), fetchUser()]).then((values) => console.log(values));

Promise.race([fetchToDo(), fetchUser()]).then((values) => console.log(values));
