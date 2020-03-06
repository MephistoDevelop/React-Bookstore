const reducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'ADD_BOOK':
      break;
    case 'DELETE_BOOK':
      break;
    case 'MODIFY_BOOK':
      break;
    default:
      return newState;
  }
  return newState;
};
export default reducer;
