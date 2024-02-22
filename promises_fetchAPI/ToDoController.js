export default class ToDoController {
  async fetchToDo() {
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
  }
}
