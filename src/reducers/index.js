/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import books from './books';


export default combineReducers({ books });
