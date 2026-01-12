import { deleteBook } from "./booksManagement.js";
import {
  createElement,
  createImageElement,
  createTextElement,
  TAGS,
} from "./elements.js";
import { getBadge, reloadPage } from "./utils.js";

const main = document.querySelector("main");

export function renderNoBooksMessage() {
  const messageContainer = createElement(TAGS.div, "body-md pt-72", main);

  createTextElement(
    TAGS.p,
    "text-center w-full",
    "Nenhum livro adicionado ainda. Comece adicionando seu primeiro livro!",
    messageContainer
  );
}

export function renderBookshelf(books) {
  const bookshelf = createElement(TAGS.section, "bookshelf", main);

  books.forEach((book) => {
    const cardBook = createElement(TAGS.article, "card-book", bookshelf);
    const booksData = createElement(TAGS.div, "books-data", cardBook);

    createImageElement(
      "mb-16",
      book.urlImage,
      `Capa do livro ${book.title}`,
      booksData
    );

    createTextElement(TAGS.h2, "heading-md", book.title, booksData);
    createTextElement(TAGS.p, "body-md", book.author, booksData);
    createTextElement(
      TAGS.span,
      `badge ${getBadge(book.status)}`,
      book.status,
      booksData
    );

    const starsContainer = createElement(TAGS.div, "stars", booksData);

    for (let i = 0; i < 5; i++) {
      if (i < book.rating) {
        createImageElement("", "icons/star_fill.svg", "", starsContainer);
      } else {
        createImageElement("", "icons/star.svg", "", starsContainer);
      }
    }

    if (book.comments) {
      createTextElement(TAGS.p, "body-sm mt-8", book.comments, booksData);
    }

    const booksActions = createElement(TAGS.div, "books-actions", cardBook);

    const editButton = createElement(TAGS.button, "secondary", booksActions);
    createImageElement(
      "",
      "icons/button-pen.svg",
      "Ícone de editar livro",
      editButton
    );
    editButton.innerHTML += "Editar";

    const deleteButton = createElement(TAGS.button, "danger", booksActions);
    createImageElement(
      "",
      "icons/red-trash.svg",
      "Ícone de excluir livro",
      deleteButton
    );
    deleteButton.innerHTML += "Excluir";

    deleteButton.addEventListener("click", () => {
      try {
        deleteBook(book.id);
        reloadPage();
      } catch (error) {
        console.error(error.message);
      }
    });
  });
}
