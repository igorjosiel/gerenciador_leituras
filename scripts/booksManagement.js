import { getItem, setItem, BOOKS } from "./localStorage.js";

export function addNewBook(newBook) {
  let books = getItem(BOOKS);
  books = [...books, newBook];
  setItem(BOOKS, books);
}
