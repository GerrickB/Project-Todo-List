import TodoItem from "./todo-item.js";

// use this class to store
class TodoHolder {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todoItem) {
    if (todoItem instanceof TodoItem) {
      this.todos.push(todoItem); 
    } else {
      throw new Error('Invalid todo item');
    }
  }
}

export default TodoHolder;