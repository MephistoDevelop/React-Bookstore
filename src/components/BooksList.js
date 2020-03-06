import React from 'react';

const BooksList = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </table>
      <td>1</td>
      <td>My Book</td>
      <td>Horror</td>
    </div>
  );
};

export default BooksList;
