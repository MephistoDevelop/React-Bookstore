import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/styles/styles.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './components/Book';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
