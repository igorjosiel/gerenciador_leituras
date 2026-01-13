import { validateRequiredFields } from "./utils.js";
import { getItem, setItem, countItem, BOOKS } from "./localStorage.js";

export function addNewBook(form) {
  const formData = new FormData(form);
  const title = formData.get("title");
  const author = formData.get("author");
  const urlImage = formData.get("urlImage");
  const status = formData.get("status");
  const rating = formData.get("rating");
  const comments = formData.get("comments");

  validateRequiredFields(form);

  const newBook = {
    id: countItem(BOOKS) + 1,
    title,
    author,
    urlImage,
    status,
    rating,
    comments,
  };

  let books = getItem(BOOKS);
  books = [...books, newBook];

  setItem(BOOKS, books);
}

export function countBooksByStatus(status) {
  const books = getItem(BOOKS);
  const filteredBooks = books.filter((book) => book.status === status);

  return filteredBooks.length;
}

export function deleteBook(bookId) {
  const books = getItem(BOOKS);
  const filteredBooks = books.filter((book) => book.id !== bookId);

  setItem(BOOKS, filteredBooks);
}

export const booksTotalCards = [
  {
    quantity: countItem(BOOKS),
    description: "Total",
  },
  {
    quantity: countBooksByStatus("quero ler"),
    description: "Quero ler",
  },
  {
    quantity: countBooksByStatus("lendo"),
    description: "Lendo",
  },
  {
    quantity: countBooksByStatus("lido"),
    description: "Lidos",
  },
];
