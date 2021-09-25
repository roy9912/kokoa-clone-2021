const clock = document.querySelector("#status-bar__column--clock");

function getClock() {
  const date = new Date();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  if (date.getHours() < 12) {
    clock.innerText = `AM ${hours}:${minutes}`;
  } else if (date.getHours() === 12) {
    clock.innerText = `PM ${hours}:${minutes}`;
  } else {
    clock.innerText = `PM ${date.getHours() - 12}:${minutes}`;
  }
}

getClock();
setInterval(getClock, 1000);
