import { getItem } from "./localStorage.js";

export const addNewBook = () => {
  const newBook = {
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    image: "./icons/livro_1.png",
    status: "Quero ler",
    rating: 5,
    comment: "Maravilhoso, abre a mente! Difícil parar de ler.",
  };

  let books = getItem("books");
  books = [...books, newBook];

  localStorage.setItem("books", JSON.stringify(books));
};
