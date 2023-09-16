// Model Functionality --------------------
function openModal() {
  mainSection.classList.add("main-before");
  navbar.classList.add("nav-before");
  modal.style.display = "flex";
}

function closeModal() {
  mainSection.classList.remove("main-before");
  navbar.classList.remove("nav-before");
  modal.style.display = "none";
}

const modal = document.querySelector(".modal");
const mainSection = document.querySelector("main");
const navbar = document.querySelector("nav");

const addBookButton = document.querySelector("#add-book");
addBookButton.addEventListener("click", openModal);

const closeModalButton = document.querySelector("#close");
closeModalButton.addEventListener("click", closeModal);

// Book Constructor --------------------
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.createBookCard = function () {
  const bookcard = document.createElement("div");
  bookcard.className = "bookcard";

  const title = document.createElement("p");
  title.className = "bookcard-title";
  title.textContent = this.title;

  const author = document.createElement("p");
  author.className = "bookcard-author";
  author.textContent = this.author;

  const pages = document.createElement("p");
  pages.className = "bookcard-pages";
  pages.textContent = `${this.pages} Pages`;

  const readUnreadButton = document.createElement("button");
  if (this.read) {
    readUnreadButton.className = "bookcard-read red-button";
    readUnreadButton.textContent = "Mark As Unread";
  } else {
    readUnreadButton.className = "bookcard-read green-button";
    readUnreadButton.textContent = "Mark As Read";
  }

  const removeBookButton = document.createElement("button");
  removeBookButton.className = "remove-book grey-button";
  removeBookButton.textContent = "Remove From Library";

  bookcard.appendChild(title);
  bookcard.appendChild(author);
  bookcard.appendChild(pages);
  bookcard.appendChild(readUnreadButton);
  bookcard.appendChild(removeBookButton);

  const container = document.querySelector(".cards-section"); // Replace 'container' with the actual ID of the container where you want to append the book card.
  container.appendChild(bookcard);
};

const myLibrary = [];

// Already Creatd Books
const book1 = new Book("The Three Body Problem", "Cixin Liu", 450, true);
const book2 = new Book("Atomic Habits", "James Clear", 316, false);
myLibrary.push(book1);
myLibrary.push(book2);
book1.createBookCard();
book2.createBookCard();

// Add Book From Form
const form = document.querySelector("form");
form.addEventListener("submit", addToLibrary);

function addToLibrary(event) {
  event.preventDefault();
  console.log("click");

  const titleInput = form.querySelector('input[placeholder="Title"]');
  const authorInput = form.querySelector('input[placeholder="Author"]');
  const pagesInput = form.querySelector('input[placeholder="Pages"]');
  const checkbox = form.querySelector("#form-read");


  const title = titleInput.value;
  const author = authorInput.value;
  const pages =  parseInt(pagesInput.value);
  const read = checkbox.checked;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  closeModal();
  form.reset();
  book.createBookCard();
}