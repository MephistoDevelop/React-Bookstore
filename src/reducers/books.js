/* eslint-disable import/no-cycle */

const books = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'CREATE_BOOK':
      console.log('Soy create book acion');
      break;
    case 'DELETE_BOOK':
      break;
    default:
      return newState;
  }
  return newState;
};
export default books;
