const timeDisplay = document.querySelector(`.display`);

setInterval(() => {
  let date = new Date();
  let hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  let day = `AM`;

  if (hours > 12) {
    day = `PM`;
    hours -= 12;
  }

  hours = hours < 10 ? `0${hours}` : hours;

  minutes = minutes < 10 ? `0${minutes}` : minutes;

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  timeDisplay.innerHTML = `${hours} : ${minutes} : ${seconds} ${day}`;
}, 1000);
