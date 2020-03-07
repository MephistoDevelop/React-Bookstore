const books = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'CREATE_BOOK':
      console.log('Created Book!!');
      break;
    case 'DELETE_BOOK':
      break;
    default:
      return newState;
  }
  return newState;
};
export default books;
