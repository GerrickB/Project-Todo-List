
// use this class to store
class TodoHolder {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todoItems) {
    if (todoItem instanceof TodoItem) {
      this.todos.push(todoItem); 
    } else {
      throw new Error('Invalid todo item');
    }
  }
}

export default TodoHolder;