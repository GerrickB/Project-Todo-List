function refreshDisplay() {
  const containers = document.querySelectorAll('.sub-container');

  // Loop through the NodeList and remove each container
  if(containers.length > 0) {
    containers.forEach(function(container) {
        container.remove();
    });
  }
}

function displayTodo(todoHolder) {
  refreshDisplay();

  const todoContainer = document.querySelector('.todo-container');

  const todos = todoHolder.todos
  todos.forEach(todo => {
    const subContainer = document.createElement('div');
    subContainer.classList.add('sub-container');
    for (const property in todo) {
      const line = document.createElement('p');
      line.textContent = `${property}: ${todo[property]}`;
      subContainer.appendChild(line);
      todoContainer.appendChild(subContainer);
    }
  });
}

export default displayTodo;