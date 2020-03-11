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


const newID = () => parseInt(Math.random() * 100, 10);
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
  books: [
    {
      id: 1,
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
      category: 'Action',
    },
  ],
};

const store = createStore(reducer, initialState, devToolsEnhancer(initialState));

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default newID;
