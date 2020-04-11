"use strict";

const myQuotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "― Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "― Marcus Tullius Cicero",
  },

  {
    quote: "Stop acting so small. You are the universe in ecstatic motion.",
    author: "― Rumi",
  },

  {
    quote: "The wound is the place where the light enters you.",

    author: "― Rumi",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "― Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "― Robert Frost",
  },

  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "― J.K. Rowling",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "― Maya Angelou",
  },
];

let sayings = document.getElementById("sayings");
let authors = document.getElementById("author");

const btn = document.getElementById("btn");
btn.addEventListener("click", runEvent);

function runEvent() {
  let randIndex = Math.floor(Math.random() * myQuotes.length);
  sayings.innerText = myQuotes[randIndex].quote;
  authors.innerText = myQuotes[randIndex].author;
}
