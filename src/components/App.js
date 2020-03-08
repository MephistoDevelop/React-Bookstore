import React from 'react';
import BookList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div id="crm-book">
    <BooksForm />
    <BookList />
  </div>
);

export default App;
