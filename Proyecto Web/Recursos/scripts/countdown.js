function countdown() {
  var now = new Date();
  var endDate = new Date("2024-06-14T21:00:00");

  var days = Math.floor((endDate - now) / (1000 * 60 * 60 * 24));
  var hours = Math.floor(((endDate - now) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor(((endDate - now) % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor(((endDate - now) % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(countdown, 1000);