"use strict";

/**
  
 ** Exercise 1: The book list **
  I 'd like to display my three favorite books inside a nice webpage!
  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).
  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
  */

function createBookList(books) {
  // your code goes in here, return the ul element

  const uList = document.createElement("ul");
  uList.className = "bookList";
  uList.style.listStyle = "none";
  uList.style.display = "flex";
  uList.style.justifyContent = "center";
  document.body.appendChild(uList);

  books[0].url =
    "https://wordery.com/jackets/5dadd8a0/m/the-design-of-everyday-things-donald-a-norman-9780262525671.jpg";
  books[1].url = "https://www.studystore.nl/images/9780241956052/3/1";
  books[2].url = "https://www.studystore.nl/images/9780135957059/3/1";

  // Iterate through the array of books.
  for (let book of books) {
    // Creating the list items and adding style
    const bookViewItem = document.createElement("li");
    bookViewItem.style.color = "white";
    bookViewItem.style.fontWeight = "bold";
    bookViewItem.style.fontSize = "1.2rem";
    bookViewItem.style.width = "500px";
    bookViewItem.style.padding = "10px";
    bookViewItem.style.margin = "10px";

    // paragraph element and text content
    const titleP = document.createElement("p");

    titleP.textContent = `${book.title} by ${book.author}`;
    // Creating the img&anchor- setting attributes
    const bookImg = document.createElement("img");
    const imgLink = document.createElement("a");
    bookImg.setAttribute("src", book.url);
    imgLink.href = book.url;
    bookImg.setAttribute("height", "300px");

    imgLink.appendChild(bookImg);

    bookViewItem.appendChild(titleP);
    bookViewItem.appendChild(imgLink);
    // checking alreadyRead
    book.alreadyRead === true
      ? (bookViewItem.style.backgroundColor = "#32CD32")
      : (bookViewItem.style.backgroundColor = "#8B0000");

    uList.appendChild(bookViewItem);
  }

  return uList;
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Donald A. Norman",
    alreadyRead: true,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: false,
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas-Andrew Hunt",
    alreadyRead: true,
  },
];

let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);

document.querySelector("body").style.backgroundColor = "darkgray";

document.querySelector("h1").style.color = "darkblue";

document.querySelector("h1").align = "center";
