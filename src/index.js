//import styles, classes, modules
import './styles.css';
import loadHeader from './load-header.js';
import loadDefault from './load-default.js';

// function testCode () {
//   const test = document.querySelector('#test');
//   test.textContent = 'Hey'
// }

//testCode();

function startup() {
  loadHeader();
  loadDefault();
  //try adding tasks first without todo class object
}

startup();