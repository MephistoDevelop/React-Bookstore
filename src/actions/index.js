/* eslint-disable arrow-parens */
const addBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = id => ({
  type: 'DELETE_BOOK',
  id,
});

export { addBook, removeBook };
