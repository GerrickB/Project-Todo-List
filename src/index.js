//import styles, classes, modules
import './styles.css';
import loadHeader from './load-header.js';
import loadDefault from './load-default.js';

function startup() {
  loadHeader();
  loadDefault();
  //try adding tasks first without todo class object
}

startup();
//import todo-holder here