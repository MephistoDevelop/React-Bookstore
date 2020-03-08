/* eslint-disable react/forbid-prop-types */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable arrow-parens */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = (props) => {
  const { books } = props;
  const mapProps = () => {
    const object = [];
    for (const key in books) {
      const item = books[key];
      object.push(<Book key={item} id={item.id} title={item.title} category={item.category} />);
    }
    return object;
  };

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

const mapStateToProps = (state) => ({
  books: state.books,
});


BooksList.propTypes = {
  books: propTypes.object.isRequired,
};
export default connect(mapStateToProps)(BooksList);
