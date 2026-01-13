import { addNewBook } from "./scripts/booksManagement.js";
import {
  renderNoBooksMessage,
  renderBookshelf,
  renderCardsTotalBooks,
} from "./scripts/componentsRendering.js";
import { removeElement } from "./scripts/elements.js";
import { getItem, BOOKS } from "./scripts/localStorage.js";
import { reloadPage } from "./scripts/utils.js";

const books = getItem(BOOKS);

/* Ao carregar a página, verifica se há livros armazenados no localStorage. */
document.addEventListener("DOMContentLoaded", () => {
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

const filterByStatusInput = document.getElementById("filter-by-status");

filterByStatusInput.addEventListener("change", () => {
  const value = filterByStatusInput.value;

  if (value) {
    const filteredBooks = books.filter((book) => book.status === value);

    // É preciso primeiro remover o elemento para depois renderizar novamente os novos itens para não duplicadar
    removeElement("section.bookshelf");
    renderBookshelf(filteredBooks);
  } else {
    removeElement("section.bookshelf");
    renderBookshelf(books);
  }
});

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
