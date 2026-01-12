import { validateRequiredFields } from "./utils.js";
import { getItem, setItem, countItem, BOOKS } from "./localStorage.js";

export function addNewBook(form) {
  const formData = new FormData(form);
  const title = formData.get("title");
  const author = formData.get("author");
  const urlImage = formData.get("urlImage");
  const status = formData.get("status");
  const stars = formData.get("stars");
  const comments = formData.get("comments");

  validateRequiredFields(form);

  const newBook = {
    id: countItem(BOOKS) + 1,
    title,
    author,
    urlImage,
    status,
    stars,
    comments,
  };

  let books = getItem(BOOKS);
  books = [...books, newBook];

  setItem(BOOKS, books);
}

export function deleteBook(bookId) {
  const books = getItem(BOOKS);
  const filteredBooks = books.filter(book => book.id !== bookId);

  setItem(BOOKS, filteredBooks);
}
