import loadForm from './load-form.js'

function loadDefault() {
  const container = document.querySelector('.container')

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');

  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-container');

  const h3 = document.createElement('h3');
  h3.textContent = 'To do';

  const addTask = document.createElement('button');
  addTask.classList.add('add-task')
  addTask.textContent = '+ Add task';
  addTask.addEventListener("click", () => {
    loadForm();
  });

  const addSection = document.createElement('button');
  addSection.classList.add('add-section-button');
  addSection.textContent = '+ Add section';

  container.appendChild(projectContainer);
  
  projectContainer.appendChild(todoContainer);
  //projectContainer.appendChild(newSection)
  todoContainer.appendChild(h3);
  todoContainer.appendChild(addTask);
  projectContainer.appendChild(addSection);
}

export default loadDefault;