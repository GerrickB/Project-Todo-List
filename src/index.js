//import styles, classes, modules
import './styles.css';
import loadHeader from './load-header.js';
import loadDefault from './load-default.js';
// maybe import todo-holder here
import TodoHolder from './todo-holder.js';

function startup() {
  const todoHolder = new TodoHolder()
  loadHeader();
  loadDefault(todoHolder);
  //try adding tasks first without todo class object
}

startup();
