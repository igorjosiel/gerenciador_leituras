const main = document.querySelector("main");

/* Ao carregar a página, verifica se há livros armazenados no localStorage. */
document.addEventListener("DOMContentLoaded", () => {
  const books = JSON.parse(localStorage.getItem("books")) || [];

  if (books.length === 0) {
    const messageContainer = document.createElement("div");
    messageContainer.className = "body-md pt-72";
    main.appendChild(messageContainer);

    const message = document.createElement("p");
    message.className = "text-center w-full";
    message.textContent = "Nenhum livro adicionado ainda. Comece adicionando seu primeiro livro!";

    messageContainer.appendChild(message);
  }
});

const addBookButton = document.getElementById("add-book-button");
const bookDialog = document.getElementById("book-dialog");
const cancelButton = document.getElementById("cancel-button");

addBookButton.addEventListener("click", () => {
  bookDialog.showModal();
});

cancelButton.addEventListener("click", () => {
  bookDialog.close();
});
