import React from 'react';

const Book = (book) => {
  return (
    <div class='td-container'>
      <table>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
      </table>
    </div>
  );
};

export default Book;
