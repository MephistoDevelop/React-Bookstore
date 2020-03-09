/* eslint-disable no-case-declarations */
/* eslint-disable import/no-cycle */

const books = (state = [], action) => {
  const newState = [...state];

  switch (action.type) {
    case 'CREATE_BOOK':
      console.log(`Im created Book_ ${JSON.stringify(state)}`);
      newState.push(action.book);
      return newState;
    case 'DELETE_BOOK':
      console.log(`Deleted ID:${action.id}  ${newState.filter((book) => action.id !== book.id)}`);
      return [...newState.filter((book) => action.id !== book.id)];
    default:
      return newState;
  }
};
export default books;
