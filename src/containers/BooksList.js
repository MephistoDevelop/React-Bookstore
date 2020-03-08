/* eslint-disable arrow-parens */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = (props) => {
  const { books } = props;
  console.log(`Ìm state on BookLists: ${JSON.stringify(books)}`);
  // const mapProps = () => props.books.map((item) => (
  //   <Book key={item} id={item.id} title={item.title} category={item.category} />
  // ));

  return (
    <div id="table-container">
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </table>
      {/* {mapProps()} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});


export default connect(mapStateToProps)(BooksList);
