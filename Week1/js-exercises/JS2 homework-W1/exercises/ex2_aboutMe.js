"use strict";
/**
 ** Exercise 2: About me **
 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

//Change the body tag's style so it has a font-family of "Arial, sans-serif".
const bodyFirst = document.body;
bodyFirst.style.backgroundColor = "black";
bodyFirst.style.fontFamily = "Arial, sans-serif";

// Replace each of the spans(nickname, fav - food, hometown) with your own information.
let nickNameSec = document.getElementById("nickname");
let favFoodSec = document.getElementById("fav-food");
let homeTownSec = document.getElementById("hometown");

nickNameSec.innerText = "Machka";

favFoodSec.innerText = "Fish&Chips";

homeTownSec.innerText = "Tilburg";

// Iterate through each li and change the class to "list-item".
const items = document.getElementsByTagName("li");
for (let index = 0; index < items.length; index++) {
  items[index].className = "list-item";
}

// Create a new img element and set its src attribute to a picture of you.Append that element to the page.
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://ca.slack-edge.com/T0EJTUQ87-UTK4RMG5R-fddd37ffbc32-512"
);
img.setAttribute("width", "50%");
const h1 = document.querySelector("h1");
document.querySelector("h1").style.color = "orange";
bodyFirst.insertBefore(img, h1);
