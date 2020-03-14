/* eslint-disable max-len */
/* eslint-disable eqeqeq */
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
  const { books, filter } = props;

  const mapProps = () => {
    const object = [];
    for (const key in books) {
      const item = books[key];
      if (item.category == filter) {
        object.push(<Book id={item.id} title={item.title} category={item.category} author={item.author} readProgress={item.readProgress} urlImage={item.urlImage} />);
      } else if (filter == 'All') {
        object.push(<Book id={item.id} title={item.title} category={item.category} author={item.author} readProgress={item.readProgress} urlImage={item.urlImage} />);
      }
    }
    return object;
  };

  return (
    <div id="table-container">
      {mapProps()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});


BooksList.propTypes = {
  books: propTypes.array.isRequired,
  filter: propTypes.array.isRequired,
};
export default connect(mapStateToProps)(BooksList);
