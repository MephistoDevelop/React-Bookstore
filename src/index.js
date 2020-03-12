/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/styles/styles.css';
import reducer from './reducers/index';
import Navbar from './components/Navbar';
import BooksForm from './containers/BooksForm';


const newID = () => parseInt(Math.random() * 100, 10);
let booksFeched = [];
const xhr = new XMLHttpRequest();

const getResponse = () => {
  // window.alert('completed');
  booksFeched = (xhr.responseText);

  return booksFeched;
};

xhr.onreadystatechange = getResponse;
// open the request with the verb and the url
xhr.open('GET', 'http://127.0.0.1:3000/books', true);
// send the request
xhr.send(null);

console.log(`Y: ${getResponse()}`);
const initialState = {
  categories: [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ],
  filter: ['All'],
  books: booksFeched,
};

const store = createStore(reducer, initialState, devToolsEnhancer(initialState));

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <App />
    <BooksForm />
  </Provider>,
  document.getElementById('root'),
);

export default newID;
