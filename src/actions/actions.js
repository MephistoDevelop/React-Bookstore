/* eslint-disable arrow-parens */
const addBook = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const deleteBook = (id) => ({
  type: 'DELETE_BOOK',
  id,
});

const changeCategory = (category) => ({
  type: 'CHANGE_FILTER',
  category,
});
export { addBook, deleteBook, changeCategory };
