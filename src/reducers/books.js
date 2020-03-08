/* eslint-disable import/no-cycle */
import { initialState } from './index';

const books = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'CREATE_BOOK':
      //     console.log('Created Book!!');
      break;
    case 'DELETE_BOOK':
      break;
    default:
      return newState;
  }
  return newState;
};
export default books;
