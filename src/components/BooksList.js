import React from 'react';
import Book from './Book';

const BooksList = (props) => {
  return (
    <div id='table-container'>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </table>
      <Book />
    </div>
  );
};

export default BooksList;
