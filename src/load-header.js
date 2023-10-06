import Menu from './menu_FILL0_wght400_GRAD0_opsz24.svg';
import Home from './home_FILL0_wght400_GRAD0_opsz24.svg';
import Account from './account_circle_FILL0_wght400_GRAD0_opsz24.svg';
import Bell from './notifications_active_FILL0_wght400_GRAD0_opsz24.svg'

function loadHeader() {
  const container = document.querySelector('.container')
  const header = document.createElement('header');

  const leftPart = document.createElement('div');
  leftPart.classList.add('left-part');
  const menuIcon = document.createElement('img');
  menuIcon.src = Menu;
  const homeIcon = document.createElement('img');
  homeIcon.src = Home;
  const searchBar = document.createElement('input');
  searchBar.type = 'search'
  searchBar.id = 'searchbar';
  searchBar.name = 'searchbar';

  const rightPart = document.createElement('div');
  rightPart.classList.add('right-part');
  const bellIcon = document.createElement('img');
  bellIcon.src = Bell;
  const accountIcon = document.createElement('img');
  accountIcon.src = Account;

  header.appendChild(leftPart);
  leftPart.appendChild(menuIcon);
  leftPart.appendChild(homeIcon);
  leftPart.appendChild(searchBar);
  header.appendChild(rightPart);
  rightPart.appendChild(bellIcon);
  rightPart.appendChild(accountIcon);

  container.appendChild(header);
} 

export default loadHeader;