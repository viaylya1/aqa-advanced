import ToDoController from "./ToDoController.js";
import UserController from "./UserController.js";

const toDoController = new ToDoController();
toDoController.fetchToDo().then((values) => console.log(values));

const userController = new UserController();
userController.fetchUser().then((values) => console.log(values));
