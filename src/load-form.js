import TodoItem from './todo-item.js';
import displayTodo from './display-todo.js';

// Function to create and append an input element
function createInput(form, labelName, type, id, required = false) {
  // for holding label and input
  const formItem = document.createElement('div');
  formItem.classList.add('form-item');

  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.textContent = labelName;

  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.name = id;
  if (required) {
    input.required = true;
  }

  formItem.appendChild(label);
  formItem.appendChild(input);
  form.appendChild(formItem);
}

function createSelect(form, labelName, id, options) {
  // for holding label and select
  const formItem = document.createElement('div');
  formItem.classList.add('form-item');

  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.textContent = labelName;

  const select = document.createElement('select');
  select.id = id;
  select.name = id;
  options.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.label;
    select.appendChild(option);
  });

  formItem.appendChild(label);
  formItem.appendChild(select);
  form.appendChild(formItem);
}

function loadForm(todoHolder) {
  // cancel and submit form reloads add task button
  document.querySelector('.add-task').remove();
  
  // create form
  const form = document.createElement('form');
  form.id = 'todo-form';

  createInput(form, 'Title:', 'text', 'title', true);
  createInput(form, 'Description:', 'text', 'description', true);
  createInput(form, 'Due Date:', 'date', 'due-date', true);
  createSelect(form, 'Priority:', 'priority', [
    {value: 'low', label: 'Low'},
    {value: 'medium', label: 'Medium'},
    {value: 'high', label: 'High'},
  ]);

  const submitBtn = document.createElement('input');
  submitBtn.type = 'submit';
  submitBtn.value = 'Add Todo';
  form.appendChild(submitBtn);

  // form submit event
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;

    const newTodo = new TodoItem(title, description, dueDate, priority);
    console.log(newTodo);

    todoHolder.addTodo(newTodo);
    console.log(todoHolder);

    displayTodo(todoHolder);

    // append after form submission
    const addTask = document.createElement('button');
    addTask.classList.add('add-task')
    addTask.textContent = '+ Add task';
    addTask.addEventListener("click", () => {
      loadForm(todoHolder);
    });
    document.querySelector('.todo-container').appendChild(addTask);
    form.remove();
  });

  // append to container
  document.querySelector('.todo-container').appendChild(form);
}


export default loadForm;