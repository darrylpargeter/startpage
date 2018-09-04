export default class DateClass {
  constructor() {
    this.day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.month = ['January', 'February', 'March', 'April', 'May', 'June',' July', 'August', 'September', 'October', 'November', 'December'];
    this.dateDiv = document.querySelector('.date');
  }

  init() {
    this.setUp();
  }

  getTodaysDate() {
    const date = new Date();

    return `${this.day[date.getDay()]} ${date.getDate()} ${this.month[date.getMonth()]}`;
  }
  setUp() {
    this.dateDiv.innerHTML = `<h3>${this.getTodaysDate()}</h3>`;
  }
}
