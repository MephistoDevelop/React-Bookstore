/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/styles/styles.css';
import reducer, { initialState } from './reducers/index';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
