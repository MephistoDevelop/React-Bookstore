/* eslint-disable no-case-declarations */
/* eslint-disable import/no-cycle */

const books = (state = [], action) => {
  const newState = [...state];

  switch (action.type) {
    case 'CREATE_BOOK':
      newState.push(action.book);
      return newState;
    case 'DELETE_BOOK':
      return [...newState.filter((book) => action.id !== book.id)];
    default:
      return newState;
  }
};
export default books;
