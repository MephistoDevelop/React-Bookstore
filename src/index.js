/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App';
import './assets/styles/styles.css';
import reducer from './reducers/index';
import Navbar from './components/Navbar';
import BooksForm from './containers/BooksForm';


const newID = () => parseInt(Math.random() * 100, 10);
const booksFetched = [];

async function getDataAxios() {
  const response = await axios.get('http://localhost:3000/books',
    { headers: { 'Content-Type': 'application/json' } });
  for (const obj in response.data) booksFetched.push(response.data[obj]);
}
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
  books: [],
};
(() => {
  getDataAxios().then(() => {
    initialState.books = [...booksFetched];
    const store = createStore(reducer, initialState, devToolsEnhancer(initialState));

    ReactDOM.render(
      <Provider store={store}>
        <Navbar />
        <App />
        <BooksForm />
      </Provider>,
      document.getElementById('root'),
    );
  });
})();

export default newID;
