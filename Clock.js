export default class Clock {
  constructor(milliseconds = 1000) {
    this.clockDiv = document.querySelector('.clock-value');
    this.interval = null;
    this.intervalMilliseconds = milliseconds;
  }

  init() {
    this.setUp();
  }

  addPadding(str) {
    return str.padStart(2, 0);
  }
  getTime() {
    const date = new Date();

    return {
      hour: this.addPadding(date.getHours().toString()),
      minute: this.addPadding(date.getMinutes().toString()),
    }
  }

  updateClock() {
    const { hour, minute } = this.getTime();

    this.clockDiv.innerHTML = `${hour}:${minute}`;
  }

  startInterval() {
    this.interval = setInterval(() => this.updateClock(), this.intervalMilliseconds);
  }

  setUp() {
    if (!this.interval) {
      this.updateClock();
      this.startInterval();
    }
  }
}
