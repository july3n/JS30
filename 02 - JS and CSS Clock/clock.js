const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = function () {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const minutes = now.getMinutes();
  const minDegree = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hours = now.getHours();
  const hourDegree = (hours / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  if (secondDegree === 90) secondHand.style.transition = "all 0s";
  else secondHand.style.transition = "all 0.5s";

  if (minDegree === 90) minHand.style.transition = "all 0s";
  else minHand.style.transition = "all 0.5s";
};
setInterval(setDate, 1000);
