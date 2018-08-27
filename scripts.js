void function start() {
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', toggleBoxs);
  window.addEventListener('keydown', keyEvent);

  setUpClock();
  setUpDate();
}();

function keyEvent(event) {
  if (event.ctrlKey && event.key === '.') {
    toggleBoxs();
  } else {
    console.log(`key pressed = ${event.key}`);
  }
}

function setUpDate() {
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const month = ['January', 'February', 'March', 'April', 'May', 'June',' July', 'August', 'September', 'October', 'November', 'December'];

  const date = new Date();
  const today = `${day[date.getDay()]} ${date.getDate()} ${month[date.getMonth()]}`


  const dateDiv = document.querySelector('.date');
  dateDiv.innerHTML = `<h3>${today}</h3>`;
}

function updateClock(clock) {
  const date = new Date();
  const hour = `${date.getHours()}`.padStart(2, 0);
  const minute = `${date.getMinutes()}`.padStart(2, 0);

  if (clock.innerHTML.split(':')[1] !== minute || clock.innerHTML === '') {
    clock.innerHTML = `${hour}:${minute}`;
  }
}

function setUpClock() {
  const clock = document.querySelector('.clock-value');
  updateClock(clock);

  setInterval(() => updateClock(clock), 1000);
}

function toggleBoxs() {
  const boxRowsTop = document.querySelectorAll('.box-row-top');
  const boxRowsLeft = document.querySelectorAll('.box-row-left');

  boxRowsTop.forEach(row => row.classList.toggle('move-top'));
  boxRowsLeft.forEach(row => row.classList.toggle('move-left'));
}
