/* eslint-disable import/no-cycle */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import BookList from '../containers/BooksList';


const App = () => (
  <div id="crm-book">
    <BookList />
  </div>
);

export default App;
