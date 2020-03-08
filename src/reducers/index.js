/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import books from './books';

const newID = () => parseInt(Math.random() * 100, 10);
export const initialState = {
  books: [
    {
      id: newID(),
      title: 'The lord of the rings',
      category: 'Sci-Fi',
    },
    {
      id: newID(),
      title: 'Nightmare on Stret Elmer',
      category: 'Horror',
    },
    {
      id: newID(),
      title: 'Im Watching you',
      category: 'Suspense',
    },
  ],
};

export default combineReducers({ books });
