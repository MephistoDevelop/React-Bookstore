import React from 'react';
import BookList from './BooksList';
import BooksForm from './BooksForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <BooksForm />
        <BookList />
      </div>
    );
  }
}

export default App;
