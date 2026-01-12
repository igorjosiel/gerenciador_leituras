import { addNewBook } from "./scripts/booksManagement.js";
import { renderNoBooksMessage, renderBookshelf, renderCardsTotalBooks } from "./scripts/componentsRendering.js";
import { getItem, BOOKS } from "./scripts/localStorage.js";
import { reloadPage } from "./scripts/utils.js";

/* Ao carregar a página, verifica se há livros armazenados no localStorage. */
document.addEventListener("DOMContentLoaded", () => {
  const books = getItem(BOOKS);

  if (books.length === 0) renderNoBooksMessage();
  else {
    renderCardsTotalBooks(books);
    renderBookshelf(books);
  }
});

const addBookButton = document.getElementById("add-book-button");
const form = document.getElementById("book-form");
const bookDialog = document.getElementById("book-dialog");
const closeModalButton = document.getElementById("close-modal-button");
const cancelModalButton = document.getElementById("cancel-modal-button");

addBookButton.addEventListener("click", () => {
  bookDialog.showModal();
});

closeModalButton.addEventListener("click", () => {
  form.reset();
  bookDialog.close();
});

cancelModalButton.addEventListener("click", () => {
  form.reset();
  bookDialog.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    addNewBook(form);
    reloadPage();
  } catch (error) {
    console.error(error.message);
  }
});
