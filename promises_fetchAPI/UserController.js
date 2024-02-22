export default class UserController {
  async fetchUser() {
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
  }
}
