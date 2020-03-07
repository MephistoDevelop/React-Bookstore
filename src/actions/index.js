const addBook = (book) => ({
  tipe: 'CREATE_BOOK',
  book
});

const removeBook = (id) => ({
  type: 'DELETE_BOOK',
  id
});

export { addBook, removeBook };
