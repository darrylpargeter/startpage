import SearchBar from './SearchBar.js';
import DateClass from './Date.js';
import Clock from './Clock.js';

void function start() {
  const btn = document.querySelector('.btn');
  const searchBar = new SearchBar();
  const dateClass = new DateClass();
  const clockClass = new Clock();

  clockClass.init();
  dateClass.init();

  btn.addEventListener('click', toggleBoxs);
  window.addEventListener('keydown', keyEvent);

  function keyEvent(event) {
    if (event.ctrlKey && event.key === '.') {
      toggleBoxs();
    } 

    switch (event.key) {
      case 'Control':
      case '.':
        break;
      case 'Enter':
        searchBar.search();
        break;
      case 'Escape':
        searchBar.close();
        break;
      default:
        searchBar.open();
    }
  }

  function toggleBoxs() {
    const boxRowsTop = document.querySelectorAll('.box-row-top');
    const boxRowsLeft = document.querySelectorAll('.box-row-left');

    boxRowsTop.forEach(row => row.classList.toggle('move-top'));
    boxRowsLeft.forEach(row => row.classList.toggle('move-left'));
  }
}();
