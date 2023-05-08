const targetDate = new Date("May 23, 2023 00:00:00").getTime();
const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");
const ageElement = document.getElementById("age");

const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const remainingTime = targetDate - now;

  if (remainingTime <= 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "It's your birthday!";
    messageElement.style.display = "none";
    ageElement.textContent = "28 years old";
    return;
  }

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);
