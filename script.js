const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2026";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = Math.floor(newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  //   console.log(days, hours, minutes, seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formaTime(hours);
  minsEl.innerHTML = formaTime(minutes);
  secondsEl.innerHTML = formaTime(seconds);
}

function formaTime(time) {
  return time < 10 ? `0${time}` : time;
}

//intial call
countdown();

setInterval(countdown, 1000);
