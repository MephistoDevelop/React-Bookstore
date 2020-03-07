import React from 'react';
import Book from './Book';

const BooksList = () => {
  const newID = () => parseInt(Math.random() * 100, 10);
  const books = {
    books: [
      {
        id: newID(),
        title: 'The lord of the rings',
        category: 'Sci-Fi',
      },
      {
        id: newID(),
        title: 'Nightmare on Stret Elmer',
        category: 'Horror',
      },
    ],
  };
  const mapProps = () => books.books.map((item) => (
    <Book key={item} id={item.id} title={item.title} category={item.category} />
  ));

  return (
    <div id="table-container">
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </table>
      {mapProps()}
    </div>
  );
};

export default BooksList;
