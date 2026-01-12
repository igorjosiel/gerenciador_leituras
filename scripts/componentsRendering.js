import { deleteBook } from "./booksManagement.js";
import { createElement, createTextElement, TAGS } from "./elements.js";
import { getBadge, reloadPage } from "./utils.js";

const main = document.querySelector("main");

export function renderNoBooksMessage() {
  const messageContainer = createElement(TAGS.DIV, "body-md pt-72", main);

  createTextElement(
    TAGS.P,
    "text-center w-full",
    "Nenhum livro adicionado ainda. Comece adicionando seu primeiro livro!",
    messageContainer
  );
}

export function renderBookshelf() {
  const bookshelf = document.createElement("section");
  bookshelf.className = "bookshelf";
  main.appendChild(bookshelf);

  books.forEach((book) => {
    const cardBook = document.createElement("article");
    cardBook.className = "card-book";

    const booksData = document.createElement("div");
    booksData.className = "books-data";

    const bookImage = document.createElement("img");
    bookImage.className = "mb-16";
    bookImage.src = book.urlImage;
    bookImage.alt = `Capa do livro ${book.title}`;

    const bookTitle = document.createElement("h2");
    bookTitle.className = "heading-md";
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.className = "body-md";
    bookAuthor.textContent = book.author;

    const badge = document.createElement("span");
    badge.className = `badge ${getBadge(book.status)}`;
    badge.textContent = book.status;

    const starsContainer = document.createElement("div");
    starsContainer.className = "stars";
    for (let i = 0; i < book.rating; i++) {
      const star = document.createElement("span");
      star.textContent = "★";
      starsContainer.appendChild(star);
    }

    const comment = document.createElement("p");
    comment.className = "body-sm";
    comment.textContent = book.comment;

    const booksActions = document.createElement("div");
    booksActions.className = "books-actions";

    const editButtonIcon = document.createElement("img");
    editButtonIcon.src = "icons/button-pen.svg";
    editButtonIcon.alt = "Ícone de editar livro";

    const editButton = document.createElement("button");
    editButton.className = "secondary";
    editButton.appendChild(editButtonIcon);
    editButton.innerHTML += "Editar";

    const deleteButtonIcon = document.createElement("img");
    deleteButtonIcon.src = "icons/red-trash.svg";
    deleteButtonIcon.alt = "Ícone de excluir livro";

    const deleteButton = document.createElement("button");
    deleteButton.className = "danger";
    deleteButton.appendChild(deleteButtonIcon);
    deleteButton.innerHTML += "Excluir";

    deleteButton.addEventListener("click", () => {
      try {
        deleteBook(book.id);
        reloadPage();
      } catch (error) {
        console.error(error.message);
      }
    });

    booksActions.appendChild(editButton);
    booksActions.appendChild(deleteButton);

    booksData.appendChild(bookImage);
    booksData.appendChild(bookTitle);
    booksData.appendChild(bookAuthor);
    booksData.appendChild(badge);
    booksData.appendChild(starsContainer);
    booksData.appendChild(comment);

    cardBook.appendChild(booksData);
    cardBook.appendChild(booksActions);

    bookshelf.appendChild(cardBook);
  });
}
