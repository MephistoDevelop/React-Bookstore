import React from 'react';
import BookList from './BooksList';
import BooksForm from './BooksForm';

const App = () => (
  <div id="crm-book">
    <BooksForm />
    <BookList />
  </div>
);

export default App;
