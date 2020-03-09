/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/styles/styles.css';
import reducer from './reducers/index';


const newID = () => parseInt(Math.random() * 100, 10);
const initialState = {
  book: [],
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
      category: 'Suspense',
    },
  ],
};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default newID;
