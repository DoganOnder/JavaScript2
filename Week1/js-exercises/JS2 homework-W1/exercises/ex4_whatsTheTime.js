function displayCurrentTime() {
  // your code goes in here
  const currentDate = new Date();
  const p = document.getElementById("date");
  p.innerHTML = currentDate.toLocaleTimeString();
}

window.onload = setInterval(displayCurrentTime, 1000);
