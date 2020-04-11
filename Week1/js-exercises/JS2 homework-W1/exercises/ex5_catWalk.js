"use strict";
/**
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.
 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", 
 so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand
  side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), 
 keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
*/

// Create a variable to store a reference to the img.
const img = document.querySelector("img");
let walkImg = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
let danceGif =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424";

// Change the style of the img to have a "left" of "0px"
let styleOfimg = 0;
// an increasing counter that counts every time when the function is called
let incCounter = 0;
let screenWidth = window.innerWidth;
let imgWidth = img.width;
let totalTime = (screenWidth - imgWidth) / 10;
//  How many times a function must be called to the cat dancing for five seconds
const fiveSecondWait = 5000 / 50; // 5000 milliseconds = 5 seconds

// Create a  function called
function catWalk() {
  // Your cat should now be moving across the screen from left to right

  img.style.left = `${styleOfimg}px`;
  incCounter += 1;

  if (incCounter < totalTime / 2) {
    // that moves the cat 10 pixels to the right of where it started,
    styleOfimg += 10;
  } else if (
    incCounter >= totalTime / 2 &&
    incCounter < totalTime / 2 + fiveSecondWait
  ) {
    // However while cat is dancing, function is being called but cat doesn't move for 5 seconds
    img.src == walkImg ? (img.src = danceGif) : pass;
  } else if (
    incCounter >= totalTime / 2 + fiveSecondWait &&
    incCounter < totalTime + fiveSecondWait + imgWidth / 10
  ) {
    // After cat dancing is finished, cat moves again until at the end of screen
    styleOfimg += 10;
    img.src == danceGif ? (img.src = walkImg) : pass;
  } else {
    styleOfimg = 0;
    incCounter = 0;
  }
}

// Call that function every 50 milliseconds.
let show = setInterval(catWalk, 50);
body.onload = show;
