/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import categories from './categories';

export default combineReducers({ books, filter, categories });
