class CountdownTimer {
    constructor ({ selector, targetDate}) {
        this.selector = document.querySelector(`${selector}`);
        this.targetDate = targetDate;
        this.refs = {
            days: this.selector.querySelector('[data-value="days"]'),
            hours: this.selector.querySelector('[data-value="hours"]'),
            mins: this.selector.querySelector('[data-value="mins"]'),
            secs: this.selector.querySelector('[data-value="secs"]'),
        }
        this.startTimer();
    }
    startTimer () {
        this.refs.days.textContent = 0;
        this.refs.hours.textContent = 0;
        this.refs.mins.textContent = 0;
        this.refs.secs.textContent = 0;
        setInterval(() => {
            const startTime = new Date (this.targetDate);
            const currentTime = Date.now();
            const timerTime = startTime - currentTime;
            this.updateTimer(this.getTimeComponents(timerTime));
        }, 1000)
    }
    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs }
    }
    pad(value) {
        return String(value).padStart(2, '0');
    }
    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.innerHTML = days;
        this.refs.hours.innerHTML = hours;
        this.refs.mins.innerHTML = mins;
        this.refs.secs.innerHTML = secs;
      }
}
const copyTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 19, 2023'),
  });