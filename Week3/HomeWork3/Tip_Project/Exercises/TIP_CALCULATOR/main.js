function calculateTip() {
  //Variables for storing the Data
  const billAmount = document.getElementById("billAmount").value;
  const serviceQuality = document.getElementById("serviceQuality").value;
  let numPeople = document.getElementById("totalPeople").value;

  if (billAmount === "" || serviceQuality == 0) {
    return window.alert("Please enter the values.");
  }

  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;

    document.getElementById("each").style.display = "none"; //hide each id
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Computing the tip
  let total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2); //make sure they always have two decimal places

  //Tip on screen
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Invoking the our custom function

document.getElementById("calculate").onclick = function () {
  calculateTip();
};
