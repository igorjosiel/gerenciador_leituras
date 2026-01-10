const addBookButton = document.getElementById('add-book-button');
const bookDialog = document.getElementById('book-dialog');
const cancelButton = document.getElementById("cancel");

addBookButton.addEventListener('click', () => {
  bookDialog.showModal();
});

cancelButton.addEventListener('click', () => {
  bookDialog.close();
});
